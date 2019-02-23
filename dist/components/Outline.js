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
import { MeshBasicMaterial, Mesh } from 'three';
import Transform from './Transform';
import Rendering from './Rendering';
import * as THREE from 'three';
import Events from '../Events';
import ComponentAddedEvent from '../events/ComponentAddedEvent';
var outlineMaterial = new MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide });
var Outline = /** @class */ (function (_super) {
    __extends(Outline, _super);
    function Outline(go) {
        var _this = _super.call(this) || this;
        _this.gameObject = go;
        var parentMesh = _this.gameObject.getComponent(Rendering).mesh;
        if (!(parentMesh instanceof Mesh)) {
            throw new Error('Tried to add outline to object without mesh');
        }
        _this.outlineMesh = parentMesh.clone();
        _this.outlineMesh.position.set(parentMesh.position.x, parentMesh.position.y, parentMesh.position.z);
        _this.outlineMesh.material = outlineMaterial;
        _this.outlineMesh.scale.multiplyScalar(1.02);
        Events.emit(new ComponentAddedEvent(_this));
        return _this;
    }
    Outline.prototype.update = function (dt) {
        var _a = this.gameObject.getComponent(Transform), position = _a.position, rotation = _a.rotation;
        this.outlineMesh.position.set(position.x, position.y, position.z);
        this.outlineMesh.rotation.set(rotation.x, rotation.y, rotation.z);
    };
    Outline.prototype.handleEvent = function (event) {
        return;
    };
    return Outline;
}(Component));
export default Outline;
