import Component from '../Component';
import { Object3D } from 'three';
import GameEvent from '../GameEvent';
export default class Collision extends Component {
    readonly collider: Object3D;
    constructor(collider: Object3D);
    update(dt: number): void;
    protected handleEvent(event: GameEvent): void;
}
