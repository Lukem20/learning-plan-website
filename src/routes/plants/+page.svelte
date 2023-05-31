<script>
    import Nav from '../../components/Nav.svelte';
    import Observation from "../../components/Observation.svelte";

    const plantData = getPlantObservations();

    async function getPlantObservations() {
        const res = await fetch('https://api.inaturalist.org/v1/observations?identified=true&user_id=lukemoore&iconic_taxa=Plantae&per_page=800&order=desc&order_by=created_at')
         .catch(() => {
            throw new Error(`HTTP Error! status: ${res.status}`);
         });
        const plants = await res.json();
        return plants;
    }
</script>

<Nav />
<main>
    <h2>Plant observations</h2>
    <p>These observations are all research grade identifications I posted to iNaturalist, a global community of naturalists, scientists, and members of the public sharing wildlife sightings to teach one another about the natural world while creating high quality citizen science data for science and conservation.</p>
    <div class="flex-wrapper">
        {#await plantData}
            Loading...
        {:then data} 
            {#each data.results as observation}
                <Observation {observation} />
            {/each}
        {/await}
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        padding: 0 2.5rem;
    }

    .flex-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 5rem;
        justify-content: center;
        padding: 1rem 0;
    }
</style>