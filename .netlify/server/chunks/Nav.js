import { c as create_ssr_component, v as validate_component } from "./index.js";
const Logo_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-16n6jcq{height:100px;width:100px;position:relative;padding-left:1rem}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div><a href="/"><img src="portfolioLogo.svg" alt="Cursive LM monogram logo" class="svelte-16n6jcq"></a>
</div>`;
});
const Nav_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-10rnp7p{display:flex;justify-content:space-between;overflow:hidden}div.svelte-10rnp7p{display:flex;flex-direction:row-reverse;gap:2.5rem;padding:2.5rem 2.8rem}a.svelte-10rnp7p{position:relative;text-decoration:none;text-transform:uppercase;font-weight:bold;box-shadow:inset 0 0 0 0 #3d92b1ab;margin:0 -.25rem;padding:0 .25rem;transition:color .3s ease-in-out, box-shadow .3s ease-in-out}a.svelte-10rnp7p:link{color:#f0f9ff}a.svelte-10rnp7p:visited{color:#f0f9ff}a.svelte-10rnp7p::before{content:'';position:absolute;width:100%;height:3px;background-color:#f0f9ff;bottom:0;left:0;transform-origin:right;transform:scaleX(0);transition:transform .3s ease-in-out}a.svelte-10rnp7p:hover::before{transform-origin:left;transform:scaleX(1)}a.svelte-10rnp7p:hover{box-shadow:inset 100px 0 0 0 #24637aab}a.svelte-10rnp7p:active{color:#e1eb53}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav id="navbar" class="svelte-10rnp7p">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
    <div class="svelte-10rnp7p"><a href="/resume" class="svelte-10rnp7p">Resume</a>
        <a href="/about" class="svelte-10rnp7p">About</a>
        <a href="/learning-plan" class="svelte-10rnp7p">Classes</a>
        <a href="/portfolio" class="svelte-10rnp7p">Work</a></div>
</nav>`;
});
export {
  Nav as N
};
