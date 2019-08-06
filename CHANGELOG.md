## Changelog

# 5.5.7
- Added support for Staging environment Google analytics codes
- Modifying Jekyll data files to work with the netlifycms correctly (data must be stored within an object in data files i.e items: )
- Favicon path needs to be specified in the _data/settings.yml file (removing asset_path use slowly)
- Removed the error-pages section of the _data/settings.yml file
- Updated the flow_inner.html jekyll include to use the same naming convention as the custom_include_row


# 5.5.4
- flow row layout added
  - allows users to create complex pages using just frontmatter (no longer custom html - works well with Jekyll content management systems)
- added youtube video embed support to feature blocks.

## 4.7.0
- Refactored the blog section of the theme
  - Removed excessive liquid used in the includes/layouts
- Refactored the _sass/core/blog.scss file - now entirely SASS

## 4.6.0
- Updated the footer design
- Refactored the footer css into SASS

## 4.1.2
- Added the jekyll-last-modified-at plugin
- Added disqus comments config object

## 3.9.6
Added the jumbotron slider functionality so that jumbotron headers can now feature a fullwidth customisable owl carousel

## 3.9.1
- Added the avatar_placeholder setting in the blog section of the settings.yml file
- Added ASCII art optional feature (ascii-art: ascii-art.html) in the settings.yml file.
- Removed old Jekyll _includes
- Added doubleScroll JQuery plugin
- Added the featherlight jQuery lightbox plugin

## 3.8.0
- Updated the image.html include to use the featherlight plugin for image lightboxes
- Added the featherlight/doubleScroll jQuery plugins to the JS packages
- Added title to the Linaro 404 SVG
