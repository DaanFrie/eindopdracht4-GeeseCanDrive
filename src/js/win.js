import { Scene, Color, Actor, vec, Sprite, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Win extends Scene {
    onInitialize(engine) {
        // Gray background
        const background = new Actor({
            pos: vec(engine.drawWidth / 2, engine.drawHeight / 2),
            width: engine.drawWidth,
            height: engine.drawHeight,
            color: Color.fromRGB(200, 198, 199) // Set the background color to gray
        });
        this.add(background);

        // Win Image
        const image = new Actor({
            pos: vec(engine.drawWidth / 2, 500),
            scale: new Vector(0.40, 0.40),
        });
        image.graphics.add(Sprite.from(Resources.winimage)); // Use the winimage resource
        this.add(image);

        const text = new Actor({
            pos: vec(engine.drawWidth / 2, 75), // Position the text in the middle of the screen vertically
            scale: new Vector(0.5, 0.5),
        });
        text.graphics.add(Sprite.from(Resources.wintext)); // Use the gameovertext resource
        this.add(text);

        const button = new Actor({
            pos: vec(engine.drawWidth / 2, 215), // Position the button at the bottom of the screen
            scale: new Vector(0.5, 0.5),
        });
        button.graphics.add(Sprite.from(Resources.playagainbutton)); // Use the playagainbutton resource
        this.add(button);

        // Event listener for the Play Again button
        button.on('pointerup', () => {
            // Restart the game
            engine.resetMainScene(); // Reset the main scene
            engine.goToScene('main'); // Go back to the main scene
        });
    }
}
