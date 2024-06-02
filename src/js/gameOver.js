import { Scene, Color, Actor, vec, Sprite, Vector } from "excalibur";
import { Resources } from './resources.js';

export class GameOver extends Scene {
    onInitialize(engine) {
        // Gray background
        const background = new Actor({
            pos: vec(engine.drawWidth / 2, engine.drawHeight / 2),
            width: engine.drawWidth,
            height: engine.drawHeight,
            color: Color.fromHex("CECCCD") // Set the background color to gray
        });
        this.add(background);

        // Game Over Image
        const image = new Actor({
            pos: vec(engine.drawWidth / 2, 550),
            scale: new Vector(0.5, 0.5),
        });
        image.graphics.add(Sprite.from(Resources.gameoverimage)); // Use the gameoverimage resource
        this.add(image);

        // Game Over Text
        const text = new Actor({
            pos: vec(engine.drawWidth / 2, 75), // Position the text in the middle of the screen vertically
            scale: new Vector(0.5, 0.5),
        });
        text.graphics.add(Sprite.from(Resources.gameovertext)); // Use the gameovertext resource
        this.add(text);

        // Play Again Button
        const button = new Actor({
            pos: vec(engine.drawWidth / 2, 265), // Position the button at the bottom of the screen
            scale: new Vector(0.5, 0.5),
        });
        button.graphics.add(Sprite.from(Resources.playagainbutton)); // Use the playagainbutton resource
        this.add(button);

        // Event listener for the Play Again button
        button.on('pointerup', () => {
            // Restart the game
            engine.resetMainScene(); // Herinitialiseer de main scene
            engine.goToScene('main'); // Ga naar de nieuwe main scene
        });
    }
}
