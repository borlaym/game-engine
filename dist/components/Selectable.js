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
import InputController from '../InputController';
/**
 * Note: game object needs a collider component for it to be selectable
 * How do I enforce that?
 */
var Selectable = /** @class */ (function (_super) {
    __extends(Selectable, _super);
    function Selectable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Selectable.checkClear = function () {
        // Clicking on empty space clears selection
        if (!InputController.mousePointingAt && InputController.click) {
            Selectable.current = null;
        }
    };
    Selectable.prototype.update = function () {
        if (InputController.mousePointingAt === this.gameObject && InputController.click) {
            Selectable.current = this.gameObject;
        }
    };
    Selectable.prototype.handleEvent = function (event) {
        return;
    };
    Selectable.current = null;
    return Selectable;
}(Component));
export default Selectable;
