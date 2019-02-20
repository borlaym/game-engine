var Events = /** @class */ (function () {
    function Events() {
    }
    Events.addListener = function (onEvent) {
        this.callbacks.push(onEvent);
    };
    Events.emit = function (event) {
        this.callbacks.forEach(function (callback) { return callback(event); });
    };
    Events.callbacks = [];
    return Events;
}());
export default Events;
