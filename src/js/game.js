import '../css/style.css';
import { Engine, DisplayMode } from "excalibur";
import { ResourceLoader } from './resources.js';
import { createPlayerGoose } from './playerGoose.js';

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        console.log("start de game!");
        const playerGoose = createPlayerGoose();
        this.add(playerGoose);
    }
}

new Game();
