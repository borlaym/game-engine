import Component from '../Component';
import { Object3D } from 'three';
import GameEvent from '../GameEvent';
export default class Rendering extends Component {
    readonly mesh: Object3D;
    constructor(mesh: Object3D);
    update(dt: number): void;
    protected handleEvent(event: GameEvent): void;
}
