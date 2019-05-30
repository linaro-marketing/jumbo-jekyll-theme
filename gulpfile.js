"use strict";

// const gulp = require('gulp');
// const concat = require('gulp-concat');
// const sass = require('gulp-sass');
// const autoprefixer = require("autoprefixer");
// const browsersync = require("browser-sync").create();
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const child_process = require("child_process");
const cssnano = require("cssnano");
const del = require("del");
// const eslint = require("gulp-eslint");
const gulp = require("gulp");
const gulpImagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
var execSync = require('child_process').execSync;
var imageminWebp = require('imagemin-webp');
var gulpImageresize = require('gulp-image-resize');
var themePath = execSync('bundle show jumbo-jekyll-theme').toString();
const gulpNewer = require("gulp-newer");
const merge2 = require("merge2");
const globby = require("globby");
const deleteEmpty = require("delete-empty");

// Image Transformation constants
const transforms = [
    {
        src: "./assets/images/content/**/*",
        dist: "./_site/assets/images/",
        params: {
            width: 800,
            height: 800,
            crop: true
        }
    },
    {
        src: "./assets/images/content/**/*",
        dist: "./_site/assets/images/",
        params: {
            width: 400,
            height: 400,
            crop: true
        }
    }
];
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
// Clean assets
function clean() {
    return del(["./_site/assets/min/"]);
}
// // Optimize Images
// function images() {
//   return gulp
//     .src("./assets/images/**/*")
//     .pipe(newer("./_site/assets/images/"))
//     .pipe(
//       imagemin([
//         imagemin.gifsicle({ interlaced: true }),
//         imagemin.jpegtran({ progressive: true }),
//         imagemin.optipng({ optimizationLevel: 5 }),
//         imagemin.svgo({
//           plugins: [
//             {
//               removeViewBox: false,
//               collapseGroups: true
//             }
//           ]
//         })
//       ])    
//     )
//     .pipe(gulp.dest("./_site/assets/images/"));
// }

/**
 * Copy original images
 * - check if images are newer than existing ones
 * - if they are, optimise and copy them
 * - ignore (empty) directories
 */
function imgCopy(){
    return gulp.src("./assets/images/**/*", { nodir: true })
        .pipe(gulpNewer("./_site/assets/images/"))
        .pipe(gulpImagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }, { removeUselessStrokeAndFill: false }]
        }))
        .pipe(gulp.dest("./_site/assets/images/"));
}
/**
 * Make thumbnails
 * 1. walk transforms array to build an array of streams
 *    - get src images
 *    - check if images in src are newer than images in dist
 *    - if they are, make thumbnails and minify
 * 2. merge streams to create all thumbnails in parallel
 */
function imgThumbnails(){
    // create empty streams array for merge2
    const streams = [];
    // loop through transforms and add to streams array
    transforms.map((transform) => {
        // create a stream for each transform
        streams.push(
            gulp.src(transform.src)
                .pipe(gulpNewer(transform.dist + "thumbs_" + transform.params.width + "x" + transform.params.height))
                .pipe(gulpImageresize({
                    imageMagick: true,
                    width: transform.params.width,
                    height: transform.params.height,
                    crop: transform.params.crop
                }))
                .pipe(gulpImagemin({
                    progressive: true,
                    svgoPlugins: [{ removeViewBox: false }, { removeUselessStrokeAndFill: false }]
                }))
                .pipe(gulp.dest(transform.dist + "thumbs_" + transform.params.width + "x" + transform.params.height))
        );
    });
    // merge streams
    return merge2(streams);
}
/**
 * Clean images
 * 1. get arrays of filepaths in images src (base images) and dist (base images and thumbnails)
 * 2. Diffing process
 *    - build list of filepaths in src
 *    - loop through filepaths in dist, remove dist and thumbnails specific parts
 *      to get both base images and corresponding thumbnails, compare with filepaths in src
 *    - if no match, add full dist image filepath to delete array
 * 3. Delete files (base images and thumbnails)
 */
