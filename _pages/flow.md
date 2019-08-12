---
title: Get your flow on!
layout: flow
permalink: /flow/
descrtion: >
    This page showcases the power of the flow.html Jekyll include provided in this theme.
keywords: flow, jekyll, automation, simple, bootstrap 3
jumbotron:
    title: Get your flow on!
    background-image: /assets/images/content/background-image1.jpg
flow:
    - row: container_row
    #   style: dark
      sections:
        - format: title
          title_content:
            size: h2
            text: Members Section Example
        - format: text
          style: text-center
          text_content:
            text: An example members section
        - format: members
          #data_source: members-section-example
          style: zoom grayscale
          members_content:
            item_width: "3" #bootstrap col-sm- value e.g 3, 4, 5ths etc
            items:
              - name: JS
                image:
                    path: /assets/images/content/js-logo.png
                    alt: JS Logo
                url: https://github.com/linaro-marketing/jumbo-jekyll-theme
              - name: Packet
                image:
                    path: /assets/images/content/js-logo.png
                    alt: Packet Logo
                url: https://github.com/linaro-marketing/jumbo-jekyll-theme
              - name: JS Logo
                image:
                    path: /assets/images/content/js-logo.png
                    alt: JS Logo
                url: https://github.com/linaro-marketing/jumbo-jekyll-theme
              - name: JS
                image:
                    path: /assets/images/content/js-logo.png
                    alt: JS Logo
                url: https://github.com/linaro-marketing/jumbo-jekyll-theme
        - format: buttons
          style: text-center
          buttons_content:
              - title: More Details
                url: /about/
                icon: fa fa-arrow-right
                style: btn-primary
    - row: container_row
      style: fixed
      background_image: /assets/images/content/background-image1.jpg
      sections:
        - format: title
          title_content:
            size: h2
            text: Container row with background image
        - format: text
          style: text-center text-white
          text_content:
            text: A container row featuring a background image
        - format: buttons
          style: text-center
          buttons_content:
            - title: More Details
              url: /about/
              icon: fa fa-arrow-right
              style: btn-primary
    - row: container_row
      style: block_row
    #   background_image: /assets/images/content/background-image1.jpg
      sections:
        - format: title
          title_content:
            size: h2
            text: Block Row
        - format: block
          style: text-center text-white
          block_section_content:
            item_width: "4"
            blocks:
                - title:
                    size: "h3"
                    text: Block 1
                  url: /about/
                  background_image: /assets/images/content/background-image1.jpg
                  text: >
                    See our photos from event.
                  buttons:
                    - title: More Details
                      url: /flow/
                      icon: fa fa-arrow-right
                      style: btn-primary
                - title:
                    size: "h3"
                    text: Block 2
                  url: /about/
                  background_image: /assets/images/content/background-image1.jpg
                  text: >
                    See our photos from event.
                  buttons:
                    - title: More Details
                      url: /flow/
                      icon: fa fa-arrow-right
                      style: btn-primary
                - title:
                    size: "h3"
                    text: Block 3
                  url: /about/
                  background_image: /assets/images/content/background-image1.jpg
                  text: >
                    See our photos from event.
                  buttons:
                    - title: More Details
                      url: /flow/
                      icon: fa fa-arrow-right
                      style: btn-primary
                    - title: Read
                      url: /flow/
                      icon: fa fa-book
                      style: btn-primary
    - row: container_row
      style: block_row fixed
    #   background_image: /assets/images/content/background-image1.jpg
      sections:
        - format: block
          style: text-center text-white
          block_section_content:
            item_width: "3"
            blocks:
                - title:
                    size: "h3"
                    text: Block 1
                  url: /about/
                  background_image: /assets/images/content/background-image1.jpg
                  text: See our photos from event.
                  buttons:
                    - title: More Details
                      url: /flow/
                      style: btn-primary
                      icon: fa fa-arrow-right
                - title:
                    size: "h3"
                    text: Block 2
                  url: /about/
                  background_image: /assets/images/content/background-image1.jpg
                  text: See our photos from event.
                  buttons:
                    - title: More Details
                      url: /flow/
                      icon: fa fa-arrow-right
                      style: btn-primary
                - title:
                    size: "h3"
                    text: Block 3
                  url: /about/
                  background_image: /assets/images/content/background-image1.jpg
                  text: See our photos from event.
                  buttons:
                    - title: More Details
                      url: /flow/
                      icon: fa fa-arrow-right
                      style: btn-primary
                - title:
                    size: "h3"
                    text: Block 4
                  url: /about/
                  background_image: /assets/images/content/background-image1.jpg
                  text: See our photos from event.
                  buttons:
                    - title: More Details
                      url: /flow/
                      icon: fa fa-arrow-right
                      style: btn-primary
                    - title: Read
                      url: /flow/
                      icon: fa fa-book
                      style: btn-primary
    - row: container_row
      #style: fixed
      background_image: /assets/images/content/background-image1.jpg
      sections:
        - format: title
          title_content:
            size: h2
            text: Custom Include Section
        - format: custom_include
          source: custom_include.html
    - row: full_width_row
      style: fixed block_row
      sections:
        - format: title
          title_content:
            text: Full Width Block Row
            size: h2
        - format: block
          style: text-center text-white
          block_section_content:
            item_width: "3"
            blocks:
              - title:
                  size: "h3"
                  text: Members Section Example
                url: /about/
                background_image: /assets/images/content/background-image1.jpg
                text: See our photos from event.
                buttons:
                    - title: More Details
                      url: /flow/
                      icon: fa fa-arrow-right
                      style: btn-primary
              - title:
                  size: "h3"
                  text: Members Section Example
                url: /about/
                background_image: /assets/images/content/background-image1.jpg
                text: See our photos from event.
                buttons:
                    - title: More Details
                      url: /flow/
                      icon: fa fa-arrow-right
                      style: btn-primary
              - title:
                    size: "h3"
                    text: Members Section Example
                url: /about/
                background_image: /assets/images/content/background-image1.jpg
                text: >
                    See our photos from event.
                buttons:
                    - title: More Details
                      url: /flow/
                      icon: fa fa-arrow-right
                      style: btn-primary
              - title:
                    size: "h3"
                    text: Members Section Example
                url: /about/
                background_image: /assets/images/content/background-image1.jpg
                text: See our photos from event.
                buttons:
                    - title: More Details
                      url: /flow/
                      icon: fa fa-arrow-right
                      style: btn-primary
                    - title: Read
                      url: /flow/
                      icon: fa fa-book
                      style: btn-primary
    - row: full_width_row
      #style: new
      sections:
        - format: title
          title_content:
            text: Feature Block Row (Full Width)
            size: h2
        - format: feature_block
        #   style: text-center text-white
          feature_block_content:
            position: "left"
            type: "youtube_video"
            video_content_url: https://www.youtube.com/watch?v=QH2-TGUlwu4
            title: Feature Block
            text: >
                A feature block with a youtube video.
            buttons:
                - title: Button 1
                  url: /about/
                  style: btn-primary
                - title: Button 2
                  url: /about/
                  style: btn-primary
        - format: feature_block
        #   style: text-center text-white
          feature_block_content:
            position: "right"
            type: "image"
            image_content_path: /assets/images/content/background-image1.jpg
            title: Feature Block
            text: >
                A feature block with an image.
            buttons:
                - title: Button 1
                  url: /about/
                  style: btn-primary
                - title: Button 2
                  url: /about/
                  style: btn-primary
    - row: container_row
      #style: new
      sections:
        - format: title
          title_content:
            text: Feature Block Row
            size: h2
        - format: feature_block
        #   style: text-center text-white
          feature_block_content:
            position: "left"
            type: "slider"
            slider_content:
                lightbox_enabled: true
                seconds_per_slide: 5
                nav: true
                dots: false
                xs_items: 1
                sm_items: 1
                md_items: 1
                lg_items: 1
                items:
                    - image: /assets/images/content/background-image1.jpg
                      alt: Background Image
                      title: Background Image 1
                    - image: /assets/images/content/background-image2.png
                      alt: Background Image
                      title: Background Image 1
                    - image: /assets/images/content/background-image3.jpg
                      alt: Background Image
                      title: Background Image 1
                    - image: /assets/images/content/background-image1.jpg
                      alt: Background Image
                      title: Background Image 1
                    - image: /assets/images/content/background-image2.png
                      alt: Background Image
                      title: Background Image 1
                    - image: /assets/images/content/background-image3.jpg
                      alt: Background Image
                      title: Background Image 1
                    - image: /assets/images/content/background-image1.jpg
                      alt: Background Image
                      title: Background Image 1
                    - image: /assets/images/content/background-image2.png
                      alt: Background Image
                      title: Background Image 1
                    - image: /assets/images/content/background-image3.jpg
                      alt: Background Image
                      title: Background Image 1
            title: Feature Block
            text: >
                A feature block with an owl carousel slider.
            buttons:
                - title: Button 1
                  url: /about/
                  style: btn-primary
                - title: Button 2
                  url: /about/
                  style: btn-primary
        - format: feature_block
        #   style: text-center text-white
          feature_block_content:
            position: "right"
            type: "image"
            image_content_path: /assets/images/content/background-image1.jpg
            title: Feature Block
            text: >
                A feature block with an image.
            buttons:
                - title: Button 1
                  url: /about/
                  style: btn-primary
                - title: Button 2
                  url: /about/
                  style: btn-primary
        - format: feature_block
        #   style: text-center text-white
          feature_block_content:
            position: "left"
            type: "youtube_video"
            video_content_url: https://www.youtube.com/watch?v=QH2-TGUlwu4
            title: Feature Block (with youtube video)
            text: >
                This is a feature block using a youtube video for the featured content.
            buttons:
                - title: Button 1
                  url: /about/
                  style: btn-primary
                - title: Button 2
                  url: /about/
                  style: btn-primary
    - row: container_row
      #style: new
      sections:
        - format: title
          title_content:
            text: Slider Row Example
            size: h2
        - format: slider
          style: customCSS
          slider_content:
            lightbox_enabled: true
            seconds_per_slide: 5
            nav: true
            dots: false
            xs_items: 1
            sm_items: 2
            md_items: 4
            lg_items: 6
            items:
                - image: /assets/images/content/background-image1.jpg
                  alt: Background Image
                  title: Background Image 1
                - image: /assets/images/content/background-image2.png
                  alt: Background Image
                  title: Background Image 1
                - image: /assets/images/content/background-image3.jpg
                  alt: Background Image
                  title: Background Image 1
                - image: /assets/images/content/background-image1.jpg
                  alt: Background Image
                  title: Background Image 1
                - image: /assets/images/content/background-image2.png
                  alt: Background Image
                  title: Background Image 1
                - image: /assets/images/content/background-image3.jpg
                  alt: Background Image
                  title: Background Image 1
                - image: /assets/images/content/background-image1.jpg
                  alt: Background Image
                  title: Background Image 1
                - image: /assets/images/content/background-image2.png
                  alt: Background Image
                  title: Background Image 1
                - image: /assets/images/content/background-image3.jpg
                  alt: Background Image
                  title: Background Image 1
    - row: full_width_row
      #style: new
      sections:
        - format: title
          title_content:
            text: Slider Row Example (Full Width)
            size: h2
        - format: text
          style: text-center
          text_content:
            text: Some block of text to describe something about such and such...
        - format: slider
          style: customCSS
          slider_content:
            lightbox_enabled: true
            seconds_per_slide: 5
            nav: true
            dots: false
            xs_items: 1
            sm_items: 3
            md_items: 6
            lg_items: 9
            source: example-carousel-data-source
    - row: custom_include_row
      source: custom_include_row.html
---
