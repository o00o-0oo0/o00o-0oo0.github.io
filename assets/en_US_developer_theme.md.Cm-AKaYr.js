import{_ as e,c as o,o as t,a4 as a}from"./chunks/framework.BmdFiWrL.js";const _=JSON.parse('{"title":"Nezha Theme Development Environment","description":"","frontmatter":{},"headers":[],"relativePath":"en_US/developer/theme.md","filePath":"en_US/developer/theme.md","lastUpdated":1732521523000}'),n={name:"en_US/developer/theme.md"},c=a('<h1 id="nezha-theme-development-environment" tabindex="-1">Nezha Theme Development Environment <a class="header-anchor" href="#nezha-theme-development-environment" aria-label="Permalink to &quot;Nezha Theme Development Environment&quot;">​</a></h1><p>Nezha Monitoring provides a theme development environment that you can use to create new Nezha Monitoring themes</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Please note: This development environment only supports <code>dashboard v0.19.20</code> and newer versions.</p></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><ol><li>Clone <a href="https://github.com/nezhahq/skeleton-custom-theme" target="_blank" rel="noreferrer">this repository</a> to local</li><li>Modify the Oauth2 configuration in <code>data/config.yaml</code>（The callback connection can be filled with <code>http://localhost</code>）</li><li>Run <code>docker-compose up</code></li><li>Start development</li><li>After completing the theme creation, you can place <code>theme-custom</code> (frontend theme), <code>static-custom</code> (frontend theme static files), and <code>dashboard-custom</code> (backend theme) into the <code>/opt/nezha/dashboard/</code> directory on the server (if installed using Docker).</li></ol><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><ul><li>If you can&#39;t use port <code>80</code>, change the configuration in <code>docker-compose.yaml</code>.</li></ul>',7),i=[c];function r(l,d,h,s,m,p){return t(),o("div",null,i)}const f=e(n,[["render",r]]);export{_ as __pageData,f as default};
