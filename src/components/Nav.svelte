<script>
    import Logo from './Logo.svelte';

</script>
  
<nav id="navbar">
    <Logo />
    <div>
        <a href="/resume">Resume</a>
        <a href="/about">About</a>
        <a href="/learning-plan">Classes</a>
        <a href="/portfolio">Work</a>
    </div>
</nav>
  
<style>
    nav {
        display: grid;
        grid-template-columns: fit-content(20ch) minmax(min(50vw, 30ch), 1fr);
    }

    div {
        display: flex;
        flex-direction: row-reverse;
        gap: 2.5rem;
        padding: 2.5rem 2.8rem;
    }

    a {
        position:relative;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        box-shadow: inset 0 0 0 0 #3d92b1ab;
        margin: 0 -.25rem;
        padding: 0 .25rem;
        transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    }
    a:link {
        color: #f0f9ff;
    }
    a:visited {
        color: #f0f9ff;
    }
    a::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: #f0f9ff;
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }
    a:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }   
    a:hover {
        box-shadow: inset 100px 0 0 0 #24637aab;
    }
    a:active {
        color: #e1eb53;
    }


</style>