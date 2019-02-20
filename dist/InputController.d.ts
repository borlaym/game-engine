import GameObject from './GameObject';
import { Vector2 } from 'three';
declare class InputController {
    keysDown: string[];
    mousePos: {
        x: number;
        y: number;
    };
    click: boolean;
    mouseDown: boolean;
    mouseColliders: GameObject[];
    private _mousePosLastTick;
    constructor();
    update(): void;
    reset(): void;
    readonly mousePointingAt: GameObject;
    readonly mouseMovement: Vector2;
}
declare const _default: InputController;
export default _default;
