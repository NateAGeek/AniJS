module.exports = function(grunt) {

  grunt.util.linefeed = '\n';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['src/AniJS.js', 'src/**/*.js'],
        dest: 'dist/AniJS.js'
      },
    },
    uglify: {
      options: {
        banner: '/* \n'+
                '<%= pkg.name %> v<%= pkg.version %>\n' +
                '<%= pkg.description %>\n' +
                '*/ \n'
      },
      compress: {
        files: {
          'dist/AniJS.min.js': ['dist/AniJS.js']
        }
      }
    },
    jshint: {
      all: ['src/**/*.js', '*.js']
    },
    watch: {
      options: {
        livereload: true,
      },
      build: {
        files: [ 'src/**/*.js', 'src/AniJS.js' ],
        tasks: ['jshint', 'concat', 'uglify'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['build']);

  grunt.registerTask('build', ['jshint', 'concat', 'uglify']);

};