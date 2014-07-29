(function(){

var logger = {
	separator : "\t",
	create_prefix : function() {
		return [];
	},
	stdout : function(stdout, _args) {
		stdout.write(_args.join(this.separator) + "\n");
	},
	base : function(stdout, _arguments) {
		var _args = this.create_prefix().concat();
		for(var i=0;i < _arguments.length;i++) {
			_args.push(_arguments[i].replace(/\n/g, "\\n"));
		}
		this.stdout(stdout, _args);
	},
	info : function() {
		this.base(process.stdout, arguments);
	},
	error : function() {
		this.base(process.stderr, arguments);
	},
	prefix : function(create_prefix) {
		this.create_prefix = create_prefix;
	}
}

if ('undefined' == typeof module) {
	window.logger = logger
} else {
	module.exports = logger
}

}());