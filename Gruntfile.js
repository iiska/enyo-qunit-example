module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Set qunit test files
    qunit: {
      all: ['tests/*.html']
    },
    // Set files which are watched and define task which is
    // run after changes
    watch: {
      files: ['tests/*.js', 'tests/*.html', 'source/**/*.js'],
      tasks: ['qunit']
    }
  });
  // load up your plugins
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // register qunit test run as default task
  grunt.registerTask('default', ['qunit']);
};
