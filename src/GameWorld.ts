import GameObject from './GameObject';

export default abstract class GameWorld {
	private readonly gameObjects: GameObject[] = []
	public addObject(gameObject: GameObject) {
		this.gameObjects.push(gameObject)
	}

	public abstract setup(): void

	public update(dt: number) {
		this.gameObjects.forEach(o => o.update(dt))
	}
}