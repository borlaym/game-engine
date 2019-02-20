import Component from '../Component';
import { Vector3, Euler } from 'three';
import GameEvent from '../GameEvent';
export default class Transform extends Component {
    position: Vector3;
    rotation: Euler;
    scale: Vector3;
    update(dt: number): void;
    protected handleEvent(event: GameEvent): void;
}
