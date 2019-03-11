import { Scene } from 'three';
import GameObject from './GameObject';
export default class GameScene {
    readonly scene: Scene;
    add(go: GameObject): void;
}
