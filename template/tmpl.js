var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["tmpl"] = this["tmpl"] || {};

Handlebars.registerPartial("search/modal", this["tmpl"]["search/modal"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- start:lunr-search-modal.hbs -->\n<div class=\"modal fade\" id=\"lunr-search-modal\">\n	<div class=\"modal-dialog\">\n		<div class=\"modal-content\">\n			<div class=\"modal-header\">\n				<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n				<h4 class=\"modal-title\">Search results</h4>\n			</div>\n			<div class=\"modal-body\" id=\"lunr-search-body\">\n			</div>\n			<div class=\"modal-footer\" id=\"lunr-search-footer\">\n				<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n			</div>\n		</div><!-- /.modal-content -->\n	</div><!-- /.modal-dialog -->\n</div>\n<!-- end:lunr-search-modal.hbs -->";
},"useData":true}));

Handlebars.registerPartial("search/navbar-input", this["tmpl"]["search/navbar-input"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- start:lunr-search-navbar.hbs -->\n<form class=\"navbar-form navbar-right\" role=\"search\">\n	<div class=\"input-group\">\n		<input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"lunr-search-input\">\n		<div class=\"input-group-btn\">\n			<button class=\"btn btn-default\" id=\"lunr-search-submit\">\n				<i class=\"glyphicon glyphicon-search\"></i>\n			</button>\n		</div>\n	</div>\n</form>\n<!-- start:lunr-search-navbar.hbs -->";
},"useData":true}));

