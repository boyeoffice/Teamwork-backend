"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = require("http-errors");
const express_1 = require("express");
const cors_1 = require("cors");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({
    limit: '50mb',
}));
app.use(express_1.default.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 50000,
}));
app.get('/', (req, res) => {
    return res.send({
        status: 'success',
        messages: 'Welcome to teamwork project.',
    });
});
app.use((req, res, next) => {
    next((0, http_errors_1.default)(404));
});
exports.default = app;
