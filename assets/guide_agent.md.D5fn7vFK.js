import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.BmdFiWrL.js";const F=JSON.parse('{"title":"安装 Agent","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/agent.md","filePath":"guide/agent.md","lastUpdated":1732521523000}'),e={name:"guide/agent.md"},t=n(`<h1 id="安装-agent" tabindex="-1">安装 Agent <a class="header-anchor" href="#安装-agent" aria-label="Permalink to &quot;安装 Agent&quot;">​</a></h1><p><strong>哪吒监控的被控端服务被称为 Agent，本文档将介绍如何在被控端服务器上安装 Agent，并与 Dashboard 连接。</strong></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Agent 二进制文件仓库地址为：<a href="https://github.com/nezhahq/agent/releases" target="_blank" rel="noreferrer">https://github.com/nezhahq/agent/releases</a></p></div><h2 id="一键安装-agent" tabindex="-1">一键安装 Agent <a class="header-anchor" href="#一键安装-agent" aria-label="Permalink to &quot;一键安装 Agent&quot;">​</a></h2><p>哪吒监控支持在 Windows 和 Linux 上一键安装 Agent。遵循本文档的步骤，你可以很轻松地在服务器上部署它。</p><h3 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h3><p>你需要提前在管理面板中设置好通信域名，此域名不可以接入 CDN。本文档以示例通信域名 “data.example.com” 为例。<br> 进入后台管理面板，转到“设置”页，在“未接入 CDN 的面板服务器域名/IP”项中填入通信域名，然后点击&quot;保存&quot;。</p><h3 id="在-linux-中一键安装" tabindex="-1">在 Linux 中一键安装 <a class="header-anchor" href="#在-linux-中一键安装" aria-label="Permalink to &quot;在 Linux 中一键安装&quot;">​</a></h3><ol><li>首先在管理面板中添加一台服务器。</li><li>点击新添加的服务器旁的绿色 Linux 图标按钮，复制一键安装命令。</li><li>在被控端服务器中运行复制的一键安装命令，等待安装完成后返回到 Dashboard 主页查看服务器是否上线。</li></ol><h3 id="在-macos-中一键安装" tabindex="-1">在 macOS 中一键安装 <a class="header-anchor" href="#在-macos-中一键安装" aria-label="Permalink to &quot;在 macOS 中一键安装&quot;">​</a></h3><ol><li>首先在管理面板中添加一台服务器。</li><li>点击新添加的服务器旁的绿色 Apple 图标按钮，复制一键安装命令。</li><li>在被控端服务器中运行复制的一键安装命令，等待安装完成后返回到 Dashboard 主页查看服务器是否上线。</li></ol><h3 id="在-windows-中一键安装" tabindex="-1">在 Windows 中一键安装 <a class="header-anchor" href="#在-windows-中一键安装" aria-label="Permalink to &quot;在 Windows 中一键安装&quot;">​</a></h3><ol><li>首先在管理面板中添加一台服务器。</li><li>点击新添加的服务器旁的绿色 Windows 图标按钮，复制一键安装命令。</li><li>进入 Windows 服务器，运行 PowerShell，在 PowerShell 中运行复制的安装命令。</li><li>如遇到确认「执行策略变更」请选择 Y。</li><li>等待安装完成后返回 Dashboard 主页查看服务器是否上线。</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果在 PowerShell 中运行一键安装命令时遇到错误，请尝试下方的<strong>在 Windows 中手动安装 Agent</strong>。</p></div><h2 id="其他方式安装-agent" tabindex="-1">其他方式安装 Agent <a class="header-anchor" href="#其他方式安装-agent" aria-label="Permalink to &quot;其他方式安装 Agent&quot;">​</a></h2><h3 id="在-linux-中安装-agent-支持大部分发行版" tabindex="-1">在 Linux 中安装 Agent（支持大部分发行版） <a class="header-anchor" href="#在-linux-中安装-agent-支持大部分发行版" aria-label="Permalink to &quot;在 Linux 中安装 Agent（支持大部分发行版）&quot;">​</a></h3><details><summary>点击展开/收起</summary><ol><li>首先在管理面板中添加一台服务器。</li><li>在被控服务器中，运行脚本（位于中国大陆的服务器请使用镜像）：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/nezhahq/scripts/main/install.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./nezha.sh</span></span></code></pre></div><p>如果你的被控服务器位于中国大陆，可以使用镜像：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gitee.com/naibahq/scripts/raw/main/install.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CN=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./nezha.sh</span></span></code></pre></div><ol start="3"><li>选择“安装监控 Agent”。</li><li>输入通信域名，如：”data.example.com“。</li><li>输入面板通信端口（gRPC 端口），默认为 5555。</li><li>输入 Agent 密钥，Agent 密钥在管理面板中添加服务器时生成，可以在管理面板中的“服务器”页中找到。</li><li>等待安装完成后返回 Dashboard 主页查看服务器是否上线。</li></ol></details><h3 id="使用-agent-内置服务命令安装-支持主流系统" tabindex="-1">使用 Agent 内置服务命令安装（支持主流系统） <a class="header-anchor" href="#使用-agent-内置服务命令安装-支持主流系统" aria-label="Permalink to &quot;使用 Agent 内置服务命令安装（支持主流系统）&quot;">​</a></h3><details><summary>点击展开/收起</summary><p>首先获取 Agent 的二进制文件：<a href="https://github.com/nezhahq/agent/releases" target="_blank" rel="noreferrer">https://github.com/nezhahq/agent/releases</a></p><p>解压后输入以下命令安装服务（可能需要 root 权限）：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nezha-agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server_name:port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> password</span></span></code></pre></div><p>除了服务器地址和密码，还可以添加其它支持的参数。具体参考<a href="/guide/q7.html">自定义 Agent 监控项目</a></p><p>卸载服务：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nezha-agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span></span></code></pre></div><p>启动服务：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nezha-agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><p>停止服务：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nezha-agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span></span></code></pre></div><p>重启服务：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nezha-agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span></span></code></pre></div></details><h3 id="runit-安装-agent" tabindex="-1">runit 安装 Agent <a class="header-anchor" href="#runit-安装-agent" aria-label="Permalink to &quot;runit 安装 Agent&quot;">​</a></h3><details><summary>点击展开/收起</summary><p>目前 Agent 内置的服务功能已经支持了绝大部分 init 系统，包括 FreeBSD rc.d 和 openrc。尽管如此还是有一些漏网之鱼。</p><p>这里使用 Void Linux 的 runit 作为示例：</p><ol><li>创建 <code>/etc/sv/nezha-agent</code> 目录：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/sv/nezha-agent</span></span></code></pre></div><ol start="2"><li>创建 <code>/etc/sv/nezha-agent/run</code> 服务文件，写入以下内容：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/sh</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 2&gt;&amp;1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/nezha/agent/nezha-agent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server_name:port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> password</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 2&gt;&amp;1</span></span></code></pre></div><p>这里同样可以添加其它参数。</p><ol start="3"><li>创建 <code>/etc/sv/nezha-agent/log/run</code>：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/sh</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vlogger</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha-agent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> daemon</span></span></code></pre></div><ol start="4"><li>启用服务：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/sv/nezha-agent/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/service</span></span></code></pre></div><p>之后可以通过 <code>sv</code> 命令来操作服务。</p><p>如何查看日志：</p><ol><li>安装 <code>socklog</code>，并启用：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xbps-install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> socklog-void</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/sv/socklog-unix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/service</span></span></code></pre></div><ol start="2"><li>运行 <code>svlogtail</code> 查看日志：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> svlogtail</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha-agent</span></span></code></pre></div></details><h3 id="在-windows-中手动安装-agent" tabindex="-1">在 Windows 中手动安装 Agent <a class="header-anchor" href="#在-windows-中手动安装-agent" aria-label="Permalink to &quot;在 Windows 中手动安装 Agent&quot;">​</a></h3><ul><li>请参考社区文章：<br><a href="https://nyko.me/2020/12/13/nezha-windows-client.html" target="_blank" rel="noreferrer">哪吒探针 - Windows 客户端安装</a></li></ul><h3 id="在群晖-dsm-中安装-agent" tabindex="-1">在群晖 DSM 中安装 Agent <a class="header-anchor" href="#在群晖-dsm-中安装-agent" aria-label="Permalink to &quot;在群晖 DSM 中安装 Agent&quot;">​</a></h3><details><summary>点击展开/收起</summary><ul><li><p>请参考社区文章：<br><a href="https://blog.mitsea.com/3929551d08bd4bb0a8baa453e2d92b0c/" target="_blank" rel="noreferrer">群晖 DSM 7.x 安装 哪吒监控 Agent</a><br><a href="https://wl.gta5pdx.cn/archives/546/" target="_blank" rel="noreferrer">哪吒探针——群晖客户端（被控端）安装教程</a></p></li><li><p>Systemd 实现 <em>仅适用于 DSM7</em>:</p></li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Agent 路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EXEC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/PATH/TO/nezha-agent&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 日志路径地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LOG</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EXEC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}.log&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 额外执行参数, 可留空</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ARGS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 哪吒服务端 gRPC 地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SERVER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HOST_OR_IP:gRPC_PORT&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 上一步获取的主机密钥</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SECRET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;APP_SECRET&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行服务的用户名, *强烈建议使用非root用户执行*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RUN_USER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nezha&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 写入到 systemd 服务文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EOF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/lib/systemd/system/nezha.service</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Description=Nezha Agent Service</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">After=network.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Type=simple</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ExecStart=/bin/nohup \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EXEC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ARGS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} -s \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SERVER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} -p \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SECRET</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} &amp;&gt;&gt; \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LOG</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} &amp;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ExecStop=ps -fe |grep nezha-agent|awk &#39;{print </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">2}&#39;|xargs kill</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">User=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RUN_USER</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Restart=on-abort</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WantedBy=multi-user.target</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重载服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 服务自启动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha</span></span></code></pre></div><p>‼️修改对应信息后‼️<br> 使用 <code>root</code> 账号执行上述命令即可安装完成。</p></details><h3 id="在-macos-中使用-homebrew-安装-agent" tabindex="-1">在 macOS 中使用 Homebrew 安装 Agent <a class="header-anchor" href="#在-macos-中使用-homebrew-安装-agent" aria-label="Permalink to &quot;在 macOS 中使用 Homebrew 安装 Agent&quot;">​</a></h3><details><summary>点击展开/收起</summary><p><em><strong>本节内容改编自 <a href="https://blog.mre.red/archives/install_nezha_monitoring_agent_service_with_homebrew" target="_blank" rel="noreferrer">🐿️松鼠收集🌰</a>，改编已获得原作者授权</strong></em></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>请务必先添加环境变量，再通过 Homebrew 安装 nezha-agent！ 因 Homebrew 在软件安装时创建服务所需 plist 文件，若先安装再添加环境变量，会因缺少参数而启动失败。</p></div><ol><li>添加环境变量：</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;export HOMEBREW_NEZHA_AGENT_PASSWORD=&quot;通信密钥，在服务页面获取&quot;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;export HOMEBREW_NEZHA_AGENT_SERVER=&quot;你的服务器和端口，格式 your.domain:5555 &quot;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span></code></pre></div><ol start="2"><li>安装 Nezha Agent：</li></ol><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>请注意，此 Homebrew 仓库由第三方维护，与哪吒监控无关。 Nezha 项目组不对该仓库的可用性和安全性等方面作出背书。在使用前，请自行评估风险！</p></div><p>由于暂未提交到 Homebrew Core 官方库，暂时放在上述博客作者参与维护的 <a href="https://github.com/Brewforge/homebrew-chinese" target="_blank" rel="noreferrer">第三方 Homebrew 仓库</a> 中：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> brewforge/chinese/nezha-agent</span></span></code></pre></div><ol start="3"><li>通过 Homebrew 启动 Nezha Agent 服务：</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> services</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha-agent</span></span></code></pre></div><ol start="4"><li>检查服务状态：</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> services</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha-agent</span></span></code></pre></div><ol start="5"><li>停止服务：</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> services</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha-agent</span></span></code></pre></div><ol start="6"><li>卸载 Nezha Agent：</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha-agent</span></span></code></pre></div><ol start="7"><li>报错时先检查环境变量：</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOMEBREW_NEZHA_AGENT_PASSWORD</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOMEBREW_NEZHA_AGENT_SERVER</span></span></code></pre></div><ol start="8"><li>若环境变量配置正确，再尝试重装：</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> services</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha-agent</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reinstall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha-agent</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> services</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha-agent</span></span></code></pre></div><ol start="9"><li>若仍未解决，请前往上述 <a href="https://github.com/Brewforge/homebrew-chinese" target="_blank" rel="noreferrer">第三方 Homebrew 仓库</a> 提交 issue。</li></ol></details><h3 id="在-openwrt-中安装-agent" tabindex="-1">在 OpenWRT 中安装 Agent <a class="header-anchor" href="#在-openwrt-中安装-agent" aria-label="Permalink to &quot;在 OpenWRT 中安装 Agent&quot;">​</a></h3><details><summary>点击展开/收起</summary><p><strong>如何一步到位，解决安装过程中的疑难杂症？</strong></p><ul><li>请参考项目：<br><a href="https://github.com/dysf888/NZ-OpenWrt" target="_blank" rel="noreferrer">NZ-OpenWrt</a></li></ul><p><strong>如何使旧版 OpenWRT/LEDE 自启动？</strong></p><ul><li>请参考项目：<br><a href="https://github.com/Erope/openwrt_nezha" target="_blank" rel="noreferrer">哪吒监控 For OpenWRT</a></li></ul><p><strong>如何使新版 OpenWRT 自启动？ 贡献者：@艾斯德斯</strong></p><ul><li>首先在 release 下载对应的二进制解压 zip 包后放置到 <code>/root</code>。</li><li>运行 <code>chmod +x /root/nezha-agent</code> 赋予执行权限，然后创建 <code>/etc/init.d/nezha-service</code>：</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/sh /etc/rc.common</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">START</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">99</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">USE_PROCD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start_service</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> procd_open_instance</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> procd_set_param</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> command</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/nezha-agent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 面板通信地址:端口</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 秘钥</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> procd_set_param</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> respawn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> procd_close_instance</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stop_service</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  killall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nezha-agent</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> stop</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sleep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> start</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>运行 <code>chmod +x /etc/init.d/nezha-service</code> 赋予执行权限。</li><li>启动服务： <code>/etc/init.d/nezha-service enable &amp;&amp; /etc/init.d/nezha-service start</code></li></ul></details><h2 id="agent-有-docker-镜像吗" tabindex="-1">Agent 有 Docker 镜像吗？ <a class="header-anchor" href="#agent-有-docker-镜像吗" aria-label="Permalink to &quot;Agent 有 Docker 镜像吗？&quot;">​</a></h2><p><strong>Agent 目前没有推出 Docker 镜像。</strong><br> Agent 的设计思路和 Dashboard 相反，Dashboard 要尽可能不影响宿主机工作，但 Agent 则需要在宿主机中执行监控服务和运行命令。<br> 将 Agent 放入容器中确实可以继续执行监控任务，但 WebShell 等功能无法正常运行，因此不提供 Docker 镜像。</p>`,31),l=[t];function h(p,k,r,d,g,o){return a(),i("div",null,l)}const y=s(e,[["render",h]]);export{F as __pageData,y as default};
