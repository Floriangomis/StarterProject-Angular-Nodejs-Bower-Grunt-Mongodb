module.exports = function(grunt) {
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Load Wiredep which allow to properly add some bower component directly into the html file.
    grunt.loadNpmTasks('grunt-wiredep');
    // Plugin to modify sass file to css files
    grunt.loadNpmTasks('grunt-contrib-sass');
    //Concat All AngularFile into big one
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Watch files decided to autmatically relaunch default task
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Project configuration.
    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            build: {
                src: 'public/js/min/angularApp.js',
                dest: 'public/js/min/angularApp_min.js'
            }
        },
        wiredep: {
            task: {
                src: [
                    'public/templates/layout.html',
                ],
                options: {
                    // By default directory point to the default bower directory
                    // Same for the bower.json            
                }
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: './public/assets/stylesheets/sass',
                    src: ['./main.scss'],
                    dest: './public/assets/stylesheets/css',
                    ext: '.css'
                }]
            }
        },
        concat: {
            dist: {
                src: [
                    // Entry point of the app
                    "public/js/app.js",
                    // Service
                    
                    // Controllers
                    "public/js/controllers/home.js",
                    "public/js/controllers/about.js"
                    // Components
                ],
                dest: 'public/js/min/angularApp.js'
            }
        },
        watch: {
            files: [ 'public/js/controllers/*.js', 'public/js/app.js', 'public/assets/stylesheets/sass/**/*.scss' ],
            tasks: [ 'wiredep', 'sass', 'concat', 'uglify' ]
        },
    });
  
  // Default task(s).
  grunt.registerTask( 'default', ['watch'] );
  // Start all task without watch
  grunt.registerTask( 'start', [ 'wiredep', 'sass', 'concat', 'uglify' ] );
};