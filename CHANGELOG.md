### v6.5.3
- minor improvements for better veams-cli integration, updated blueprint generator

### v6.5.2
- updated handlebars page

### v6.5.1
- updated bower-component veams-js

### v6.5.0
- updated config.js to support veams-cli, updated blueprints generator, added page-components.hbs

### v6.4.0
- added blueprints generator to support fast scaffolding of templates for blocks, components or global partials

### v6.2.6
- outsourced event names to config file
- updated bower component veams-sass version
- changed test_helpers
- changed title in page

### v6.2.5
- added postInstall methods to support renaming of config files
- added event handling in generator
- clean up minimal installation routine

### v6.2.4
- fixed bug in gulp `js` task
- added `mergeData` helper to sub generator `templating`

### v6.2.3
- updated grunt-bless task to use `force` in options
- updated stylesheets template for svg-sprites to use mixins only

### v6.2.1
- fixed minor issue with sync task
- updated grunt plugins versions for: 
	- grunt-accessibility
	- grunt-autoprefixer
	- grunt-bless
	- grunt-browser-sync
	- grunt-contrib-copy
	- grunt-contrib-jshint
	- grunt-contrib-jsdoc
	- grunt-contrib-uglify
	- grunt-dr-svg-sprites
	- grunt-text-replace
	- grunt-svgmin
	- grunt-phantomas
	- grunt-sync
	- grunt-connect
	- grunt-concurrent
	- grunt-contrib-cssmin

### v6.2.0
- added grunt-includes as simple js packager alternative
- added further specs for sass frameworks, grunt-includes
- cleaned up Gruntfile.js
- cleaned up watch.js
- added bootstrap-sass to styles.scss

### v6.1.4
- fixed minor issues in documentation scaffold process
- deleted grunt-packager
- added container build in travis.yml

### v6.1.2
- deleted README.md instructions 
- better veams-js installation with `overwriteSetup` method 

### v6.0.0

**General**
- refactored prompts
- added new structure to use separate generator files
- updated packages
- added testing
- renamed package to `veams` because pg is already used at npmjs.org

**Task Runners**
- added first gulp support
- added new structure to use gulp and grunt at the same time

**Testing**
- added Hinting and Code Style Checks
- added WebdriverIO for grunt

**JS**
- added browserify
- added ESHarmony

**Templating**
- added new helpers for handlebars templating 

**CSS and Icons**
- deleted compass 
- added @root to svg-sprites templates

**Sub generators**
- deleted plugin, bm, bv, bc
- added js generator to scaffold js templates with arguments and options

### v0.5.8
- changed resources folder structure: data folder is located in templates
- changed watch task

### v0.5.7
- deleted jit-grunt mappings to reduce complexity

### v0.5.6
- updated bower dependencies
- integrated new grunt modules (grunt-postcss-separator, grunt-image-size-export)
- changed build task
- updated pictures task to support grunt-image-size-export
- deleted styleguide templates
- updated htmlhint

### v0.5.3
- added new sprites icon workflow with custom template and selector function to provide mixins and extends
- updated grunt-sass, grunt-contrib-cssmin, bower components
- updated sg grunt to support new icon workflow

### v0.5.2
- added full test spec 
- added pg packages 
- clean up requirejs files generation
- added grunt-combine-mq to replace deprecated version

### v0.5.0
- outsourced scss mixins and extends into own bower component (pg-scss)
- outsourced yo prototype:components into own bower component (pg-components)
- added bower component (pg-js)
- deleted demo content
- deleted mobile first and ie8 support at the same time
- refactored generator to be up to date with yeoman
- added new specs
- refactored whole specs section
- fixed minor bugs with jsdoc and js-section
- refactored scss section
- renamed factory helper to panel helper, added panel section in templates

### v0.4.72
- updated sub generators to support grunt-sass and autolink helper
- added multiple specs

### v0.4.71
- updated packages in package.json
- added assemble-spec.js

### v0.4.70
- added travis ci
- changed prototype:gm => prototype:grunt
- added prototype:assemble for helper files

### v0.4.69
- grunt-jsdoc@beta added with custom configs
- prototype:gm => added grunt-jsdoc, grunt-contrib-requirejs, grunt-comment-toggler
- Refactored index.js to prepare PG for Gulp support

### v0.4.68
- Split custom partial helper and factory helper
- Added possibility to extend options in Assemble to activate factories

### v0.4.67
- Added grunt-comment-toggler for RequireJS
- Changed components/c-article.hbs

### v0.4.65

**General**
- Refactored Gruntfile.js
- Added loadCSS.js to load CSS Styles asynchronous

**Assemble**
- Added custom helper-partial.js
- Added support for assemble factories
- Added Regions Readme.md

**SASS**
- Added custom breakpoint mixin

### v0.4.64
- Fixed bug with version block
- Fixed async task
- Added c-form.scss 

### v0.4.63
- Added `Regions` for PG Frontend Methodology
- Modified form component 
- Deleted batch files
- Refactored bower directory in demo files
- Added almond and grunt-contrib-requirejs 

### v0.4.62
- Optimized package.json 
- Integrated git submodule for components
- Integrated {{#ifBlock}} helper

### v0.4.61
- Minor change in svg-sprites task 
- Bugfix with version.js
- Mixin: spriteicon() added
- Updated prototype:gm to support automated download of grunt-text-replace
- Changed path for prototype:plugin

### v0.4.60
- Updated grunt-photobox to support grunt-browser-sync or grunt-contrib-connect
- Changed output of photobox to Dev folder

### v0.4.59
- Changed Standard Installation to Minimal Installation
- Optimized svg-sprites and svgmin workflow
- Changed classes fo PG Frontend Methodology

### v0.4.58
- Added fork of grunt-dr-svg-sprites and dr-svg-sprites to support placeholders in scss files
- Changed replace.js to change file path
- Added PG Frontend Methodology
