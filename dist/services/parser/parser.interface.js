var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ParserError = (function (_super) {
    __extends(ParserError, _super);
    function ParserError(message, fragment) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.fragment = fragment;
        return _this;
    }
    return ParserError;
}(Error));
export { ParserError };
var Parser = (function () {
    function Parser() {
    }
    return Parser;
}());
export { Parser };
//# sourceMappingURL=parser.interface.js.map