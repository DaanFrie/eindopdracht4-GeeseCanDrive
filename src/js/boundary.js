import { Actor, CollisionType, Vector, Color } from 'excalibur';

export class Boundary extends Actor {
    constructor(x, y, width, height, isHorizontal) {
        super({
            pos: new Vector(x, y),
            width: width,
            height: height,
            color: Color.Red
        });

        // Stel het ankerpunt in op basis van het type grens
        if (isHorizontal) {
            this.anchor.setTo(0, 0); // Horizontale grens, ankerpunt linksboven
        } else {
            this.anchor.setTo(1, 0); // Verticale grens, ankerpunt rechtsboven
        }

        this.body.collisionType = CollisionType.Fixed;
    }
}
