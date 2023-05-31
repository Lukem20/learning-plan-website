<script>
    export let observation;
    let uri = observation.uri
</script>

<div>
    <h4>{observation.taxon.name}</h4>
    <h5>{observation.taxon.preferred_common_name}</h5>
    <p>Observed on {observation.observed_on}</p>
</div>

<style>
    div {
        border: 1px solid black;
        border-radius: 1em;
        
    }
</style>

