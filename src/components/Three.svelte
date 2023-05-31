<script>
    import { World } from '../World/threeWorld.js';
    import { onMount } from 'svelte';

    let sceneContainer;
    onMount(() => {
        async function createThreeScene() {
            const canvas = document.createElement('canvas');
            sceneContainer.appendChild(canvas);

            const world = new World(canvas);

            // Complete async loading
            await world.init();
            
            // Start animation loop (produce a stream of frames)
            world.start();
        }

        createThreeScene();
    });
</script>

<div bind:this={sceneContainer}/>

<style>
    div {
        position: absolute;
        width:100%;
        height: 100vh;
        z-index:1;
    }
</style>