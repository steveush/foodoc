module.exports = function(grunt) {

	var path = require("path");

	/**
	 * Used to process the handlebar template names when compiling them to the "tmpl" namespace.
	 * @example
	 * processTemplateName( "src/tmpl/template.hbs" ) => "template" => tmpl["template"]
	 * processTemplateName( "src/tmpl/_partial.hbs" ) => "partial" => tmpl["partial"]
	 * processTemplateName( "src/tmpl/group/template.hbs" ) => "group/template" => tmpl["group/template"]
	 * processTemplateName( "src/tmpl/group/_partial.hbs" ) => "group/partial" => tmpl["group/partial"]
	 */
	var processTemplateName = function(filePath){
		return filePath.replace(/^.*?\/tmpl\/(.*)?\.hbs/, '$1').replace(/(\/|^)_/, '$1');
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			test: ['.test/'],
			examples: ['examples/'],
			template: ['template/']
		},
		handlebars: {
			compile: {
				options: {
					namespace: 'tmpl',
					node: true,
					partialsUseNamespace: true,
					processName: processTemplateName,
					processPartialName: processTemplateName
				},
				files: {
					"template/tmpl.js": ["src/tmpl/**/*.hbs"]
				}
			}
		},
		copy   : {
			template: {
				files: [
					{expand: true, flatten: true, src: ['src/conf.json'], dest: 'template/', filter: 'isFile'},
					{expand: true, flatten: true, src: ['src/publish.js'], dest: 'template/', filter: 'isFile'},
					{expand: true, flatten: true, src: ['src/utils/template.js'], dest: 'template/utils/', filter: 'isFile'},
					{expand: true, flatten: true, src: ['src/utils/postProcessor.js'], dest: 'template/utils/', filter: 'isFile'},
					{expand: true, flatten: true, src: ['src/utils/docletHelper.js'], dest: 'template/utils/', filter: 'isFile'},
					{expand: true, flatten: true, src: ['src/utils/handlebarsHelper.js'], dest: 'template/utils/', filter: 'isFile'},
					{expand: true, flatten: true, src: ['src/utils/lunrHelper.js'], dest: 'template/utils/', filter: 'isFile'}
				]
			},
			bootstrap: {
				files : [
					{expand: true, flatten: true, src: ['node_modules/bootstrap/dist/js/bootstrap.min.js'], dest: 'template/static/js/', filter: 'isFile'},
					{expand: true, flatten: true, src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'], dest: 'template/static/css/', filter: 'isFile'},
					{expand: true, flatten: true, src: ['node_modules/bootstrap/dist/fonts/*'], dest: 'template/static/fonts/', filter: 'isFile'}
				]
			},
			jquery: {
				files : [
					{expand: true, flatten: true, src: ['node_modules/jquery/dist/jquery.min.js'], dest: 'template/static/js/', filter: 'isFile'}
				]
			},
			lunr: {
				files : [
					{expand: true, flatten: true, src: ['node_modules/lunr/lunr.min.js'], dest: 'template/static/js/', filter: 'isFile'}
				]
			},
			sunlight: {
				files : [
					{expand: true, flatten: true, src: ['lib/sunlight/sunlight.min.js'], dest: 'template/static/js/', filter: 'isFile'},
					{expand: true, flatten: true, src: ['lib/sunlight/sunlight.min.css'], dest: 'template/static/css/', filter: 'isFile'}
				]
			}
		},
		uglify: {
			template: {
				files: {
					'template/static/js/template.min.js': ['src/static/js/*.js']
				}
			}
		},
		cssmin: {
			template: {
				files: {
					'template/static/css/template.min.css': ['src/static/css/*.css']
				}
			}
		},
		jsdoc: {
			namespaced: {
				src: ["README.md","test-src/namespaced/**/*.js"],
				options: {
					destination: './.test',
					template : './template',
					configure : './template/conf.json'
				}
			},
			default: {
				src: ["README.md","test-src/fixtures/**/*.js"],
				options: {
					destination: './examples/default',
					template : './template',
					configure : './test-src/default.conf.json',
					tutorials: './test-src/fixtures/tutorials/'
				}
			},
			inline: {
				src: ["README.md","test-src/fixtures/**/*.js"],
				options: {
					destination: './examples/inline',
					template : './template',
					configure : './test-src/inline.conf.json',
					tutorials: './test-src/fixtures/tutorials/'
				}
			},
			"logo-color": {
				src: ["README.md","test-src/fixtures/**/*.js"],
				options: {
					destination: './examples/logo-color',
					template : './template',
					configure : './test-src/logo-color.conf.json',
					tutorials: './test-src/fixtures/tutorials/'
				}
			},
			collapse: {
				src: ["README.md","test-src/fixtures/**/*.js"],
				options: {
					destination: './examples/collapse',
					template : './template',
					configure : './test-src/collapse.conf.json',
					tutorials: './test-src/fixtures/tutorials/'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-jsdoc');

	grunt.registerTask('template', ['clean', 'handlebars', 'copy', 'uglify', 'cssmin']);

	grunt.registerTask('all', ['template', 'jsdoc:default', 'jsdoc:inline', 'jsdoc:logo-color', 'jsdoc:collapse']);

	grunt.registerTask('default', ['template', 'jsdoc:default']);

	grunt.registerTask('inline', ['template', 'jsdoc:inline']);

	grunt.registerTask('logo-color', ['template', 'jsdoc:logo-color']);

	grunt.registerTask('collapse', ['template', 'jsdoc:collapse']);

	grunt.registerTask('namespaced', ['template', 'jsdoc:namespaced']);

};