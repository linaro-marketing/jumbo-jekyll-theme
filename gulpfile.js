"use strict";

// Styles
const autoprefixer = require("autoprefixer"); // Live updates for dev
const cssnano = require("cssnano"); // CSS Minifier
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
// Gulp Specific modules
const gulp = require("gulp"); // CSS Post Processor - caniuse.com
const gulpNewer = require("gulp-newer");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const concat = require('gulp-concat');
// Javascript
const uglify = require('gulp-uglify');
// Image Tools
const gulpImagemin = require("gulp-imagemin");
const webp = require('gulp-webp');
const gulpImageresize = require('gulp-image-resize');
var parallelTransform = require("concurrent-transform");
var os = require("os");
// Delete modules for clearing up old files
const del = require("del");
const deleteEmpty = require("delete-empty");
// Others
const merge2 = require("merge2");
const globby = require("globby");
const child_process = require("child_process");
const browsersync = require("browser-sync").create();
const execSync = require('child_process').execSync;
var sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
// Gets the path to the jumbo-jekyll-theme
var themePath = execSync('bundle show jumbo-jekyll-theme').toString().replace(/(\r\n|\n|\r)/gm, "");
// Javascript Sources
var javascript_sources = [
    "assets/js/vendor/jquery.js",
    "assets/js/vendor/*",
    "assets/js/app/*"
];
javascript_sources = jekyllThemeSupport(javascript_sources);
const javascript_dest = "./_site/assets/js/";
// Sass Sources
var sass_sources = [
    "_sass/*-package.scss"
];
sass_sources = jekyllThemeSupport(sass_sources);
const css_dest = "./_site/assets/css/";
// Add the Jekyll Theme base paths
function jekyllThemeSupport(sources){
    sources.forEach(function(source){
        let newSource = themePath + "/" + source;
        sources.push(newSource);
        console.log(newSource);
    });
    return sources;
}
// Minify HTML Source
function minify(){
    return gulp.src('./_site/**/*.html')
        .pipe(htmlmin({ 
            collapseWhitespace: true,
            continueOnParseError: true,
            minifyJS: true,
            minifyCSS: true
         }))
        .pipe(gulp.dest('./_site'));
}
// Concatenate & Minifiy CSS
// CSS is compiled from sass_sources and pushed through autoprefixer(add's cross browser support prefixes --web-kit etc)
// and then minified using cssnano via the PostCSS API
function css() {
    return gulp
    .src(sass_sources)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest(css_dest))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(css_dest))
    .pipe(browsersync.stream());
}
// Concatenate & Minify Javascript
function scripts() {
    return (
        gulp
        .src(javascript_sources)
        .pipe(sourcemaps.init())
        .pipe(concat('concat.js'))
        .pipe(gulp.dest(javascript_dest))
        .pipe(rename('package.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(javascript_dest))
        .pipe(browsersync.stream())
    );
}
// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./_site/"
        },
        port: 4000
    });
    done();
}
// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}
// Build the Jekyll Site
function jekyll() {
    return child_process.spawn("bundle", ["exec", "jekyll", "build", "--profile", "--trace"], { stdio: "inherit" });
}
// Build the Jekyll Staging Site
function jekyll_staging() {
    return child_process.spawn("bundle", ["exec", "jekyll", "build", "--config", "_config-staging.yml"], { stdio: "inherit" });
}
// Build the Jekyll Production Site
function jekyll_production() {
    return child_process.spawn("bundle", ["exec", "jekyll", "build", "--config", "_config-production.yml"], { stdio: "inherit" });
}
// Watch files
function watchFiles() {
    gulp.watch("./assets/css/**/*", css);
    gulp.watch("./assets/js/**/*", gulp.series(scripts));
    gulp.watch(
        [
            "./_includes/**/*",
            "./_layouts/**/*",
            "./_pages/**/*",
            "./_posts/**/*",
            "./_data/**/*"
        ],
        gulp.series(jekyll, css, scripts, browserSyncReload)
    );
}

// Exports/Tasks
const js = gulp.series(scripts);
const build = gulp.series(jekyll, css, scripts);
exports.css = css;
exports.js = js;
exports.jekyll = jekyll;
exports.build = build;
exports.default = gulp.series(build, gulp.parallel(watchFiles, browserSync));