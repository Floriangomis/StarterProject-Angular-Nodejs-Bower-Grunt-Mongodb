module.exports = function(grunt) {
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Load Wiredep which allow to properly add some bower component directly into the html file.
    grunt.loadNpmTasks('grunt-wiredep');
    
    // Project configuration.
    grunt.initConfig({
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        wiredep: {
            task: {
                src: [
                    'index.html',
                ],
                options: {
                    // By default directory point to the default bower directory
                    // Same for the bower.json            
                }
            }
        }

    });
  
  // Default task(s).
  grunt.registerTask('default', ['wiredep']);
  // Minify Task
  grunt.registerTask('minify', ['uglify']);

};