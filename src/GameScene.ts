import { Scene } from 'three';
import Component from './Component';
import Rendering from './components/Rendering';
import Collision from './components/Collision';
import Outline from './components/Outline';
import ComponentRemovedEvent from './events/ComponentRemovedEvent';
import { PointLight, AmbientLight } from 'three';
import GameObject from './GameObject';


export default class GameScene {
	public readonly scene = new Scene()
	public add(go: GameObject) {
		const components = go.getComponents();
		components.forEach(component => {
			switch (component.constructor) {
				case Rendering:
					this.scene.add((component as Rendering).mesh)
					break;
				case Collision:
					this.scene.add((component as Collision).collider)
					break;
				case Outline:
					this.scene.add((component as Outline).outlineMesh)
					break;
			}
		})
	}
}