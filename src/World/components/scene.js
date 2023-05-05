import { Scene, Color } from 'three';

function createScene() {
    const scene = new Scene();
    scene.background = new Color('#1a1a1a');

return scene;
}

export { createScene }