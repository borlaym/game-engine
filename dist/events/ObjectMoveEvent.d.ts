import GameEvent from '../GameEvent';
import GameObject from '../GameObject';
export interface SerializedObjectMoveEvent {
    type: 'ObjectMoveEvent';
    component: string;
}
export default class ObjectMoveEvent extends GameEvent {
    readonly gameObject: GameObject;
    type: string;
    constructor(gameObject: GameObject);
    toJSON(): string;
    static parse(data: SerializedObjectMoveEvent): ObjectMoveEvent;
}
