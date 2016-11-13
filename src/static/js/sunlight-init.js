(function (options, $) {

	function SyntaxHighlighter(){
		if (!(this instanceof SyntaxHighlighter)) return new SyntaxHighlighter();
	}

	SyntaxHighlighter.prototype.parse = function(){
		$(".tutorial-section pre, .readme-section pre, pre.prettyprint.source").each(function () {
			var $this = $(this);
			var example = $this.find("code"),
				exampleText = example.html();
			var lang = /{@lang\s(.*?)}/.exec(exampleText);
			if (lang && lang[1]) {
				exampleText = exampleText.replace(lang[0], "");
				example.html(exampleText);
				lang = lang[1];
			} else {
				var langClassMatch = example.parent()[0].className.match(/lang\-(\S+)/);
				lang = langClassMatch ? langClassMatch[1] : "javascript";
			}

			if (lang) {
				if (lang === 'html') lang = 'xml';
				$this
					.addClass("sunlight-highlight-" + lang)
					.addClass("linenums")
					.html(example.html());
			}
		});
	};

	SyntaxHighlighter.prototype.highlight = function(){
		Sunlight.highlightAll({
			lineNumbers: options.linenums,
			showMenu: false,
			enableDoclinks: true
		});
	};

	SyntaxHighlighter.prototype.addFlairs = function(){
		var self = this,
			langRegex = /\bsunlight-highlight-(.*?)\s/,
			langToText = {
				"javascript": "js",
				"css": "css",
				"xml": "html"
			};

		$('.sunlight-highlighted').each(function (i, highlighted) {
			var $highlighted = $(highlighted),
				className = $highlighted.prop('className');
			if (!langRegex.test(className)) return;
			var lang = className.match(langRegex)[1],
				text = langToText[lang] || lang;
			$highlighted.closest('.sunlight-code-container').append(self.$flair(lang, text));
		});
	};

	SyntaxHighlighter.prototype.$flair = function(lang, text){
		return $('<span/>', {
			'class': 'sunlight-type sunlight-type-' + lang,
			text: text
		});
	};

	$(function () {

		var highlighter = new SyntaxHighlighter();
		highlighter.parse();
		highlighter.highlight();
		highlighter.addFlairs();

	});

})(window.TEMPLATE_OPTIONS, jQuery);