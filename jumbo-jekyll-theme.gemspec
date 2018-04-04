# coding: utf-8
Gem::Specification.new do |spec|
    
  # Main Spec Info
  spec.name          = "jumbo-jekyll-theme"
  spec.version       = "1.4.5.1"
  spec.authors       = ["Kyle Kirkby"]
  spec.email         = ["kyle.kirkby@linaro.org"]
  spec.summary       = %q{The jumbo-jekyll-theme aims to provide an fast static theme for use across Linaro sites and anyone who may find it useful. The theme currently uses Bootstrap/Jekyll Plugins/Javascript/Sass/JQuery Plugins to do this.}
  spec.homepage      = "https://github.com/linaro-website/jumbo-jekyll-theme/"
  spec.license       = "MIT"
  
  # Spec Files
  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_(data|includes|layouts|sass|plugins)/|(LICENSE|README|robots|_config)((\.(txt|md|markdown|yml)|$)))}i)
  end
  
  # Ruby Version
  spec.required_ruby_version = '>=2.3'
  
  # Runtime Dependencies
  spec.add_runtime_dependency 'jekyll', '~> 3.7', '>= 3.7.0'
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.2"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.1"
  spec.add_runtime_dependency "jekyll-readme-index", "~> 0.1"
  spec.add_runtime_dependency "bootstrap-sass", "~> 3.3"
  spec.add_runtime_dependency "jekyll-redirect-from", "~> 0.12"
  spec.add_runtime_dependency "jekyll-tidy", "~> 0.2.2"
  spec.add_runtime_dependency "jekyll-assets", "2.2.8"
  spec.add_runtime_dependency 'jekyll-data', '>0'
  spec.add_runtime_dependency 'uglifier', '>0'
  spec.add_runtime_dependency 'autoprefixer-rails', '~> 5.0', '>= 5.0.0.1'
  spec.add_runtime_dependency 'jekyll-paginate-v2', '>0'
  spec.add_runtime_dependency 'jekyll-feed', '>0'
  spec.add_runtime_dependency 'mini_magick'
  spec.add_runtime_dependency 'jekyll-minimagick'
  spec.add_runtime_dependency 'jekyll-theme-assets', '>0'
  spec.add_runtime_dependency 'hash-joiner', '~> 0'
  spec.add_runtime_dependency "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
  
  # Development Dependencies
  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
  
end
