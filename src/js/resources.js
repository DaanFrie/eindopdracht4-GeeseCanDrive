import { ImageSource, Loader } from 'excalibur';

const Resources = {
    playerGoose: new ImageSource('images/playerGoose.png'),
    backgroundImage: new ImageSource('images/background.png'),
    enemy: new ImageSource('images/enemy.png'),
    boundary: new ImageSource('images/boundary.png'),
    gameoverimage: new ImageSource('images/gameoverimage.png'),
    gameovertext: new ImageSource('images/gameovertext.png'),
    playagainbutton: new ImageSource('images/playagainbutton.png'),
    finishLine: new ImageSource('images/finishline.png'),
    whiteLine: new ImageSource('images/whiteline.png'), // Zorg dat de bestandsnaam correct is
    winimage: new ImageSource('images/winimage.png'),
    wintext: new ImageSource('images/wintext.png'),

}

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res);
}

export { Resources, ResourceLoader };
