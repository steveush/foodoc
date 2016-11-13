# FooDoc

FooDoc is a [Bootstrap](http://twitter.github.io/bootstrap/index.html) based template for [JSDoc3](http://usejsdoc.org/). A big thanks to DocStrap as it served as the inspiration for this project.

This project began as a simple modification of DocStrap to get things looking closer to the actual Bootstrap 3 documentation and it ended up being a re-write, even switching out the template engine to Handlebars. The reason I switched the template engine away from Underscore templates was that as I refactored the `publish.js` and figured out the logical flow of the code I realized I could move all the post processing done in the templates into local modules that the `publish.js` makes use of. This has helped group similar code blocks together making it easier to maintain and it has kept the Handlebars templates as lean and *logicless* as possible.

The original [lunr](http://lunrjs.com/) search implementation in DocStrap performs all the indexing in the browser using a hidden iframe, this was done to allow the search to work offline when viewing the documentation via the file:// protocol. While this works it seemed a better idea to just generate the search index and store as part of the documentation process and output the results in two files `lunr-data.json` and `lunr-data.js` that are then consumed by the search component when required. This also allowed for a more finely tuned implementation resulting in more accurate search results. Members, methods and type definitions of container objects (classes, namespaces, modules, etc.) are automatically added to the index so now when performing searches these symbols appear in the search results and clicking on one will take you directly to its documentation.

## Features

* Intelligent right side Table of Contents (Created to imitate the Bootstrap documentations TOC) which auto hides on pages it's not required on.
* Supports changing the primary color used to generate the documentation. While entire themes are not supported this allows for the primary color to be changed per system documented and if required further customizations can be applied using the `stylesheets` and `scripts` options.
* Integrated offline search implementing a lunr search index across all documents (except source files).
* Syntax highlighting using the Sunlight highlighting plugin.
* Breadcrumbs on every page for easy navigation.
* Extended tutorial configuration allowing you to supply a structure as well as title and summary info for tutorials.
* Configurable navbar links including support for larger systems by switching to list pages instead of the usual drop downs.
* Responsive design, the generated documentation works across both desktop and mobile devices thanks to Bootstrap.
* Makes use of the JSDoc `@summary` tag where appropriate, this tag now also supports markdown syntax.

### What it looks like

As this started off as a DocStrap modification I've used it's `fixtures` code to generate the sample documentation so you can compare the differences between the two. You can see an example of the documentation generated using this template at the below link:

* [The default template options](http://steveush.github.io/foodoc/examples/default)
* [The template with the `inlineNav` option set to `true`](http://steveush.github.io/foodoc/examples/inline)
* [The template using the `systemLogo` and `systemColor` options](http://steveush.github.io/foodoc/examples/logo-color)
* [The template with the `collapseSymbols` option set to `false`](http://steveush.github.io/foodoc/examples/collapse)

## Ooooh, I want it! How do I get it?

If you manage your own version of jsdoc:

```bash
npm install foodoc
```

When using [grunt](http://gruntjs.com/), please look at [grunt-jsdoc](https://github.com/krampstudio/grunt-jsdoc) which you can use with FooDoc.

### Command line example

```bash
jsdoc -c path/to/conf.json -t ./node_modules/foodoc/template -R README.md -r .
```

The `-c` sets the config, the options you can supply in the templates object are listed below in the options.

The `-t` sets the template. This is the option you need to set to get the FooDoc template to be used.

The `-R` sets a markdown file to be the front page of the documentation.

The `-r` tells jsdoc to run recursively.

The `.` says from current directory.

## Configuring the template

FooDoc ships with a `conf.json` file in the template/ directory. It is just a regular old [JSDoc configuration file](http://usejsdoc.org/about-configuring-jsdoc.html), but with the following new options:

```javascript
"templates": {
	"systemName"            : "{string}",
	"systemSummary"         : "{string}",
	"systemLogo"            : "{string}",
	"systemColor"           : "{string}",
	"footer"                : "{string}",
	"copyright"             : "{string}",
	"includeDate"           : "{boolean}",
	"dateFormat"            : "{string}",
	"inlineNav"             : "{boolean}",
	"inverseNav"            : "{boolean}",
	"navMembers"            : "{array.<object>}",
	"linenums"              : "{boolean}",
	"showTableOfContents"   : "{boolean}",
	"analytics"             : "{object}",
	"collapseSymbols"       : "{boolean}",
	"methodHeadingReturns"  : "{boolean}",
	"outputSourceFiles"     : "{boolean}",
	"outputSourcePath"      : "{boolean}",
	"sort"                  : "{boolean|string}",
	"search"                : "{boolean}",
    "stylesheets"           : "{array.<string>}",
    "scripts"               : "{array.<string>}" 
}
```

### Options

* __systemName (`"FooDoc"`)__
  The name of the system being documented. This value is used to generate the *home* link in the navbar and the page title for the generated README page.
* __systemSummary (`"A Bootstrap and Handlebars based JSDoc3 template."`)__
  The short summary description of the system being documented. This is used as part of the page title for the generated README page.
* __systemLogo (`""`)__
  A small 40x40 pixel image to used in the navbar along with the `systemName` to create the *home* link.
* __systemColor (`""`)__
  The primary color used to generate the documentation. This changes the background color of the jumbotron-esque headers on every page, the primary callout border and header colors, the TOC link colors and various other small highlights.
* __footer (`""`)__
  Additional content to place in the footer element of each page before the `copyright` and default *generated by* messages. This can contain HTML.
* __copyright (`"FooDoc Copyright © 2016 The contributors to the JSDoc3 and FooDoc projects."`)__
  A copyright message to display in the footer of each page throughout the documentation.
* __includeDate (`true`)__
  Whether or not the date is included as part of the *generated by* message.
* __dateFormat (`Do MMM YYYY`)__
  If `includeDate` is true this is the format used to display the date. This makes use of moment.js so any format it supports should be supported here.
* __inlineNav (`false`)__
  If your system is quite large the navbar drop downs just don't look good, setting this option to true changes these drop downs to instead just be a link to a list page.
* __inverseNav (`true`)__
  Bootstrap navbars support an inverse mode, this toggles that option for the documentation navbar with `true` being the dark version.
* __navMembers (`[ see below ]`)__
  This option allows you to specify which kinds of documents appear in the navbar, give them a title and provide a short summary which is then used as part of the `inlineNav` option to generate the list pages.
  The following shows the default values for this option, you can remove from this array but cannot add new kinds without altering the template. If no documents are registered for a specific kind it is not added to the navbar.
```javascript
[
    {"kind": "class", "title": "Classes", "summary": "All documented classes."},
    {"kind": "external", "title": "Externals", "summary": "All documented external members."},
    {"kind": "global", "title": "Globals", "summary": "All documented globals."},
    {"kind": "mixin", "title": "Mixins", "summary": "All documented mixins."},
    {"kind": "interface", "title": "Interfaces", "summary": "All documented interfaces."},
    {"kind": "module", "title": "Modules", "summary": "All documented modules."},
    {"kind": "namespace", "title": "Namespaces", "summary": "All documented namespaces."},
    {"kind": "tutorial", "title": "Tutorials", "summary": "All available tutorials."}
]
```
* __outputSourceFiles (`true`)__
  Whether or not to output pretty printed source file documentation that is linked to from other documents.
* __outputSourcePath (`true`)__
  When `outputSourceFiles` is `false`, you may still want to name the file even without a link to the pretty printed output. Set this to `true` when `outputSourceFiles` is `false`. `outputSourceFiles` when `true` takes precedence over this setting.
* __linenums (`true`)__
  When `true`, line numbers will appear in any pretty printed source code blocks. If `outputSourceFiles` is `true` this will add an additional link to all documented members pointing to the exact line number in the pretty printed source file the documentation was pulled from.
* __showTableOfContents (`true`)__
  When `true`, a TOC is generated from all `H1`, `H2`, `H3` and `H4` headings in the generated pages, this includes the README and tutorial pages. If you want to disable this for specific tutorial pages you can set this same option per tutorial in the extended tutorial configuration.
* __analytics (`null`)__
  Add a [Google Analytics](http://www.google.com/analytics) code to the template output
   _e.g._ `"analytics":{"ua":"UA-XXXXX-XXX", "domain":"XXXX"}`
  * __ua__ The google agent (see Google Analytics help for details)
  * __domain__ The domain being served. (see Google Analytics help for details)
* __collapseSymbols (`true`)__
  When `true`, symbols in generated pages (methods, members, type definitions, etc.) are collapsed so only there title and summary are visible. You can then click on them to reveal more detailed information.
* __methodHeadingReturns (`true`)__
  When `true`, method headings will contain the return type if one exists.
* __sort (`"linenum, longname, version, since"`)__
  Specifies the sort order of the symbols on a page. They will still be grouped under there own headings (Classes, Members, Methods, etc.) but within these groups they are sorted using the supplied value. By default this sorts symbols first by where they were found in the original source code, then by there longname, then by there version and lastly by there since tag.
* __search (`true`)__
  Whether or not to enable the lunr search component.
* __stylesheets (`[]`)__
  An array of stylesheet urls to include in every page.
* __scripts (`[]`)__
  An array of script urls to include in every page.