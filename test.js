var logger = require("./index");

logger.separator = "\t";
logger.prefix(function() {
	var date = new Date();
	var index = (date.getYear() + 1900) + "-" + (date.getMonth() + 1) + "-" + date.getDate()
	return ["production", index, "app", new Date().getTime()];
});

logger.info("info", "signup", "message");
logger.info("info", "signup", "message");
logger.error("error", "createapp", "message");
logger.info("info", "signup", new Error().stack);
