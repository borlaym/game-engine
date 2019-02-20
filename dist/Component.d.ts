import GameObject from './GameObject';
import GameEvent from './GameEvent';
export default abstract class Component {
    _gameObject: GameObject | undefined;
    constructor();
    abstract update(dt: number): void;
    protected abstract handleEvent(event: GameEvent): void;
    gameObject: GameObject;
}
