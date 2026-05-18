"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/health", (req, res) => {
    res.send("<h1>Server is Healthy</h1>");
});
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}.`);
});
//# sourceMappingURL=index.js.map