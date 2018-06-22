'use strict';

module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        shell: {
          jekyllClean: {
            command: 'jekyll clean'
          }
        },
        jekyll: {
          options: {
            config: '_config.yml',
            src: 'app'
          },
          dist: {
            options: {
                dest: 'dist/'
            }
          },
          server: {
            options: {
                config: '_config.yml',
                dest: '.jekyll/'
            }
          }
        },
        copy: {
          main: {
            files: [
              {expand: true, flatten: true, src: ['app/assets/bower_components/bootstrap/dist/css/bootstrap.min.css'], dest: 'app/assets/bower_components/bootstrap-4/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/bootstrap/dist/js/bootstrap.min.js'], dest: 'app/assets/bower_components/bootstrap-4/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/bootstrap/dist/css/bootstrap.css'], dest: 'app/assets/bower_components/bootstrap-4/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/bootstrap/dist/js/bootstrap.js'], dest: 'app/assets/bower_components/bootstrap-4/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/bootstrap/dist/css/bootstrap.min.css.map'], dest: 'app/assets/bower_components/bootstrap-4/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/bootstrap/dist/js/bootstrap.min.js.map'], dest: 'app/assets/bower_components/bootstrap-4/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/foundation/css/foundation.min.css'], dest: 'app/assets/bower_components/foundation-6/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/foundation/js/foundation.min.js'], dest: 'app/assets/bower_components/foundation-6/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/foundation/css/foundation.css'], dest: 'app/assets/bower_components/foundation-6/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/foundation/js/foundation.js'], dest: 'app/assets/bower_components/foundation-6/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/semantic/dist/semantic.min.css'], dest: 'app/assets/bower_components/semantic-ui/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/semantic/dist/semantic.min.js'], dest: 'app/assets/bower_components/semantic-ui/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/semantic/dist/semantic.css'], dest: 'app/assets/bower_components/semantic-ui/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/semantic/dist/semantic.js'], dest: 'app/assets/bower_components/semantic-ui/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/material-design-lite/material.min.css'], dest: 'app/assets/bower_components/material-DL/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/material-design-lite/material.min.js'], dest: 'app/assets/bower_components/material-DL/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/material-design-lite/material.css'], dest: 'app/assets/bower_components/material-DL/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/material-design-lite/material.js'], dest: 'app/assets/bower_components/material-DL/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/material-design-lite/material.min.css.map'], dest: 'app/assets/bower_components/material-DL/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/material-design-lite/material.min.js.map'], dest: 'app/assets/bower_components/material-DL/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/materialize/dist/css/materialize.min.css'], dest: 'app/assets/bower_components/materialize-css/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/materialize/dist/js/materialize.min.js'], dest: 'app/assets/bower_components/materialize-css/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/materialize/dist/css/materialize.css'], dest: 'app/assets/bower_components/materialize-css/'},
              {expand: true, flatten: true, src: ['app/assets/bower_components/materialize/dist/js/materialize.js'], dest: 'app/assets/bower_components/materialize-css/'}

            ]
          }
        },
        watch: {
          options: {
            livereload: 9090
          },
          files: [
            'app/**/*'
          ],
          tasks: ['sass:server','uglify:dist','postcss:server','jekyll:server']
        },
        connect: {
          options: {
            port: 9000,
            livereload: 9090,
            hostname: 'localhost' // set to '0.0.0.0' to access from outside
          },
          livereload: {
            options: {
              open: true,
              base: ['.jekyll']
            }
          }
        },
        clean: {
          setup: [
            'app/assets/bower_components/bootstrap',
            'app/assets/bower_components/fastclick',
            'app/assets/bower_components/foundation',
            'app/assets/bower_components/jquery',
            'app/assets/bower_components/jquery-placeholder',
            'app/assets/bower_components/jquery.cookie',
            'app/assets/bower_components/material-design-lite',
            'app/assets/bower_components/materialize',
            'app/assets/bower_components/modernizr',
            'app/assets/bower_components/semantic'
          ],
          grid: [
            'app/assets/css/toast-grid.min.css',
            'app/assets/css/1-tools/_toast-grid.scss',
            'app/assets/css/1-tools/_toast-grid.sass'
          ],
          server: [
            '.jekyll',
            '.tmp'
          ],
          clear: {
            files: [{
              src: [
                '.jekyll',
                '.tmp',
                '.sass-cache',
                'dist',
                'app/assets/css/*.min.css',
                'app/assets/css/*.css.map',
                'app/assets/js/function.min.js'
              ]
            }]
          }
        },
        imagemin: {
          options: {
            progressive: true
          },
          dist: {
            files: [{
                expand: true,
                cwd: 'dist/assets/img',
                src: '**/*.{jpg,jpeg,png,gif}',
                dest: 'dist/assets/img'
            }]
          }
        },
        sass: {
          server: {
            files: [{
              expand: true,
              cwd: 'app/assets/css',
              src: '**/*.{scss,sass}',
              dest: 'app/assets/css',
              ext: '.css'
            }]
          },
          dist: {
            files: [{
              expand: true,
              cwd: 'app/assets/css',
              src: '**/*.{scss,sass}',
              dest: 'app/assets/css',
              ext: '.css'
            }]
          }
        },
        uglify: {
          options: {
            preserveComments: false
          },
          dist: {
            src: 'app/assets/js/function.js',
            dest: 'app/assets/js/function.min.js'
          }
        },
        postcss: {
          options: {
            map: false,

            processors: [
              require('pixrem')(), // add fallbacks for rem units
              require('autoprefixer')({browsers: 'last 3 versions'}), // add vendor prefixes
              require('cssnano')() // minify the result
            ]
          },
          server: {
            src: 'app/assets/css/main.css',
            dest: 'app/assets/css/main.min.css'
          },
          dist: {
            src: 'dist/assets/css/main.css',
            dest: 'dist/assets/css/main.min.css'
          }
        },
        svgmin: {
          dist: {
              files: [{
                  expand: true,
                  cwd: 'app/assets/img',
                  src: '**/*.svg',
                  dest: 'app/assets/img'
              }]
          }
        }

    });

    grunt.registerTask('serve', [
      'clean:server',
      'sass:server',
      'uglify:dist',
      'postcss:server',
      'jekyll:server',
      'connect',
      'watch'
    ]);

    grunt.registerTask('build', [
      'clear',
      'sass:dist',
      'uglify:dist',
      'jekyll:dist',
      'postcss:dist',
      'imagemin:dist',
      'svgmin:dist'
    ]);

    grunt.registerTask('push', [
      'build',
    ]);

    grunt.registerTask('deploy', [
      'build',
    ]);

    grunt.registerTask('clear', [
      'shell:jekyllClean',
      'clean:clear'
    ]);

    grunt.registerTask('setup', [
      'copy:main',
      'clean:grid',
      'clean:setup'
    ]);

    grunt.registerTask('default', 'serve');

};