function imgClean(){
  // get arrays of src and dist filepaths (returns array of arrays)
  return Promise.all([
    globby("./assets/images/**/*", { nodir: true }),
    globby("./_site/assets/images/**/*", { nodir: true })
  ])
  .then((paths) => {
    // create arrays of filepaths from array of arrays returned by promise
    const srcFilepaths = paths[0];
    const distFilepaths = paths[1];
    // empty array of files to delete
    const distFilesToDelete = [];
    // diffing
    distFilepaths.map((distFilepath) => {
      // sdistFilepathFiltered: remove dist root folder and thumbs folders names for comparison
      const distFilepathFiltered = distFilepath.replace(/\/_site/, "").replace(/thumbs_[0-9]+x[0-9]+\//, "");
      // check if simplified dist filepath is in array of src simplified filepaths
      // if not, add the full path to the distFilesToDelete array
      if ( srcFilepaths.indexOf(distFilepathFiltered) === -1 ) {
        distFilesToDelete.push(distFilepath);
      }
    });
    // return array of files to delete
    return distFilesToDelete;
  })
  .then((distFilesToDelete) => {
    // delete files
    del.sync(distFilesToDelete);
  })
  .catch((error) => {
    console.log(error);
  });
}
/**
 * Clean unused directories
 * 1. Diffing process between src and dist
 *    - Build array of all thumbs_xxx directories that should exist using the transforms map
 *    - Build array of all thumbs_xxx directories actually in dist
 *    - Diffing: array of all unused thumbnails directories in dist
 * 2. Delete files
 * 3. Delete all empty folders in dist images
 */
function imgCleanDirectories(){
    return globby("./_site/assets/images/**/thumbs_+([0-9])x+([0-9])/")
        .then((paths) => {
            console.log("All thumbs folders: " + paths);
            // existing thumbs directories in dist
            const distThumbsDirs = paths;
            // create array of dirs that should exist by walking transforms map
            const srcThumbsDirs = transforms.map((transform) => transform.dist + "thumbs_" + transform.params.width + "x" + transform.params.height + "/");
            // array of dirs to delete
            const todeleteThumbsDirs = distThumbsDirs.filter((el) => srcThumbsDirs.indexOf(el) === -1);
            console.log("To delete thumbs folders: " + todeleteThumbsDirs);
            // pass array to next step
            return todeleteThumbsDirs;
        })
        .then((todeleteThumbsDirs) => {
            // deleted diff thumbnails directories
            del.sync(todeleteThumbsDirs);
        })
        .then(() => {
            // delete empty directories in dist images
            deleteEmpty.sync("./_site/assets/images/");
        })
        .catch((error) => {
            console.log(error);
        });
}
// CSS task
function css() {
    return gulp
    .src('_sass/app.scss')
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./_site/assets/css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./_site/assets/css/"))
    .pipe(browsersync.stream());
}
// Transpile, concatenate and minify scripts
function scripts() {
    return (
        gulp
        .src(["./assets/js/**/*"])
        // .pipe(plumber())
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('./_site/assets/js/'))
        .pipe(rename('package.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./_site/assets/js/'))
        // .pipe(webpackstream(webpackconfig, webpack))
        // folder only, filename is specified in webpack config
        .pipe(browsersync.stream())
    );
}
// Jekyll
function jekyll() {
    return child_process.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
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
        gulp.series(jekyll, browserSyncReload)
    );
    gulp.watch("./assets/images/**/*", imagesPipeline);
}

const imagesPipeline = gulp.series(imgCleanDirectories, imgClean, imgCopy, imgThumbnails);
const js = gulp.series(scripts);
const build = gulp.series(clean, gulp.parallel(css, imagesPipeline, jekyll, js));
// export tasks
exports.images = imagesPipeline;
exports.css = css;
exports.js = js;
exports.jekyll = jekyll;
exports.clean = clean;
exports.build = build;
exports.watch = gulp.parallel(watchFiles, browserSync);
exports.default = build;
