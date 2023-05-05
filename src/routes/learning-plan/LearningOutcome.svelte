<script>
    export let subheader;
    export let text;
    export let listItem1
    export let listItem2
    export let listItem3
</script>

<div class="major-outcomes">
    <h3>{subheader}</h3>
    <p>{text}</p>
    <ul>
        <li>{listItem1}</li>
        <li>{listItem2}</li>
        <li>{listItem3}</li>
    </ul>
</div>

<style>
    ul {
        padding: 0 1.5rem;
    }
    .major-outcomes {
        max-width: 43%;
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
</style>
