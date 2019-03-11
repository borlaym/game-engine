import GameCamera from "./GameCamera";
import GameScene from './GameScene';
interface IGlobals {
    gameCamera: GameCamera;
    gameScene: GameScene;
}
declare const Globals: IGlobals;
export default Globals;
