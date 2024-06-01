import { ImageSource, Loader } from 'excalibur';

// voeg hier jouw eigen resources toe
const Resources = {
    playerGoose: new ImageSource('images/playerGoose.png')
}

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res);
}

export { Resources, ResourceLoader };
