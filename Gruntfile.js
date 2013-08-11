'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      livereload: {
        options: {
          port: 9000
        }
      }
    },
    watch: {
      options: {
        // Start a live reload server on the default port 35729
        livereload: true,
      },
      all: {
        files: ['**/*.html', '**/*.css', '**/*.js'],
        tasks: []
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'watch']);

};
