"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("./src/bootstrap");
bootstrap_1.default.listen(5000, () => console.log(`🚀 is running on port ${5000}`));
