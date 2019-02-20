import Component from '../Component';
import GameEvent from '../GameEvent';
import GameObject from '../GameObject';
/**
 * Note: game object needs a collider component for it to be selectable
 * How do I enforce that?
 */
export default class Selectable extends Component {
    static current: GameObject | null;
    static checkClear(): void;
    update(): void;
    protected handleEvent(event: GameEvent): void;
}
