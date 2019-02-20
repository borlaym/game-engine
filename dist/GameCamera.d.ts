import { Camera, Vector3 } from 'three';
declare class GameCamera {
    readonly camera: Camera;
    constructor();
    /**
     * Intersect the plane at 0 height to get the point the camera is currently pointing at
     */
    readonly lookingAt: Vector3;
    rotateLeft(): void;
    rotateRight(): void;
    update(dt: number): void;
    readonly position: Vector3;
    private rotate;
}
declare const _default: GameCamera;
export default _default;
