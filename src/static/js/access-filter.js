(function(options, enabled, $){

	function AccessFilter(){
		if (!(this instanceof AccessFilter)) return new AccessFilter();
		this.$toggleInherited = $();
		this.$togglePublic = $();
		this.$toggleProtected = $();
		this.$togglePrivate = $();
		this.inherited = false;
		this.public = false;
		this.protected = false;
		this.private = false;
	}

	$.extend(AccessFilter.prototype, {
		init: function(){
			var self = this;
			self.$toggleInherited = $(".access-filter .toggle-inherited").on('change', {self: self}, self.onInheritedChanged);
			self.$toggleInherited.prop("checked", self.getState("inherited"));
			self.setInherited();
			self.$togglePublic = $(".access-filter .toggle-public").on('change', {self: self}, self.onPublicChanged);
			self.$togglePublic.prop("checked", self.getState("public"));
			self.setPublic();
			self.$toggleProtected = $(".access-filter .toggle-protected").on('change', {self: self}, self.onProtectedChanged);
			self.$toggleProtected.prop("checked", self.getState("protected"));
			self.setProtected();
			self.$togglePrivate = $(".access-filter .toggle-private").on('change', {self: self}, self.onPrivateChanged);
			self.$togglePrivate.prop("checked", self.getState("private"));
			self.setPrivate();
		},
		setInherited: function(){
			var self = this;
			if (self.$toggleInherited.length > 0){
				self.setState("inherited", self.$toggleInherited.prop("checked"));
				var $elem = $(".symbol-title.inherited,.symbol-details.inherited,li.inherited");
				if (self.inherited && !self.public){
					$elem = $elem.not('.public');
				}
				if (self.inherited && !self.protected){
					$elem = $elem.not('.protected');
				}
				if (self.inherited && !self.private){
					$elem = $elem.not('.private');
				}
				$elem = $elem.add($elem.filter(".symbol-title").prev("hr"));
				$elem.toggle(self.inherited);
				self.$toggleInherited.closest(".checkbox-inline").toggleClass("checked", self.inherited);
			}
		},
		setPublic: function(){
			var self = this;
			if (self.$togglePublic.length > 0){
				self.setState("public", self.$togglePublic.prop("checked"));
				var $elem = $(".symbol-title.public,.symbol-details.public,li.public");
				if (!self.inherited){
					$elem = $elem.not('.inherited');
				}
				$elem = $elem.add($elem.filter(".symbol-title").prev("hr"));
				$elem.toggle(self.public);
				self.$togglePublic.closest(".checkbox-inline").toggleClass("checked", self.public);
			}
		},
		setProtected: function(){
			var self = this;
			if (self.$toggleProtected.length > 0){
				self.setState("protected", self.$toggleProtected.prop("checked"));
				var $elem = $(".symbol-title.protected,.symbol-details.protected,li.protected");
				if (!self.inherited){
					$elem = $elem.not('.inherited');
				}
				$elem = $elem.add($elem.filter(".symbol-title").prev("hr"));
				$elem.toggle(self.protected);
				self.$toggleProtected.closest(".checkbox-inline").toggleClass("checked", self.protected);
			}
		},
		setPrivate: function(){
			var self = this;
			if (self.$togglePrivate.length > 0){
				self.setState("private", self.$togglePrivate.prop("checked"));
				var $elem = $(".symbol-title.private,.symbol-details.private,li.private");
				if (!self.inherited){
					$elem = $elem.not('.inherited');
				}
				$elem = $elem.add($elem.filter(".symbol-title").prev("hr"));
				$elem.toggle(self.private);
				self.$togglePrivate.closest(".checkbox-inline").toggleClass("checked", self.private);
			}
		},
		onInheritedChanged: function(e){
			e.data.self.setInherited();
		},
		onPublicChanged: function(e){
			e.data.self.setPublic();
		},
		onProtectedChanged: function(e){
			e.data.self.setProtected();
		},
		onPrivateChanged: function(e){
			e.data.self.setPrivate();
		},
		getState: function (item) {
			var value = window.localStorage.getItem( 'toggle-' + item );
			// Default to true if localStorage has nothing
			return (value === 'true' || value === null) ? true : false;
		},
		setState: function (item,state) {
			this[item] = state;
			// No booleans in localStorage
			window.localStorage.setItem( 'toggle-' + item, state.toString() );
			return state
		}
	});

	$(function(){

		if (enabled){
			var filter = new AccessFilter();
			filter.init();
		}

	});

})(window.TEMPLATE_OPTIONS, window.DOCLET_AFILTER_ENABLED, jQuery);
