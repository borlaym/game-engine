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
var ComponentRemovedEvent = /** @class */ (function (_super) {
    __extends(ComponentRemovedEvent, _super);
    function ComponentRemovedEvent(component) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.type = 'ComponentRemovedEvent';
        return _this;
    }
    ComponentRemovedEvent.prototype.toJSON = function () {
        return '';
    };
    return ComponentRemovedEvent;
}(GameEvent));
export default ComponentRemovedEvent;
