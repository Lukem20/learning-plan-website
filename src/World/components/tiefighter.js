import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

function tiefighter(scene) {
    const mtlLoader = new MTLLoader();
    let tiefighterMesh;
    //  Load material file 
        mtlLoader.load('/assets/tie-fighter/star-wars-vader-tie-fighter.mtl',
            (materials) => {
                materials.preload();
                // Load geometry
                const objLoader = new OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.load('/assets/tie-fighter/star-wars-vader-tie-fighter.obj',
                (object) => {
                    tiefighterMesh = object;
                    tiefighterMesh.position.set(-48, 20, 0)
                    tiefighterMesh.scale.set(4, 4, 4);
                    scene.add(tiefighterMesh);
                });
            })

    return { tiefighterMesh };
}

export { tiefighter };