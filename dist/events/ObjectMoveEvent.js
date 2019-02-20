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
import GameObject from '../GameObject';
var ObjectMoveEvent = /** @class */ (function (_super) {
    __extends(ObjectMoveEvent, _super);
    function ObjectMoveEvent(gameObject) {
        var _this = _super.call(this) || this;
        _this.gameObject = gameObject;
        _this.type = 'ObjectMoveEvent';
        return _this;
    }
    ObjectMoveEvent.prototype.toJSON = function () {
        return JSON.stringify({
            type: 'ObjectMoveEvent',
            component: this.gameObject.uuid
        });
    };
    ObjectMoveEvent.parse = function (data) {
        var go = GameObject.getById(data.component);
        if (!go) {
            throw new Error('Unable to find game object with id');
        }
        return new ObjectMoveEvent(go);
    };
    return ObjectMoveEvent;
}(GameEvent));
export default ObjectMoveEvent;
