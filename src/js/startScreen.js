import { Scene, Color, Actor, vec, Label, Font, TextAlign, Sprite, Vector } from 'excalibur';
import { Resources } from './resources.js';

export class StartScreen extends Scene {
    onInitialize(engine) {
        // Grijze achtergrond
        const background = new Actor({
            pos: vec(engine.drawWidth / 2, engine.drawHeight / 2),
            width: engine.drawWidth,
            height: engine.drawHeight,
            color: Color.Gray // Grijze achtergrondkleur
        });
        this.add(background);

        // Titeltekst
        const title = new Label({
            pos: vec(engine.drawWidth / 2, 200),
            text: 'Welkom bij mijn spel',
            font: new Font({
                family: 'Arial',
                size: 48,
                color: Color.White,
                textAlign: TextAlign.Center
            })
        });
        this.add(title);

        // Play Again Button
        const button = new Actor({
            pos: vec(engine.drawWidth / 2, 400), // Positioneer de knop
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
