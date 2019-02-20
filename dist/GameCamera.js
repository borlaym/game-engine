import { PerspectiveCamera, Vector3, Ray, Plane } from 'three';
import rotateAroundPoint from './utils/rotateAroundPoint';
import InputController from './InputController';
var CAMERA_ROTATION_SPEED = 0.07;
var GameCamera = /** @class */ (function () {
    function GameCamera() {
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        this.camera.rotation.order = 'YXZ';
    }
    Object.defineProperty(GameCamera.prototype, "lookingAt", {
        /**
         * Intersect the plane at 0 height to get the point the camera is currently pointing at
         */
        get: function () {
            var cameraDirection = new Vector3();
            this.camera.getWorldDirection(cameraDirection);
            var cameraLookingAt = new Vector3();
            new Ray(this.camera.position, cameraDirection).intersectPlane(new Plane(new Vector3(0, 1, 0)), cameraLookingAt);
            return cameraLookingAt;
        },
        enumerable: true,
        configurable: true
    });
    GameCamera.prototype.rotateLeft = function () {
        this.rotate(-CAMERA_ROTATION_SPEED);
    };
    GameCamera.prototype.rotateRight = function () {
        this.rotate(CAMERA_ROTATION_SPEED);
    };
    GameCamera.prototype.update = function (dt) {
        if (InputController.mouseDown) {
            if (InputController.mouseMovement.x > 0) {
                this.rotateRight();
            }
            else if (InputController.mouseMovement.x < 0) {
                this.rotateLeft();
            }
        }
    };
    Object.defineProperty(GameCamera.prototype, "position", {
        get: function () {
            return this.camera.position;
        },
        enumerable: true,
        configurable: true
    });
    GameCamera.prototype.rotate = function (rotation) {
        rotateAroundPoint(this.camera, this.lookingAt, new Vector3(0, 1, 0), rotation);
    };
    return GameCamera;
}());
export default new GameCamera();