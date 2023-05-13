import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { N as Nav } from "../../../chunks/Nav.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-xttpeh{display:flex;flex-direction:column;padding:0 2.5rem;align-items:center}@media screen and (min-width: 50em){}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
<main class="svelte-xttpeh"><h2>I design &amp; develop creative website experiences</h2>
    <h3>Designer</h3>
    <p>I appreciate good design for both digital and non-digital experiences.</p>
    <h3>Developer</h3>
    <p>I like to make websites</p>
    <h3>Nature Nerd</h3>
    <p>I love outdoor rock climbing, hiking, and plant ecology.</p>
</main>`;
});
export {
  Page as default
};
