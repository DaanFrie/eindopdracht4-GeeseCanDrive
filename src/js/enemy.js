import { Actor, Vector, CollisionType, Util, Engine } from "excalibur";
import { Resources } from './resources.js';

export class Enemy extends Actor {
    constructor() {
        super({
            pos: new Vector(655, 750),
            scale: new Vector(0.24, 0.24),
        });

        this.body.collisionType = CollisionType.Active;
        this.graphics.use(Resources.enemy.toSprite());
    }

    onInitialize(engine) {
        this.actions
            .moveBy(new Vector(0, 1300), 450) // Move down
            .moveBy(new Vector(145, 0), 450)  // Move right
            .moveBy(new Vector(0, -610), 450) // Move up
            .moveBy(new Vector(590, 0), 450) // Move right
            .moveBy(new Vector(0, 340), 450)
            .moveBy(new Vector(250, 0), 450)
            .moveBy(new Vector(270, -700), 450)
            .moveBy(new Vector(0, -200), 450)
            .moveBy(new Vector(-170, 0), 450)
            .moveBy(new Vector(0, 205), 450)
            .moveBy(new Vector(-240, 0), 450)
            .moveBy(new Vector(0, -360), 450)
            .moveBy(new Vector(-590, -210), 450)
            .moveBy(new Vector(-260, 0), 450)
            .moveBy(new Vector(0, 110), 450)
            .callMethod(() => {
                // Ga naar de game-over scène
                engine.goToScene('gameover');
            }); // Roep een methode aan nadat de bewegingsacties zijn voltooid
    }

    onPreUpdate(engine, delta) {
        const velocity = this.vel;

        if (velocity.x !== 0 || velocity.y !== 0) {
            this.rotation = Math.atan2(velocity.y, velocity.x) - Math.PI / 2;
        }
    }
}

// Exporteer de Enemy klasse
export default Enemy;
