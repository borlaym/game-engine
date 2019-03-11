import GameCamera from "./GameCamera";
import GameScene from './GameScene';

interface IGlobals {
	gameCamera: GameCamera,
	gameScene: GameScene
}

const Globals: IGlobals = {
	gameCamera: new GameCamera(),
	gameScene: new GameScene()
}

export default Globals