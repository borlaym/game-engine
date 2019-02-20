import { uniq } from 'lodash';
import GameObject from './GameObject';
import Collision from './components/Collision';
import { Raycaster, Vector2 } from 'three';
import GameCamera from './GameCamera';
var InputController = /** @class */ (function () {
    function InputController() {
        var _this = this;
        this.keysDown = [];
        this.mousePos = { x: 0, y: 0 };
        this.click = false;
        this.mouseDown = false;
        this.mouseColliders = [];
        this._mousePosLastTick = { x: 0, y: 0 };
        document.addEventListener('keydown', function (event) {
            _this.keysDown = uniq(_this.keysDown.concat(event.key));
        });
        document.addEventListener('keyup', function (event) {
            _this.keysDown = _this.keysDown.filter(function (key) { return key !== event.key; });
        });
        document.addEventListener('click', function () {
            _this.click = true;
        });
        document.addEventListener('mousedown', function () {
            _this.mouseDown = true;
        });
        document.addEventListener('mouseup', function () {
            _this.mouseDown = false;
        });
        document.addEventListener("mousemove", function (event) {
            _this.mousePos.x = (event.clientX / window.innerWidth) * 2 - 1;
            _this.mousePos.y = -(event.clientY / window.innerHeight) * 2 + 1;
        });
    }
    InputController.prototype.update = function () {
        var collisionComponents = GameObject.getComponentsOfType(Collision);
        var colliders = collisionComponents.map(function (component) { return component.collider; });
        var mouseRaycaster = new Raycaster();
        mouseRaycaster.setFromCamera(this.mousePos, GameCamera.camera);
        var intersects = mouseRaycaster.intersectObjects(colliders);
        if (intersects.length > 0) {
            this.mouseColliders = intersects.map(function (intersection) {
                var uuid = intersection.object.uuid;
                var component = collisionComponents.find(function (component) { return component.collider.uuid === uuid; });
                if (!component) {
                    throw new Error('cant find component with uuid');
                }
                return component.gameObject;
            });
        }
        else {
            this.mouseColliders = [];
        }
    };
    InputController.prototype.reset = function () {
        this.click = false;
        this._mousePosLastTick = { x: this.mousePos.x, y: this.mousePos.y };
    };
    Object.defineProperty(InputController.prototype, "mousePointingAt", {
        get: function () {
            return this.mouseColliders[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputController.prototype, "mouseMovement", {
        get: function () {
            return new Vector2(this.mousePos.x - this._mousePosLastTick.x, this.mousePos.y - this._mousePosLastTick.y);
        },
        enumerable: true,
        configurable: true
    });
    return InputController;
}());
export default new InputController();
