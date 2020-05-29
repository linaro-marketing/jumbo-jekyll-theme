# coding: utf-8
Gem::Specification.new do |spec|
    # Main Spec Info
    spec.name          = "jumbo-jekyll-theme"
    spec.version       = "6.0.0.2"
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
    spec.add_runtime_dependency 'jekyll-include-cache', '0.2.0'
    # Responsive images
    spec.add_runtime_dependency "jekyll_picture_tag", '1.9.0'
    # Generate a sitemap at sitemap.xml
    spec.add_runtime_dependency "jekyll-sitemap", "1.4.0"
    # Jekyll Tidy - HTML minfier
    spec.add_runtime_dependency 'jekyll-tidy', '0.2.2'
    # Add's an RSS feed for your posts
    spec.add_runtime_dependency "jekyll-feed", "0.13.0"
    # JS Bundler / Compression
    spec.add_runtime_dependency 'japr', '0.4.2'
    spec.add_runtime_dependency 'closure-compiler', '>=1.1.14'
    #spec.add_runtime_dependency "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
    # Development Dependencies
    spec.add_development_dependency "bundler", "1.17.3"
    spec.add_development_dependency "rake", "13.0.1"
  end