Handlebars.registerPartial("site/layout", this["tmpl"]["site/layout"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "		<title>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.pageTitle : stack1), depth0))
    + "</title>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.favicon : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<!--[if lt IE 9]>\n		<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n		<![endif]-->\n		<link href=\"https://fonts.googleapis.com/css?family=PT+Mono\" rel=\"stylesheet\">\n		<link type=\"text/css\" rel=\"stylesheet\" href=\"css/bootstrap.min.css\">\n		<link type=\"text/css\" rel=\"stylesheet\" href=\"css/prism.min.css\">\n		<link type=\"text/css\" rel=\"stylesheet\" href=\"css/template.min.css\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.stylesheets : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.systemColor : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<script type=\"text/javascript\">\n			window.TEMPLATE_OPTIONS = "
    + ((stack1 = (helpers.json || (depth0 && depth0.json) || alias2).call(alias1,(depth0 != null ? depth0.options : depth0),{"name":"json","hash":{},"data":data})) != null ? stack1 : "")
    + ";\n			window.DOCLET_TOC_ENABLED = "
    + ((stack1 = (helpers.json || (depth0 && depth0.json) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.showTableOfContents : stack1),{"name":"json","hash":{},"data":data})) != null ? stack1 : "")
    + ";\n			window.DOCLET_AFILTER_ENABLED = "
    + ((stack1 = (helpers.json || (depth0 && depth0.json) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.showAccessFilter : stack1),{"name":"json","hash":{},"data":data})) != null ? stack1 : "")
    + ";\n		</script>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "		<link rel=\"icon\" type=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.faviconType : stack1), depth0))
    + "\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.favicon : stack1), depth0))
    + "\"/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "			<link type=\"text/css\" rel=\"stylesheet\" href=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\">\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<style>\n				.page-header,\n				pre.code-toolbar > .toolbar:hover {\n					background-color: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.systemColor : stack1), depth0))
    + ";\n				}\n				.callout-primary,\n				.toc .nav > li > a:hover,\n				.toc .nav > li > a:focus,\n				.toc .nav > li.active > a,\n				.toc .nav > li.active > a:hover,\n				.toc .nav > li.active > a:focus,\n				pre.code-toolbar > .toolbar:hover {\n					border-left-color: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.systemColor : stack1), depth0))
    + ";\n				}\n				pre.code-toolbar > .toolbar:hover {\n					border-bottom-color: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.systemColor : stack1), depth0))
    + ";\n				}\n				.callout-primary h5,\n				.symbol-title.collapsible-symbol .toggle-icon,\n				.breadcrumb li a,\n				.toc .nav > li > a:hover,\n				.toc .nav > li > a:focus,\n				.toc .nav > li.active > a,\n				.toc .nav > li.active > a:hover,\n				.toc .nav > li.active > a:focus {\n					color: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.systemColor : stack1), depth0))
    + ";\n				}\n			</style>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "		<div class=\"page-header\">\n			<div class=\"container\">\n				<span class=\"kind\">"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.kind : stack1), depth0))
    + "</span>\n				<h1>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.pageTitleHTML : stack1), depth0)) != null ? stack1 : "")
    + "</h1>\n"
    + ((stack1 = container.invokePartial(partials["tag/summary"],(depth0 != null ? depth0.doclet : depth0),{"name":"tag/summary","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "			</div>\n		</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "col-md-9";
},"12":function(container,depth0,helpers,partials,data) {
    return "col-md-12";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.crumbs : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.showAccessFilter : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<ol class=\"breadcrumb\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.crumbs : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						</ol>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<li"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.last),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</li>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return " class=\"active\"";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "						<div class=\"access-filter\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.has : stack1)) != null ? stack1.inherited : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.has : stack1)) != null ? stack1["public"] : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.has : stack1)) != null ? stack1["protected"] : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.has : stack1)) != null ? stack1["private"] : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						</div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "								<label class=\"checkbox-inline\">\n									<input class=\"toggle-inherited\" type=\"checkbox\" value=\"\" checked>\n									Inherited\n								</label>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "								<label class=\"checkbox-inline\">\n									<input class=\"toggle-public\" type=\"checkbox\" value=\"\" checked>\n									Public\n								</label>\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "								<label class=\"checkbox-inline\">\n									<input class=\"toggle-protected\" type=\"checkbox\" value=\"\" checked>\n									Protected\n								</label>\n";
},"26":function(container,depth0,helpers,partials,data) {
    return "								<label class=\"checkbox-inline\">\n									<input class=\"toggle-private\" type=\"checkbox\" value=\"\" checked>\n									Private\n								</label>\n";
},"28":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "					<section>\n"
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || alias2).call(alias1,"primary",{"name":"block","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || alias2).call(alias1,"secondary",{"name":"block","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					</section>\n";
},"29":function(container,depth0,helpers,partials,data) {
    return "							<dl class=\"symbol primary\">\n								"
    + container.escapeExpression((helpers.symbol || (depth0 && depth0.symbol) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.doclet : depth0),{"name":"symbol","hash":{"options":(depth0 != null ? depth0.options : depth0),"expanded":true,"primary":true},"data":data}))
    + "\n							</dl>\n";
},"31":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "							<article class=\"secondary\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1.module : stack1),{"name":"if","hash":{},"fn":container.program(32, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1["class"] : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1.mixin : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1.namespace : stack1),{"name":"if","hash":{},"fn":container.program(39, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1.member : stack1),{"name":"if","hash":{},"fn":container.program(41, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1["function"] : stack1),{"name":"if","hash":{},"fn":container.program(43, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1.typedef : stack1),{"name":"if","hash":{},"fn":container.program(45, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1.event : stack1),{"name":"if","hash":{},"fn":container.program(47, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1.tutorial : stack1),{"name":"if","hash":{},"fn":container.program(49, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "							</article>\n";
},"32":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "									<h3>Modules</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1.module : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "									</dl>\n";
},"33":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "											<hr/>\n											"
    + container.escapeExpression((helpers.symbol || (depth0 && depth0.symbol) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"symbol","hash":{"options":(depths[1] != null ? depths[1].options : depths[1])},"data":data}))
    + "\n";
},"35":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "									<h3>Classes</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1["class"] : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "									</dl>\n";
},"37":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "									<h3>Mixins</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1.mixin : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "									</dl>\n";
},"39":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "									<h3>Namespaces</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1.namespace : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "									</dl>\n";
},"41":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "									<h3>Members</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1.member : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "									</dl>\n";
},"43":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "									<h3>Methods</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1["function"] : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "									</dl>\n";
},"45":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "									<h3>Type Definitions</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1.typedef : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "									</dl>\n";
},"47":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "									<h3>Events</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1.event : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "									</dl>\n";
},"49":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "									<h3>Tutorials</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.symbols : stack1)) != null ? stack1.tutorial : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "									</dl>\n";
},"51":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"col-md-3 side-content\">\n					<nav class=\"toc hidden-print hidden-sm hidden-xs\"></nav>\n				</div>\n";
},"53":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.footer : stack1),{"name":"if","hash":{},"fn":container.program(54, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.copyright : stack1),{"name":"if","hash":{},"fn":container.program(56, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<div class=\"generated-by\">Documentation generated by <a href=\"https://github.com/jsdoc3/jsdoc\">JSDoc "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.version : stack1), depth0))
    + "</a>"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.includeDate : stack1),{"name":"if","hash":{},"fn":container.program(58, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " using the <a href=\"https://github.com/steveush/foodoc\">FooDoc template</a>.</div>\n";
},"54":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<div class=\"footer-option\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.footer : stack1), depth0))
    + "</div>\n";
},"56":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<div class=\"copyright\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.copyright : stack1), depth0))
    + "</div>\n";
},"58":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " on "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.date : stack1), depth0));
},"60":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "		<div>\n			<pre class=\"prettyprint source language-javascript\"><code class=\"language-javascript\">"
    + ((stack1 = (helpers.json || (depth0 && depth0.json) || alias2).call(alias1,(depth0 != null ? depth0.config : depth0),{"name":"json","hash":{"pretty":true},"data":data})) != null ? stack1 : "")
    + "</code></pre>\n			<pre class=\"prettyprint source language-javascript\"><code class=\"language-javascript\">"
    + ((stack1 = (helpers.json || (depth0 && depth0.json) || alias2).call(alias1,(depth0 != null ? depth0.doclet : depth0),{"name":"json","hash":{"pretty":true},"data":data})) != null ? stack1 : "")
    + "</code></pre>\n		</div>\n";
},"62":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["search/modal"],depth0,{"name":"search/modal","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		<script src=\"js/lunr.min.js\"></script>\n";
},"64":function(container,depth0,helpers,partials,data) {
    return "		<script src=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\"></script>\n";
},"66":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.analytics : stack1)) != null ? stack1.ua : stack1),{"name":"if","hash":{},"fn":container.program(67, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"67":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.analytics : stack1)) != null ? stack1.domain : stack1),{"name":"if","hash":{},"fn":container.program(68, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"68":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\n		<script>\n			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n			ga('create', '"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.analytics : stack1)) != null ? stack1.ua : stack1), depth0))
    + "', '"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.analytics : stack1)) != null ? stack1.domain : stack1), depth0))
    + "');\n			ga('send', 'pageview');\n		</script>\n	";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n	<meta charset=\"utf-8\">\n	<meta name=\"viewport\" content=\"width=device-width\">\n"
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || alias2).call(alias1,"head",{"name":"block","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</head>\n<body>\n"
    + ((stack1 = container.invokePartial(partials["site/navbar"],depth0,{"name":"site/navbar","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || alias2).call(alias1,"page-header",{"name":"block","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<div class=\"container content\">\n		<div class=\"row\">\n			<div class=\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.showTableOfContents : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.program(12, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + " main-content\">\n"
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || alias2).call(alias1,"controls",{"name":"block","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || alias2).call(alias1,"content",{"name":"block","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.showTableOfContents : stack1),{"name":"if","hash":{},"fn":container.program(51, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<footer>\n"
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || alias2).call(alias1,"footer",{"name":"block","hash":{},"fn":container.program(53, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</footer>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.debug : stack1),{"name":"if","hash":{},"fn":container.program(60, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<script src=\"js/jquery.min.js\"></script>\n	<script src=\"js/bootstrap.min.js\"></script>\n	<script src=\"js/clipboard.min.js\"></script>\n	<script src=\"js/prism.min.js\"></script>\n	<script src=\"js/template.min.js\"></script>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.search : stack1),{"name":"if","hash":{},"fn":container.program(62, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.scripts : stack1),{"name":"each","hash":{},"fn":container.program(64, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.analytics : stack1),{"name":"if","hash":{},"fn":container.program(66, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</body>\n</html>\n";
},"usePartial":true,"useData":true,"useDepths":true}));

Handlebars.registerPartial("site/navbar", this["tmpl"]["site/navbar"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " navbar-inverse";
},"3":function(container,depth0,helpers,partials,data) {
    return " branding-logo";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " style=\"background-image: url("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.systemLogo : stack1), depth0))
    + ");\"";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? depths[1].options : depths[1])) != null ? stack1.inlineNav : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<li><a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<li class=\"dropdown\">\n							<a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "<b class=\"caret\"></b></a>\n							<ul class=\"dropdown-menu\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "							</ul>\n						</li>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "									<li>"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</li>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["search/navbar-input"],depth0,{"name":"search/navbar-input","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<!-- start:navbar.hbs -->\n<header class=\"navbar navbar-default navbar-fixed-top"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.inverseNav : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<div class=\"container\">\n		<div class=\"navbar-header\">\n			<a class=\"navbar-brand"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.systemLogo : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.navbar : depth0)) != null ? stack1.index : stack1)) != null ? stack1.link : stack1), depth0))
    + "\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.systemLogo : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n				"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.navbar : depth0)) != null ? stack1.index : stack1)) != null ? stack1.title : stack1), depth0))
    + "\n			</a>\n			<!-- displayed on small devices -->\n			<button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#topNavigation\">\n				<span class=\"icon-bar\"></span>\n				<span class=\"icon-bar\"></span>\n				<span class=\"icon-bar\"></span>\n			</button>\n		</div>\n		<div class=\"navbar-collapse collapse\" id=\"topNavigation\">\n			<ul class=\"nav navbar-nav\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.navbar : depth0)) != null ? stack1.topLevel : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.search : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</header>\n<!-- end:navbar.hbs -->";
},"usePartial":true,"useData":true,"useDepths":true}));

