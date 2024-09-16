  module.exports = function(grunt) {
    
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    
        less: {
          development: {
            files: {
              'gruntjs/main.css': 'gruntjs/main.less'
            }
          }
        },
    
     
        jshint: {
          files: ['Gruntfile.js', 'path/to/js/**/*.js'],
          options: {
            esversion: 6
          }
        }
      });
    
     
      grunt.loadNpmTasks('grunt-contrib-less');
      grunt.loadNpmTasks('grunt-contrib-jshint');
    
      grunt.registerTask('default', ['less', 'jshint']);
    };
    
