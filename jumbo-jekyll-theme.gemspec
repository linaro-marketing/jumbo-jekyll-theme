# coding: utf-8
Gem::Specification.new do |spec|
    # Main Spec Info
    spec.name          = "jumbo-jekyll-theme"
    spec.version       = "5.7.0"
    spec.authors       = ["Kyle Kirkby"]
    spec.email         = ["kyle.kirkby@linaro.org"]
    spec.summary       = %q{This is a Bootstrap 3 Jekyll Theme built for Linaro Static Websites}
    spec.homepage      = "https://github.com/linaro-marketing/jumbo-jekyll-theme/"
    spec.license       = "MIT"
    spec.metadata    = {
        "homepage_uri" => "https://github.com/linaro-marketing/jumbo-jekyll-theme",
        "changelog_uri" => "https://github.com/linaro-marketing/jumbo-jekyll-theme/blob/master/CHANGELOG.md",
        "source_code_uri" => "https://github.com/linaro-marketing/jumbo-jekyll-theme/",
        "bug_tracker_uri" => "https://github.com/linaro-marketing/jumbo-jekyll-theme/issues",
    }
    # Spec Files
    spec.files         = `git ls-files -z`.split("\x0").select do |f|
      f.match(%r{^(assets|_(data|includes|layouts|sass)/|(LICENSE|README|robots|_config)((\.(txt|md|markdown|yml)|$)))}i)
    end
    # Ruby Version
    spec.required_ruby_version = '>=2.3'
    # Jekyll 4 !
    spec.add_runtime_dependency "jekyll", "~> 4.0.0"
    # Jekyll cached include plugin
    spec.add_runtime_dependency 'jekyll-include-cache'

    spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.2"
    # Responsive images
    spec.add_runtime_dependency "jekyll_picture_tag"
    # Generate a sitemap at sitemap.xml
    spec.add_runtime_dependency "jekyll-sitemap"
    # JS Bundler / Compression
    spec.add_runtime_dependency 'japr', '0.4.2'
    # Jekyll Tidy - HTML minfier
    spec.add_runtime_dependency 'jekyll-tidy'
    # Blog/Collection pagination
    spec.add_runtime_dependency 'jekyll-paginate-v2', '>0'
    # Add's an RSS feed for your posts
    spec.add_runtime_dependency "jekyll-feed"
    #spec.add_runtime_dependency "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
    # Development Dependencies
    spec.add_development_dependency "bundler", "> 1.16.1"
    spec.add_development_dependency "rake"
  end
