import{_ as e,c as i,o as t,a4 as o}from"./chunks/framework.BmdFiWrL.js";const f=JSON.parse('{"title":"Cloudflare Access OAuth2 Configuration","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"en_US/guide/q8.md","filePath":"en_US/guide/q8.md","lastUpdated":1732521523000}'),a={name:"en_US/guide/q8.md"},c=o(`<h1 id="cloudflare-access-oauth2-configuration" tabindex="-1">Cloudflare Access OAuth2 Configuration <a class="header-anchor" href="#cloudflare-access-oauth2-configuration" aria-label="Permalink to &quot;Cloudflare Access OAuth2 Configuration&quot;">​</a></h1><p>If you encounter issues logging in as an administrator using Github, Gitlab, or Gitee, you may consider switching to Cloudflare Access as the OAuth2 provider.</p><h2 id="example-configuration" tabindex="-1">Example Configuration: <a class="header-anchor" href="#example-configuration" aria-label="Permalink to &quot;Example Configuration:&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Oauth2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Admin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">701b9ea6-9f56-48cd-af3e-cbb4bfc1475c</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ClientID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3516291f53eca9b4901a01337e41be7dc52f565c8657d08a3fddb2178d13c5bf</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ClientSecret</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0568b67c7b6d0ed51c663e2fe935683007c28f947a27b7bd47a5ad3d8b56fb67</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Endpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://xxxxx.cloudflareaccess.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cloudflare</span></span></code></pre></div><h2 id="configuration-description" tabindex="-1">Configuration Description: <a class="header-anchor" href="#configuration-description" aria-label="Permalink to &quot;Configuration Description:&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Parameter</th><th>Retrieval Method</th></tr></thead><tbody><tr><td>Admin</td><td><code>My Team</code> -&gt; <code>Users</code> -&gt; <code>&lt;specific user&gt;</code> -&gt; <code>User ID</code></td></tr><tr><td>ClientID/ClientSecret</td><td><code>Access</code> -&gt; <code>Application</code> -&gt; <code>Add an Application</code> <br> -&gt; <code>SaaS</code> -&gt; <code>OIDC</code></td></tr><tr><td>Endpoint</td><td><code>Access</code> -&gt; <code>Application</code> -&gt; <code>Application URL</code> -&gt; <code>Only keep the protocol and domain, no path</code></td></tr></tbody></table><h3 id="setting-up-a-new-saas-oidc-application" tabindex="-1">Setting Up a New SaaS-OIDC Application <a class="header-anchor" href="#setting-up-a-new-saas-oidc-application" aria-label="Permalink to &quot;Setting Up a New SaaS-OIDC Application&quot;">​</a></h3><p>Navigate to the Zero Trust Dashboard: <a href="https://one.dash.cloudflare.com/" target="_blank" rel="noreferrer">https://one.dash.cloudflare.com/</a>. Choose or create a new account, then follow these steps:</p><ol><li>Go to <code>My Team</code> -&gt; <code>Users</code> -&gt; Click <code>&lt;specific user&gt;</code> -&gt; Obtain and save the <code>User ID</code>. <em>(If this is your first time using Zero Trust, the Users list will be empty, and you can skip this step; users will appear after completing a verification.)</em></li><li>Navigate to <code>Access</code> -&gt; <code>Applications</code> -&gt; <code>Add an Application</code>.</li><li>Select <code>SaaS</code>. In the <code>Application</code> field, enter a custom application name (e.g., <code>nezha</code>), select <code>OIDC</code>, and then click <code>Add application</code>.</li><li>For <code>Scopes</code>, select <code>openid</code>, <code>email</code>, <code>profile</code>, <code>groups</code>.</li><li>In <code>Redirect URLs</code>, enter your Dashboard Callback URL, such as <code>https://dashboard.example.com/oauth2/callback</code>.</li><li>Record the <code>Client ID</code>, <code>Client Secret</code>, and the protocol and domain part of the <code>Issuer</code> address, for example, <code>https://xxxxx.cloudflareaccess.com</code>.</li><li>Edit the Dashboard configuration file (usually located at <code>/opt/nezha/dashboard/data/config.yaml</code>), adjust the <code>OAuth2</code> settings according to the example configuration, and restart the Dashboard service.</li></ol><h3 id="identity-verification-strategy-configuration" tabindex="-1">Identity Verification Strategy Configuration <a class="header-anchor" href="#identity-verification-strategy-configuration" aria-label="Permalink to &quot;Identity Verification Strategy Configuration&quot;">​</a></h3><p>After setting up the Dashboard, you need to configure identity verification policies in the Zero Trust Dashboard. Navigate to: <code>Access</code> -&gt; <code>Applications</code> -&gt; <code>&lt;application name&gt;</code> -&gt; <code>Policies</code>. You can choose from various SSO authentication methods, including email OTP and hardware key verification. For detailed configurations, refer to the <a href="https://developers.cloudflare.com/cloudflare-one/" target="_blank" rel="noreferrer">Cloudflare Zero Trust Documentation</a>.</p><h3 id="policy-configuration-example-one-time-pin" tabindex="-1">Policy Configuration Example (One-time PIN) <a class="header-anchor" href="#policy-configuration-example-one-time-pin" aria-label="Permalink to &quot;Policy Configuration Example (One-time PIN)&quot;">​</a></h3><p>Using email OTP as the default verification method:</p><ol><li>Navigate to <code>Access</code> -&gt; <code>Applications</code> -&gt; <code>&lt;application name&gt;</code> -&gt; <code>Policies</code> -&gt; <code>Add a policy</code>.</li><li>Set a <code>Policy Name</code>, for example, <code>OTP</code>, and set <code>Action</code> to <code>Allow</code>.</li><li>Under <code>Configure rules</code>, add a new <code>Include</code> rule. Select <code>Emails</code> as the <code>Selector</code> and enter your email address in the textbox.</li><li>Click <code>Save policy</code> to save the configuration.</li></ol><h3 id="testing-the-policy" tabindex="-1">Testing the Policy <a class="header-anchor" href="#testing-the-policy" aria-label="Permalink to &quot;Testing the Policy&quot;">​</a></h3><ol><li>If the configuration is correct, when you visit the Dashboard login interface, it will display as &quot;Log in with Cloudflare Account.&quot; Clicking on login will redirect you to the Cloudflare Access login page.</li><li>Enter the email address configured previously, click <code>Send me a code</code>, and then enter the code received to log in to the Dashboard.</li><li>If <code>User ID</code> was not specified in <code>Admin</code> during previous steps, an error message will be displayed after login: &quot;This user is not an administrator of this site and cannot log in.&quot; At this point, you need to go to <code>My Team</code> -&gt; <code>Users</code>, find the corresponding user, click on the username to get the <code>User ID</code>, and enter it into the <code>Admin</code> section of the Dashboard configuration file. After restarting the Dashboard service, try logging in again.</li></ol>`,16),n=[c];function d(s,l,r,h,p,u){return t(),i("div",null,n)}const m=e(a,[["render",d]]);export{f as __pageData,m as default};
