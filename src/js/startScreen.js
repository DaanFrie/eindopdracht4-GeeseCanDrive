import { Scene, Color, Actor, vec, Label, Font, TextAlign, Sprite, Vector } from 'excalibur';
import { Resources } from './resources.js';

export class StartScreen extends Scene {
    onInitialize(engine) {
        // Grijze achtergrond
        const background = new Actor({
            pos: vec(engine.drawWidth / 2, engine.drawHeight / 2),
            width: engine.drawWidth,
            height: engine.drawHeight,
            color: Color.fromHex("CECCCD")
        });
        this.add(background);

        // Titeltekst
        const text = new Actor({
            pos: vec(engine.drawWidth / 2, 75), // Position the text in the middle of the screen vertically
            scale: new Vector(0.5, 0.5),
        });
        text.graphics.add(Sprite.from(Resources.starttext)); // Use the gameovertext resource
        this.add(text);

        const text2 = new Actor({
            pos: vec(engine.drawWidth / 2, 660), // Position the text in the middle of the screen vertically
            scale: new Vector(0.29, 0.29),
        });
        text2.graphics.add(Sprite.from(Resources.instruction1)); // Use the gameovertext resource
        this.add(text2);

        // Play Again Button
        const button = new Actor({
            pos: vec(engine.drawWidth / 2, engine.drawHeight / 2), // Positioneer de knop
            scale: new Vector(0.5, 0.5),
        });
        button.graphics.add(Sprite.from(Resources.playagainbutton)); // Gebruik de playagainbutton resource
        this.add(button);

        // Event listener voor de Play Again knop
        button.on('pointerup', () => {
            // Start het spel
            engine.goToScene('main');
        });
    }
}
