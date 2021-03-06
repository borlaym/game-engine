import { Camera, PerspectiveCamera, Vector3, Ray, Plane } from 'three';
import rotateObjectAroundPoint from './utils/rotateObjectAroundPoint';
import InputController from './InputController';

const CAMERA_ROTATION_SPEED = 0.07;

export default class GameCamera {
	constructor(
		public readonly camera: Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
	) {
		this.camera.rotation.order = 'YXZ'
	}

	/**
	 * Intersect the plane at 0 height to get the point the camera is currently pointing at
	 */
	public get lookingAt(): Vector3 {
		const cameraDirection = new Vector3()
		this.camera.getWorldDirection(cameraDirection)
		const cameraLookingAt = new Vector3()
		new Ray(this.camera.position, cameraDirection).intersectPlane(new Plane(new Vector3(0, 1, 0)), cameraLookingAt)
		return cameraLookingAt
	}

	public rotateLeft() {
		this.rotate(-CAMERA_ROTATION_SPEED)
	}

	public rotateRight() {
		this.rotate(CAMERA_ROTATION_SPEED)
	}

	public update(dt: number) {
		if (InputController.mouseDown) {
			if (InputController.mouseMovement.x > 0) {
				this.rotateRight()
			} else if (InputController.mouseMovement.x < 0) {
				this.rotateLeft()
			}
		}
	}

	get position() {
		return this.camera.position
	}

	private rotate(rotation: number) {
		rotateObjectAroundPoint(this.camera, this.lookingAt, new Vector3(0, 1, 0), rotation)
	}
}