import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js:  `${buildFolder}/js/`,
        css: `${buildFolder}/css/`, 
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        js:   `${srcFolder}/js/app.js`,
        svg : `${srcFolder}/img/**/*.svg`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        scss: `${srcFolder}/scss/style.scss`, 
        html: `${srcFolder}/*.html`,
        files:`${srcFolder}/files/**/*.*`,
    },
    watch: {
        js:   `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`, 
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{svg,jpg,jpeg,png,gif,webp,ico}`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}