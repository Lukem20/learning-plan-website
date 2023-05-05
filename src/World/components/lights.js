import { DirectionalLight, HemisphereLight } from 'three';

function createLights() {
    const mainLight = new DirectionalLight(0xffffff, 4);
    const ambientLight = new HemisphereLight(0xffffff, 'darkslategrey', 2.5)
    mainLight.position.set(10, 10, 10);

    return { mainLight, ambientLight };
}

export { createLights };