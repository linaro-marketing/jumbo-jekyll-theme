---
title: Video header
layout: flow
permalink: /features/video-header/
descrtion: >
    This page showcases the video header
keywords: flow, jekyll, automation, simple, bootstrap 3
jumbotron:
  title: Bringing the Arm ecosystem together
  description: "Test description"
  video:
    source:
      mp4: https://static.linaro.org/connect/assets/videos/san19_promo_banner.mp4
      ogv: https://static.linaro.org/connect/assets/videos/san19_promo_banner.ogv
      webm: https://static.linaro.org/connect/assets/videos/san19_promo_banner.webm
    poster: /assets/images/test/background-image1.jpg
flow:
    - row: container_row
      style: block_row
      sections:
        - format: title
          title_content:
            size: h2
            text: Features
        - format: block
          style: #
          block_section_content:
            blocks:
                - title: Jekyll 4
                  url: https://github.com/jekyll/jekyll/releases/tag/v4.0.0
                  image: /assets/images/test/jekyll-logo.png
                  description: >
                    We're using the latest stable version of Jekyll - Jekyll 4! This enables faster site builds.
                  buttons:
                    - title: View Release
                      url: https://github.com/jekyll/jekyll/releases/tag/v4.0.0
                      icon: icon-github
                      style: btn-primary
                - title: Bootstrap 4
                  url: /about/
                  image: /assets/images/test/bootstrap-social-logo.png
                  description: >
                    Bootstrap 4 is the latest version of the world's most popular front-end framework.
                  buttons:
                    - title: View Framework
                      url: https://getbootstrap.com/docs/4.4/getting-started/introduction/
                      icon: icon-external
                      style: btn-primary
                - title: Sass
                  url: /about/
                  image: /assets/images/test/sass-logo.png
                  description: ">Sass is the most mature, stable, and powerful professional grade CSS extension language in the world."

                  buttons:
                    - title: More Details
                      url: /flow/
                      icon: fa fa-arrow-right
                      style: btn-primary
                - title: Pagespeed 100
                  url: /about/
                  image: /assets/images/test/google-pagespeed.png
                  description: See our photos from event.
                  buttons:
                    - title: More Details
                      url: /flow/
                      icon: fa fa-arrow-right
                      style: btn-primary
    - row: main_content_row
---
This is a main content row.
