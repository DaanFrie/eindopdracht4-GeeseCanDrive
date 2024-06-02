import '../css/style.css';
import { Engine, DisplayMode } from 'excalibur';
import { ResourceLoader } from './resources.js';
import { StartScreen } from './startScreen.js';
import { createMainScene } from './mainScene.js';
import { GameOver } from './gameOver.js';
import { Win } from './win.js';

export class Game extends Engine {
    constructor() {
        super({
            width: 925,
            height: 725,
            maxFps: 120,
            displayMode: DisplayMode.FitScreen
        });

        this.start(ResourceLoader).then(() => {
            console.log("Start the game!");
            this.add('start', new StartScreen()); // Voeg startscherm toe
            this.add('main', createMainScene(this)); // Voeg hoofdscene toe
            this.add('gameover', new GameOver()); // Voeg game over scene toe
            this.add('win', new Win()); // Voeg game over scene toe
            this.goToScene('start'); // Start met startscherm
        }).catch(err => {
            console.error('Failed to start game', err);
        });
    }

    resetMainScene() {
        this.removeScene('main'); // Verwijder de oude hoofdscene
        this.add('main', createMainScene(this)); // Voeg een nieuwe hoofdscene toe
    }
}

new Game();
