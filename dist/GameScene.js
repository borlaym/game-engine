import { Scene } from 'three';
import Rendering from './components/Rendering';
import Collision from './components/Collision';
import Outline from './components/Outline';
var GameScene = /** @class */ (function () {
    function GameScene() {
        this.scene = new Scene();
    }
    GameScene.prototype.add = function (go) {
        var _this = this;
        var components = go.getComponents();
        components.forEach(function (component) {
            switch (component.constructor) {
                case Rendering:
                    _this.scene.add(component.mesh);
                    break;
                case Collision:
                    _this.scene.add(component.collider);
                    break;
                case Outline:
                    _this.scene.add(component.outlineMesh);
                    break;
            }
        });
    };
    return GameScene;
}());
export default GameScene;
