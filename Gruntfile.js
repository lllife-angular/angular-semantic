'use strict';

module.exports = function(grunt){
	grunt.initConfig({

		less: {
			development: {
				options: {
					compress: false,
					yuicompress: false,
					optimization: 2
				},
				files: {
					"style.css" : "style.less"
				}
			}
		},

		jade: {
			html: {
			    src: ['*.jade'],
			    dest: './',
			    options : {
			    	client: false
			    }
			  }
		},

		watch: {
			files: ["*.less", "*.jade", "*.html"],
			tasks: ["less", "jade"],
			options: {
				livereload: true
			}
		},

		connect: {
			options : {
				port: 9000,
				hostname: "0.0.0.0"
			},
			livereload: {
				options: {
					open: true,
				}
			}
		}
	});

	// grunt.loadNpmTasks('grunt-jade');
	// grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-connect");
	//grunt.registerTask("default", ["watch"]);
	grunt.registerTask("server", function(target){
		grunt.task.run(["connect:livereload", "watch"]);
	});
};

