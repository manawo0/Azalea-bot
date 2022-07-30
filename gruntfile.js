module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

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
                    src: ['./**/*.js', '!./**/*.min.js', '!./node_modules/**/*', '!./gruntfile.js'],
                    ext: '.min.js',
                    dest: '../minCode/'
                }]
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: ['./gruntfile.js', './LICENSE', './package-lock.json', './package.json', './README.md', './SECURITY.md', './.github/**/*'],
                        dest: '../minCode/'
                    }
                ]
            }
        }
    })
} 