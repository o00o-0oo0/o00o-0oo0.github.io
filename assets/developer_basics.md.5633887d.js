import{_ as e,c as a,o as s,a as t}from"./app.0bd0e305.js";const f='{"title":"App Config: Basics","description":"","frontmatter":{},"headers":[{"level":2,"title":"base","slug":"base"},{"level":2,"title":"lang","slug":"lang"},{"level":2,"title":"title","slug":"title"},{"level":2,"title":"description","slug":"description"}],"relativePath":"developer/basics.md"}',n={},o=t(`<h1 id="app-config-basics" tabindex="-1">App Config: Basics <a class="header-anchor" href="#app-config-basics" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The config reference is incomplete since the config format may still receive further changes. For a complete reference of the current available options, refer to <a href="https://github.com/vuejs/vitepress/blob/45b65ce8b63bd54f345bfc3383eb2416b6769dc9/src/node/config.ts#L30-L65" target="_blank" rel="noopener noreferrer">config.ts</a>.</p></div><h2 id="base" tabindex="-1">base <a class="header-anchor" href="#base" aria-hidden="true">#</a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>/</code></li></ul><p>The base URL the site will be deployed at. You will need to set this if you plan to deploy your site under a sub path, for example, GitHub pages. If you plan to deploy your site to <code>https://foo.github.io/bar/</code>, then you should set base to <code>&#39;/bar/&#39;</code>. It should always start and end with a slash.</p><p>The <code>base</code> is automatically prepended to all the URLs that start with <code>/</code> in other options, so you only need to specify it once.</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/base/&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="lang" tabindex="-1">lang <a class="header-anchor" href="#lang" aria-hidden="true">#</a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>en-US</code></li></ul><p>The <code>lang</code> attribute for the site. This will render as a <code>&lt;html lang=&quot;en-US&quot;&gt;</code> tag in the page HTML.</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-hidden="true">#</a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>VitePress</code></li></ul><p>Title for the site. This will be the suffix for all page titles, and displayed in the navbar.</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;VitePress&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-hidden="true">#</a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>A VitePress site</code></li></ul><p>Description for the site. This will render as a <code>&lt;meta&gt;</code> tag in the page HTML.</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;A VitePress site&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,19),i=[o];function p(l,r,c,d,u,h){return s(),a("div",null,i)}var b=e(n,[["render",p]]);export{f as __pageData,b as default};