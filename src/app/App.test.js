"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var App_1 = __importDefault(require("./App"));
var user_event_1 = __importDefault(require("@testing-library/user-event"));
var vitest_1 = require("vitest");
require("@testing-library/jest-dom");
(0, vitest_1.describe)('Vegetable Shop App', function () {
    (0, vitest_1.beforeEach)(function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(App_1.default, {}));
    });
    (0, vitest_1.test)('показывает loader, затем список продуктов', function () { return __awaiter(void 0, void 0, void 0, function () {
        var brocolli;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, vitest_1.expect)(react_1.screen.getAllByAltText(/loading/i)).toHaveLength(8);
                    return [4 /*yield*/, react_1.screen.findByText('Brocolli - 1 Kg', {}, { timeout: 4000 })];
                case 1:
                    brocolli = _a.sent();
                    (0, vitest_1.expect)(brocolli).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.test)('шапка содержит название и info корзины', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            (0, vitest_1.expect)(react_1.screen.getByText(/vegetable/i)).toBeInTheDocument();
            (0, vitest_1.expect)(react_1.screen.getByText(/cart/i)).toBeInTheDocument();
            return [2 /*return*/];
        });
    }); });
    (0, vitest_1.test)('при клике на кнопку Add to cart обновляется корзина', function () { return __awaiter(void 0, void 0, void 0, function () {
        var addButtons;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, react_1.screen.findByText('Brocolli - 1 Kg', {}, { timeout: 5000 })];
                case 1:
                    _a.sent();
                    addButtons = react_1.screen.getAllByRole('button', { name: /add to card/i });
                    (0, vitest_1.expect)(addButtons.length).toBeGreaterThan(0);
                    return [4 /*yield*/, user_event_1.default.click(addButtons[0])];
                case 2:
                    _a.sent();
                    (0, vitest_1.expect)(react_1.screen.getByText(/cart/i).closest('button')).toHaveTextContent('1');
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.test)('при клике на иконку корзины открывается popup', function () { return __awaiter(void 0, void 0, void 0, function () {
        var cartButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, react_1.screen.findByText('Brocolli - 1 Kg', {}, { timeout: 5000 })];
                case 1:
                    _a.sent();
                    cartButton = react_1.screen.getByRole('button', { name: /cart/i });
                    return [4 /*yield*/, user_event_1.default.click(cartButton)];
                case 2:
                    _a.sent();
                    (0, vitest_1.expect)(react_1.screen.getByText('Brocolli - 1 Kg')).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
});
