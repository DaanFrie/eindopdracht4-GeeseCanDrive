import { FinishLineBoundary } from './finishLineBoundary.js'; // Importeer FinishLineBoundary
import { Actor, Vector, Keys, CollisionType } from 'excalibur';
import { Resources } from './resources.js';
import { Boundary } from './boundary.js';
import { Enemy } from './enemy.js';

export class PlayerGoose extends Actor {
    constructor() {
        super({
            pos: new Vector(540, 750),
            scale: new Vector(0.24, 0.24),
            rotation: Math.PI / 2
        });

        this.maxSpeed = 650;
        this.acceleration = 9;
        this.deceleration = 5;

        this.body.collisionType = CollisionType.Active;
        this.graphics.use(Resources.playerGoose.toSprite());
    }

    onPreUpdate(engine) {
        const mainScene = this.scene; // Verkrijg een referentie naar de huidige scène

        let xspeed = this.vel.x;
        let yspeed = this.vel.y;

        // Verticale beweging
        if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
            yspeed -= this.acceleration;
        } else if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
            yspeed += this.acceleration;
        } else {
            if (yspeed < 0) {
                yspeed += this.deceleration;
                yspeed = Math.min(yspeed, 0);
            } else if (yspeed > 0) {
                yspeed -= this.deceleration;
                yspeed = Math.max(yspeed, 0);
            }
        }

        // Horizontale beweging
        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed -= this.acceleration;
        } else if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed += this.acceleration;
        } else {
            if (xspeed < 0) {
                xspeed += this.deceleration;
                xspeed = Math.min(xspeed, 0);
            } else if (xspeed > 0) {
                xspeed -= this.deceleration;
                xspeed = Math.max(xspeed, 0);
            }
        }

        // Controleer botsing met de finishlijn
        const finishLineBoundary = mainScene.actors.find(actor => actor instanceof FinishLineBoundary);

        if (
            finishLineBoundary &&
            this.pos.x < finishLineBoundary.pos.x + finishLineBoundary.width &&
            this.pos.x + this.width > finishLineBoundary.pos.x &&
            this.pos.y < finishLineBoundary.pos.y + finishLineBoundary.height &&
            this.pos.y + this.height > finishLineBoundary.pos.y
        ) {
            // Ga naar de game-over scène
            engine.goToScene('win');
        }
        // Controleer botsing met grenzen
        const bounds = engine.currentScene.actors.filter(actor => actor instanceof Boundary);

        bounds.forEach(boundary => {
            // Controleer op overlap
            if (
                this.pos.x < boundary.pos.x + boundary.width &&
                this.pos.x + this.width > boundary.pos.x &&
                this.pos.y < boundary.pos.y + boundary.height &&
                this.pos.y + this.height > boundary.pos.y
            ) {
                // Ga naar de game-over scène
                engine.goToScene('gameover');
            }
        });

        // Controleer botsing met vijanden
        const enemies = engine.currentScene.actors.filter(actor => actor instanceof Enemy);

        enemies.forEach(enemy => {
            // Controleer op overlap met de hitbox van de vijand
            if (
                this.pos.x < enemy.pos.x + enemy.width &&
                this.pos.x + this.width > enemy.pos.x &&
                this.pos.y < enemy.pos.y + enemy.height &&
                this.pos.y + this.height > enemy.pos.y
            ) {
                // Stop de speler
                this.vel = new Vector(0, 0);
                xspeed = 0;
                yspeed = 0;
                console.log('je staat stil');
            }
        });

        // Controleer of de snelheid de maximale snelheid overschrijdt
        const speed = Math.sqrt(xspeed * xspeed + yspeed * yspeed);
        if (speed > this.maxSpeed) {
            const ratio = this.maxSpeed / speed;
            xspeed *= ratio;
            yspeed *= ratio;
        }

        this.vel = new Vector(xspeed, yspeed);

        if (xspeed !== 0 || yspeed !== 0) {
            this.rotation = Math.atan2(yspeed, xspeed);
        }
    }
}
