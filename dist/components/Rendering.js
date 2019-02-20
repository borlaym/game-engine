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
var Rendering = /** @class */ (function (_super) {
    __extends(Rendering, _super);
    function Rendering(mesh) {
        var _this = _super.call(this) || this;
        _this.mesh = mesh;
        return _this;
    }
    Rendering.prototype.update = function (dt) {
        var _a = this.gameObject.getComponent(Transform), position = _a.position, rotation = _a.rotation;
        this.mesh.position.set(position.x, position.y, position.z);
        this.mesh.rotation.set(rotation.x, rotation.y, rotation.z);
    };
    Rendering.prototype.handleEvent = function (event) {
        return;
    };
    return Rendering;
}(Component));
export default Rendering;
