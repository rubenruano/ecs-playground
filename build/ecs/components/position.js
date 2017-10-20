var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Component from '../component';
var Position = /** @class */ (function (_super) {
    __extends(Position, _super);
    function Position(x, y) {
        var _this = _super.call(this, Position.compName) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    Position.compName = "position";
    return Position;
}(Component));
export default Position;