Handlebars.registerPartial("symbol/inline", this["tmpl"]["symbol/inline"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " "
    + container.escapeExpression(((helper = (helper = helpers.access || (depth0 != null ? depth0.access : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"access","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.inherited : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return " inherited";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers.unless.call(alias1,(helpers.content || (depth0 && depth0.content) || helpers.helperMissing).call(alias1,"symbol-details",{"name":"content","hash":{},"data":data}),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " collapsible-symbol"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.expanded),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return " expanded";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.primary),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["tag/summary"],depth0,{"name":"tag/summary","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "			<h2 class=\""
    + container.escapeExpression(((helper = (helper = helpers.kind || (depth0 != null ? depth0.kind : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.primaryTitleHTML || (depth0 != null ? depth0.primaryTitleHTML : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryTitleHTML","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.list),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<h4 id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.kind || (depth0 != null ? depth0.kind : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.access || (depth0 != null ? depth0.access : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"access","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.inherited : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.listTitleHTML || (depth0 != null ? depth0.listTitleHTML : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listTitleHTML","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h4>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<h4 id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.kind || (depth0 != null ? depth0.kind : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.access || (depth0 != null ? depth0.access : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"access","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.inherited : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.symbolTitleHTML || (depth0 != null ? depth0.symbolTitleHTML : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"symbolTitleHTML","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h4>\n		";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers.unless.call(alias1,(helpers.content || (depth0 && depth0.content) || helpers.helperMissing).call(alias1,"symbol-details",{"name":"content","hash":{},"data":data}),{"name":"unless","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  collapsible-symbol"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.expanded),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    return " style=\"max-height: 9999px;\"";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["tag/description"],depth0,{"name":"tag/description","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["tag/param"],depth0,{"name":"tag/param","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["tag/prop"],depth0,{"name":"tag/prop","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["tag/returns"],depth0,{"name":"tag/returns","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["tag/requires"],depth0,{"name":"tag/requires","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["tag/example"],depth0,{"name":"tag/example","hash":{"options":(data && data.options)},"data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["tag/fires"],depth0,{"name":"tag/fires","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["tag/exceptions"],depth0,{"name":"tag/exceptions","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["tag/details"],depth0,{"name":"tag/details","hash":{"options":(data && data.options)},"data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<dt class=\"symbol-title "
    + alias4(((helper = (helper = helpers.kind || (depth0 != null ? depth0.kind : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers.unless.call(alias1,(data && data.primary),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (data && data.options)) && stack1.collapseSymbols),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || alias2).call(alias1,"symbol-title",{"name":"block","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</dt>\n<dd class=\"symbol-details "
    + alias4(((helper = (helper = helpers.kind || (depth0 != null ? depth0.kind : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers.unless.call(alias1,(data && data.primary),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (data && data.options)) && stack1.collapseSymbols),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\""
    + ((stack1 = helpers["if"].call(alias1,(data && data.expanded),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n	<div class=\"symbol-details-inner\">\n"
    + ((stack1 = (helpers.block || (depth0 && depth0.block) || alias2).call(alias1,"symbol-details",{"name":"block","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</dd>";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("symbol/page", this["tmpl"]["symbol/page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	"
    + ((stack1 = (helpers.content || (depth0 && depth0.content) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"symbol-details",{"name":"content","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.extend || (depth0 && depth0.extend) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"symbol/inline",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("symbol/tutorial", this["tmpl"]["symbol/tutorial"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.content || (depth0 && depth0.content) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"symbol-details",{"name":"content","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<dl class=\"symbol tutorial-children\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</dl>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "				<hr/>\n				"
    + container.escapeExpression((helpers.symbol || (depth0 && depth0.symbol) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"symbol","hash":{"options":(data && data.options),"primary":(depth0 != null ? depth0.primary : depth0),"list":(depth0 != null ? depth0.list : depth0)},"data":data}))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.extend || (depth0 && depth0.extend) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"symbol/inline",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/description", this["tmpl"]["tag/description"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.callout || (depth0 && depth0.callout) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Description","callout-primary",{"name":"callout","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "		<div class=\"description classdesc\">"
    + ((stack1 = ((helper = (helper = helpers.classdesc || (depth0 != null ? depth0.classdesc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"classdesc","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.callout || (depth0 && depth0.callout) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Description","callout-primary",{"name":"callout","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "		<div class=\"description\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.classdesc : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/details", this["tmpl"]["tag/details"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.callout || (depth0 && depth0.callout) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Details","callout-default",{"name":"callout","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<form class=\"form-horizontal details\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.defaultvalue : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.augments : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.version : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.since : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.inherits : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.overrides : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.implementations : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["implements"] : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.mixes : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.deprecated : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.author : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.copyright : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.license : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasSource : depth0),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tutorials : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.see : depth0),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.todo : depth0),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		</form>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "				<!-- type -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Type</label>\n					<div class=\"col-sm-9\">\n						<div class=\"form-control-static type-names\">"
    + container.escapeExpression((helpers["type-names"] || (depth0 && depth0["type-names"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.type : depth0),{"name":"type-names","hash":{},"data":data}))
    + "</div>\n					</div>\n				</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<!-- defaultvalue -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Default Value</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression(((helper = (helper = helpers.defaultvalue || (depth0 != null ? depth0.defaultvalue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"defaultvalue","hash":{},"data":data}) : helper)))
    + "</p>\n					</div>\n				</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<!-- augments -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Augments</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (helpers.single || (depth0 && depth0.single) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.augments : depth0),{"name":"single","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "							<p class=\"form-control-static\">"
    + container.escapeExpression((helpers.linkto || (depth0 && depth0.linkto) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"linkto","hash":{},"data":data}))
    + "</p>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.augments : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "							</ul>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "									<li>"
    + container.escapeExpression((helpers.linkto || (depth0 && depth0.linkto) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"linkto","hash":{},"data":data}))
    + "</li>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<!-- version -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Version</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression(((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"version","hash":{},"data":data}) : helper)))
    + "</p>\n					</div>\n				</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<!-- since -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Since</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression(((helper = (helper = helpers.since || (depth0 != null ? depth0.since : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"since","hash":{},"data":data}) : helper)))
    + "</p>\n					</div>\n				</div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "				<!-- inherits -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Inherited From</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression((helpers.linkto || (depth0 && depth0.linkto) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.inherits : depth0),{"name":"linkto","hash":{},"data":data}))
    + "</p>\n					</div>\n				</div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "				<!-- overrides -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Overrides</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression((helpers.linkto || (depth0 && depth0.linkto) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.overrides : depth0),{"name":"linkto","hash":{},"data":data}))
    + "</p>\n					</div>\n				</div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<!-- implementations -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Implementations</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (helpers.single || (depth0 && depth0.single) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.implementations : depth0),{"name":"single","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(22, data, 0),"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.implementations : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "							</ul>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<!-- implements -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Implements</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (helpers.single || (depth0 && depth0.single) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0["implements"] : depth0),{"name":"single","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(25, data, 0),"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0["implements"] : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "							</ul>\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<!-- mixes -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Mixes In</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (helpers.single || (depth0 && depth0.single) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.mixes : depth0),{"name":"single","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(28, data, 0),"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.mixes : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "							</ul>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<!-- deprecated -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Deprecated</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression(((helper = (helper = helpers.deprecated || (depth0 != null ? depth0.deprecated : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"deprecated","hash":{},"data":data}) : helper)))
    + "</p>\n					</div>\n				</div>\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<!-- author -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Author</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (helpers.single || (depth0 && depth0.single) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.author : depth0),{"name":"single","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(33, data, 0),"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.author : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "							</ul>\n";
},"35":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<!-- copyright -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Copyright</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression(((helper = (helper = helpers.copyright || (depth0 != null ? depth0.copyright : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"copyright","hash":{},"data":data}) : helper)))
    + "</p>\n					</div>\n				</div>\n";
},"37":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<!-- license -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">License</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression(((helper = (helper = helpers.license || (depth0 != null ? depth0.license : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"license","hash":{},"data":data}) : helper)))
    + "</p>\n					</div>\n				</div>\n";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<!-- source -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Source</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.outputSourceFiles : stack1),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.program(42, data, 0),"data":data})) != null ? stack1 : "")
    + "</p>\n					</div>\n				</div>\n";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.sourcelink || (depth0 != null ? depth0.sourcelink : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sourcelink","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"42":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"source","hash":{},"data":data}) : helper)));
},"44":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<!-- tutorials -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Tutorials</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (helpers.single || (depth0 && depth0.single) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tutorials : depth0),{"name":"single","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(45, data, 0),"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"45":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tutorials : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "							</ul>\n";
},"47":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<!-- see -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">See</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (helpers.single || (depth0 && depth0.single) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.see : depth0),{"name":"single","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(48, data, 0),"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"48":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.see : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "							</ul>\n";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<!-- todo -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">To Do</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (helpers.single || (depth0 && depth0.single) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.todo : depth0),{"name":"single","hash":{},"fn":container.program(51, data, 0),"inverse":container.program(53, data, 0),"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"51":function(container,depth0,helpers,partials,data) {
    return "							<p class=\"form-control-static\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</p>\n";
},"53":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.todo : depth0),{"name":"each","hash":{},"fn":container.program(54, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "							</ul>\n";
},"54":function(container,depth0,helpers,partials,data) {
    return "									<li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hasDetails : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/example", this["tmpl"]["tag/example"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.callout || (depth0 && depth0.callout) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Examples","callout-example",{"name":"callout","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.examples : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\"example-code\">\n			<pre class=\"prettyprint source language-"
    + alias4(((helper = (helper = helpers.lang || (depth0 != null ? depth0.lang : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lang","hash":{},"data":data}) : helper)))
    + "\"><code class=\"language-"
    + alias4(((helper = (helper = helpers.lang || (depth0 != null ? depth0.lang : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lang","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data}) : helper)))
    + "</code></pre>\n		</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.run : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "		<div class=\"example-caption\">"
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<p class=\"example-run\">\n			<input type=\"hidden\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"code","hash":{},"data":data}) : helper)))
    + "\">\n			<button type=\"button\" class=\"btn btn-default code-run\">Run</button>\n		</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.examples : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/exceptions", this["tmpl"]["tag/exceptions"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.callout || (depth0 && depth0.callout) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Throws","callout-danger",{"name":"callout","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<form class=\"form-horizontal exceptions\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.exceptions : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</form>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label exceptions-type\">"
    + container.escapeExpression((helpers["type-names"] || (depth0 && depth0["type-names"]) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"type-names","hash":{},"data":data}))
    + "</label>\n					<div class=\"col-sm-9\">\n						<div class=\"form-control-static exceptions-description\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n					</div>\n				</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.exceptions : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/fires", this["tmpl"]["tag/fires"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.callout || (depth0 && depth0.callout) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Fires","callout-warning",{"name":"callout","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<form class=\"form-horizontal fires\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fires : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</form>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label fires-event\">"
    + ((stack1 = ((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</label>\n					<div class=\"col-sm-9\">\n						<div class=\"form-control-static fires-summary\">"
    + ((stack1 = ((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n					</div>\n				</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.fires : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/param", this["tmpl"]["tag/param"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.child : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<table class=\"params table table-striped\">\n		<thead>\n		<tr>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.paramsHasNames : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<th>Type</th>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.paramsHasAttributes : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.paramsHasDefaults : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<th class=\"last\">Description</th>\n		</tr>\n		</thead>\n		<tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.params : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</tbody>\n	</table>\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.child : depth0),{"name":"unless","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "<div class=\"callout callout-info\">\n	<h5>Parameters</h5>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "				<th>Name</th>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "				<th>Attributes</th>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "				<th>Default</th>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<tr>\n"
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1].paramsHasNames : depths[1]),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<td>"
    + container.escapeExpression((helpers["type-names"] || (depth0 && depth0["type-names"]) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"type-names","hash":{},"data":data}))
    + "</td>\n"
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1].paramsHasAttributes : depths[1]),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1].paramsHasDefaults : depths[1]),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<td class=\"last\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.params : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</td>\n			</tr>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<td><code>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</code></td>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "					<td class=\"attributes\">"
    + container.escapeExpression((helpers["param-attribs"] || (depth0 && depth0["param-attribs"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"param-attribs","hash":{},"data":data}))
    + "</td>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<td>"
    + container.escapeExpression(((helper = (helper = helpers.defaultvalue || (depth0 != null ? depth0.defaultvalue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"defaultvalue","hash":{},"data":data}) : helper)))
    + "</td>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "						"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["tag/param"],depth0,{"name":"tag/param","hash":{"child":true},"data":data,"indent":"\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    return "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.params : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true}));

Handlebars.registerPartial("tag/prop", this["tmpl"]["tag/prop"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.child : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<table class=\"params table table-striped\">\n		<thead>\n		<tr>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.propertiesHasNames : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<th>Type</th>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.propertiesHasAttributes : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.propertiesHasDefaults : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<th class=\"last\">Description</th>\n		</tr>\n		</thead>\n		<tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.properties : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</tbody>\n	</table>\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.child : depth0),{"name":"unless","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "<div class=\"callout callout-info\">\n	<h5>Properties</h5>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "				<th>Name</th>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "				<th>Attributes</th>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "				<th>Default</th>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<tr>\n"
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1].propertiesHasNames : depths[1]),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<td>"
    + container.escapeExpression((helpers["type-names"] || (depth0 && depth0["type-names"]) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"type-names","hash":{},"data":data}))
    + "</td>\n"
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1].propertiesHasAttributes : depths[1]),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1].propertiesHasDefaults : depths[1]),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<td class=\"last\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.properties : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</td>\n			</tr>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<td><code>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</code></td>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "					<td class=\"attributes\">"
    + container.escapeExpression((helpers["param-attribs"] || (depth0 && depth0["param-attribs"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"param-attribs","hash":{},"data":data}))
    + "</td>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<td>"
    + container.escapeExpression(((helper = (helper = helpers.defaultvalue || (depth0 != null ? depth0.defaultvalue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"defaultvalue","hash":{},"data":data}) : helper)))
    + "</td>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "						"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["tag/prop"],depth0,{"name":"tag/prop","hash":{"child":true},"data":data,"indent":"\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    return "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.properties : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true}));

Handlebars.registerPartial("tag/requires", this["tmpl"]["tag/requires"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.callout || (depth0 && depth0.callout) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Requires","callout-warning",{"name":"callout","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<form class=\"form-horizontal requires\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.requires : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</form>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label requires-type\">"
    + ((stack1 = ((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</label>\n					<div class=\"col-sm-9\">\n						<div class=\"form-control-static requires-summary\">"
    + ((stack1 = ((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n					</div>\n				</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.requires : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/returns", this["tmpl"]["tag/returns"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.callout || (depth0 && depth0.callout) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Returns","callout-success",{"name":"callout","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<form class=\"form-horizontal returns\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.returns : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</form>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label returns-type\">"
    + container.escapeExpression((helpers["type-names"] || (depth0 && depth0["type-names"]) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"type-names","hash":{},"data":data}))
    + "</label>\n					<div class=\"col-sm-9\">\n						<div class=\"form-control-static returns-description\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n					</div>\n				</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.returns : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/summary", this["tmpl"]["tag/summary"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"summary\">"
    + ((stack1 = ((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"summary","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.summary : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

this["tmpl"]["doclet"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.extend || (depth0 && depth0.extend) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["tmpl"]["list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return ((stack1 = (helpers.content || (depth0 && depth0.content) || alias2).call(alias1,"primary",{"name":"content","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.content || (depth0 && depth0.content) || alias2).call(alias1,"secondary",{"name":"content","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<h2>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.primaryTitleHTML : stack1), depth0)) != null ? stack1 : "")
    + "</h2>\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "		<article class=\"secondary\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.members : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</article>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "				<dl class=\"symbol\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.members : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</dl>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "						"
    + ((stack1 = helpers.unless.call(alias1,(data && data.first),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n						"
    + container.escapeExpression((helpers.symbol || (depth0 && depth0.symbol) || helpers.helperMissing).call(alias1,depth0,{"name":"symbol","hash":{"options":(depths[1] != null ? depths[1].options : depths[1]),"list":true},"data":data}))
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "<hr/>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.extend || (depth0 && depth0.extend) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

this["tmpl"]["module"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = (helpers.content || (depth0 && depth0.content) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"primary",{"name":"content","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<dl class=\"symbol\">\n			<dt class=\"symbol-title "
    + alias4(((helper = (helper = helpers.kind || (depth0 != null ? depth0.kind : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data}) : helper)))
    + "\"></dt>\n			<dd class=\"symbol-details "
    + alias4(((helper = (helper = helpers.kind || (depth0 != null ? depth0.kind : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data}) : helper)))
    + "\">\n				<div class=\"symbol-details-inner\">\n"
    + ((stack1 = container.invokePartial(partials["tag/description"],(depth0 != null ? depth0.doclet : depth0),{"name":"tag/description","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.modules : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["tag/requires"],(depth0 != null ? depth0.doclet : depth0),{"name":"tag/requires","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["tag/details"],(depth0 != null ? depth0.doclet : depth0),{"name":"tag/details","hash":{"options":(depth0 != null ? depth0.options : depth0)},"data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "				</div>\n			</dd>\n		</dl>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.classdesc : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["tag/description"],depth0,{"name":"tag/description","data":data,"indent":"\t\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.extend || (depth0 && depth0.extend) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["tmpl"]["readme"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = (helpers.content || (depth0 && depth0.content) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"content",{"name":"content","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<section class=\"readme-section\">\n			<article>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.contents : stack1), depth0)) != null ? stack1 : "")
    + "</article>\n		</section>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- start:readme.hbs -->\n"
    + ((stack1 = (helpers.extend || (depth0 && depth0.extend) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<!-- end:readme.hbs -->";
},"useData":true});

this["tmpl"]["source"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = (helpers.content || (depth0 && depth0.content) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"content",{"name":"content","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "		<section class=\"source-section\">\n			<article>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.contents : stack1), depth0)) != null ? stack1 : "")
    + "</article>\n			<pre class=\"prettyprint source language-javascript"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.linenums : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><code class=\"language-javascript\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.code : stack1), depth0)) != null ? stack1 : "")
    + "</code></pre>\n		</section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " line-numbers";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- start:source.tmpl.hbs -->\n"
    + ((stack1 = (helpers.extend || (depth0 && depth0.extend) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<!-- end:source.tmpl.hbs -->";
},"useData":true});

this["tmpl"]["tutorial"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = (helpers.content || (depth0 && depth0.content) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"content",{"name":"content","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<section class=\"tutorial-section\">\n			<article>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.contents : stack1), depth0)) != null ? stack1 : "")
    + "</article>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.children : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<div class=\"related-tutorials\">\n					<h2>Related Tutorials</h2>\n					<ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.doclet : depth0)) != null ? stack1.children : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					</ul>\n				</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "							<li>"
    + container.escapeExpression((helpers.linkto || (depth0 && depth0.linkto) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.longname : depth0),{"name":"linkto","hash":{},"data":data}))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- start:readme.hbs -->\n"
    + ((stack1 = (helpers.extend || (depth0 && depth0.extend) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<!-- end:readme.hbs -->";
},"useData":true});

if (typeof exports === 'object' && exports) {module.exports = this["tmpl"];}