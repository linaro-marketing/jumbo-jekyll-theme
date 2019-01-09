# Jumbo Jekyll Theme

This is an open source Jekyll theme built for use on the Linaro Jekyll static websites. This project aims to unify the styles and components of Linaro static websites and make it easier to replicate and deploy a new static site.

## Examples of sites using the theme

* [Linaro.org](https://www.linaro.org)
* [96boards.org](https://www.96boards.org)
* [Op-tee.org](https://www.op-tee.org)
* [OpenDataPlane.org](https://www.opendataplane.org)
* [DeviceTree.org](https://www.devicetree.org)

## Features

Some of the features this theme offers:

* Lazy loading of content.
* Generated breadcrumb
* Easy navigation / footer management using YAML Data files.

# The Docs
The documentation for this theme is currently available through the Collaborate space. I will be adding to readthedocs/github in due course.

# Feature Requests / Bug Fixes

If anyone that uses the theme has any useful bug fixes / feature requests that may be of interest then please feel free to fork/submit a PR with your fixes/features.



# Blog Post Images

To add a featured image to your blog post set the `image:` key in your posts front matter:

```yaml
image: /assets/images/social-media-image.png
```

Thumbnails are automatically generated from your high resolution image upon site build using the `jekyll-responsive-image` plugin.