module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON("aws-credentials.json"),
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "questionsandanswers",
        region: "us-west-1"
      },
      build: {
        cwd: "public/",
        src: "bundle.js"
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-aws');

  grunt.registerTask('default', ['s3']);
};