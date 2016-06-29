module.exports = function(grunt){
    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    './app/js-plugins/jquery-1.11.3.min.js',
                    './app/js/**/**.js'
                    ],
                dest: 'userFolder/js/compress.js'
            }
        },
        uglify: {
            compress: {
                files: {
                    'userFolder/js/compress.js': ['userFolder/js/compress.js']
                },
                options: {
                    mangle: false
                }
            }
        },
        slim: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    './userFolder/html/index.html': './app/slim/index.slim',
                    './userFolder/html/pages/catalog.html': './app/slim/pages/catalog.slim',
                    './userFolder/html/pages/product-card.html': './app/slim/pages/product-card.slim',
                    './userFolder/html/pages/campaign.html': './app/slim/pages/campaign.slim',
                    './userFolder/html/pages/typical-page.html': './app/slim/pages/typical-page.slim'
                }
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    './userFolder/css/main.css': './app/sass/main.scss'       // 'destination': 'source'
                }
            }
        },
        sprite:{
            all:{
                src: './userFolder/images/sprites/**/**/**/*.png',
                dest: './userFolder/images/sprites.png',
                destCss: './app/sass/template/generated/_sprites.scss',
                cssTemplate: './app/grunt/templates/sprites.scss.handlebars',
                imgPath: './../images/sprites.png',
                padding: 2
            }
        },
        watch: {
            files: ['./app/sass/**/**/*.scss', './app/slim/**/**/*.slim', 'app/js/**/**/*.js'],
            // 'app/js/**/**/*.js',      //, './userFolder/images/sprites/**/**/**/*.png'
            tasks: ['slim', 'sass', 'concat'/*, 'concat', 'sprite'*/],
            options: {
                event: ['changed', 'added', 'deleted'],
                spawn: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-slim');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-spritesmith');

    grunt.registerTask('js-compile', [
        'concat'
        //'uglify'
    ]);

    grunt.registerTask('default', ['js-compile', 'slim', 'sass', 'watch']);
};