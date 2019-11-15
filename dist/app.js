"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.get('/', function (req, res) {
  res.status(200).send('Welcome to teamwork project');
});
app.get("/users", function (req, res) {
  res.json([{
    name: "William",
    location: "Abu Dhabi"
  }, {
    name: "Chris",
    location: "Vegas"
  }]);
});
var _default = app;
exports["default"] = _default;