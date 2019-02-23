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
import Component from '../Component';
import Transform from './Transform';
import Events from '../Events';
import ComponentAddedEvent from '../events/ComponentAddedEvent';
var Collision = /** @class */ (function (_super) {
    __extends(Collision, _super);
    function Collision(collider) {
        var _this = _super.call(this) || this;
        _this.collider = collider;
        Events.emit(new ComponentAddedEvent(_this));
        return _this;
    }
    Collision.prototype.update = function (dt) {
        var _a = this.gameObject.getComponent(Transform), position = _a.position, rotation = _a.rotation;
        this.collider.position.set(position.x, position.y, position.z);
        this.collider.rotation.set(rotation.x, rotation.y, rotation.z);
    };
    Collision.prototype.handleEvent = function (event) {
        return;
    };
    return Collision;
}(Component));
export default Collision;
