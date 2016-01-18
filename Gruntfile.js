module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
           dist: './dist/',
           bower: './bower_components' // jshint ignore:line
       },
       bower: {
            install: {
                options: {
                    copy: false
                }
            }
        },
        bower_concat: { // jshint ignore:line
            vender: {
                dest: './dist/vender.js',
                cssDest: './dist/vender.css',
                bowerOptions: {
                    relative: false
                },
                mainFiles: {
                    'bootstrap': [
                        'dist/css/bootstrap.css',
                        "dist/js/bootstrap.js"
                    ],
                    "font-awesome": [
                        "css/font-awesome.css"
                    ]
                },
                dependencies: {
                }
            }
        },
        uglify: {
            vender: {
                files: {
                    './js/vender.min.js': ['./dist/vender.js']
                }
            },
            core: {
                files: {
                    './js/core.min.js': ['./js/core.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            vender: {
                files: {
                    './css/vender.min.css': [
                        './dist/vender.css'
                    ]
                }
            },
            core: {
                files: {
                    './css/core.min.css': [
                        './css/core.css'
                    ]
                }
            }
        },
        copy: {
            vender: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/font-awesome',
                    src: [
                        'fonts/*.*'
                    ],
                    dest: './'
                },{
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/bootstrap',
                    src: [
                        'fonts/*.*'
                    ],
                    dest: './'
                }]
            },
            PTSans: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/PTSans',
                    src: [
                        '*.ttf'
                    ],
                    dest: './css/fonts/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', [
        'clean:dist',
        'bower_concat',
        'uglify',
        'cssmin',
        'copy'
    ]);

    grunt.registerTask('refresh', [
        'clean',
        'bower',
        'bower_concat',
        'uglify',
        'cssmin',
        'copy'
    ]);
};
