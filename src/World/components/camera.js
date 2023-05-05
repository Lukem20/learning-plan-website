import { PerspectiveCamera } from 'three';

function createCamera() {
    const camera = new PerspectiveCamera(
        45, 1, 0.1, 500
    );
    camera.position.set(30, 75, 140);

    return camera;
}

export { createCamera }