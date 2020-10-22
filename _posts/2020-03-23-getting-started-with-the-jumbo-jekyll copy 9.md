---
title: Getting started with the jumbo-jekyll-theme
date: 2018-11-23 12:00:00
description: >-
  This blog post will give you an overview of how to get started with the jumbo-jekyll-theme
image: /assets/images/breadcrumb-image.jpg
author: john.smith
category: blog
keywords: jekyll, note, theme, jumbo-jekyll-theme
---

# Introduction

Welcome to **Part - 8** of **Our path to libmraa with 96Boards** series. In
this part I will provide a quick summary of the new GPIO API added to [MRAA library](https://github.com/intel-iot-devkit/mraa).

# GPIO in MRAA

Last month we had a pretty interesting discussion in the Linux GPIO Mailing List
regarding MRAA [Thread](https://lkml.org/lkml/2019/4/18/218). Most of them were
criticism against the way MRAA is doing GPIO access on Chardev capable linux
based systems. I already explained the significance of GPIO Chardev support in
[Previous blog](https://www.96boards.org/blog/path-libmraa-96boards-part-7/).
Kernel developers shared their frustration regarding the MRAA dependent pin
mapping as it is prone to go wrong when an external gpiochip like GPIO expander
got probed before the SoC's internal gpiochip.

To understand this scenario, let's consider the below MRAA GPIO pin mapping for
Dragonboard410c:

```c
int db410c_chardev_map[MRAA_96BOARDS_LS_GPIO_COUNT][2] = {
    { 0, 36 }, { 0, 12 }, { 0, 13 }, { 0, 69 }, { 0, 115 }, { 2, 3 },
    { 0, 24 }, { 0, 25 }, { 0, 35 }, { 0, 34 }, { 0, 28 },  { 0, 33 },
};
```

The above lookup table has the entries of gpiochip and its internal pin
number. This gets mapped to 96Boards specific GPIO numbers on Low speed
expansion header as below in [96Boards platform code](https://github.com/intel-iot-devkit/mraa/blob/master/src/arm/96boards.c):

```c
    // GPIOs are labelled "GPIO-A" through "GPIO-L"
    for (i = 0; i < MRAA_96BOARDS_LS_GPIO_COUNT; i++) {
        mraa_96boards_pininfo(b, 23 + i, ls_gpio_pins ? ls_gpio_pins[i] : -1, 1, "GPIO-%c", 'A' + i,
                              chardev_map ? (*chardev_map)[i][0] : -1,
                              chardev_map ? (*chardev_map)[i][1] : -1);
    }
```

The above mapping should work ideally on Dragonboard410c in most cases. But
sometimes, when an external gpiochip gets probed before the SoC specific
internal gpiochip, above mapping will go wrong since the gpiochip's id gets
allocated based on the probing order during system boot. At the same time,
the chip specific internal pin number will always be the same since it is obtained
from platform declaration mechanism like devicetree.

For overcoming this issue, we need a way to access a GPIO without specifying the
gpiochip number. How can we do that? Well, the kernel already provides a nice
feature for accessing a GPIO using its line name and I decided to make use of
that! I went and created a Pull request which adds a new MRAA GPIO init API
which takes the line name and returns the MRAA specific GPIO descriptor. And
the user can then make use of the returned descriptor for doing all GPIO related
access in MRAA as before.

Pull Request: https://github.com/intel-iot-devkit/mraa/pull/965

Below code snippet can be used to access a GPIO with the help of new API:

```c
    mraa_gpio_context gpio;
    mraa_result_t res = MRAA_SUCCESS;

    /* initialize mraa for the platform. not needed most of the times */
    mraa_init();

    /* initialize GPIO-A */
    gpio = mraa_gpio_init_by_name("GPIO-A");
    if (gpio == NULL) {
        fprintf(stderr, "Failed to initialize pin %d\n", GPIO_1);
    }

    /* set GPIO-A to output */
    res = mraa_gpio_dir(gpio, MRAA_GPIO_OUT);
    if (res != MRAA_SUCCESS)
        goto err;

    /* write 1 to GPIO-A */
    res = mraa_gpio_write(gpio, 1);
    if (res != MRAA_SUCCESS)
        goto err;

        res = mraa_gpio_close(gpio);
        if (res != MRAA_SUCCESS) {
                mraa_result_print(res);
        }

    return res;
err:
    mraa_result_print(res);
    return res;
```

Sounds pretty simple, right? But there exists a dependency... Your board specific
platform declaration mechanism like devicetree should declare GPIO line name for
making use of this new API. For most of the 96Boards CE boards, we had added
line names in the mainline kernel and it will work without any issues. For older
devicetree, the user has to manually add line names by taking the reference
from below patch:

https://www.spinics.net/lists/devicetree/msg276218.html

# Conclusion

This concludes the summary of **Part - 8** of **Our path to libmraa with 96Boards**
blog. Since the initial MRAA Pull Request has been merged, I'm planning to add
few examples to MRAA along with bindings for supported languages. Stay tuned!
