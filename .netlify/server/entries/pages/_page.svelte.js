import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import gsap from "gsap/dist/gsap.js";
import { N as Nav } from "../../chunks/Nav.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1tkj35g{display:flex;flex-direction:column;padding:0 2.5rem}h1.svelte-1tkj35g{font-size:2.5rem;opacity:0;margin-top:0;text-align:center}h2.svelte-1tkj35g{font-size:1.5em;font-weight:200;margin:0;padding-top:1rem\n    }section.svelte-1tkj35g{padding:6rem 2.5rem}@media screen and (min-width: 50em){h1.svelte-1tkj35g{font-size:4.5em;margin:0 0 10rem 0;text-align:left}h2.svelte-1tkj35g{font-size:2em}h3.svelte-1tkj35g{font-size:1.5em;margin:0}section.svelte-1tkj35g{padding:0 2.5rem;width:50%;float:right;display:flex;flex-direction:column}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  gsap.timeline({ defaults: { duration: 1 } });
  $$result.css.add(css);
  return `
${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
<main class="svelte-1tkj35g"><h2 id="intro" class="svelte-1tkj35g">Hello, my name is</h2>
  <h1 class="svelte-1tkj35g">Luke Moore</h1></main>
<section class="svelte-1tkj35g"><h3 class="svelte-1tkj35g">Welcome to my learning plan website!</h3>
  <p id="outro">Explore some of my past class work, academic background, and a brief overview of my work history. 
    This website was made with SvelteKit, Three.js, and Green Sock animation platform. My goal with this 
    website was to learn more about the fundamentals of Svelte and get started with an animation library.
  </p>
</section>`;
});
export {
  Page as default
};
