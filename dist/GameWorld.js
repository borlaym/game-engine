var GameWorld = /** @class */ (function () {
    function GameWorld() {
        this.gameObjects = [];
    }
    GameWorld.prototype.addObject = function (gameObject) {
        this.gameObjects.push(gameObject);
    };
    GameWorld.prototype.update = function (dt) {
        this.gameObjects.forEach(function (o) { return o.update(dt); });
    };
    return GameWorld;
}());
export default GameWorld;
