"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.port || 3001;

_app["default"].listen(port, function () {
  return console.log("Server is running on port ".concat(port));
});