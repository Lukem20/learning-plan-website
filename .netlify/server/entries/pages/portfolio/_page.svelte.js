import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { N as Nav } from "../../../chunks/Nav.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-191pltz{display:flex;flex-direction:column;padding:0 2.5rem;align-items:center}@media screen and (max-width: 50em){}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
<main class="svelte-191pltz"><h1>Portfolio-nooo.</h1>
</main>`;
});
export {
  Page as default
};
