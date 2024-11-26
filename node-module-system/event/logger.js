const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("MessagedLogged", { id: 1, message: "data" });
  }
}
module.exports = Logger