import GameEvent from '../GameEvent';
import Component from '../Component';
export default class ComponentRemovedEvent extends GameEvent {
    readonly component: Component;
    type: string;
    constructor(component: Component);
    toJSON(): string;
}
