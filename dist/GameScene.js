import { Scene } from 'three';
import Events from './Events';
import ComponentAddedEvent from './events/ComponentAddedEvent';
import Rendering from './components/Rendering';
import Collision from './components/Collision';
import Outline from './components/Outline';
import ComponentRemovedEvent from './events/ComponentRemovedEvent';
import { PointLight, AmbientLight } from 'three';
var GameScene = /** @class */ (function () {
    function GameScene() {
        var _this = this;
        this.scene = new Scene();
        Events.addListener(function (event) {
            switch (event.constructor) {
                case ComponentAddedEvent: {
                    var component = event.component;
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
                    break;
                }
                case ComponentRemovedEvent: {
                    var component = event.component;
                    switch (component.constructor) {
                        case Rendering:
                            _this.scene.remove(component.mesh);
                            break;
                        case Collision:
                            _this.scene.remove(component.collider);
                            break;
                        case Outline:
                            _this.scene.remove(component.outlineMesh);
                            break;
                    }
                    break;
                }
            }
        });
        var globalIllumination = new AmbientLight(0xffffff, 0.4);
        this.scene.add(globalIllumination);
        var light = new PointLight(0xffffff, 13, 4, 3);
        light.position.set(4, 1, 4);
        this.scene.add(light);
    }
    return GameScene;
}());
export default GameScene;
