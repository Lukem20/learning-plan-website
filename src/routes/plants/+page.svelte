<script>
    const plantData = getPlantObservations();
    async function getPlantObservations() {
        const res = await fetch('https://api.inaturalist.org/v1/observations?native=true&taxon_name=Lupinus&user_id=lukemoore&quality_grade=research&order=desc&order_by=created_at');
        const plants = await res.json();
        return plants;
    }

</script>

<main>
    <h2>My plant observations</h2>
    <p>These observations are all research grade identifications I posted to iNaturalist, a global community of naturalists, scientists, and members of the public sharing wildlife sightings to teach one another about the natural world while creating high quality citizen science data for science and conservation.</p>
    <h3>Recent Sightings</h3>
    <h3>Highlights</h3>
    {#await plantData}
        Loading...
    {:then data} 
        {#each data.results as observation}
            <h3>{observation.taxon.name}</h3>
        {/each}
    {/await}
</main>

<style>

</style>