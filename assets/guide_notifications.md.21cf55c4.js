import{_ as o,c as e,o as t,a as l}from"./app.3817bf4e.js";const g='{"title":"\u7075\u6D3B\u7684\u901A\u77E5\u65B9\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7075\u6D3B\u7684\u901A\u77E5\u65B9\u5F0F","slug":"\u7075\u6D3B\u7684\u901A\u77E5\u65B9\u5F0F"},{"level":2,"title":"\u62A5\u8B66\u89C4\u5219\u8BF4\u660E","slug":"\u62A5\u8B66\u89C4\u5219\u8BF4\u660E"},{"level":3,"title":"\u57FA\u672C\u89C4\u5219","slug":"\u57FA\u672C\u89C4\u5219"},{"level":3,"title":"\u7279\u6B8A\uFF1A\u4EFB\u610F\u5468\u671F\u6D41\u91CF\u62A5\u8B66","slug":"\u7279\u6B8A\uFF1A\u4EFB\u610F\u5468\u671F\u6D41\u91CF\u62A5\u8B66"},{"level":2,"title":"\u901A\u77E5\u89E6\u53D1\u6A21\u5F0F\u8BF4\u660E","slug":"\u901A\u77E5\u89E6\u53D1\u6A21\u5F0F\u8BF4\u660E"},{"level":2,"title":"\u8BBE\u7F6E\u62A5\u8B66\u65F6\u6267\u884C\u4EFB\u52A1","slug":"\u8BBE\u7F6E\u62A5\u8B66\u65F6\u6267\u884C\u4EFB\u52A1"}],"relativePath":"guide/notifications.md","lastUpdated":1675354460000}',i={},u=l('<p>\u54EA\u5412\u76D1\u63A7\u652F\u6301\u5BF9\u670D\u52A1\u5668\u7684\u8D1F\u8F7D\u3001CPU\u3001\u5185\u5B58\u3001\u786C\u76D8\u3001\u6D41\u91CF\u3001\u6708\u6D41\u91CF\u3001\u8FDB\u7A0B\u6570\u3001\u8FDE\u63A5\u6570\u8FDB\u884C\u76D1\u63A7\uFF0C\u5E76\u5728\u5176\u4E2D\u67D0\u9879\u8FBE\u5230\u7528\u6237\u8BBE\u5B9A\u503C\u65F6\u53D1\u9001\u62A5\u8B66\u901A\u77E5 <br><br></p><h2 id="\u7075\u6D3B\u7684\u901A\u77E5\u65B9\u5F0F" tabindex="-1">\u7075\u6D3B\u7684\u901A\u77E5\u65B9\u5F0F <a class="header-anchor" href="#\u7075\u6D3B\u7684\u901A\u77E5\u65B9\u5F0F" aria-hidden="true">#</a></h2><p><code>#NEZHA#</code> \u662F\u9762\u677F\u6D88\u606F\u5360\u4F4D\u7B26\uFF0C\u9762\u677F\u89E6\u53D1\u901A\u77E5\u65F6\u4F1A\u81EA\u52A8\u7528\u5B9E\u9645\u6D88\u606F\u66FF\u6362\u5360\u4F4D\u7B26</p><p>Body \u5185\u5BB9\u662F<code>JSON</code> \u683C\u5F0F\u7684\uFF1A<strong>\u5F53\u8BF7\u6C42\u7C7B\u578B\u4E3A FORM \u65F6</strong>\uFF0C\u503C\u4E3A <code>key:value</code> \u7684\u5F62\u5F0F\uFF0C<code>value</code> \u91CC\u9762\u53EF\u653E\u7F6E\u5360\u4F4D\u7B26\uFF0C\u901A\u77E5\u65F6\u4F1A\u81EA\u52A8\u66FF\u6362\u3002<strong>\u5F53\u8BF7\u6C42\u7C7B\u578B\u4E3A JSON \u65F6</strong> \u53EA\u4F1A\u7B80\u5355\u8FDB\u884C\u5B57\u7B26\u4E32\u66FF\u6362\u540E\u76F4\u63A5\u63D0\u4EA4\u5230<code>URL</code>\u3002</p><p>URL \u91CC\u9762\u4E5F\u53EF\u653E\u7F6E\u5360\u4F4D\u7B26\uFF0C\u8BF7\u6C42\u65F6\u4F1A\u8FDB\u884C\u7B80\u5355\u7684\u5B57\u7B26\u4E32\u66FF\u6362\u3002</p><p>\u4F60\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0B\u7684\u901A\u77E5\u65B9\u5F0F\u793A\u4F8B\uFF0C\u4E5F\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u7075\u6D3B\u8BBE\u7F6E\u63A8\u9001\u65B9\u5F0F</p><ul><li><p><strong>Bark \u793A\u4F8B</strong></p><ul><li>\u540D\u79F0\uFF1ABark</li><li>URL \u7EC4\u6210: \u7B2C\u4E00\u4E2A\u90E8\u5206\u662F key,\u4E4B\u540E\u6709\u4E09\u4E2A\u5339\u914D /:key/:body or /:key/:title/:body or /:key/:category/:title/:body</li><li>\u8BF7\u6C42\u65B9\u5F0F: GET</li><li>\u8BF7\u6C42\u7C7B\u578B: \u9ED8\u8BA4</li><li>Body: \u7A7A</li><li>\u540D\u79F0\uFF1ABark</li><li>URL \u7EC4\u6210: /push</li><li>\u8BF7\u6C42\u65B9\u5F0F: POST</li><li>\u8BF7\u6C42\u7C7B\u578B: form</li><li>Body: <code>{&quot;title&quot;: &quot;#SERVER.NAME#&quot;,&quot;device_key&quot;:&quot;xxxxxxxxx&quot;,&quot;body&quot;:&quot;#NEZHA#&quot;,&quot;icon&quot;:&quot;https://xxxxxxxx/nz.png&quot;}</code></li></ul></li><li><p><strong>Server \u9171\u793A\u4F8B</strong></p><ul><li>\u540D\u79F0\uFF1AServer \u9171</li><li>URL\uFF1A<a href="https://sc.ftqq.com/SCUrandomkeys.send?text=#NEZHA#" target="_blank" rel="noopener noreferrer">https://sc.ftqq.com/SCUrandomkeys.send?text=#NEZHA#</a></li><li>\u8BF7\u6C42\u65B9\u5F0F: GET</li><li>\u8BF7\u6C42\u7C7B\u578B: \u9ED8\u8BA4</li><li>Body: \u7A7A</li></ul></li><li><p><strong>wxpusher \u793A\u4F8B\uFF0C\u9700\u8981\u5173\u6CE8\u4F60\u7684\u5E94\u7528</strong></p><ul><li>\u540D\u79F0: wxpusher</li><li>URL\uFF1A<a href="http://wxpusher.zjiecode.com/api/send/message" target="_blank" rel="noopener noreferrer">http://wxpusher.zjiecode.com/api/send/message</a></li><li>\u8BF7\u6C42\u65B9\u5F0F: POST</li><li>\u8BF7\u6C42\u7C7B\u578B: JSON</li><li>Body: <code>{&quot;appToken&quot;:&quot;\u4F60\u7684appToken&quot;,&quot;topicIds&quot;:[],&quot;content&quot;:&quot;#NEZHA#&quot;,&quot;contentType&quot;:&quot;1&quot;,&quot;uids&quot;:[&quot;\u4F60\u7684uid&quot;]}</code></li></ul></li><li><p><strong>Telegram \u793A\u4F8B \u8D21\u732E\u8005\uFF1A<a href="https://github.com/haitau" target="_blank" rel="noopener noreferrer">@haitau</a></strong></p><ul><li>\u540D\u79F0\uFF1Atelegram \u673A\u5668\u4EBA\u6D88\u606F\u901A\u77E5</li><li>URL\uFF1A<a href="https://api.telegram.org/botXXXXXX/sendMessage?chat_id=YYYYYY&amp;text=#NEZHA#" target="_blank" rel="noopener noreferrer">https://api.telegram.org/botXXXXXX/sendMessage?chat_id=YYYYYY&amp;text=#NEZHA#</a></li><li>\u8BF7\u6C42\u65B9\u5F0F: GET</li><li>\u8BF7\u6C42\u7C7B\u578B: \u9ED8\u8BA4</li><li>Body: \u7A7A</li><li>URL \u53C2\u6570\u83B7\u53D6\u8BF4\u660E\uFF1AbotXXXXXX \u4E2D\u7684 XXXXXX \u662F\u5728 telegram \u4E2D\u5173\u6CE8\u5B98\u65B9 @Botfather \uFF0C\u8F93\u5165/newbot \uFF0C\u521B\u5EFA\u65B0\u7684\u673A\u5668\u4EBA\uFF08bot\uFF09\u65F6\uFF0C\u4F1A\u63D0\u4F9B\u7684 token\uFF08\u5728\u63D0\u793A Use this token to access the HTTP API:\u540E\u9762\u4E00\u884C\uFF09\u8FD9\u91CC &#39;bot&#39; \u4E09\u4E2A\u5B57\u6BCD\u4E0D\u53EF\u5C11\u3002\u521B\u5EFA bot \u540E\uFF0C\u9700\u8981\u5148\u5728 telegram \u4E2D\u4E0E BOT \u8FDB\u884C\u5BF9\u8BDD\uFF08\u968F\u4FBF\u53D1\u4E2A\u6D88\u606F\uFF09\uFF0C\u7136\u540E\u624D\u53EF\u7528 API \u53D1\u9001\u6D88\u606F\u3002YYYYYY \u662F telegram \u7528\u6237\u7684\u6570\u5B57 ID\u3002\u4E0E\u673A\u5668\u4EBA@userinfobot \u5BF9\u8BDD\u53EF\u83B7\u5F97\u3002</li></ul></li><li><p><strong>\u90AE\u4EF6\u901A\u77E5\u793A\u4F8B - SendCloud \u8D21\u732E\u8005\uFF1A<a href="https://github.com/cantoblanco" target="_blank" rel="noopener noreferrer">@\u767D\u6B4C</a></strong><br><strong>\u6CE8\u610F\uFF1ASendCloud \u6709\u6BCF\u65E5\u514D\u8D39\u53D1\u9001\u90AE\u4EF6\u9650\u989D\u9650\u5236\uFF0C\u8FD9\u91CC\u4EC5\u4F5C\u793A\u4F8B\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u4ED8\u8D39\u670D\u52A1\u6216\u5176\u4ED6\u7C7B\u4F3C\u7684\u514D\u8D39\u670D\u52A1\uFF0C\u4F7F\u7528\u65B9\u6CD5\u7C7B\u4F3C\u3002</strong></p><ul><li>\u540D\u79F0\uFF1A\u90AE\u4EF6\u544A\u8B66</li><li>URL\uFF1A<a href="https://api.sendcloud.net/apiv2/mail/send?apiUser=" target="_blank" rel="noopener noreferrer">https://api.sendcloud.net/apiv2/mail/send?apiUser=</a>&lt;\u66FF\u6362APIUSER&gt;apiKey=&lt;\u66FF\u6362APIKEY&gt;&amp;from=&lt;\u81EA\u5B9A\u4E49\u53D1\u4EF6\u90AE\u7BB1&gt;&amp;fromName=Nezha&amp;to=&lt;\u81EA\u5B9A\u4E49\u6536\u4EF6\u90AE\u7BB1&gt;&amp;subject=Nezha-Notification&amp;html=#NEZHA#</li><li>\u8BF7\u6C42\u65B9\u5F0F: POST</li><li>\u8BF7\u6C42\u7C7B\u578B: JSON</li><li>Header: \u7559\u7A7A</li><li>Body: \u7559\u7A7A</li></ul></li><li><p>URL \u53C2\u6570\u83B7\u53D6\u8BF4\u660E\uFF1A\u6B64\u65B9\u5F0F\u9700\u63D0\u524D\u5728 <a href="https://www.sendcloud.net/" target="_blank" rel="noopener noreferrer">SendCloud</a> \u6CE8\u518C\u8D26\u53F7\uFF0C\u521B\u5EFA\u53D1\u4EF6\u90AE\u7BB1\uFF0C\u7136\u540E\u5728<a href="https://www.sendcloud.net/sendSetting/apiuser" target="_blank" rel="noopener noreferrer">\u8FD9\u91CC</a>\u83B7\u53D6 APIUSER \u548C APIKEY\uFF0C\u66FF\u6362 URL \u4E2D\u7684 &lt;\u66FF\u6362APIUSER&gt; \u548C &lt;\u66FF\u6362APIKEY&gt; \u4E3A\u81EA\u5DF1\u7684 APIUSER \u548C APIKEY\uFF0C\u66FF\u6362 URL \u4E2D\u7684 &lt;\u81EA\u5B9A\u4E49\u53D1\u4EF6\u90AE\u7BB1&gt; \u548C &lt;\u81EA\u5B9A\u4E49\u6536\u4EF6\u90AE\u7BB1&gt; \u4E3A\u81EA\u5DF1\u7684\u53D1\u4EF6\u90AE\u7BB1\u548C\u6536\u4EF6\u90AE\u7BB1\u3002</p></li></ul><br><br><h2 id="\u62A5\u8B66\u89C4\u5219\u8BF4\u660E" tabindex="-1">\u62A5\u8B66\u89C4\u5219\u8BF4\u660E <a class="header-anchor" href="#\u62A5\u8B66\u89C4\u5219\u8BF4\u660E" aria-hidden="true">#</a></h2><h3 id="\u57FA\u672C\u89C4\u5219" tabindex="-1">\u57FA\u672C\u89C4\u5219 <a class="header-anchor" href="#\u57FA\u672C\u89C4\u5219" aria-hidden="true">#</a></h3><ul><li>type\uFF1A\u53EF\u9009\u53D6\u4E00\u4E2A\u6216\u591A\u4E2A\u7C7B\u578B\uFF0C\u5982\u5728\u4E00\u4E2A\u89C4\u5219\u4E2D\u9009\u62E9\u4E86\u591A\u4E2A\u7C7B\u578B\uFF0C\u9700\u8981<strong>\u540C\u65F6\u6EE1\u8DB3</strong>\u6240\u6709\u9009\u62E9\u7684\u7C7B\u578B\u624D\u4F1A\u89E6\u53D1\u901A\u77E5\uFF08\u53EF\u53C2\u8003\u540E\u9762\u7684\u793A\u4F8B\uFF09 <ul><li><code>cpu</code>\u3001<code>memory</code>\u3001<code>swap</code>\u3001<code>disk</code></li><li><code>net_in_speed</code> \u5165\u7AD9\u7F51\u901F\u3001<code>net_out_speed</code> \u51FA\u7AD9\u7F51\u901F\u3001<code>net_all_speed</code> \u53CC\u5411\u7F51\u901F\u3001<code>transfer_in</code> \u5165\u7AD9\u6D41\u91CF\u3001<code>transfer_out</code> \u51FA\u7AD9\u6D41\u91CF\u3001<code>transfer_all</code> \u53CC\u5411\u6D41\u91CF</li><li><code>offline</code> \u79BB\u7EBF\u76D1\u63A7</li><li><code>load1</code>\u3001<code>load5</code>\u3001<code>load15</code> \u8D1F\u8F7D</li><li><code>process_count</code> \u8FDB\u7A0B\u6570 <em>\u76EE\u524D\u53D6\u7EBF\u7A0B\u6570\u5360\u7528\u8D44\u6E90\u592A\u591A\uFF0C\u6682\u65F6\u4E0D\u652F\u6301</em></li><li><code>tcp_conn_count</code>\u3001<code>udp_conn_count</code> \u8FDE\u63A5\u6570</li></ul></li><li>duration\uFF1A\u6301\u7EED\u6570\u79D2\uFF0C\u6570\u79D2\u5185\u91C7\u6837\u8BB0\u5F55 30% \u4EE5\u4E0A\u89E6\u53D1\u9608\u503C\u624D\u4F1A\u62A5\u8B66\uFF08\u9632\u6570\u636E\u63D2\u9488\uFF09</li><li>min \u6216 max\uFF1A <ul><li>\u6D41\u91CF\u3001\u7F51\u901F\u7C7B\u6570\u503C \u4E3A\u5B57\u8282\uFF081KB=1024B\uFF0C1MB = 1024*1024B\uFF09</li><li>\u5185\u5B58\u3001\u786C\u76D8\u3001CPU \u4EE5\u5360\u7528\u767E\u5206\u6BD4\u8BA1\u6570</li><li>\u79BB\u7EBF\u76D1\u63A7\u65E0\u9700\u8BBE\u7F6E\u6B64\u9879</li></ul></li><li>cover\uFF1A <ul><li><code>0</code> \u76D1\u63A7\u6240\u6709\uFF0C\u901A\u8FC7 <code>ignore</code> \u5FFD\u7565\u7279\u5B9A\u670D\u52A1\u5668</li><li><code>1</code> \u5FFD\u7565\u6240\u6709\uFF0C\u901A\u8FC7 <code>ignore</code> \u76D1\u63A7\u7279\u5B9A\u670D\u52A1\u5668<br> \u4F8B\u5982\uFF1A<code>[{&quot;type&quot;:&quot;offline&quot;,&quot;duration&quot;:10, &quot;cover&quot;:0, &quot;ignore&quot;:{&quot;5&quot;: true}}]</code></li></ul></li><li>ignore: \u9009\u62E9\u5FFD\u7565\u7279\u5B9A\u670D\u52A1\u5668\uFF0C\u642D\u914D <code>cover</code> \u4F7F\u7528\uFF0C\u5185\u5BB9\u4E3A\u670D\u52A1\u5668 id \u548C\u5E03\u5C14\u503C\uFF0C\u4F8B\u5982\uFF1A<code>{&quot;1&quot;: true, &quot;2&quot;:false}</code></li></ul><p><strong>\u5B8C\u6574\u793A\u4F8B:</strong></p><blockquote><blockquote><p>\u6DFB\u52A0\u4E00\u4E2A\u79BB\u7EBF\u62A5\u8B66</p></blockquote><ul><li>\u540D\u79F0\uFF1A\u79BB\u7EBF\u901A\u77E5</li><li>\u89C4\u5219\uFF1A<code>[{&quot;Type&quot;:&quot;offline&quot;,&quot;Duration&quot;:10}]</code></li><li>\u542F\u7528\uFF1A\u221A</li></ul></blockquote><blockquote><blockquote><p>\u6DFB\u52A0\u4E00\u4E2A\u76D1\u63A7 CPU \u6301\u7EED 10s \u8D85\u8FC7 50% <strong>\u4E14</strong> \u5185\u5B58\u6301\u7EED 20s \u5360\u7528\u4F4E\u4E8E 20% \u7684\u62A5\u8B66</p></blockquote><ul><li>\u540D\u79F0\uFF1ACPU+\u5185\u5B58</li><li>\u89C4\u5219\uFF1A<code>[{&quot;Type&quot;:&quot;cpu&quot;,&quot;Min&quot;:0,&quot;Max&quot;:50,&quot;Duration&quot;:10},{&quot;Type&quot;:&quot;memory&quot;,&quot;Min&quot;:20,&quot;Max&quot;:0,&quot;Duration&quot;:20}]</code></li><li>\u542F\u7528\uFF1A\u221A</li></ul></blockquote><blockquote><blockquote><p>\u5C06\u7279\u5B9A\u7684\u670D\u52A1\u5668\u901A\u77E5\u53D1\u9001\u5230\u7279\u5B9A\u7684\u901A\u77E5\u5206\u7EC4</p></blockquote><p>\u793A\u4F8B\u573A\u666F\uFF1A<br> \u4F60\u6709 1\u30012\u30013\u30014 \u56DB\u53F0\u670D\u52A1\u5668\u548C A\u3001B \u4E24\u4E2A\u4E0D\u540C\u7684\u901A\u77E5\u7EC4<br> 1\u30012 \u8FD9\u4E24\u53F0\u670D\u52A1\u5668\u6389\u7EBF\u5341\u5206\u949F\u540E\u7ED9\u901A\u77E5\u7EC4 A \u53D1\u9001\u901A\u77E5<br> 3\u30014 \u8FD9\u4E24\u53F0\u670D\u52A1\u5668\u6389\u7EBF\u5341\u5206\u949F\u540E\u7ED9\u901A\u77E5\u7EC4 B \u53D1\u9001\u901A\u77E5</p><p>\u9996\u5148\u4F60\u9700\u8981\u5148\u8BBE\u7F6E\u597D A\u3001B \u4E24\u4E2A\u901A\u77E5\u7EC4\uFF0C\u7136\u540E\u6DFB\u52A0\u4E24\u6761\u62A5\u8B66\u89C4\u5219\uFF1A</p><p><strong>\u89C4\u5219\u4E00\uFF1A</strong></p><ul><li>\u540D\u79F0\uFF1A1\u30012 \u79BB\u7EBF\uFF0C\u53D1\u9001\u7ED9\u901A\u77E5\u7EC4 A</li><li>\u89C4\u5219\uFF1A<code>[{&quot;type&quot;:&quot;offline&quot;,&quot;duration&quot;:600,&quot;cover&quot;:1,&quot;ignore&quot;:{&quot;1&quot;:true,&quot;2&quot;:true}}]</code></li><li>\u901A\u77E5\u65B9\u5F0F\u7EC4\uFF1A A</li><li>\u542F\u7528\uFF1A\u221A</li></ul><p><strong>\u89C4\u5219\u4E8C\uFF1A</strong></p><ul><li>\u540D\u79F0\uFF1A3\u30014 \u79BB\u7EBF\uFF0C\u53D1\u9001\u7ED9\u901A\u77E5\u7EC4 B</li><li>\u89C4\u5219\uFF1A<code>[{&quot;type&quot;:&quot;offline&quot;,&quot;duration&quot;:600,&quot;cover&quot;:1,&quot;ignore&quot;:{&quot;3&quot;:true,&quot;4&quot;:true}}]</code></li><li>\u901A\u77E5\u65B9\u5F0F\u7EC4\uFF1A B</li><li>\u542F\u7528\uFF1A\u221A</li></ul></blockquote><p><strong>\u7075\u6D3B\u4F7F\u7528\u53C2\u6570\u53EF\u4EE5\u8BA9\u4F60\u7684\u901A\u77E5\u529F\u80FD\u88AB\u5145\u5206\u4F7F\u7528</strong></p><br><h3 id="\u7279\u6B8A\uFF1A\u4EFB\u610F\u5468\u671F\u6D41\u91CF\u62A5\u8B66" tabindex="-1">\u7279\u6B8A\uFF1A\u4EFB\u610F\u5468\u671F\u6D41\u91CF\u62A5\u8B66 <a class="header-anchor" href="#\u7279\u6B8A\uFF1A\u4EFB\u610F\u5468\u671F\u6D41\u91CF\u62A5\u8B66" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u7528\u4F5C\u6708\u6D41\u91CF\u62A5\u8B66</p><ul><li>type: <ul><li><code>transfer_in_cycle</code> \u5468\u671F\u5185\u7684\u5165\u7AD9\u6D41\u91CF</li><li><code>transfer_out_cycle</code> \u5468\u671F\u5185\u7684\u51FA\u7AD9\u6D41\u91CF</li><li><code>transfer_all_cycle</code> \u5468\u671F\u5185\u53CC\u5411\u6D41\u91CF\u548C</li></ul></li><li>cycle_start\uFF1A \u7EDF\u8BA1\u5468\u671F\u5F00\u59CB\u65E5\u671F\uFF08\u53EF\u4EE5\u662F\u4F60\u673A\u5668\u8BA1\u8D39\u5468\u671F\u7684\u5F00\u59CB\u65E5\u671F\uFF09\uFF0C\u65F6\u95F4\u683C\u5F0F\u4E3ARFC3339\uFF0C\u4F8B\u5982\u5317\u4EAC\u65F6\u95F4\u4E3A<code>2022-01-11T08:00:00.00+08:00</code></li><li>cycle_interval\uFF1A\u6BCF\u9694\u591A\u5C11\u4E2A\u5468\u671F\u5355\u4F4D\uFF08\u4F8B\u5982\uFF0C\u5468\u671F\u5355\u4F4D\u4E3A\u5929\uFF0C\u8BE5\u503C\u4E3A 7\uFF0C\u5219\u4EE3\u8868\u6BCF\u9694 7 \u5929\u7EDF\u8BA1\u4E00\u6B21\uFF09</li><li>cycle_unit \u7EDF\u8BA1\u5468\u671F\u5355\u4F4D\uFF0C\u9ED8\u8BA4<code>hour</code>,\u53EF\u9009(<code>hour</code>, <code>day</code>, <code>week</code>, <code>month</code>, <code>year</code>)</li><li>min/max\u3001cover\u3001ignore \u53C2\u8003\u57FA\u672C\u89C4\u5219\u914D\u7F6E</li></ul><blockquote><p>\u793A\u4F8B:</p><blockquote><p>ID \u4E3A 3 \u548C 4 \u7684\u670D\u52A1\u5668\uFF08ignore \u91CC\u9762\u5B9A\u4E49\uFF09\uFF0C\u4EE5\u6BCF\u6708 1 \u53F7\u4E3A\u7EDF\u8BA1\u5468\u671F\uFF0C\u5468\u671F\u5185\u7EDF\u8BA1\u7684\u51FA\u7AD9\u6708\u6D41\u91CF\u8FBE\u5230 1TB \u65F6\u62A5\u8B66</p></blockquote><p><code>[{&quot;type&quot;:&quot;transfer_out_cycle&quot;,&quot;max&quot;:1099511627776,&quot;cycle_start&quot;:&quot;2022-01-01T00:00:00+08:00&quot;,&quot;cycle_interval&quot;:1,&quot;cycle_unit&quot;:&quot;month&quot;,&quot;cover&quot;:1,&quot;ignore&quot;:{&quot;3&quot;:true,&quot;4&quot;:true}}]</code></p></blockquote><h2 id="\u901A\u77E5\u89E6\u53D1\u6A21\u5F0F\u8BF4\u660E" tabindex="-1">\u901A\u77E5\u89E6\u53D1\u6A21\u5F0F\u8BF4\u660E <a class="header-anchor" href="#\u901A\u77E5\u89E6\u53D1\u6A21\u5F0F\u8BF4\u660E" aria-hidden="true">#</a></h2><ul><li>\u59CB\u7EC8\u89E6\u53D1\uFF1A\u6BCF\u5F53 Agent \u4E0A\u62A5\u7684\u72B6\u6001\u7B26\u5408\u62A5\u8B66\u7684\u89C4\u5219\u65F6\uFF0C\u90FD\u4F1A\u89E6\u53D1\u4E00\u6B21\u901A\u77E5</li><li>\u5355\u6B21\u89E6\u53D1\uFF1A\u4EC5\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u4E00\u6B21\u901A\u77E5\uFF0C\u5982\u4ECE\u6B63\u5E38\u72B6\u6001\u6539\u53D8\u4E3A\u5F02\u5E38\u72B6\u6001\uFF0C\u6216\u5F02\u5E38\u72B6\u6001\u6062\u590D\u4E3A\u6B63\u5E38\u72B6\u6001</li></ul><h2 id="\u8BBE\u7F6E\u62A5\u8B66\u65F6\u6267\u884C\u4EFB\u52A1" tabindex="-1">\u8BBE\u7F6E\u62A5\u8B66\u65F6\u6267\u884C\u4EFB\u52A1 <a class="header-anchor" href="#\u8BBE\u7F6E\u62A5\u8B66\u65F6\u6267\u884C\u4EFB\u52A1" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u9700\u8981\u5728\u53D1\u51FA\u62A5\u8B66\u6D88\u606F\u7684\u540C\u65F6\u6267\u884C\u67D0\u9879\u4EFB\u52A1\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u6B64\u9879\u76EE</p><ul><li><code>\u6545\u969C\u65F6\u89E6\u53D1\u4EFB\u52A1</code> \u5F53\u62A5\u8B66\u72B6\u6001\u7B26\u5408\u4ECE\u201C\u6B63\u5E38\u201D\u53D8\u66F4\u4E3A\u201C\u6545\u969C\u201D\u65F6\uFF0C\u6240\u8981\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u4EFB\u52A1\u5E94\u63D0\u524D\u5728\u4EFB\u52A1\u9875\u8BBE\u7F6E</li><li><code>\u6062\u590D\u65F6\u89E6\u53D1\u4EFB\u52A1</code> \u5F53\u62A5\u8B66\u72B6\u6001\u7B26\u5408\u4ECE\u201C\u6545\u969C\u201D\u6062\u590D\u4E3A\u201C\u6B63\u5E38\u201D\u65F6\uFF0C\u6240\u8981\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u4EFB\u52A1\u5E94\u63D0\u524D\u5728\u4EFB\u52A1\u9875\u8BBE\u7F6E</li></ul>',27),r=[u];function c(d,a,n,q,s,p){return t(),e("div",null,r)}var _=o(i,[["render",c]]);export{g as __pageData,_ as default};
