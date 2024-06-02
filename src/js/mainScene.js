import { Scene, Label, TextAlign, Color, Timer, Vector } from 'excalibur';
import { PlayerGoose } from './playerGoose.js';
import { Background } from './background.js';
import { Enemy } from './enemy.js';
import { Boundary } from './boundary.js';
import { FinishLineBoundary } from './finishLineBoundary.js';
import { WhiteLine } from './whiteLine.js';
import { FinishLine } from './finishLine.js';

export function createMainScene(engine) {
    const mainScene = new Scene(engine);

    const background = new Background(engine.drawWidth, engine.drawHeight);
    mainScene.add(background);

    const finishLine = new FinishLine();
    mainScene.add(finishLine);

    const whiteLine = new WhiteLine();
    mainScene.add(whiteLine);

    const enemy = new Enemy();
    mainScene.add(enemy);

    const playerGoose = new PlayerGoose();
    mainScene.add(playerGoose);

    mainScene.camera.strategy.lockToActor(playerGoose);

    const finishLineBoundaries = [
        new FinishLineBoundary(490, 645, 210, 10, true),
    ];

    finishLineBoundaries.forEach(finishLineBoundary => mainScene.add(finishLineBoundary));

    const boundaries = [
        new Boundary(490, 660, 210, 10, true),
        new Boundary(706, 564, 200, 5, true),
        new Boundary(906, 614, 100, 5, true),
        new Boundary(1006, 679, 300, 5, true),
        new Boundary(1306, 1254, 430, 5, true),
        new Boundary(1736, 1179, 60, 5, true),
        new Boundary(1796, 925, 50, 5, true),
        new Boundary(1796, 1125, 50, 5, true),
        new Boundary(703, 1968, 55, 5, true),
        new Boundary(758, 1255, 805, 5, true),
        new Boundary(1563, 1725, 55, 5, true),
        new Boundary(1618, 1445, 115, 5, true),

        new Boundary(703, 578, 5, 1390, false),
        new Boundary(906, 564, 5, 50, false),
        new Boundary(1006, 614, 5, 65, false),
        new Boundary(1306, 679, 5, 575, false),
        new Boundary(1736, 1179, 5, 75, false),
        new Boundary(1796, 925, 5, 254, false),
        new Boundary(1846, 925, 5, 200, false),
        new Boundary(1736, 1250, 5, 200, false),
        new Boundary(758, 1255, 5, 713, false),
        new Boundary(1563, 1255, 5, 470, false),
        new Boundary(1618, 1445, 5, 280, false),

        new Boundary(490, 2198, 490, 5, true),
        new Boundary(980, 1488, 365, 5, true),
        new Boundary(1345, 1963, 490, 5, true),
        new Boundary(1835, 1625, 110, 5, true),
        new Boundary(490, 355, 600, 5, true),
        new Boundary(1090, 465, 440, 5, true),
        new Boundary(1530, 1035, 50, 5, true),
        new Boundary(1580, 685, 490, 5, true),
        new Boundary(1960, 1250, 110, 5, true),
        new Boundary(1940, 1625, 15, 5, true),

        new Boundary(490, 355, 5, 1845, false),
        new Boundary(980, 1488, 5, 710, false),
        new Boundary(1345, 1488, 5, 475, false),
        new Boundary(1835, 1625, 5, 338, false),
        new Boundary(1090, 355, 5, 110, false),
        new Boundary(1530, 465, 5, 570, false),
        new Boundary(1580, 685, 5, 350, false),
        new Boundary(2070, 685, 5, 565, false),
        new Boundary(1960, 1250, 5, 380, false),
    ];

    boundaries.forEach(boundary => mainScene.add(boundary));

    let currentTime = 0;

    const timerLabel = new Label({
        pos: new Vector(800, 800),
        text: 'Time: 0',
        fontFamily: 'Arial',
        scale: new Vector(3, 3),
        color: Color.White,
        textAlign: TextAlign.Center
    });

    mainScene.add(timerLabel);

    const timer = new Timer({
        fcn: () => {
            currentTime++;
            timerLabel.text = `Time: ${currentTime}s`;
        },
        interval: 1000,
        repeats: true
    });

    mainScene.add(timer);

    timer.start();

    mainScene.on('exit', () => {
        timer.stop();
    });


    return mainScene;
}
