# coding: utf-8
Gem::Specification.new do |spec|
    # Main Spec Info
    spec.name          = "jumbo-jekyll-theme"
    spec.version       = "5.2.0"
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
    # Runtime Dependencies
    spec.add_runtime_dependency 'jekyll', '~> 3.7.3'
    # spec.add_runtime_dependency "liquid-c"
    # spec.add_runtime_dependency "sassc"
    # spec.add_runtime_dependency "jekyll-picture-tag-latest", ">0"
    spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.2"
    spec.add_runtime_dependency "jekyll-responsive-image", "~> 1.0.1"
    spec.add_runtime_dependency "jekyll-sitemap", "~> 1.1"
    spec.add_runtime_dependency "jekyll-readme-index", "0.2"
    spec.add_runtime_dependency "bootstrap-sass", "~> 3.4.1"
    spec.add_runtime_dependency "jekyll-redirect-from", "~> 0.12"
    spec.add_runtime_dependency "jekyll-tidy", "~> 0.2.2"
    spec.add_runtime_dependency "jekyll-assets", "2.4.0"
    spec.add_runtime_dependency 'jekyll-data', '>0'
    spec.add_runtime_dependency 'uglifier', '>0'
    spec.add_runtime_dependency 'autoprefixer-rails', '~> 9.0', '>= 9.0.0'
    spec.add_runtime_dependency 'jekyll-paginate-v2', '>0'
    spec.add_runtime_dependency 'jekyll-feed', '>0'
    spec.add_runtime_dependency 'jekyll-theme-assets-updated', '~> 1.1'
    spec.add_runtime_dependency 'jekyll-last-modified-at'
    spec.add_runtime_dependency 'hash-joiner', '~> 0'
    spec.add_runtime_dependency 'sprockets', ' ~> 3.7.2'
    spec.add_runtime_dependency 'jekyll-watch', ' ~> 2.1.1'
    spec.add_runtime_dependency 'jekyll-include-cache'
    spec.add_runtime_dependency 'ffi', '~> 1.9.6'
    spec.add_runtime_dependency "rack", ">0"

    #spec.add_runtime_dependency "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
    # Development Dependencies
    spec.add_development_dependency "bundler", "> 1.16.1"
    spec.add_development_dependency "rake"
  end
