import Events from './Events';
var Component = /** @class */ (function () {
    function Component() {
        Events.addListener(this.handleEvent.bind(this));
    }
    Object.defineProperty(Component.prototype, "gameObject", {
        get: function () {
            if (!this._gameObject) {
                throw new Error('Tried to access gameobject from component, but it was uninitialized');
            }
            return this._gameObject;
        },
        set: function (go) {
            this._gameObject = go;
        },
        enumerable: true,
        configurable: true
    });
    return Component;
}());
export default Component;
