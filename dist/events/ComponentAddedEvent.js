var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import GameEvent from '../GameEvent';
var ComponentAddedEvent = /** @class */ (function (_super) {
    __extends(ComponentAddedEvent, _super);
    function ComponentAddedEvent(component) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.type = 'ComponentAddedEvent';
        return _this;
    }
    ComponentAddedEvent.prototype.toJSON = function () {
        return '';
    };
    return ComponentAddedEvent;
}(GameEvent));
export default ComponentAddedEvent;
