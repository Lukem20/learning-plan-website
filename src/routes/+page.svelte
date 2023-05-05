<script>
  import { onMount } from "svelte";
  import gsap from "gsap/dist/gsap";
  import Nav from '../components/Nav.svelte';

  const t1 = gsap.timeline({ defaults: { duration: 1 } });

  onMount(() => {
    t1.fromTo('h1', { opacity: 0 }, { opacity: 1 });
    gsap.from('h1', {x: 200, duration: 1})
    t1.from('h3', { opacity: 0, duration: 1})
  });

</script>

<!-- Add conditional statement here that only loads the timeline prop if it's the first pageload.-->
<Nav />
<main>
  <h2 id="intro">Hello, my name is</h2>
  <h1>Luke Moore</h1>
</main>
<section>
  <h3>Welcome to my learning plan website!</h3>
  <p id="outro">
    Explore some of my academic background and the classes I have taken. This is very much a rough draft. I wanted to get a quick proof-of-concept project setup so I can take the time to design a 3D experience I am pleased with. 
  </p>
</section>

<style>
  main {
    display: flex;
    flex-direction: column;
    padding: 0 2.5rem;
  }
  h1 {
    font-size: 4.5em;
    margin: 0 0 10rem 0;
    opacity: 0;
  }
  h2 {
    font-size: 2em;
    font-weight: 200;
    margin: 0;
  }
  h3 {
    font-size: 1.5em;
    margin: 0;
  }
  section {
    padding: 0 2.5rem;
    width: 50%;
    float: right;
    display: flex;
    flex-direction: column;
  }
</style>
