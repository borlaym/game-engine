import * as uuid from 'uuid';
import Transform from './components/Transform';
import Events from './Events';
import ComponentAddedEvent from './events/ComponentAddedEvent';
import ComponentRemovedEvent from './events/ComponentRemovedEvent';
var GameObject = /** @class */ (function () {
    function GameObject() {
        this.components = [];
        this.uuid = uuid.v4();
        GameObject.instances[this.uuid] = this;
        this.addComponent(new Transform());
        Events.addListener(this.handleEvent.bind(this));
    }
    GameObject.getById = function (uuid) {
        return GameObject.instances[uuid] || null;
    };
    GameObject.getObjectsOfType = function (objectClass) {
        var retVal = [];
        Object.keys(GameObject.instances).forEach(function (uuid) {
            var instance = GameObject.instances[uuid];
            if (instance instanceof objectClass) {
                retVal.push(instance);
            }
        });
        return retVal;
    };
    GameObject.getObjectsWithComponent = function (componentClass) {
        var retVal = [];
        Object.keys(GameObject.instances).forEach(function (uuid) {
            var instance = GameObject.instances[uuid];
            if (instance.components.find(function (c) { return c instanceof componentClass; })) {
                retVal.push(instance);
            }
        });
        return retVal;
    };
    GameObject.getComponentsOfType = function (componentClass) {
        var retVal = [];
        Object.keys(GameObject.instances).forEach(function (uuid) {
            var gameObject = GameObject.instances[uuid];
            gameObject.components.forEach(function (component) {
                if (component instanceof componentClass) {
                    retVal.push(component);
                }
            });
        });
        return retVal;
    };
    GameObject.prototype.getComponents = function () {
        return this.components;
    };
    GameObject.prototype.getComponent = function (componentClass) {
        var component = this.components.find(function (component) { return component instanceof componentClass; });
        if (!component || !(component instanceof componentClass)) {
            throw new Error('Cant find component');
        }
        return component;
    };
    GameObject.prototype.addComponent = function (component) {
        this.components.push(component);
        component.gameObject = this;
        Events.emit(new ComponentAddedEvent(component));
    };
    GameObject.prototype.removeComponent = function (componentClass) {
        var component = this.getComponent(componentClass);
        this.components = this.components.filter(function (component) { return !(component instanceof componentClass); });
        if (component) {
            Events.emit(new ComponentRemovedEvent(component));
        }
    };
    GameObject.prototype.update = function (dt) {
        return;
    };
    Object.defineProperty(GameObject.prototype, "transform", {
        get: function () {
            return this.getComponent(Transform);
        },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.handleEvent = function (event) {
        return;
    };
    GameObject.instances = {};
    return GameObject;
}());
export default GameObject;
