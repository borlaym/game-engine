import { Camera, Vector3 } from 'three';
export default class GameCamera {
    readonly camera: Camera;
    constructor(camera?: Camera);
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
