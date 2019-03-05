# Jumbo Jekyll Theme

This is an open source Jekyll theme built for use on the Linaro Jekyll static websites. This project aims to unify the styles and components of Linaro static websites and make it easier to replicate and deploy a new static site.

## Contents
- [Contributions](#contributions)
- [Theme Overview & Features](#overview)
- [Adding Content](#adding-content)
    - [Adding Pages](#adding-pages)
    - [Adding Posts](#adding-posts)
- [Adding Redirects](#adding-redirects)
- [Building the static site locally](#building-locally)

## Contributions
We happy to consider any contributions that you may have whether bugfixes/features. Please submit a pull request with your changes and we will take a look.

## Examples of sites using the theme

* [96Boards.org](https://www.96boards.org)
* [Linaro.org](https://www.linaro.org)
* [OP-TEE.org](https://www.op-tee.org)
* [DeviceTree.org](https://www.devicetree.org)
* [MLPlatform.org](https://mlplatform.org)
* [TrustedFirmware.org](https://www.trustedfirmware.org/)
* [Connect.linaro.org](https://connect.linaro.org)

# Overview

The jumbo-jekyll-theme is the open source Jekyll theme that was developed to transform WordPress sites into ultra-fast static Jekyll websites statically hosted with AWS. 
There are many features within this theme that you may be able to learn from/utilise. 

### Features

A few of the main features that this theme offers:

* Lazy loaded content using the lazysizes.js library
* Jumbotron Header include with options for a video background, lazy loaded background carousel, background image or breadcrumb header.
* JQuery Double Scroll tables using the doubleScroll css class
* Sticky Tab bar include
* Setup the navigation bar using _data/nav.yml with option for active classes to be set
* Setup the footer using _data/footer.yml
* Custom universal navbar toggle - useful for sites that share the same parent company.
* Jekyll Assets - providiing minified Javascript/CSS packages.
* Jekyll-responsive-image plugin for generating resized images upon site build.
* Jekyll-data to override the settings added in this theme.

### Available Layouts

Below are a table showing the available layouts for you to use:

| Layout | Description | 
| ------ | ----------- |
| base | This is the base layout that contains the main HTML to for pages. Other layouts are children of this layout. |
| jumbotron | This layout adds either a carousel header, background-image header or a breadcrumb header. Content using this layout should be added to Boostrap 3 rows. This 
layout is useful when addng custom pages. |
| jumbotron-container (Most Common) | This is the exact same as the above but instead provides a Bootstrap 3 content container than can be used to add content to. |
| default | This is the default layout to use which is the jumbotron-container layout |

### Available Includes

Below are a table showing the available includes for you to use:

| Layout | Description | 
| ------ | ----------- |
| ascii-art | This is an optional include that includes the Linaro Sprinkle as Ascii art |
| author-posts | The author-posts include outputs an author's posts based on page.username included in the _authors/username.md collection objects. |
| breadcrumb | Includes a breadcrumb that's generated from the page path. |
| carousel-header | Includes a carousel background image header. |
| css | The css include adds the links to css packages which are currently compiled from the sass partials using the jekyll-assets plugin. |
| display-blog-posts | The display-blog-posts include outputs blog posts from the paginator object (jekyll-paginate-v2) |
| disqus-comments | This include adds disqus comments to a page. site.data.settings.disqus.shortname should be customized to include the correct shortname for disqus. |
| footer | Includes the bootstrap footer which uses the footer.yml jekyll data file for adding content. |
| github-edit | Adds GitHub Edit buttons to a page based on data.settings.edit-on-github in jekyll settings.yml data file. |
| google-analytics-script | Adds the Google Analytics javascript to the head of the web pages. To modify change the site.data.settings.google.analytics or site.data.settings.google.tag_manager value to the your analytics code e.g. |
| google-analytics-script | Adds the Google Analytics javascript to the head of the web pages. To modify change the site.data.settings.google.analytics value to the your analytics code e.g. |
| gtm-script | Adds the Google Tag Manager javascript to the head of the web pages. To modify change the site.data.settings.google.tag_manager value to the your analytics code e.g. |
| gtm-no-script | Used in the base.html layout to add the noscript iframe for the Google Tag Manager |
| head | Includes the <head> code for the website. |
| http2 | Adds http2 preload/prefetch links to resources based on page specific resources/resources set in the site.data.settings.http2 value. |
| image | Used to include lazy loaded images in the markdown of your blog posts/pages. Currently used jekyll-assets to find the path of an image based on an image name. Will be moving to use the full image path soon. |
| javascript | Includes the compressed/uglified js packages which are compliled using jekyll-assets |
| jumbotron | Adds the bootstrap jumbotron html to a page. Options for a carousel image header/video background header/breadcrumb/background image are available when using this include.|
| linaro-404 | Adds the Linaro 404 SVG |
| linaro-svg | Linaro logo as an SVG |
| media | Includes a responsive media embed. Useful for including YouTube videos in posts/pages |
| nav | Adds the Bootstrap navbar to a page. This include uses the nav.yml data file to add specified pages to the nav items. The universal nav is also include inside this jekyll include. |
| pagination | Adds the pagination html for paginated jekyll collections/pages. Takes a path as a parameter e.g /news/:num/ where num is the paginated page number. |
| post-series | Adds the post-series html to a blog post for linking to posts in the same series. Simply tag all posts in the same series with a series: value. |
| post-sidebar | The sidebar which is included to the right of post. Gets the most recent/ random other blog posts. |
| post-tags | Includes the post's tags in the sidebar. |
| read_time | Calculates a posts read time based on the length of the content. |
| responsive-image | Adds a responsive picture element utilising the jekyll-responsive-image plugin to regenerate images on site build |
| schema | Adds schema json-ld to the head of the page. |
| sidebar | Adds a sidebar using the Bootstrap stacked nav. This include uses the sidebar-nav.yml data file to build out the stacked nav's |
| sticky-tab-bar | Adds an affixed Bootstrap tab bar to a page. This looks for settings in the page frontmatter or the sticky-tab-bar.yml Jekyll data file.|
| thumb | Adds a responsive thumbnail image using the jekyll-repsonsive-image plugin. |
| thumbnail_image | Adds a responsive thumbnail image using the jekyll-repsonsive-image plugin. |
| universal-nav | Adds a universal navbar. We used this feature to link between our main static sites. |
| youtube | Adds a lazy loaded youtube video. |

### Jumbotron Layout

If you are using a layout that contains `jumbotron` then you can choose to display an image carousel header, standard background image header or a simple breadcrumb.

**Jumbotron Settings**

With the jumbotron layouts you can add a title, sub title and buttons to your header through changing your pages' front matter. 

The jumbotron `title` can be modified by changing the title value in the page front matter:

```yaml
---
title: Your Page Title (and jumbotron title)
...
---
```

The jumbotron `sub title`/`description` can be modified by changing the description value in the page front matter:

```yaml
---
...
description: >-
    Your Page description (and jumbotron description/sub title)
...
---
```

The jumbotron `buttons` can be added with the following front matter:

```yaml
---
...
jumbotron:
    ...
    buttons:
        - title: Learn More
          url: /about/
          icon: fa fa-github
          ...
...
---
```
The above should hopefully be fairly self explanatory other than the icon value which should be the icon class for a Font Awesome 4.7 Icon. For all available icons [click here](https://fontawesome.com/v4.7.0/icons/). 


**Displaying an image carousel**

If you would like to display an image carousel for your page then add the following front matter to your page:

```yaml
---
...
jumbotron:
    ...
    carousel-images:
        - /assets/images/content/background-image1.jpg
        - /assets/images/content/background-image2.png
        - /assets/images/content/background-image3.jpg
    ...
...
---
```
Add as many images here as you would like. Even though these images are loaded lazily, try and make sure the images have been optimized as large images will increase the page load time. Also try to ensure the resolution of these images are fairly high.


**Displaying an background image based jumbotron**

```yaml
---
...
jumbotron:
    ...
    background-image: /assets/images/content/background-image1.jpg
    ...
...
---
```
Here you can add image to be used an the background image of the jumbotron. Try and make sure the image has been compressed/optimized as large images will increase the page load time. Also try to ensure the resolution of these images are fairly high.











# Adding Content
## Adding Pages
### Step 1 - Setup your site if not already setup

__Note: If you're reading these docs for a site that's already using the theme then you can skip this part.__

The first step when using this theme is to create your own Jekyll site based off of this theme.

### Step 2 - Create a post file

Website pages are added as markdown files usually in a folder with a `README.md` file beneath to keep everything organised and to ensure content renders on GitHub too (e.g `/services/README.md` or `/services.md`). If your page contains HTML then use the `.html` file extension.

### Step 2 - Add Jekyll front matter to your new page
The url/permalink for your page should be added to the `front matter` of your posts/pages (the section at the top of the file between the set of 3 dashes `---`) as the `permalink` so that your page url is exactly as you intended it to be. See below for an example of the front matter to add to your page. Each theme layout may have different front matter variables that are required so if in any doubt refer to the [theme repo]'s documentation. 

#### Available front matter options
Below is a table of the most common front matter variable to add to your page.

| Front Matter Option | Value | Description  | 
| ------ | ----------- | ----- |
| layout | post | Layout to be used for the page |
| published | false | Set `published` to false if you want to add the page but not show it on the website. |
| title | My Awesome Post | The title of your page/post. Used in the `meta` tags and in layouts to display your page correctly. |
| description | This is an awesome post about MlPlatform.org... | The description of your page used as the `meta` description.|

#### Example front matter
```YAML
---
# Layout of your web page - see below for available layouts.
layout: jumbotron-container
# URL of your page
permalink: /about/
# Title of your page
title: About Us
# Description of your web page.
desc: |-
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
# Keywords that describe your page used as meta keywords.
tags: lorem, ipsum, web, page
jumbotron:
    carousel-images:
        - /assets/images/content/background-image1.jpg
        - /assets/images/content/background-image2.png
        - /assets/images/content/background-image3.jpg
---
```
### Step 2 - Add content to your page

Now you can add content to your page using `html` of `markdown`. You can find a markdown cheatsheet [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). 

## Adding Posts

In order to add a blog post to MlPlatform.org copy an existing post from the [_posts folder](https://github.com/96boards/website/tree/master/_posts). Posts are organised into by year/month so add to the correct folder based on the month you are posting it in and if the folder doesn't exist create one.

#### Step 1 - Modify the post file name

The url for your title is based on the title provided in the filename e.g 2018-06-07-i2s-in-dragonboard410c.md will have a url of /blog/i2s-in-dragonboard410c/. Separate the words in your title by dashes and modify the date at the start of the filename as neccessary. 

#### Step 2 - Modify the post front matter

Modify the post front matter based on your post. Values to modify are:
- author:
- date:
- image:
- tags:
- description:

##### Author

Change the author to a unique author shortname. If this is your first time posting then add your author values to the [_data/authors.yml file](https://github.com/96boards/website/blob/master/_data/authors.yml). Make sure to add your profile image to the [/assets/images/authors folder](https://github.com/96boards/website/tree/master/assets/images/authors). Verify that the author name is an exact match to that provided as the author: in your post.

##### Date

Modify the date to sometime before you post the blog otherwise Jekyll will see it as a __future__ post and not render it until the time on the server exceeds/equals that provided as the date in the post front matter.

##### Image

This value is used for the featured image displayed on your blog post and the image that is used when sharing the blog post on social media sites.

```YAML
image:
    featured: true
    path: /assets/images/blog/DragonBoard-UpdatedImages-front.png
    name: DragonBoard-UpdatedImages-front.png
    thumb: DragonBoard-UpdatedImages-front.png 
    
```

Make sure that the image you add in this section of front matter is placed in the [/assets/images/blog folder](https://github.com/96boards/website/tree/master/assets/images/blog).

__Note:__ There is currently a bug with the version of `jekyll-assets` we are using which means the only acceptable image extensions are `.jpg` and `.png`. If you use `.jpeg` you image may not display as expected.


##### Tags
These should be modified based on the content of your post as they are used for Meta keywords so that people can find your post based on the [tags your provide](https://www.MlPlatform.org/blog/tag/).

##### Description
Change this value to a short description of your blog post as this is used for the meta description of your blog post.

#### Step 3 - Add your post content.

Write your post content in Markdown format; specifically the [Kramdown](https://kramdown.gettalong.org/) Markdown flavour.

##### Adding images
Please use the following code snipppet to add an image to your blog post. Make sure to add the images that you include to [/assets/images/blog folder](https://github.com/96boards/website/tree/master/assets/images/blog).

```
{% include image.html name="name-of-your-image.png" alt="The Alt text for your image" %}
```

You also align/scale your image using the following css classes.

|Class|Details|
|-----|-------|
|small-inline|Small image aligned to the left|
|small-inline right| Small image aligned to the right|
|medium-inline|Medium image aligned to the left|
|medium-inline right|Medium image aligned to the right|
|large-inline|Large image aligned to the left|
|large-inline right|Large image aligned to the right|

```
{% include image.html name="name-of-your-image.png"  class="medium-inline" alt="The Alt text for your image" %}
```

Using this Jekyll include will allow your images to be lazy loaded and format the image HTML correctly.


##### Adding code

We are using the rouge syntax highlighter to highlight your glorious code. 

```bash
$ bundle exec jekyll serve --port 1337
```

See the full list of languages [here](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers).


##### Adding Media/YouTube videos

To add a media element / YouTube video use the following Jekyll include.

```
{% include media.html media_url="https://youtu.be/GFzJd0hXI0c" %}
```

# Feature Requests / Bug Fixes

If anyone that uses the theme has any useful bug fixes / feature requests that may be of interest then please feel free to fork/submit a PR with your fixes/features.
