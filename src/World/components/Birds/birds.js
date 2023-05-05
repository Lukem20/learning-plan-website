import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { setupModel } from './setupModel';

async function loadBirds() {
    const loader = new GLTFLoader();

    const [parrotData] = await Promise.all([
        loader.loadAsync('src/World/assets/birds/Parrot.glb'),
    ]);

    const parrot = setupModel(parrotData);
    parrot.position.set(-50, 25, -40);
    
    return { parrot };
}

export { loadBirds };