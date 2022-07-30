module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                report: 'min',
                mangle: false,
                compress: {},
                banner: "/* Minified Pyro File */"
            },
            minifyJs: {
                files: [{
                    expand: true,
                    src: ['./**/*.js', '!./**/*.min.js', '!./node_modules/**/*'],
                    ext: '.min.js',
                    dest: 'minCode/'
                }]
            }
        } 
    })
} 