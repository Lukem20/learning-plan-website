<script>
    export let subheader;
    export let text;
    export let listItems
</script>

<div class="major-outcomes">
    <h3>{subheader}</h3>
    <p>{text}</p>
    <ul>
        {#each listItems as listItem}
        <li>{listItem}</li>
        {/each}
    </ul>
</div>

<style>
    ul {
        padding-left: 20px;
    }
    h3 {
        margin-top: 3rem;
    }
    /* Tablet screen size and larger */
    @media screen and (min-width: 50em) {
        ul {
            padding-left: 30px;
        }
        .major-outcomes {
            max-width: 42.5%;
            padding: 1.25rem
        }
        .major-outcomes h3 {
            color:whitesmoke;
        }
        .major-outcomes p {
            color: rgb(245, 255, 245);
        }
        .major-outcomes ul {
            color: rgb(245, 255, 245);
        }
    }
</style>
