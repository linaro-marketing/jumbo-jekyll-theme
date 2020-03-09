---
title: About
layout: flow
permalink: /about/
descrtion: >
    This page showcases the power of the flow.html Jekyll include provided in this theme.
keywords: flow, jekyll, automation, simple, bootstrap 3
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
