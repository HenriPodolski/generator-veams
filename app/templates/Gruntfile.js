/*
 * Generated on <%= (new Date).toISOString().split('T')[0] %>
 * <%= pkg.name %> v<%= pkg.version %>
 * <%= pkg.homepage %>
 *
 * Copyright (c) <%= (new Date).getFullYear() %> <%= pkg.author.name %>
 * Licensed under the MIT license.
 */

'use strict';

// Timer
var timer = require("grunt-timer");

// # Globbing
// for performance reasons we're only matching one level down:
// '<%%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  // Timer
  timer.init(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'resources',
      dist: '_demo'
    },

    compass: {
          dist: {
              options: {
                  config: 'config.rb',  // css_dir = 'dev/css'
                  cssDir: '<%%= config.dist %>/css'
              }
          }
    },

    watch: {
      assemble: {
        files: ['<%%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
        tasks: ['newer:assemble']
      },
      livereload: {
        options: {
          livereload: '<%%= connect.options.livereload %>'
        },
        files: [
          '<%%= config.dist %>/{,*/}*.html',
          '<%%= config.dist %>/css/{,*/}*.css',
          '<%%= config.dist %>/js/{,*/}*.js',
          '<%%= config.dist %>/media/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%%= config.dist %>',
          layout: '<%%= config.src %>/templates/layouts/default.hbs',
          data: '<%%= config.src %>/data/*.{json,yml}',
          partials: '<%%= config.src %>/templates/partials/**/*.hbs'<% if(plugin && plugin.length > 0){ %>,
          plugins: [<% if(typeof plugin === 'object'){ _.each(plugin, function(name, i) { %>'<%= name %>'<% if(i < (plugin.length - 1)) { %>,<% } }); } else { %>'<%= name %>'<%} %>],<%}
          _.each(plugin, function(name, i) { if(name == 'permalinks') { %>
          permalinks: {
            preset: 'pretty'
          },<% }
          if(name == 'assemble-contrib-contextual') { %>
          contextual: {
            dest: 'tmp/'
          },<% }
          }); %>
        },
        files: {
          '<%%= config.dist %>/': ['<%%= config.src %>/templates/pages/*.hbs']
        }
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%%= config.dist %>/**/*.{html,xml}']

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('css', [
    'compass:dist'
  ]);

  grunt.registerTask('server', [
    'clean',
    'newer:assemble',
    'css',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'assemble'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
