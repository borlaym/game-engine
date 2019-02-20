import Component from '../Component';
import { Mesh } from 'three';
import GameObject from '../GameObject';
import GameEvent from '../GameEvent';
export default class Outline extends Component {
    outlineMesh: Mesh;
    constructor(go: GameObject);
    update(dt: number): void;
    protected handleEvent(event: GameEvent): void;
}
