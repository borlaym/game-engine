import GameObject from './GameObject';
export default abstract class GameWorld {
    private readonly gameObjects;
    addObject(gameObject: GameObject): void;
    abstract setup(): void;
    update(dt: number): void;
}
