import{_ as i,c as s,o as e,a4 as t}from"./chunks/framework.BmdFiWrL.js";const D=JSON.parse('{"title":"DDNS","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/ddns.md","filePath":"guide/ddns.md","lastUpdated":1732521523000}'),a={name:"guide/ddns.md"},o=t(`<h1 id="ddns" tabindex="-1">DDNS <a class="header-anchor" href="#ddns" aria-label="Permalink to &quot;DDNS&quot;">​</a></h1><p>DDNS 功能适用于使用动态 IP 的服务器，当 Agent 上报了一个新的 IP（10分钟一次），Dashboard 会根据配置自动更新 DNS 记录。</p><h2 id="为什么我要使用哪吒监控的-ddns-功能" tabindex="-1">为什么我要使用哪吒监控的 DDNS 功能？ <a class="header-anchor" href="#为什么我要使用哪吒监控的-ddns-功能" aria-label="Permalink to &quot;为什么我要使用哪吒监控的 DDNS 功能？&quot;">​</a></h2><ul><li>方便集中管理 DDNS 设置，而不是在每台服务器上都部署一个 DDNS 服务。</li><li>仅在面板服务器上保存您的机密信息，防止外泄。</li></ul><h2 id="配置说明" tabindex="-1">配置说明 <a class="header-anchor" href="#配置说明" aria-label="Permalink to &quot;配置说明&quot;">​</a></h2><p>可以直接在 Dashboard 管理页面中添加 DDNS 配置。</p><ol><li>点击菜单栏中的“动态 DNS”选项，进入配置页面。</li><li>点击“新配置”按钮，在弹出窗口中按需填写信息。选项说明： <ul><li><strong>名称</strong>：配置名称。</li><li><strong>DDNS供应商</strong>：供应商类型，决定了使用何种方法更新 DNS 记录。</li><li><strong>域名（逗号分隔）</strong>：域名，如填写多个域名需要用 <code>,</code> 分隔。支持 IDN（国际化域名）。</li><li><strong>最大重试次数</strong>：DDNS 更新尝试次数，默认为 3，范围为 1 到 10 的整数。</li><li><strong>DDNS 凭据 1</strong> 以及 <strong>DDNS 凭据 2</strong> 为选填，通常需要至少填 1 个。下面的<a href="#供应商列表">表格</a>列出了所有供应商的对应选项。</li></ul></li><li>如果使用 <code>webhook</code> 供应商，那么需要按需填写 Webhook 的对应选项。具体的说明请见 <a href="#webhook-配置说明">Webhook 配置说明</a>。</li><li>需要至少勾选 <strong>启用DDNS IPv4</strong> 和 <strong>启用DDNS IPv6</strong> 中的一个，否则不会进行任何更新操作。</li><li>在添加了新的配置后，还需要修改服务器配置才能使 DDNS 生效。服务器相关选项说明： <ul><li><strong>启用 DDNS</strong>：为此服务器启用 DDNS 功能。</li><li><strong>DDNS 配置</strong>：要使用的 DDNS 配置 ID 列表，可以根据配置名称进行搜索。</li></ul></li></ol><h2 id="webhook-配置说明" tabindex="-1">Webhook 配置说明 <a class="header-anchor" href="#webhook-配置说明" aria-label="Permalink to &quot;Webhook 配置说明&quot;">​</a></h2><p>Webhook 需要自行构建 HTTP 请求，适用于需要使用其它供应商的服务且操作较为简单的情况。</p><p>Webhook 相关选项说明：</p><ul><li><strong>Webhook 地址</strong>：HTTP 请求 URL。其中只有参数可以使用占位符。</li><li><strong>Webhook 请求方式</strong>：HTTP 请求方式。支持 <code>GET</code>、<code>POST</code>、<code>PATCH</code>、<code>DELETE</code> 以及 <code>PUT</code>。</li><li><strong>Webhook 请求类型</strong>：HTTP 请求体格式，为 <code>JSON</code> 或者 <code>Form</code>。</li><li><strong>Webhook 请求头</strong>：HTTP 请求头，用 JSON 填写，注意不支持嵌套。</li><li><strong>Webhook 请求体</strong>：HTTP 请求体，<code>GET</code> 和 <code>DELETE</code> 不会使用。如需使用嵌套格式，必须选择 <code>JSON</code> 作为请求类型。</li></ul><p>Webhook 支持的占位符：</p><ul><li><code>#ip#</code>：主机 IP。</li><li><code>#domain#</code>：DDNS 域名。每个域名的请求是分别进行的，所以此项的值只会是单个域名字符串。</li><li><code>#type#</code>：IP 类型，值为 <code>&quot;ipv4&quot;</code> 或 <code>&quot;ipv6&quot;</code>。</li><li><code>#record#</code>：记录类型，值为 <code>&quot;A&quot;</code> 或 <code>&quot;AAAA&quot;</code>。</li><li><code>#access_id#</code>：DDNS 凭据 1。</li><li><code>#access_secret#</code>：DDNS 凭据 2。</li></ul><h3 id="花生壳-webhook-示例" tabindex="-1">花生壳 Webhook 示例 <a class="header-anchor" href="#花生壳-webhook-示例" aria-label="Permalink to &quot;花生壳 Webhook 示例&quot;">​</a></h3><details><summary>点击展开/收起</summary><ul><li>URL：<code>http://ddns.oray.com/ph/update?hostname=#domain#&amp;myip=#ip#</code></li><li>请求方式: <code>GET</code></li><li>请求头：<code>{&quot;Authorization&quot;: &quot;Basic pass&quot;}</code>，把 <code>pass</code> 替换成你的用户名:密码的 Base64 编码（例如，<code>user:pass</code> 为 <code>dXNlcjpwYXNzCg==</code>）。</li><li>花生壳只支持 A 记录，所以只勾选启用 IPv4。其它 Webhook 选项不需要填。</li></ul></details><h2 id="供应商列表" tabindex="-1">供应商列表 <a class="header-anchor" href="#供应商列表" aria-label="Permalink to &quot;供应商列表&quot;">​</a></h2><table tabindex="0"><thead><tr><th>供应商</th><th>凭据1（ID）</th><th>凭据2（Secret）</th></tr></thead><tbody><tr><td><code>dummy</code></td><td>❌️</td><td>❌️</td></tr><tr><td><code>webhook</code></td><td>可选</td><td>可选</td></tr><tr><td><code>cloudflare</code></td><td>❌️</td><td>✅</td></tr><tr><td><code>tencentcloud</code></td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="查看日志" tabindex="-1">查看日志 <a class="header-anchor" href="#查看日志" aria-label="Permalink to &quot;查看日志&quot;">​</a></h2><p>在 Dashboard 的日志中，可以看到 DDNS 功能的相关日志，配置正确时，更新 DNS 记录时会有相应的日志记录。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dashboard_1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 2024/03/16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 23:16:25</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NEZH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 正在尝试更新域名</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ddns.example.com</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DDNS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1/3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dashboard_1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 2024/03/16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 23:16:28</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NEZH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 尝试更新域名</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ddns.example.com</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DDNS成功</span></span></code></pre></div>`,20),d=[o];function l(h,n,r,c,k,p){return e(),s("div",null,d)}const u=i(a,[["render",l]]);export{D as __pageData,u as default};
