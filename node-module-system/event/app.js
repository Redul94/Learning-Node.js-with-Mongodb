const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

//register a  event
logger.on("MessagedLogged", (e) => {
  console.log("Listering from event", e);
});
logger.log("message");
