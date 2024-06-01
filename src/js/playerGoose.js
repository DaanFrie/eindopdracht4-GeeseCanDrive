import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export function createPlayerGoose() {
    const playerGoose = new Actor();
    playerGoose.graphics.use(Resources.playerGoose.toSprite());
    playerGoose.pos = new Vector(400, 300);
    playerGoose.vel = new Vector(-10, 0);
    playerGoose.scale = new Vector(0.2, 0.2);
    return playerGoose;
}
