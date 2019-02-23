import GameCamera from "./GameCamera";

interface IGlobals {
	gameCamera: GameCamera
}

const Globals: IGlobals = {
	gameCamera: new GameCamera()
}

export default Globals