import{_ as e,c as t,o as a,a4 as n}from"./chunks/framework.BmdFiWrL.js";const f=JSON.parse('{"title":"Server Management","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"en_US/guide/servers.md","filePath":"en_US/guide/servers.md","lastUpdated":1732521523000}'),i={name:"en_US/guide/servers.md"},r=n('<h1 id="server-management" tabindex="-1">Server Management <a class="header-anchor" href="#server-management" aria-label="Permalink to &quot;Server Management&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>The server section is responsible for managing Agents, forming the most fundamental part of Nezha monitoring and serving as the basis for other functionalities.</p><h2 id="adding-a-server" tabindex="-1">Adding a Server <a class="header-anchor" href="#adding-a-server" aria-label="Permalink to &quot;Adding a Server&quot;">​</a></h2><p>The first step is to add a server, where you can customize the name, group, sorting, and notes.<br> Servers in the same group will be displayed together in supported themes. Notes will only be visible in the Admin Panel, so there&#39;s no need to worry about leaking information.</p><h2 id="installing-the-agent" tabindex="-1">Installing the Agent <a class="header-anchor" href="#installing-the-agent" aria-label="Permalink to &quot;Installing the Agent&quot;">​</a></h2><p>Please refer to the previous section on <a href="/en_US/guide/agent.html">installing the Agent</a>.<br> It is recommended to use the one-click installation. After configuring the parameters, click the corresponding system icon in the <strong>one-click installation</strong> column of the server to copy the installation command and execute it on the respective server.</p><h2 id="forced-update" tabindex="-1">Forced Update <a class="header-anchor" href="#forced-update" aria-label="Permalink to &quot;Forced Update&quot;">​</a></h2><p>Agent update-related parameters include <code>--disable-auto-update</code> and <code>--disable-force-update</code> as described in <a href="/en_US/guide/q7.html">Custom Agent Monitoring Projects</a>.<br> By default, the Agent will update automatically without intervention. However, if the user disables automatic updates, you can select specific servers for a forced update.<br> The forced update will not work if <code>disable-force-update</code> is enabled.</p><h2 id="data-columns" tabindex="-1">Data Columns <a class="header-anchor" href="#data-columns" aria-label="Permalink to &quot;Data Columns&quot;">​</a></h2><ul><li>Version: Records the current version of the Agent.</li><li>Hide from Guests: When true, guests cannot see this server in the Dashboard.</li><li>Enable DDNS: When true, if the server IP changes, the Dashboard will automatically update the DNS records.</li><li>DDNS Domain: The DDNS domain configured for this server.</li><li>Secret: The secret/key used for configuring the Agent, which is used to verify communication between the Agent and the Dashboard.</li><li>Note: Server notes, visible only after verification.</li><li>Public Note: Server public notes, visible on the frontend. You can customize frontend theme based on this field; see <a href="#public-note-example">Public Note Example</a> for details.</li><li>Installation commands: Click the corresponding system button to copy the command and execute it on the server for an instant installation.</li><li>Management: Connects to WebShell, modifies server configuration, or deletes the server.</li></ul><h2 id="webssh-terminal" tabindex="-1">WebSSH Terminal <a class="header-anchor" href="#webssh-terminal" aria-label="Permalink to &quot;WebSSH Terminal&quot;">​</a></h2><p>This is WebShell; the feature will not work if <code>disable-command-execute</code> is enabled.<br> It is available for both Linux and Windows and supports Ctrl+Shift+V for pasting.<br> If the connection fails, refer to <a href="/en_US/guide/q4.html">Real-Time Channel Disconnection/Online Terminal Connection Failure</a>.</p><h2 id="fm" tabindex="-1">FM <a class="header-anchor" href="#fm" aria-label="Permalink to &quot;FM&quot;">​</a></h2><p>Added in Dashboard v0.19.1 / Agent v0.19.0. A pseudo file manager embedded in WebShell, supports file download/upload, directory navigation and copying current path. Access it by clicking the blue button in the bottom-right corner of the WebShell.</p><h2 id="public-note-example" tabindex="-1">Public Note Example <a class="header-anchor" href="#public-note-example" aria-label="Permalink to &quot;Public Note Example&quot;">​</a></h2><h3 id="serverstatus-theme-agent-billing-information-display" tabindex="-1">ServerStatus Theme Agent Billing Information Display <a class="header-anchor" href="#serverstatus-theme-agent-billing-information-display" aria-label="Permalink to &quot;ServerStatus Theme Agent Billing Information Display&quot;">​</a></h3><details><summary>Click to expand/collapse</summary><p>See <a href="https://github.com/naiba/nezha/pull/425" target="_blank" rel="noreferrer">https://github.com/naiba/nezha/pull/425</a>.</p></details>',18),o=[r];function l(s,d,h,c,u,m){return a(),t("div",null,o)}const b=e(i,[["render",l]]);export{f as __pageData,b as default};
