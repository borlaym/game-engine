import Component from './Component';
import Transform from './components/Transform';
import GameEvent from './GameEvent';
export default class GameObject {
    static getById<T extends GameObject>(uuid: string): GameObject | null;
    static getObjectsOfType<T extends GameObject>(objectClass: new (...args: any[]) => T): T[];
    static getObjectsWithComponent<T extends Component>(componentClass: new (...args: any[]) => T): GameObject[];
    static getComponentsOfType<T extends Component>(componentClass: new (...args: any[]) => T): T[];
    private static instances;
    readonly uuid: string;
    private components;
    constructor();
    getComponents(): Component[];
    getComponent<T extends Component>(componentClass: new (...args: any[]) => T): T;
    addComponent(component: Component): void;
    removeComponent<T extends Component>(componentClass: new (...args: any[]) => T): void;
    update(dt: number): void;
    readonly transform: Transform;
    protected handleEvent(event: GameEvent): void;
}
