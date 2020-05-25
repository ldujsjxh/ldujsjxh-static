<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Bootstrap - 简洁、直观、强悍、移动设备优先的前端开发框架，让web开发更迅速、简单。">
<meta name="keywords" content="HTML, CSS, JS, JavaScript, framework, bootstrap, front-end, frontend, web development">
<meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
<meta name="author" content="译者：王赛 <wangsai@bootcss.com>">

<title>
  
    JavaScript 插件 &middot; Bootstrap v3 中文文档
  
</title>

<!-- Bootstrap core CSS -->

<link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">


  <!-- Optional Bootstrap Theme -->

  <link href="data:text/css;charset=utf-8," data-href="../dist/css/bootstrap-theme.min.css" rel="stylesheet" id="bs-theme-stylesheet">



<!-- Documentation extras -->

<link href="../assets/css/docs.min.css" rel="stylesheet">

<link href="../assets/css/patch.css" rel="stylesheet">
<!--[if lt IE 9]><script src="../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
<script src="../assets/js/ie-emulation-modes-warning.js"></script>

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
  <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
<![endif]-->

<!-- Favicons -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="icon" href="/favicon.ico">

<!-- Analytics
================================================== -->
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?bdb993b828cbe079a7fbc1a951f44726";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>

  </head>
  <body>
    <a id="skippy" class="sr-only sr-only-focusable" href="#content"><div class="container"><span class="skiplink-text">Skip to main content</span></div></a>

    <!-- Docs master nav -->
    <header class="navbar navbar-static-top bs-docs-nav" id="top">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="../" class="navbar-brand">Bootstrap</a>
    </div>
    <nav id="bs-navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li>
          <a href="../getting-started/" onclick="_hmt.push(['_trackEvent', 'docv3-navbar', 'click', 'V3导航-起步'])">起步</a>
        </li>
        <li>
          <a href="../css/" onclick="_hmt.push(['_trackEvent', 'docv3-navbar', 'click', 'V3导航-全局CSS样式'])">全局 CSS 样式</a>
        </li>
        <li>
          <a href="../components/" onclick="_hmt.push(['_trackEvent', 'docv3-navbar', 'click', 'V3导航-组件'])">组件</a>
        </li>
        <li class="active">
          <a href="../javascript/" onclick="_hmt.push(['_trackEvent', 'docv3-navbar', 'click', 'V3导航-JavaScript插件'])">JavaScript 插件</a>
        </li>
        <li>
          <a href="../customize/" onclick="_hmt.push(['_trackEvent', 'docv3-navbar', 'click', 'V3导航-定制'])">定制</a>
        </li>
        <li><a class="reddot" href="http://www.youzhan.org" onclick="_hmt.push(['_trackEvent', 'docv3-navbar', 'click', 'V3导航-网站实例'])" target="_blank">网站实例</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <!-- <li><a href="http://mb.bootcss.com" onclick="_hmt.push(['_trackEvent', 'docv3-navbar', 'click', 'themes'])" target="_blank">主题/模板</a></li> -->
        <li><a href="http://www.bootcss.com/" onclick="_hmt.push(['_trackEvent', 'docv3-navbar', 'click', 'V3导航-Bootstrap中文网'])" target="_blank">Bootstrap中文网</a></li>
      </ul>
    </nav>
  </div>
</header>


    <!-- Docs page layout -->
    <div class="bs-docs-header" id="content" tabindex="-1">
      <div class="container">
        <h1>JavaScript 插件</h1>
        <p>jQuery 插件为 Bootstrap 的组件赋予了“生命”。可以简单地一次性引入所有插件，或者逐个引入到你的页面中。</p>
        
      </div>
    </div>

    <div class="container bs-docs-container">

      <div class="row">
        <div class="col-md-9" role="main">
          <div class="bs-docs-section">
  <h1 id="js-overview" class="page-header">概览</h1>

  <h2 id="js-individual-compiled">单个还是全部引入</h2>
  <p>JavaScript 插件可以单个引入（使用 Bootstrap 提供的单个 <code>*.js</code> 文件），或者一次性全部引入（使用 <code>bootstrap.js</code> 或压缩版的 <code>bootstrap.min.js</code>）。</p>

  <div class="bs-callout bs-callout-danger" id="callout-overview-not-both">
    <h4>建议使用压缩版的 JavaScript 文件</h4>
    <p><code>bootstrap.js</code> 和 <code>bootstrap.min.js</code> 都包含了所有插件，你在使用时，只需选择一个引入页面就可以了。</p>
  </div>

  <div class="bs-callout bs-callout-danger" id="callout-overview-dependencies">
    <h4>插件之间的依赖关系</h4>
    <p>某些插件和 CSS 组件依赖于其它插件。如果你是单个引入每个插件的，请确保在文档中检查插件之间的依赖关系。注意，所有插件都依赖 jQuery （也就是说，jQuery必须在所有插件<strong>之前</strong>引入页面）。 <a href="https://github.com/twbs/bootstrap/blob/v3.3.7/bower.json"><code>bower.json</code></a> 文件中列出了 Bootstrap 所支持的 jQuery 版本。</p>
  </div>

  <h2 id="js-data-attrs">data 属性</h2>
  <p>你可以仅仅通过 data 属性 API 就能使用所有的 Bootstrap 插件，无需写一行 JavaScript 代码。这是 Bootstrap 中的一等 API，也应该是你的首选方式。</p>

  <p>话又说回来，在某些情况下可能需要将此功能关闭。因此，我们还提供了关闭 data 属性 API 的方法，即解除以 <code>data-api</code> 为命名空间并绑定在文档上的事件。就像下面这样：</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">off</span><span class="p">(</span><span class="s1">'.data-api'</span><span class="p">)</span></code></pre></figure>

  <p>另外，如果是针对某个特定的插件，只需在 <code>data-api</code> 前面添加那个插件的名称作为命名空间，如下：</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">off</span><span class="p">(</span><span class="s1">'.alert.data-api'</span><span class="p">)</span></code></pre></figure>

  <div class="bs-callout bs-callout-danger" id="callout-overview-single-data">
    <h4>Only one plugin per element via data attributes</h4>
    <p>Don't use data attributes from multiple plugins on the same element. For example, a button cannot both have a tooltip and toggle a modal. To accomplish this, use a wrapping element.</p>
  </div>

  <h2 id="js-programmatic-api">编程方式的 API</h2>
  <p>我们为所有 Bootstrap 插件提供了纯 JavaScript 方式的 API。所有公开的 API 都是支持单独或链式调用方式，并且返回其所操作的元素集合（注：和jQuery的调用形式一致）。</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'.btn.danger'</span><span class="p">).</span><span class="nx">button</span><span class="p">(</span><span class="s1">'toggle'</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">'fat'</span><span class="p">)</span></code></pre></figure>

  <p>所有方法都可以接受一个可选的 option 对象作为参数，或者一个代表特定方法的字符串，或者什么也不提供（在这种情况下，插件将会以默认值初始化）：</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myModal'</span><span class="p">).</span><span class="nx">modal</span><span class="p">()</span>                      <span class="c1">// 以默认值初始化</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">'#myModal'</span><span class="p">).</span><span class="nx">modal</span><span class="p">({</span> <span class="na">keyboard</span><span class="p">:</span> <span class="kc">false</span> <span class="p">})</span>   <span class="c1">// initialized with no keyboard</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">'#myModal'</span><span class="p">).</span><span class="nx">modal</span><span class="p">(</span><span class="s1">'show'</span><span class="p">)</span>                <span class="c1">// 初始化后立即调用 show 方法</span></code></pre></figure>

  <p>每个插件还通过 <code>Constructor</code> 属性暴露了其原始的构造函数：<code>$.fn.popover.Constructor</code>。如果你想获取某个插件的实例，可以直接通过页面元素获取：<code>$('[rel="popover"]').data('popover')</code>。</p>

  <h4>默认设置</h4>
  <p>每个插件都可以通过修改其自身的 <code>Constructor.DEFAULTS</code> 对象从而改变插件的默认设置：</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">modal</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">DEFAULTS</span><span class="p">.</span><span class="nx">keyboard</span> <span class="o">=</span> <span class="kc">false</span> <span class="c1">// 将模态框插件的 `keyboard` 默认选参数置为 false</span></code></pre></figure>

  <h2 id="js-noconflict">避免命名空间冲突</h2>
  <p>某些时候可能需要将 Bootstrap 插件与其他 UI 框架共同使用。在这种情况下，命名空间冲突随时可能发生。如果不幸发生了这种情况，你可以通过调用插件的 <code>.noConflict</code> 方法恢复其原始值。</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="kd">var</span> <span class="nx">bootstrapButton</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">button</span><span class="p">.</span><span class="nx">noConflict</span><span class="p">()</span> <span class="c1">// return $.fn.button to previously assigned value</span>
<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">bootstrapBtn</span> <span class="o">=</span> <span class="nx">bootstrapButton</span>            <span class="c1">// give $().bootstrapBtn the Bootstrap functionality</span></code></pre></figure>

  <h2 id="js-events">事件</h2>
  <p>Bootstrap 为大部分插件所具有的动作提供了自定义事件。一般来说，这些事件都有不定式和过去式两种动词的命名形式，例如，不定式形式的动词（例如 <code>show</code>）表示其在事件开始时被触发；而过去式动词（例如 <code>shown</code> ）表示在动作执行完毕之后被触发。</p>
  <p>从 3.0.0 版本开始，所有 Bootstrap 事件的名称都采用命名空间方式。</p>
  <p>所有以不定式形式的动词命名的事件都提供了 <code>preventDefault</code> 功能。这就赋予你在动作开始执行前将其停止的能力。</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myModal'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">'show.bs.modal'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span>
  <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">data</span><span class="p">)</span> <span class="k">return</span> <span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">()</span> <span class="c1">// 阻止模态框的展示</span>
<span class="p">})</span></code></pre></figure>

  <h2 id="js-version-nums">版本号</h2>
  <p>每个 Bootstrap 的 jQuery 插件的版本号都可以通过插件的构造函数上的 <code>VERSION</code> 属性获取到。例如工具提示框（tooltip）插件：</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tooltip</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">VERSION</span> <span class="c1">// =&gt; "3.3.7"</span></code></pre></figure>

  <h2 id="js-disabled">未对禁用 JavaScript 的浏览器提供补救措施</h2>
  <p>Bootstrap 插件未对禁用 JavaScript 的浏览器提供补救措施。如果你对这种情况下的用户体验很关心的话，请添加 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript"><code>&lt;noscript&gt;</code></a> 标签向你的用户进行解释（并告诉他们如何启用 JavaScript），或者按照你自己的方式提供补救措施。</p>

  <div class="bs-callout bs-callout-warning" id="callout-third-party-libs">
    <h4>第三方工具库</h4>
    <p><strong>Bootstrap 官方不提供对第三方 JavaScript 工具库的支持，</strong>例如 Prototype 或 jQuery UI。除了 <code>.noConflict</code> 和为事件名称添加命名空间，还可能会有兼容性方面的问题，这就需要你自己来处理了。</p>
  </div>
</div>

<div class="bs-docs-section">
  <h1 id="transitions" class="page-header">过渡效果 <small>transition.js</small></h1>

  <h2>关于过渡效果</h2>
  <p>对于简单的过渡效果，只需将 <code>transition.js</code> 和其它 JS 文件一起引入即可。如果你使用的是编译（或压缩）版的 <code>bootstrap.js</code> 文件，就无需再单独将其引入了。</p>

  <h2>包含的内容</h2>
  <p>Transition.js 是针对 <code>transitionEnd</code> 事件的一个基本辅助工具，也是对 CSS 过渡效果的模拟。它被其它插件用来检测当前浏览器对是否支持 CSS 的过渡效果。</p>

  <h2>禁用过度效果</h2>
  <p>通过下面的 JavaScript 代码可以在全局范围禁用过渡效果，并且必须将此代码放在 <code>transition.js</code> （或 <code>bootstrap.js</code> 或 <code>bootstrap.min.js</code>）后面，确保在 js 文件加载完毕后再执行下面的代码：</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">transition</span> <span class="o">=</span> <span class="kc">false</span></code></pre></figure>
</div>

<div class="bs-docs-section">
  <h1 id="modals" class="page-header">模态框 <small>modal.js</small></h1>
  <p>模态框经过了优化，更加灵活，以弹出对话框的形式出现，具有最小和最实用的功能集。</p>

  <div class="bs-callout bs-callout-warning" id="callout-stacked-modals">
    <h4>不支持同时打开多个模态框</h4>
    <p>千万不要在一个模态框上重叠另一个模态框。要想同时支持多个模态框，需要自己写额外的代码来实现。</p>
  </div>
  <div class="bs-callout bs-callout-warning" id="callout-modal-markup-placement">
    <h4>模态框的 HTML 代码放置的位置</h4>
    <p>务必将模态框的 HTML 代码放在文档的最高层级内（也就是说，尽量作为 body 标签的直接子元素），以避免其他组件影响模态框的展现和/或功能。</p>
  </div>
  <div class="bs-callout bs-callout-warning" id="callout-modal-mobile-caveats">
    <h4>对于移动设备的附加说明</h4>
    <p>这里提供了在移动设备上使用模态框有一些附加说明。请参考<a href="../getting-started/#support-fixed-position-keyboards">浏览器支持</a>章节。</p>
  </div>

  <p><strong class="text-danger">Due to how HTML5 defines its semantics, the <code>autofocus</code> HTML attribute has no effect in Bootstrap modals.</strong> To achieve the same effect, use some custom JavaScript:</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myModal'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">'shown.bs.modal'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
  <span class="nx">$</span><span class="p">(</span><span class="s1">'#myInput'</span><span class="p">).</span><span class="nx">focus</span><span class="p">()</span>
<span class="p">})</span></code></pre></figure>

  <h2 id="modals-examples">实例</h2>

  <h3>静态实例</h3>
  <p>以下模态框包含了模态框的头、体和一组放置于底部的按钮。</p>
  <div class="bs-example bs-example-modal" data-example-id="static-modal">
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Modal title</h4>
          </div>
          <div class="modal-body">
            <p>One fine body&hellip;</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
  </div><!-- /example -->
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal fade"</span> <span class="na">tabindex=</span><span class="s">"-1"</span> <span class="na">role=</span><span class="s">"dialog"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-dialog"</span> <span class="na">role=</span><span class="s">"document"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-content"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-header"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"close"</span> <span class="na">data-dismiss=</span><span class="s">"modal"</span> <span class="na">aria-label=</span><span class="s">"Close"</span><span class="nt">&gt;&lt;span</span> <span class="na">aria-hidden=</span><span class="s">"true"</span><span class="nt">&gt;</span><span class="ni">&amp;times;</span><span class="nt">&lt;/span&gt;&lt;/button&gt;</span>
        <span class="nt">&lt;h4</span> <span class="na">class=</span><span class="s">"modal-title"</span><span class="nt">&gt;</span>Modal title<span class="nt">&lt;/h4&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-body"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;p&gt;</span>One fine body<span class="ni">&amp;hellip;</span><span class="nt">&lt;/p&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-footer"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">data-dismiss=</span><span class="s">"modal"</span><span class="nt">&gt;</span>Close<span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">&gt;</span>Save changes<span class="nt">&lt;/button&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span><span class="c">&lt;!-- /.modal-content --&gt;</span>
  <span class="nt">&lt;/div&gt;</span><span class="c">&lt;!-- /.modal-dialog --&gt;</span>
<span class="nt">&lt;/div&gt;</span><span class="c">&lt;!-- /.modal --&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>

  <h3>动态实例</h3>
  <p>点击下面的按钮即可通过 JavaScript 启动一个模态框。此模态框将从上到下、逐渐浮现到页面前。</p>
  <!-- sample modal content -->
  <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Modal title</h4>
        </div>
        <div class="modal-body">
          <h4>Text in a modal</h4>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

          <h4>Popover in a modal</h4>
          <p>This <a href="#" role="button" class="btn btn-default popover-test" title="A Title" data-content="And here's some amazing content. It's very engaging. right?">button</a> should trigger a popover on click.</p>

          <h4>Tooltips in a modal</h4>
          <p><a href="#" class="tooltip-test" title="Tooltip">This link</a> and <a href="#" class="tooltip-test" title="Tooltip">that link</a> should have tooltips on hover.</p>

          <hr>

          <h4>Overflowing text to show scroll behavior</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>

      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->

  <div class="bs-example bs-example-padded-bottom">
    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
      Launch demo modal
    </button>
  </div><!-- /example -->
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="c">&lt;!-- Button trigger modal --&gt;</span>
<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary btn-lg"</span> <span class="na">data-toggle=</span><span class="s">"modal"</span> <span class="na">data-target=</span><span class="s">"#myModal"</span><span class="nt">&gt;</span>
  Launch demo modal
<span class="nt">&lt;/button&gt;</span>

<span class="c">&lt;!-- Modal --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal fade"</span> <span class="na">id=</span><span class="s">"myModal"</span> <span class="na">tabindex=</span><span class="s">"-1"</span> <span class="na">role=</span><span class="s">"dialog"</span> <span class="na">aria-labelledby=</span><span class="s">"myModalLabel"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-dialog"</span> <span class="na">role=</span><span class="s">"document"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-content"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-header"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"close"</span> <span class="na">data-dismiss=</span><span class="s">"modal"</span> <span class="na">aria-label=</span><span class="s">"Close"</span><span class="nt">&gt;&lt;span</span> <span class="na">aria-hidden=</span><span class="s">"true"</span><span class="nt">&gt;</span><span class="ni">&amp;times;</span><span class="nt">&lt;/span&gt;&lt;/button&gt;</span>
        <span class="nt">&lt;h4</span> <span class="na">class=</span><span class="s">"modal-title"</span> <span class="na">id=</span><span class="s">"myModalLabel"</span><span class="nt">&gt;</span>Modal title<span class="nt">&lt;/h4&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-body"</span><span class="nt">&gt;</span>
        ...
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-footer"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">data-dismiss=</span><span class="s">"modal"</span><span class="nt">&gt;</span>Close<span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">&gt;</span>Save changes<span class="nt">&lt;/button&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>

  <div class="bs-callout bs-callout-warning" id="callout-modal-accessibility">
    <h4>增强模态框的可访问性</h4>
    <p>务必为 <code>.modal</code> 添加 <code>role="dialog"</code> 和 <code>aria-labelledby="..."</code> 属性，用于指向模态框的标题栏；为 <code>.modal-dialog</code> 添加 <code>aria-hidden="true"</code> 属性。</p>
    <p>另外，你还应该通过 <code>aria-describedby</code> 属性为模态框 <code>.modal</code> 添加描述性信息。</p>
  </div>

  <div class="bs-callout bs-callout-info" id="callout-modal-youtube">
    <h4>嵌入 YouTube 视频（天朝无用）</h4>
    <p>在模态框中嵌入 YouTube 视频需要增加一些额外的 JavaScript 代码，用于自动停止重放等功能，这些代码并没有在 Bootstrap 中提供。请参考这份<a href="https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal">发布在 Stack Overflow 上的文章</a>。</p>
  </div>

  <h2 id="modals-sizes">可选尺寸</h2>
  <p>模态框提供了两个可选尺寸，通过为 <code>.modal-dialog</code> 增加一个样式调整类实现。</p>
  <div class="bs-example">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">大模态框</button>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">小模态框</button>
  </div>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="c">&lt;!-- Large modal --&gt;</span>
<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span> <span class="na">data-toggle=</span><span class="s">"modal"</span> <span class="na">data-target=</span><span class="s">".bs-example-modal-lg"</span><span class="nt">&gt;</span>Large modal<span class="nt">&lt;/button&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal fade bs-example-modal-lg"</span> <span class="na">tabindex=</span><span class="s">"-1"</span> <span class="na">role=</span><span class="s">"dialog"</span> <span class="na">aria-labelledby=</span><span class="s">"myLargeModalLabel"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-dialog modal-lg"</span> <span class="na">role=</span><span class="s">"document"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-content"</span><span class="nt">&gt;</span>
      ...
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>

<span class="c">&lt;!-- Small modal --&gt;</span>
<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span> <span class="na">data-toggle=</span><span class="s">"modal"</span> <span class="na">data-target=</span><span class="s">".bs-example-modal-sm"</span><span class="nt">&gt;</span>Small modal<span class="nt">&lt;/button&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal fade bs-example-modal-sm"</span> <span class="na">tabindex=</span><span class="s">"-1"</span> <span class="na">role=</span><span class="s">"dialog"</span> <span class="na">aria-labelledby=</span><span class="s">"mySmallModalLabel"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-dialog modal-sm"</span> <span class="na">role=</span><span class="s">"document"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-content"</span><span class="nt">&gt;</span>
      ...
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>

  <!--  Modal content for the above example -->
  <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">

        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myLargeModalLabel">Large modal</h4>
        </div>
        <div class="modal-body">
          ...
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
  <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">

        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="mySmallModalLabel">Small modal</h4>
        </div>
        <div class="modal-body">
          ...
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->

  <h2 id="modals-remove-animation">禁止动画效果</h2>
  <p>如果你不需要模态框弹出时的动画效果（淡入淡出效果），删掉 <code>.fade</code> 类即可。</p>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal"</span> <span class="na">tabindex=</span><span class="s">"-1"</span> <span class="na">role=</span><span class="s">"dialog"</span> <span class="na">aria-labelledby=</span><span class="s">"..."</span><span class="nt">&gt;</span>
  ...
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

  <h2 id="modals-grid-system">Using the grid system</h2>
  <p>To take advantage of the Bootstrap grid system within a modal, just nest <code>.row</code>s within the <code>.modal-body</code> and then use the normal grid system classes.</p>
<!-- sample modal content -->
  <div id="gridSystemModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="gridModalLabel">Modal title</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>
          </div>
          <div class="row">
            <div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
            <div class="col-md-2 col-md-offset-4">.col-md-2 .col-md-offset-4</div>
          </div>
          <div class="row">
            <div class="col-md-6 col-md-offset-3">.col-md-6 .col-md-offset-3</div>
          </div>
          <div class="row">
            <div class="col-sm-9">
              Level 1: .col-sm-9
              <div class="row">
                <div class="col-xs-8 col-sm-6">
                  Level 2: .col-xs-8 .col-sm-6
                </div>
                <div class="col-xs-4 col-sm-6">
                  Level 2: .col-xs-4 .col-sm-6
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
<div class="bs-example bs-example-padded-bottom">
  <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#gridSystemModal">
    Launch demo modal
  </button>
</div><!-- /example -->
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal fade"</span> <span class="na">tabindex=</span><span class="s">"-1"</span> <span class="na">role=</span><span class="s">"dialog"</span> <span class="na">aria-labelledby=</span><span class="s">"gridSystemModalLabel"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-dialog"</span> <span class="na">role=</span><span class="s">"document"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-content"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-header"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"close"</span> <span class="na">data-dismiss=</span><span class="s">"modal"</span> <span class="na">aria-label=</span><span class="s">"Close"</span><span class="nt">&gt;&lt;span</span> <span class="na">aria-hidden=</span><span class="s">"true"</span><span class="nt">&gt;</span><span class="ni">&amp;times;</span><span class="nt">&lt;/span&gt;&lt;/button&gt;</span>
        <span class="nt">&lt;h4</span> <span class="na">class=</span><span class="s">"modal-title"</span> <span class="na">id=</span><span class="s">"gridSystemModalLabel"</span><span class="nt">&gt;</span>Modal title<span class="nt">&lt;/h4&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-body"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-4"</span><span class="nt">&gt;</span>.col-md-4<span class="nt">&lt;/div&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-4 col-md-offset-4"</span><span class="nt">&gt;</span>.col-md-4 .col-md-offset-4<span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-3 col-md-offset-3"</span><span class="nt">&gt;</span>.col-md-3 .col-md-offset-3<span class="nt">&lt;/div&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-2 col-md-offset-4"</span><span class="nt">&gt;</span>.col-md-2 .col-md-offset-4<span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-6 col-md-offset-3"</span><span class="nt">&gt;</span>.col-md-6 .col-md-offset-3<span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-9"</span><span class="nt">&gt;</span>
            Level 1: .col-sm-9
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
              <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-xs-8 col-sm-6"</span><span class="nt">&gt;</span>
                Level 2: .col-xs-8 .col-sm-6
              <span class="nt">&lt;/div&gt;</span>
              <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-xs-4 col-sm-6"</span><span class="nt">&gt;</span>
                Level 2: .col-xs-4 .col-sm-6
              <span class="nt">&lt;/div&gt;</span>
            <span class="nt">&lt;/div&gt;</span>
          <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-footer"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">data-dismiss=</span><span class="s">"modal"</span><span class="nt">&gt;</span>Close<span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">&gt;</span>Save changes<span class="nt">&lt;/button&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span><span class="c">&lt;!-- /.modal-content --&gt;</span>
  <span class="nt">&lt;/div&gt;</span><span class="c">&lt;!-- /.modal-dialog --&gt;</span>
<span class="nt">&lt;/div&gt;</span><span class="c">&lt;!-- /.modal --&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>

  <h2 id="modals-related-target">Varying modal content based on trigger button</h2>
  <p>Have a bunch of buttons that all trigger the same modal, just with slightly different contents? Use <code>event.relatedTarget</code> and <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes">HTML <code>data-*</code> attributes</a> (possibly <a href="http://api.jquery.com/data/">via jQuery</a>) to vary the contents of the modal depending on which button was clicked. See the Modal Events docs for details on <code>relatedTarget</code>,</p>
  <div class="bs-example">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Open modal for @fat</button>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>
    ...more buttons...

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="exampleModalLabel">New message</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="control-label">Recipient:</label>
                <input type="text" class="form-control" id="recipient-name">
              </div>
              <div class="form-group">
                <label for="message-text" class="control-label">Message:</label>
                <textarea class="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Send message</button>
          </div>
        </div>
      </div>
    </div><!-- /.modal -->
  </div><!-- /.bs-example -->
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span> <span class="na">data-toggle=</span><span class="s">"modal"</span> <span class="na">data-target=</span><span class="s">"#exampleModal"</span> <span class="na">data-whatever=</span><span class="s">"@mdo"</span><span class="nt">&gt;</span>Open modal for @mdo<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span> <span class="na">data-toggle=</span><span class="s">"modal"</span> <span class="na">data-target=</span><span class="s">"#exampleModal"</span> <span class="na">data-whatever=</span><span class="s">"@fat"</span><span class="nt">&gt;</span>Open modal for @fat<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span> <span class="na">data-toggle=</span><span class="s">"modal"</span> <span class="na">data-target=</span><span class="s">"#exampleModal"</span> <span class="na">data-whatever=</span><span class="s">"@getbootstrap"</span><span class="nt">&gt;</span>Open modal for @getbootstrap<span class="nt">&lt;/button&gt;</span>
...more buttons...

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal fade"</span> <span class="na">id=</span><span class="s">"exampleModal"</span> <span class="na">tabindex=</span><span class="s">"-1"</span> <span class="na">role=</span><span class="s">"dialog"</span> <span class="na">aria-labelledby=</span><span class="s">"exampleModalLabel"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-dialog"</span> <span class="na">role=</span><span class="s">"document"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-content"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-header"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"close"</span> <span class="na">data-dismiss=</span><span class="s">"modal"</span> <span class="na">aria-label=</span><span class="s">"Close"</span><span class="nt">&gt;&lt;span</span> <span class="na">aria-hidden=</span><span class="s">"true"</span><span class="nt">&gt;</span><span class="ni">&amp;times;</span><span class="nt">&lt;/span&gt;&lt;/button&gt;</span>
        <span class="nt">&lt;h4</span> <span class="na">class=</span><span class="s">"modal-title"</span> <span class="na">id=</span><span class="s">"exampleModalLabel"</span><span class="nt">&gt;</span>New message<span class="nt">&lt;/h4&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-body"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;form&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"recipient-name"</span> <span class="na">class=</span><span class="s">"control-label"</span><span class="nt">&gt;</span>Recipient:<span class="nt">&lt;/label&gt;</span>
            <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"recipient-name"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;/div&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"message-text"</span> <span class="na">class=</span><span class="s">"control-label"</span><span class="nt">&gt;</span>Message:<span class="nt">&lt;/label&gt;</span>
            <span class="nt">&lt;textarea</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"message-text"</span><span class="nt">&gt;&lt;/textarea&gt;</span>
          <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;/form&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"modal-footer"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">data-dismiss=</span><span class="s">"modal"</span><span class="nt">&gt;</span>Close<span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">&gt;</span>Send message<span class="nt">&lt;/button&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#exampleModal'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">'show.bs.modal'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span>
  <span class="kd">var</span> <span class="nx">button</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">relatedTarget</span><span class="p">)</span> <span class="c1">// Button that triggered the modal</span>
  <span class="kd">var</span> <span class="nx">recipient</span> <span class="o">=</span> <span class="nx">button</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">'whatever'</span><span class="p">)</span> <span class="c1">// Extract info from data-* attributes</span>
  <span class="c1">// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).</span>
  <span class="c1">// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.</span>
  <span class="kd">var</span> <span class="nx">modal</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span>
  <span class="nx">modal</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">'.modal-title'</span><span class="p">).</span><span class="nx">text</span><span class="p">(</span><span class="s1">'New message to '</span> <span class="o">+</span> <span class="nx">recipient</span><span class="p">)</span>
  <span class="nx">modal</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">'.modal-body input'</span><span class="p">).</span><span class="nx">val</span><span class="p">(</span><span class="nx">recipient</span><span class="p">)</span>
<span class="p">})</span></code></pre></figure>

  <h2 id="modals-usage">用法</h2>
  <p>通过 data 属性或 JavaScript 调用模态框插件，可以根据需要动态展示隐藏的内容。模态框弹出时还会为 <code>&lt;body&gt;</code> 元素添加 <code>.modal-open</code> 类，从而覆盖页面默认的滚动行为，并且还会自动生成一个 <code>.modal-backdrop</code> 元素用于提供一个可点击的区域，点击此区域就即可关闭模态框。</p>

  <h3>通过 data 属性</h3>
  <p>不需写 JavaScript 代码也可激活模态框。通过在一个起控制器作用的元素（例如：按钮）上添加 <code>data-toggle="modal"</code> 属性，或者 <code>data-target="#foo"</code> 属性，再或者 <code>href="#foo"</code> 属性，用于指向被控制的模态框。</p>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">data-toggle=</span><span class="s">"modal"</span> <span class="na">data-target=</span><span class="s">"#myModal"</span><span class="nt">&gt;</span>Launch modal<span class="nt">&lt;/button&gt;</span></code></pre></figure>

  <h3>通过 JavaScript 调用</h3>
  <p>只需一行 JavaScript 代码，即可通过元素的 id <code>myModal</code> 调用模态框：</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myModal'</span><span class="p">).</span><span class="nx">modal</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span></code></pre></figure>

  <h3 id="modals-options">参数</h3>
  <p>可以将选项通过 data 属性或 JavaScript 代码传递。对于 data 属性，需要将参数名称放到 <code>data-</code> 之后，例如 <code>data-backdrop=""</code>。</p>
  <div class="table-responsive">
    <table class="table table-bordered table-striped js-options-table">
      <thead>
       <tr>
         <th>名称</th>
         <th>类型</th>
         <th>默认值</th>
         <th>描述</th>
       </tr>
      </thead>
      <tbody>
       <tr>
         <td>backdrop</td>
         <td>boolean 或 字符串 <code>'static'</code></td>
         <td>true</td>
         <td>Includes a modal-backdrop element. Alternatively, specify <code>static</code> for a backdrop which doesn't close the modal on click.</td>
       </tr>
       <tr>
         <td>keyboard</td>
         <td>boolean</td>
         <td>true</td>
         <td>键盘上的 esc 键被按下时关闭模态框。</td>
       </tr>
       <tr>
         <td>show</td>
         <td>boolean</td>
         <td>true</td>
         <td>模态框初始化之后就立即显示出来。</td>
       </tr>
       <tr>
         <td>remote</td>
         <td>path</td>
         <td>false</td>
         <td>
          <p><strong class="text-danger">This option is deprecated since v3.3.0 and has been removed in v4.</strong> We recommend instead using client-side templating or a data binding framework, or calling <a href="http://api.jquery.com/load/">jQuery.load</a> yourself.</p>
          <p>如果提供的是 URL，将利用 jQuery 的 <code>load</code> 方法<strong>从此 URL 地址加载要展示的内容（只加载一次）</strong>并插入 <code>.modal-content</code> 内。如果使用的是 data 属性 API，还可以利用 <code>href</code> 属性指定内容来源地址。下面是一个实例：</p>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;a</span> <span class="na">data-toggle=</span><span class="s">"modal"</span> <span class="na">href=</span><span class="s">"remote.html"</span> <span class="na">data-target=</span><span class="s">"#modal"</span><span class="nt">&gt;</span>Click me<span class="nt">&lt;/a&gt;</span></code></pre></figure>
         </td>
       </tr>
      </tbody>
    </table>
  </div><!-- /.table-responsive -->

  <h3 id="modals-methods">方法</h3>

  <h4><code>.modal(options)</code></h4>
  <p>将页面中的某块内容作为模态框激活。接受可选参数 <code>object</code>。</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myModal'</span><span class="p">).</span><span class="nx">modal</span><span class="p">({</span>
  <span class="na">keyboard</span><span class="p">:</span> <span class="kc">false</span>
<span class="p">})</span></code></pre></figure>

  <h4><code>.modal('toggle')</code></h4>
  <p>手动打开或关闭模态框。<strong>在模态框显示或隐藏之前返回到主调函数中</strong>（也就是，在触发 <code>shown.bs.modal</code> 或 <code>hidden.bs.modal</code> 事件之前）。</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myModal'</span><span class="p">).</span><span class="nx">modal</span><span class="p">(</span><span class="s1">'toggle'</span><span class="p">)</span></code></pre></figure>

  <h4><code>.modal('show')</code></h4>
  <p>手动打开模态框。<strong>在模态框显示之前返回到主调函数中</strong> （也就是，在触发 <code>shown.bs.modal</code> 事件之前）。</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myModal'</span><span class="p">).</span><span class="nx">modal</span><span class="p">(</span><span class="s1">'show'</span><span class="p">)</span></code></pre></figure>

  <h4><code>.modal('hide')</code></h4>
  <p>手动隐藏模态框。<strong>在模态框隐藏之前返回到主调函数中</strong> （也就是，在触发 <code>hidden.bs.modal</code> 事件之前）。</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myModal'</span><span class="p">).</span><span class="nx">modal</span><span class="p">(</span><span class="s1">'hide'</span><span class="p">)</span></code></pre></figure>

  <h4><code>.modal('handleUpdate')</code></h4>
  <p>Readjusts the modal's positioning to counter a scrollbar in case one should appear, which would make the modal jump to the left.</p>
  <p>Only needed when the height of the modal changes while it is open.</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myModal'</span><span class="p">).</span><span class="nx">modal</span><span class="p">(</span><span class="s1">'handleUpdate'</span><span class="p">)</span></code></pre></figure>

  <h3 id="modals-events">事件</h3>
  <p>Bootstrap 的模态框类提供了一些事件用于监听并执行你自己的代码。</p>
  <p>All modal events are fired at the modal itself (i.e. at the <code>&lt;div class="modal"&gt;</code>).</p>
  <div class="table-responsive">
    <table class="table table-bordered table-striped bs-events-table">
      <thead>
       <tr>
         <th>事件类型</th>
         <th>描述</th>
       </tr>
      </thead>
      <tbody>
       <tr>
         <td>show.bs.modal</td>
         <td><code>show</code> 方法调用之后立即触发该事件。如果是通过点击某个作为触发器的元素，则此元素可以通过事件的 <code>relatedTarget</code> 属性进行访问。</td>
       </tr>
       <tr>
         <td>shown.bs.modal</td>
         <td>此事件在模态框已经显示出来（并且同时在 CSS 过渡效果完成）之后被触发。如果是通过点击某个作为触发器的元素，则此元素可以通过事件的 <code>relatedTarget</code> 属性进行访问。</td>
       </tr>
       <tr>
         <td>hide.bs.modal</td>
         <td><code>hide</code> 方法调用之后立即触发该事件。</td>
       </tr>
       <tr>
         <td>hidden.bs.modal</td>
         <td>此事件在模态框被隐藏（并且同时在 CSS 过渡效果完成）之后被触发。</td>
       </tr>
       <tr>
         <td>loaded.bs.modal</td>
         <td>从<code>远端的数据源</code>加载完数据之后触发该事件。</td>
       </tr>
      </tbody>
    </table>
  </div><!-- /.table-responsive -->
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myModal'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">'hidden.bs.modal'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span>
  <span class="c1">// do something...</span>
<span class="p">})</span></code></pre></figure>
</div>

<div class="bs-docs-section">
  <h1 id="dropdowns" class="page-header">Dropdowns <small>dropdown.js</small></h1>

  <h2 id="dropdowns-examples">Examples</h2>
  <p>Add dropdown menus to nearly anything with this simple plugin, including the navbar, tabs, and pills.</p>

  <h3>Within a navbar</h3>
  <div class="bs-example">
    <nav id="navbar-example" class="navbar navbar-default navbar-static">
      <div class="container-fluid">
        <div class="navbar-header">
          <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".bs-example-js-navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project Name</a>
        </div>
        <div class="collapse navbar-collapse bs-example-js-navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a id="drop1" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Dropdown
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="drop1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a id="drop2" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Dropdown
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="drop2">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li id="fat-menu" class="dropdown">
              <a id="drop3" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Dropdown
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="drop3">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.nav-collapse -->
      </div><!-- /.container-fluid -->
    </nav> <!-- /navbar-example -->
  </div> <!-- /example -->

  <h3>Within pills</h3>
  <div class="bs-example">
    <ul class="nav nav-pills" role="tablist">
      <li role="presentation" class="active"><a href="#">Regular link</a></li>
      <li role="presentation" class="dropdown">
        <a id="drop4" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          Dropdown
          <span class="caret"></span>
        </a>
        <ul id="menu1" class="dropdown-menu" aria-labelledby="drop4">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </li>
      <li role="presentation" class="dropdown">
        <a id="drop5" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          Dropdown
          <span class="caret"></span>
        </a>
        <ul id="menu2" class="dropdown-menu" aria-labelledby="drop5">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </li>
      <li role="presentation" class="dropdown">
        <a id="drop6" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          Dropdown
          <span class="caret"></span>
        </a>
        <ul id="menu3" class="dropdown-menu" aria-labelledby="drop6">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </li>
    </ul> <!-- /pills -->
  </div> <!-- /example -->


  <h2 id="dropdowns-usage">Usage</h2>
  <p>Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the <code>.open</code> class on the parent list item.</p>
  <p>On mobile devices, opening a dropdown adds a <code>.dropdown-backdrop</code> as a tap area for closing dropdown menus when tapping outside the menu, a requirement for proper iOS support. <strong class="text-danger">This means that switching from an open dropdown menu to a different dropdown menu requires an extra tap on mobile.</strong></p>
  <p>Note: The <code>data-toggle="dropdown"</code> attribute is relied on for closing dropdown menus at an application level, so it's a good idea to always use it.</p>

  <h3>Via data attributes</h3>
  <p>Add <code>data-toggle="dropdown"</code> to a link or button to toggle a dropdown.</p>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"dropdown"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">id=</span><span class="s">"dLabel"</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">data-toggle=</span><span class="s">"dropdown"</span> <span class="na">aria-haspopup=</span><span class="s">"true"</span> <span class="na">aria-expanded=</span><span class="s">"false"</span><span class="nt">&gt;</span>
    Dropdown trigger
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"caret"</span><span class="nt">&gt;&lt;/span&gt;</span>
  <span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"dropdown-menu"</span> <span class="na">aria-labelledby=</span><span class="s">"dLabel"</span><span class="nt">&gt;</span>
    ...
  <span class="nt">&lt;/ul&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
  <p>To keep URLs intact with link buttons, use the <code>data-target</code> attribute instead of <code>href="#"</code>.</p>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"dropdown"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">id=</span><span class="s">"dLabel"</span> <span class="na">data-target=</span><span class="s">"#"</span> <span class="na">href=</span><span class="s">"http://example.com"</span> <span class="na">data-toggle=</span><span class="s">"dropdown"</span> <span class="na">role=</span><span class="s">"button"</span> <span class="na">aria-haspopup=</span><span class="s">"true"</span> <span class="na">aria-expanded=</span><span class="s">"false"</span><span class="nt">&gt;</span>
    Dropdown trigger
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"caret"</span><span class="nt">&gt;&lt;/span&gt;</span>
  <span class="nt">&lt;/a&gt;</span>

  <span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"dropdown-menu"</span> <span class="na">aria-labelledby=</span><span class="s">"dLabel"</span><span class="nt">&gt;</span>
    ...
  <span class="nt">&lt;/ul&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

  <h3>Via JavaScript</h3>
  <p>Call the dropdowns via JavaScript:</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'.dropdown-toggle'</span><span class="p">).</span><span class="nx">dropdown</span><span class="p">()</span></code></pre></figure>
  <div class="bs-callout bs-callout-info" id="callout-dropdowns-data-required">
    <h4><code>data-toggle="dropdown"</code> still required</h4>
    <p>Regardless of whether you call your dropdown via JavaScript or instead use the data-api, <code>data-toggle="dropdown"</code> is always required to be present on the dropdown's trigger element.</p>
  </div>

  <h3 id="dropdowns-options">Options</h3>
  <p><em>None</em></p>

  <h3 id="dropdowns-methods">Methods</h3>
  <h4><code>$().dropdown('toggle')</code></h4>
  <p>Toggles the dropdown menu of a given navbar or tabbed navigation.</p>

  <h3 id="dropdowns-events">Events</h3>
  <p>All dropdown events are fired at the <code>.dropdown-menu</code>'s parent element.</p>
  <p>All dropdown events have a <code>relatedTarget</code> property, whose value is the toggling anchor element.</p>
  <div class="table-responsive">
    <table class="table table-bordered table-striped bs-events-table">
      <thead>
        <tr>
          <th>Event Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>show.bs.dropdown</td>
          <td>This event fires immediately when the show instance method is called.</td>
        </tr>
        <tr>
          <td>shown.bs.dropdown</td>
          <td>This event is fired when the dropdown has been made visible to the user (will wait for CSS transitions, to complete).</td>
        </tr>
        <tr>
          <td>hide.bs.dropdown</td>
          <td>This event is fired immediately when the hide instance method has been called.</td>
        </tr>
        <tr>
          <td>hidden.bs.dropdown</td>
          <td>This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete).</td>
        </tr>
      </tbody>
    </table>
  </div><!-- ./bs-table-responsive -->
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myDropdown'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">'show.bs.dropdown'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
  <span class="c1">// do something…</span>
<span class="p">})</span></code></pre></figure>
</div>

<div class="bs-docs-section">
  <h1 id="scrollspy" class="page-header">滚动监听 <small>scrollspy.js</small></h1>

  <h2 id="scrollspy-examples">导航条实例</h2>
  <p>滚动监听插件是用来根据滚动条所处的位置来自动更新导航项的。如下所示，滚动导航条下面的区域并关注导航项的变化。下拉菜单中的条目也会自动高亮显示。</p>
  <div class="bs-example" data-example-id="embedded-scrollspy">
    <nav id="navbar-example2" class="navbar navbar-default navbar-static">
      <div class="container-fluid">
        <div class="navbar-header">
          <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".bs-example-js-navbar-scrollspy">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project Name</a>
        </div>
        <div class="collapse navbar-collapse bs-example-js-navbar-scrollspy">
          <ul class="nav navbar-nav">
            <li><a href="#fat">@fat</a></li>
            <li><a href="#mdo">@mdo</a></li>
            <li class="dropdown">
              <a href="#" id="navbarDrop1" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu" aria-labelledby="navbarDrop1">
                <li><a href="#one">one</a></li>
                <li><a href="#two">two</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#three">three</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" class="scrollspy-example">
      <h4 id="fat">@fat</h4>
      <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
      <h4 id="mdo">@mdo</h4>
      <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
      <h4 id="one">one</h4>
      <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
      <h4 id="two">two</h4>
      <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
      <h4 id="three">three</h4>
      <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
      <p>Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda. Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor veniam. Anim mollit minim commodo ullamco thundercats.
      </p>
    </div>
  </div><!-- /example -->


  <h2 id="scrollspy-usage">用法</h2>

  <div class="bs-callout bs-callout-warning" id="callout-scrollspy-needs-nav">
    <h4>依赖 Bootstrap 的导航组件</h4>
    <p>滚动监听插件依赖 <a href="../components/#nav">Bootstrap 的导航组件</a> 用于高亮显示当前激活的链接。</p>
  </div>
  <div class="bs-callout bs-callout-danger" id="callout-scrollspy-target-ids">
    <h4>Resolvable ID targets required</h4>
    <p>Navbar links must have resolvable id targets. For example, a <code>&lt;a href="#home"&gt;home&lt;/a&gt;</code> must correspond to something in the DOM like <code>&lt;div id="home"&gt;&lt;/div&gt;</code>.</p>
  </div>
  <div class="bs-callout bs-callout-info" id="callout-scrollspy-invisible-targets">
    <h4>Non-<code>:visible</code> target elements ignored</h4>
    <p>Target elements that are not <a href="http://api.jquery.com/visible-selector/"><code>:visible</code> according to jQuery</a> will be ignored and their corresponding nav items will never be highlighted.</p>
  </div>

  <h3>需要相对定位（relative positioning）</h3>
  <p>无论何种实现方式，滚动监听都需要被监听的组件是 <code>position: relative;</code> 即相对定位方式。大多数时候是监听 <code>&lt;body&gt;</code> 元素。When scrollspying on elements other than the <code>&lt;body&gt;</code>, be sure to have a <code>height</code> set and <code>overflow-y: scroll;</code> applied.</p>

  <h3>通过 data 属性调用</h3>
  <p>To easily add scrollspy behavior to your topbar navigation, add <code>data-spy="scroll"</code> to the element you want to spy on (most typically this would be the <code>&lt;body&gt;</code>). Then add the <code>data-target</code> attribute with the ID or class of the parent element of any Bootstrap <code>.nav</code> component.</p>
<figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="nt">body</span> <span class="p">{</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
<span class="p">}</span></code></pre></figure>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;body</span> <span class="na">data-spy=</span><span class="s">"scroll"</span> <span class="na">data-target=</span><span class="s">"#navbar-example"</span><span class="nt">&gt;</span>
  ...
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"navbar-example"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"nav nav-tabs"</span> <span class="na">role=</span><span class="s">"tablist"</span><span class="nt">&gt;</span>
      ...
    <span class="nt">&lt;/ul&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  ...
<span class="nt">&lt;/body&gt;</span></code></pre></figure>

  <h3>通过 JavaScript 调用</h3>
  <p>在 CSS 中添加 <code>position: relative;</code> 之后，通过 JavaScript 代码启动滚动监听插件：</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'body'</span><span class="p">).</span><span class="nx">scrollspy</span><span class="p">({</span> <span class="na">target</span><span class="p">:</span> <span class="s1">'#navbar-example'</span> <span class="p">})</span></code></pre></figure>


  <h3 id="scrollspy-methods">方法</h3>
  <h4><code>.scrollspy('refresh')</code></h4>
  <p>当使用滚动监听插件的同时在 DOM 中添加或删除元素后，你需要像下面这样调用此刷新（ refresh） 方法：</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'[data-spy="scroll"]'</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
  <span class="kd">var</span> <span class="nx">$spy</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">scrollspy</span><span class="p">(</span><span class="s1">'refresh'</span><span class="p">)</span>
<span class="p">})</span></code></pre></figure>


  <h3 id="scrollspy-options">参数</h3>
  <p>可以通过 data 属性或 JavaScript 传递参数。对于 data 属性，其名称是将参数名附着到 <code>data-</code> 后面组成，例如 <code>data-offset=""</code>。</p>
  <div class="table-responsive">
    <table class="table table-bordered table-striped js-options-table">
      <thead>
       <tr>
         <th>名称</th>
         <th>类型</th>
         <th>默认值</th>
         <th>描述</th>
       </tr>
      </thead>
      <tbody>
       <tr>
         <td>offset</td>
         <td>number</td>
         <td>10</td>
         <td>计算滚动位置时相对于顶部的偏移量（像素数）。</td>
       </tr>
      </tbody>
    </table>
  </div><!-- ./bs-table-responsive -->

  <h3 id="scrollspy-events">事件</h3>
  <div class="table-responsive">
    <table class="table table-bordered table-striped bs-events-table">
      <thead>
       <tr>
         <th>事件类型</th>
         <th>描述</th>
       </tr>
      </thead>
      <tbody>
       <tr>
         <td>activate.bs.scrollspy</td>
         <td>每当一个新条目被激活后都将由滚动监听插件触发此事件。</td>
      </tr>
      </tbody>
    </table>
  </div><!-- ./bs-table-responsive -->
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myScrollspy'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">'activate.bs.scrollspy'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
  <span class="c1">// do something…</span>
<span class="p">})</span></code></pre></figure>
</div>

<div class="bs-docs-section">
  <h1 id="tabs" class="page-header">Togglable tabs <small>tab.js</small></h1>

  <h2 id="tabs-examples">Example tabs</h2>
  <p>Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus. <strong>Nested tabs are not supported.</strong></p>
  <div class="bs-example bs-example-tabs" data-example-id="togglable-tabs">
    <ul id="myTabs" class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Home</a></li>
      <li role="presentation"><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile">Profile</a></li>
      <li role="presentation" class="dropdown">
        <a href="#" id="myTabDrop1" class="dropdown-toggle" data-toggle="dropdown" aria-controls="myTabDrop1-contents">Dropdown <span class="caret"></span></a>
        <ul class="dropdown-menu" aria-labelledby="myTabDrop1" id="myTabDrop1-contents">
          <li><a href="#dropdown1" role="tab" id="dropdown1-tab" data-toggle="tab" aria-controls="dropdown1">@fat</a></li>
          <li><a href="#dropdown2" role="tab" id="dropdown2-tab" data-toggle="tab" aria-controls="dropdown2">@mdo</a></li>
        </ul>
      </li>
    </ul>
    <div id="myTabContent" class="tab-content">
      <div role="tabpanel" class="tab-pane fade in active" id="home" aria-labelledby="home-tab">
        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
      </div>
      <div role="tabpanel" class="tab-pane fade" id="profile" aria-labelledby="profile-tab">
        <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
      </div>
      <div role="tabpanel" class="tab-pane fade" id="dropdown1" aria-labelledby="dropdown1-tab">
        <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
      </div>
      <div role="tabpanel" class="tab-pane fade" id="dropdown2" aria-labelledby="dropdown2-tab">
        <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
      </div>
    </div>
  </div><!-- /example -->

  <div class="bs-callout bs-callout-info" id="callout-tabs-extends-component">
    <h4>Extends tabbed navigation</h4>
    <p>This plugin extends the <a href="../components/#nav-tabs">tabbed navigation component</a> to add tabbable areas.</p>
  </div>


  <h2 id="tabs-usage">Usage</h2>
  <p>Enable tabbable tabs via JavaScript (each tab needs to be activated individually):</p>

<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myTabs a'</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">()</span>
  <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">tab</span><span class="p">(</span><span class="s1">'show'</span><span class="p">)</span>
<span class="p">})</span></code></pre></figure>

  <p>You can activate individual tabs in several ways:</p>

<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myTabs a[href="#profile"]'</span><span class="p">).</span><span class="nx">tab</span><span class="p">(</span><span class="s1">'show'</span><span class="p">)</span> <span class="c1">// Select tab by name</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">'#myTabs a:first'</span><span class="p">).</span><span class="nx">tab</span><span class="p">(</span><span class="s1">'show'</span><span class="p">)</span> <span class="c1">// Select first tab</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">'#myTabs a:last'</span><span class="p">).</span><span class="nx">tab</span><span class="p">(</span><span class="s1">'show'</span><span class="p">)</span> <span class="c1">// Select last tab</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">'#myTabs li:eq(2) a'</span><span class="p">).</span><span class="nx">tab</span><span class="p">(</span><span class="s1">'show'</span><span class="p">)</span> <span class="c1">// Select third tab (0-indexed)</span></code></pre></figure>

  <h3>Markup</h3>
  <p>You can activate a tab or pill navigation without writing any JavaScript by simply specifying <code>data-toggle="tab"</code> or <code>data-toggle="pill"</code> on an element. Adding the <code>nav</code> and <code>nav-tabs</code> classes to the tab <code>ul</code> will apply the Bootstrap <a href="../components/#nav-tabs">tab styling</a>, while adding the <code>nav</code> and <code>nav-pills</code> classes will apply <a href="../components/#nav-pills">pill styling</a>.</p>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div&gt;</span>

  <span class="c">&lt;!-- Nav tabs --&gt;</span>
  <span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"nav nav-tabs"</span> <span class="na">role=</span><span class="s">"tablist"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">role=</span><span class="s">"presentation"</span> <span class="na">class=</span><span class="s">"active"</span><span class="nt">&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#home"</span> <span class="na">aria-controls=</span><span class="s">"home"</span> <span class="na">role=</span><span class="s">"tab"</span> <span class="na">data-toggle=</span><span class="s">"tab"</span><span class="nt">&gt;</span>Home<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">role=</span><span class="s">"presentation"</span><span class="nt">&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#profile"</span> <span class="na">aria-controls=</span><span class="s">"profile"</span> <span class="na">role=</span><span class="s">"tab"</span> <span class="na">data-toggle=</span><span class="s">"tab"</span><span class="nt">&gt;</span>Profile<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">role=</span><span class="s">"presentation"</span><span class="nt">&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#messages"</span> <span class="na">aria-controls=</span><span class="s">"messages"</span> <span class="na">role=</span><span class="s">"tab"</span> <span class="na">data-toggle=</span><span class="s">"tab"</span><span class="nt">&gt;</span>Messages<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">role=</span><span class="s">"presentation"</span><span class="nt">&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#settings"</span> <span class="na">aria-controls=</span><span class="s">"settings"</span> <span class="na">role=</span><span class="s">"tab"</span> <span class="na">data-toggle=</span><span class="s">"tab"</span><span class="nt">&gt;</span>Settings<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
  <span class="nt">&lt;/ul&gt;</span>

  <span class="c">&lt;!-- Tab panes --&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"tab-content"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">role=</span><span class="s">"tabpanel"</span> <span class="na">class=</span><span class="s">"tab-pane active"</span> <span class="na">id=</span><span class="s">"home"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">role=</span><span class="s">"tabpanel"</span> <span class="na">class=</span><span class="s">"tab-pane"</span> <span class="na">id=</span><span class="s">"profile"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">role=</span><span class="s">"tabpanel"</span> <span class="na">class=</span><span class="s">"tab-pane"</span> <span class="na">id=</span><span class="s">"messages"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">role=</span><span class="s">"tabpanel"</span> <span class="na">class=</span><span class="s">"tab-pane"</span> <span class="na">id=</span><span class="s">"settings"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;/div&gt;</span></code></pre></figure>

  <h3>Fade effect</h3>
  <p>To make tabs fade in, add <code>.fade</code> to each <code>.tab-pane</code>. The first tab pane must also have <code>.in</code> to make the initial content visible.</p>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"tab-content"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">role=</span><span class="s">"tabpanel"</span> <span class="na">class=</span><span class="s">"tab-pane fade in active"</span> <span class="na">id=</span><span class="s">"home"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">role=</span><span class="s">"tabpanel"</span> <span class="na">class=</span><span class="s">"tab-pane fade"</span> <span class="na">id=</span><span class="s">"profile"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">role=</span><span class="s">"tabpanel"</span> <span class="na">class=</span><span class="s">"tab-pane fade"</span> <span class="na">id=</span><span class="s">"messages"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">role=</span><span class="s">"tabpanel"</span> <span class="na">class=</span><span class="s">"tab-pane fade"</span> <span class="na">id=</span><span class="s">"settings"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

  <h3 id="tabs-methods">Methods</h3>
  <h4><code>$().tab</code></h4>
  <p>
    Activates a tab element and content container. Tab should have either a <code>data-target</code> or an <code>href</code> targeting a container node in the DOM. In the above examples, the tabs are the <code>&lt;a&gt;</code>s with <code>data-toggle="tab"</code> attributes.
  </p>

  <h4><code>.tab('show')</code></h4>
  <p>Selects the given tab and shows its associated content. Any other tab that was previously selected becomes unselected and its associated content is hidden. <strong>Returns to the caller before the tab pane has actually been shown</strong> (i.e. before the <code>shown.bs.tab</code> event occurs).</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#someTab'</span><span class="p">).</span><span class="nx">tab</span><span class="p">(</span><span class="s1">'show'</span><span class="p">)</span></code></pre></figure>

  <h3 id="tabs-events">Events</h3>
  <p>When showing a new tab, the events fire in the following order:</p>
  <ol>
    <li><code>hide.bs.tab</code> (on the current active tab)</li>
    <li><code>show.bs.tab</code> (on the to-be-shown tab)</li>
    <li><code>hidden.bs.tab</code> (on the previous active tab, the same one as for the <code>hide.bs.tab</code> event)</li>
    <li><code>shown.bs.tab</code> (on the newly-active just-shown tab, the same one as for the <code>show.bs.tab</code> event)</li>
  </ol>
  <p>If no tab was already active, then the <code>hide.bs.tab</code> and <code>hidden.bs.tab</code> events will not be fired.</p>
  <div class="table-responsive">
    <table class="table table-bordered table-striped bs-events-table">
      <thead>
       <tr>
         <th>Event Type</th>
         <th>Description</th>
       </tr>
      </thead>
      <tbody>
       <tr>
         <td>show.bs.tab</td>
         <td>This event fires on tab show, but before the new tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>
      </tr>
      <tr>
         <td>shown.bs.tab</td>
         <td>This event fires on tab show after a tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>
       </tr>
       <tr>
         <td>hide.bs.tab</td>
         <td>This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the current active tab and the new soon-to-be-active tab, respectively.</td>
       </tr>
       <tr>
         <td>hidden.bs.tab</td>
         <td>This event fires after a new tab is shown (and thus the previous active tab is hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the previous active tab and the new active tab, respectively.</td>
       </tr>
      </tbody>
    </table>
  </div><!-- /.table-responsive -->
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'a[data-toggle="tab"]'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">'shown.bs.tab'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">e</span><span class="p">.</span><span class="nx">target</span> <span class="c1">// newly activated tab</span>
  <span class="nx">e</span><span class="p">.</span><span class="nx">relatedTarget</span> <span class="c1">// previous active tab</span>
<span class="p">})</span></code></pre></figure>
</div>

<div class="bs-docs-section">
  <h1 id="tooltips" class="page-header">Tooltips <small>tooltip.js</small></h1>
  <p>Inspired by the excellent jQuery.tipsy plugin written by Jason Frame; Tooltips are an updated version, which don't rely on images, use CSS3 for animations, and data-attributes for local title storage.</p>
  <p>Tooltips with zero-length titles are never displayed.</p>

  <h2 id="tooltips-examples">Examples</h2>
  <p>Hover over the links below to see tooltips:</p>
  <div class="bs-example tooltip-demo">
    <p>Tight pants next level keffiyeh <a href="#" data-toggle="tooltip" title="Default tooltip">you probably</a> haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <a href="#" data-toggle="tooltip" title="Another tooltip">have a</a> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan <a href="#" data-toggle="tooltip" title="Another one here too">whatever keytar</a>, scenester farm-to-table banksy Austin <a href="#" data-toggle="tooltip" title="The last tip!">twitter handle</a> freegan cred raw denim single-origin coffee viral.</p>
  </div><!-- /example -->

  <h3>Static tooltip</h3>
  <p>Four options are available: top, right, bottom, and left aligned.</p>
  <div class="bs-example bs-example-tooltip" data-example-id="static-tooltips">
    <div class="tooltip left" role="tooltip">
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">
        Tooltip on the left
      </div>
    </div>
    <div class="tooltip top" role="tooltip">
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">
        Tooltip on the top
      </div>
    </div>
    <div class="tooltip bottom" role="tooltip">
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">
        Tooltip on the bottom
      </div>
    </div>
    <div class="tooltip right" role="tooltip">
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">
        Tooltip on the right
      </div>
    </div>
  </div>

  <h3>Four directions</h3>
  <div class="bs-example tooltip-demo">
    <div class="bs-example-tooltips">
      <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
      <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
      <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
      <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
    </div>
  </div><!-- /example -->
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">data-toggle=</span><span class="s">"tooltip"</span> <span class="na">data-placement=</span><span class="s">"left"</span> <span class="na">title=</span><span class="s">"Tooltip on left"</span><span class="nt">&gt;</span>Tooltip on left<span class="nt">&lt;/button&gt;</span>

<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">data-toggle=</span><span class="s">"tooltip"</span> <span class="na">data-placement=</span><span class="s">"top"</span> <span class="na">title=</span><span class="s">"Tooltip on top"</span><span class="nt">&gt;</span>Tooltip on top<span class="nt">&lt;/button&gt;</span>

<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">data-toggle=</span><span class="s">"tooltip"</span> <span class="na">data-placement=</span><span class="s">"bottom"</span> <span class="na">title=</span><span class="s">"Tooltip on bottom"</span><span class="nt">&gt;</span>Tooltip on bottom<span class="nt">&lt;/button&gt;</span>

<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">data-toggle=</span><span class="s">"tooltip"</span> <span class="na">data-placement=</span><span class="s">"right"</span> <span class="na">title=</span><span class="s">"Tooltip on right"</span><span class="nt">&gt;</span>Tooltip on right<span class="nt">&lt;/button&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>

  <div class="bs-callout bs-callout-danger" id="callout-tooltip-opt-in">
    <h4>Opt-in functionality</h4>
    <p>For performance reasons, the Tooltip and Popover data-apis are opt-in, meaning <strong>you must initialize them yourself</strong>.</p>
    <p>One way to initialize all tooltips on a page would be to select them by their <code>data-toggle</code> attribute:</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
  <span class="nx">$</span><span class="p">(</span><span class="s1">'[data-toggle="tooltip"]'</span><span class="p">).</span><span class="nx">tooltip</span><span class="p">()</span>
<span class="p">})</span></code></pre></figure>

  </div>

  <h2 id="tooltips-usage">Usage</h2>
  <p>The tooltip plugin generates content and markup on demand, and by default places tooltips after their trigger element.</p>
  <p>Trigger the tooltip via JavaScript:</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#example'</span><span class="p">).</span><span class="nx">tooltip</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span></code></pre></figure>

  <h3>Markup</h3>
  <p>The required markup for a tooltip is only a <code>data</code> attribute and <code>title</code> on the HTML element you wish to have a tooltip. The generated markup of a tooltip is rather simple, though it does require a position (by default, set to <code>top</code> by the plugin).</p>

<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="c">&lt;!-- HTML to write --&gt;</span>
<span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span> <span class="na">data-toggle=</span><span class="s">"tooltip"</span> <span class="na">title=</span><span class="s">"Some tooltip text!"</span><span class="nt">&gt;</span>Hover over me<span class="nt">&lt;/a&gt;</span>

<span class="c">&lt;!-- Generated markup by the plugin --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"tooltip top"</span> <span class="na">role=</span><span class="s">"tooltip"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"tooltip-arrow"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"tooltip-inner"</span><span class="nt">&gt;</span>
    Some tooltip text!
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

  <div class="bs-callout bs-callout-warning" id="callout-tooltip-multiline">
    <h4>Multiple-line links</h4>
    <p>Sometimes you want to add a tooltip to a hyperlink that wraps multiple lines. The default behavior of the tooltip plugin is to center it horizontally and vertically. Add <code>white-space: nowrap;</code> to your anchors to avoid this.</p>
  </div>
  <div class="bs-callout bs-callout-warning" id="callout-tooltip-groups">
    <h4>Tooltips in button groups, input groups, and tables require special setting</h4>
    <p>When using tooltips on elements within a <code>.btn-group</code> or an <code>.input-group</code>, or on table-related elements (<code>&lt;td&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>), you'll have to specify the option <code>container: 'body'</code> (documented below) to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the tooltip is triggered).</p>
  </div>
  <div class="bs-callout bs-callout-warning" id="callout-tooltip-hidden">
    <h4>Don't try to show tooltips on hidden elements</h4>
    <p>Invoking <code>$(...).tooltip('show')</code> when the target element is <code>display: none;</code> will cause the tooltip to be incorrectly positioned.</p>
  </div>
  <div class="bs-callout bs-callout-warning" id="callout-tooltip-accessibility">
    <h4>Accessible tooltips for keyboard and assistive technology users</h4>
    <p>For users navigating with a keyboard, and in particular users of assistive technologies, you should only add tooltips to keyboard-focusable elements such as links, form controls, or any arbitrary element with a <code>tabindex="0"</code> attribute.</p>
  </div>
  <div class="bs-callout bs-callout-info" id="callout-tooltip-disabled">
    <h4>Tooltips on disabled elements require wrapper elements</h4>
    <p>To add a tooltip to a <code>disabled</code> or <code>.disabled</code> element, put the element inside of a <code>&lt;div&gt;</code> and apply the tooltip to that <code>&lt;div&gt;</code> instead.</p>
  </div>

  <h3 id="tooltips-options">Options</h3>
  <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-animation=""</code>.</p>
  <div class="table-responsive">
    <table class="table table-bordered table-striped js-options-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>animation</td>
          <td>boolean</td>
          <td>true</td>
          <td>Apply a CSS fade transition to the tooltip</td>
        </tr>
        <tr>
          <td>container</td>
          <td>string | false</td>
          <td>false</td>
          <td>
            <p>Appends the tooltip to a specific element. Example: <code>container: 'body'</code>. This option is particularly useful in that it allows you to position the tooltip in the flow of the document  near the triggering element - which will prevent the tooltip from floating away from the triggering element during a window resize.</p>
          </td>
        </tr>
        <tr>
          <td>delay</td>
          <td>number | object</td>
          <td>0</td>
          <td>
            <p>Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type</p>
            <p>If a number is supplied, delay is applied to both hide/show</p>
            <p>Object structure is: <code>delay: { "show": 500, "hide": 100 }</code></p>
          </td>
        </tr>
        <tr>
          <td>html</td>
          <td>boolean</td>
          <td>false</td>
          <td>Insert HTML into the tooltip. If false, jQuery's <code>text</code> method will be used to insert content into the DOM. Use text if you're worried about XSS attacks.</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>string | function</td>
          <td>'top'</td>
          <td>
            <p>How to position the tooltip - top | bottom | left | right | auto.<br>When "auto" is specified, it will dynamically reorient the tooltip. For example, if placement is "auto left", the tooltip will display to the left when possible, otherwise it will display right.</p>
            <p>When a function is used to determine the placement, it is called with the tooltip DOM node as its first argument and the triggering element DOM node as its second. The <code>this</code> context is set to the tooltip instance.</p>
          </td>
        </tr>
        <tr>
          <td>selector</td>
          <td>string</td>
          <td>false</td>
          <td>If a selector is provided, tooltip objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have tooltips added. See <a href="https://github.com/twbs/bootstrap/issues/4215">this</a> and <a href="http://jsbin.com/zopod/1/edit">an informative example</a>.</td>
        </tr>
        <tr>
          <td>template</td>
          <td>string</td>
          <td><code>'&lt;div class="tooltip" role="tooltip"&gt;&lt;div class="tooltip-arrow"&gt;&lt;/div&gt;&lt;div class="tooltip-inner"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
          <td>
            <p>Base HTML to use when creating the tooltip.</p>
            <p>The tooltip's <code>title</code> will be injected into the <code>.tooltip-inner</code>.</p>
            <p><code>.tooltip-arrow</code> will become the tooltip's arrow.</p>
            <p>The outermost wrapper element should have the <code>.tooltip</code> class.</p>
          </td>
        </tr>
        <tr>
          <td>title</td>
          <td>string | function</td>
          <td>''</td>
          <td>
            <p>Default title value if <code>title</code> attribute isn't present.</p>
            <p>If a function is given, it will be called with its <code>this</code> reference set to the element that the tooltip is attached to.</p>
          </td>
        </tr>
        <tr>
          <td>trigger</td>
          <td>string</td>
          <td>'hover focus'</td>
          <td>How tooltip is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space. <code>manual</code> cannot be combined with any other trigger.</td>
        </tr>
        <tr>
          <td>viewport</td>
          <td>string | object | function</td>
          <td>{ selector: 'body', padding: 0 }</td>
          <td>
            <p>Keeps the tooltip within the bounds of this element. Example: <code>viewport: '#viewport'</code> or <code>{ "selector": "#viewport", "padding": 0 }</code></p>
            <p>If a function is given, it is called with the triggering element DOM node as its only argument. The <code>this</code> context is set to the tooltip instance.</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div><!-- /.table-responsive -->
  <div class="bs-callout bs-callout-info" id="callout-tooltip-data">
    <h4>Data attributes for individual tooltips</h4>
    <p>Options for individual tooltips can alternatively be specified through the use of data attributes, as explained above.</p>
  </div>

  <h3 id="tooltips-methods">Methods</h3>

  <h4><code>$().tooltip(options)</code></h4>
  <p>Attaches a tooltip handler to an element collection.</p>

  <h4><code>.tooltip('show')</code></h4>
  <p>Reveals an element's tooltip. <strong>Returns to the caller before the tooltip has actually been shown</strong> (i.e. before the <code>shown.bs.tooltip</code> event occurs). This is considered a "manual" triggering of the tooltip. Tooltips with zero-length titles are never displayed.</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#element'</span><span class="p">).</span><span class="nx">tooltip</span><span class="p">(</span><span class="s1">'show'</span><span class="p">)</span></code></pre></figure>

  <h4><code>.tooltip('hide')</code></h4>
  <p>Hides an element's tooltip. <strong>Returns to the caller before the tooltip has actually been hidden</strong> (i.e. before the <code>hidden.bs.tooltip</code> event occurs). This is considered a "manual" triggering of the tooltip.</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#element'</span><span class="p">).</span><span class="nx">tooltip</span><span class="p">(</span><span class="s1">'hide'</span><span class="p">)</span></code></pre></figure>

  <h4><code>.tooltip('toggle')</code></h4>
  <p>Toggles an element's tooltip. <strong>Returns to the caller before the tooltip has actually been shown or hidden</strong> (i.e. before the <code>shown.bs.tooltip</code> or <code>hidden.bs.tooltip</code> event occurs). This is considered a "manual" triggering of the tooltip.</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#element'</span><span class="p">).</span><span class="nx">tooltip</span><span class="p">(</span><span class="s1">'toggle'</span><span class="p">)</span></code></pre></figure>

  <h4><code>.tooltip('destroy')</code></h4>
  <p>Hides and destroys an element's tooltip. Tooltips that use delegation (which are created using <a href="#tooltips-options">the <code>selector</code> option</a>) cannot be individually destroyed on descendant trigger elements.</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#element'</span><span class="p">).</span><span class="nx">tooltip</span><span class="p">(</span><span class="s1">'destroy'</span><span class="p">)</span></code></pre></figure>

  <h3 id="tooltips-events">Events</h3>
  <div class="table-responsive">
    <table class="table table-bordered table-striped bs-events-table">
      <thead>
        <tr>
          <th>Event Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>show.bs.tooltip</td>
          <td>This event fires immediately when the <code>show</code> instance method is called.</td>
        </tr>
        <tr>
          <td>shown.bs.tooltip</td>
          <td>This event is fired when the tooltip has been made visible to the user (will wait for CSS transitions to complete).</td>
        </tr>
        <tr>
          <td>hide.bs.tooltip</td>
          <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
        </tr>
        <tr>
          <td>hidden.bs.tooltip</td>
          <td>This event is fired when the tooltip has finished being hidden from the user (will wait for CSS transitions to complete).</td>
        </tr>
        <tr>
          <td>inserted.bs.tooltip</td>
          <td>This event is fired after the <code>show.bs.tooltip</code> event when the tooltip template has been added to the DOM.</td>
        </tr>
      </tbody>
    </table>
  </div><!-- /.table-responsive -->
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myTooltip'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">'hidden.bs.tooltip'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
  <span class="c1">// do something…</span>
<span class="p">})</span></code></pre></figure>
</div>

<div class="bs-docs-section">
  <h1 id="popovers" class="page-header">弹出框 <small>popover.js</small></h1>

  <p>为任意元素添加一小块浮层，就像 iPad 上一样，用于存放非主要信息。</p>
  <p>弹出框的标题和内容的长度都是零的话将永远不会被显示出来。</p>

  <div class="bs-callout bs-callout-danger" id="callout-popover-needs-tooltip">
    <h4>插件依赖</h4>
    <p>弹出框依赖 <a href="#tooltips">工具提示插件</a> ，因此，如果你定制了 Bootstrap，一定要注意将依赖的插件编译进去。</p>
  </div>
  <div class="bs-callout bs-callout-danger" id="callout-popover-opt-in">
    <h4>初始化</h4>
    <p>由于性能的原因，工具提示和弹出框的 data 编程接口（data api）是必须要<strong>手动初始化的</strong>。</p>
    <p>在一个页面上一次性初始化所有弹出框的方式是通过 <code>data-toggle</code> 属性选中他们：</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
  <span class="nx">$</span><span class="p">(</span><span class="s1">'[data-toggle="popover"]'</span><span class="p">).</span><span class="nx">popover</span><span class="p">()</span>
<span class="p">})</span></code></pre></figure>
  </div>
  <div class="bs-callout bs-callout-warning" id="callout-popover-groups">
    <h4>Popovers in button groups, input groups, and tables require special setting</h4>
    <p>When using popovers on elements within a <code>.btn-group</code> or an <code>.input-group</code>, or on table-related elements (<code>&lt;td&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>), you'll have to specify the option <code>container: 'body'</code> (documented below) to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the popover is triggered).</p>
  </div>
  <div class="bs-callout bs-callout-warning" id="callout-popover-hidden">
    <h4>Don't try to show popovers on hidden elements</h4>
    <p>Invoking <code>$(...).popover('show')</code> when the target element is <code>display: none;</code> will cause the popover to be incorrectly positioned.</p>
  </div>
  <div class="bs-callout bs-callout-info" id="callout-popover-disabled">
    <h4>Popovers on disabled elements require wrapper elements</h4>
    <p>To add a popover to a <code>disabled</code> or <code>.disabled</code> element, put the element inside of a <code>&lt;div&gt;</code> and apply the popover to that <code>&lt;div&gt;</code> instead.</p>
  </div>
  <div class="bs-callout bs-callout-info" id="callout-popover-multiline">
    <h4>Multiple-line links</h4>
    <p>Sometimes you want to add a popover to a hyperlink that wraps multiple lines. The default behavior of the popover plugin is to center it horizontally and vertically. Add <code>white-space: nowrap;</code> to your anchors to avoid this.</p>
  </div>

  <h2 id="popovers-examples">实例</h2>
  <h3>静态弹出框</h3>
  <p>4个可能的弹出方向：顶部、右侧、底部和左侧。</p>
  <div class="bs-example bs-example-popover" data-example-id="static-popovers">
    <div class="popover top">
      <div class="arrow"></div>
      <h3 class="popover-title">Popover 顶部</h3>
      <div class="popover-content">
        <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
      </div>
    </div>

    <div class="popover right">
      <div class="arrow"></div>
      <h3 class="popover-title">Popover 右侧</h3>
      <div class="popover-content">
        <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
      </div>
    </div>

    <div class="popover bottom">
      <div class="arrow"></div>
      <h3 class="popover-title">Popover 顶部</h3>

      <div class="popover-content">
        <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
      </div>
    </div>

    <div class="popover left">
      <div class="arrow"></div>
      <h3 class="popover-title">Popover 左侧</h3>
      <div class="popover-content">
        <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
      </div>
    </div>

    <div class="clearfix"></div>
  </div>

  <h3>实例演示</h3>
  <div class="bs-example bs-example-padded-bottom">
    <button type="button" class="btn btn-lg btn-danger bs-docs-popover" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">点我弹出/隐藏弹出框</button>
  </div>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-lg btn-danger"</span> <span class="na">data-toggle=</span><span class="s">"popover"</span> <span class="na">title=</span><span class="s">"Popover title"</span> <span class="na">data-content=</span><span class="s">"And here's some amazing content. It's very engaging. Right?"</span><span class="nt">&gt;</span>点我弹出/隐藏弹出框<span class="nt">&lt;/button&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>

  <h4>4个弹出方向</h4>
  <div class="bs-example popover-demo">
    <div class="bs-example-popovers">
      <button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on right
      </button>
      <button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on top
      </button>
      <button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on bottom
      </button>
      <button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on left
      </button>
    </div>
  </div><!-- /example -->
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">data-container=</span><span class="s">"body"</span> <span class="na">data-toggle=</span><span class="s">"popover"</span> <span class="na">data-placement=</span><span class="s">"left"</span> <span class="na">data-content=</span><span class="s">"Vivamus sagittis lacus vel augue laoreet rutrum faucibus."</span><span class="nt">&gt;</span>
  Popover on 左侧
<span class="nt">&lt;/button&gt;</span>

<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">data-container=</span><span class="s">"body"</span> <span class="na">data-toggle=</span><span class="s">"popover"</span> <span class="na">data-placement=</span><span class="s">"top"</span> <span class="na">data-content=</span><span class="s">"Vivamus sagittis lacus vel augue laoreet rutrum faucibus."</span><span class="nt">&gt;</span>
  Popover on 顶部
<span class="nt">&lt;/button&gt;</span>

<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">data-container=</span><span class="s">"body"</span> <span class="na">data-toggle=</span><span class="s">"popover"</span> <span class="na">data-placement=</span><span class="s">"bottom"</span> <span class="na">data-content=</span><span class="s">"Vivamus
sagittis lacus vel augue laoreet rutrum faucibus."</span><span class="nt">&gt;</span>
  Popover on 底部
<span class="nt">&lt;/button&gt;</span>

<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">data-container=</span><span class="s">"body"</span> <span class="na">data-toggle=</span><span class="s">"popover"</span> <span class="na">data-placement=</span><span class="s">"right"</span> <span class="na">data-content=</span><span class="s">"Vivamus sagittis lacus vel augue laoreet rutrum faucibus."</span><span class="nt">&gt;</span>
  Popover on 右侧
<span class="nt">&lt;/button&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>

  <h4>点击并让弹出框消失</h4>
  <p>通过使用 <code>focus</code> 触发器可以在用户点击弹出框是让其消失。</p>
  <div class="bs-callout bs-callout-danger" id="callout-popover-dismiss-click">
    <h4>实现“点击并让弹出框消失”的效果需要一些额外的代码</h4>
    <p>为了更好的跨浏览器和跨平台效果，你必须使用 <code>&lt;a&gt;</code> 标签，<i>不能</i>使用 <code>&lt;button&gt;</code> 标签，并且，还必须包含 <code>role="button"</code> 和 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#tabindex"><code>tabindex</code></a> 属性。</p>
  </div>
  <div class="bs-example bs-example-padded-bottom">
    <a tabindex="0" class="btn btn-lg btn-danger bs-docs-popover" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">可消失的弹出框</a>
  </div>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;a</span> <span class="na">tabindex=</span><span class="s">"0"</span> <span class="na">class=</span><span class="s">"btn btn-lg btn-danger"</span> <span class="na">role=</span><span class="s">"button"</span> <span class="na">data-toggle=</span><span class="s">"popover"</span> <span class="na">data-trigger=</span><span class="s">"focus"</span> <span class="na">title=</span><span class="s">"Dismissible popover"</span> <span class="na">data-content=</span><span class="s">"And here's some amazing content. It's very engaging. Right?"</span><span class="nt">&gt;</span>可消失的弹出框<span class="nt">&lt;/a&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>


  <h2 id="popovers-usage">用法</h2>
  <p>通过 JavaScript 代码启动弹出框：</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#example'</span><span class="p">).</span><span class="nx">popover</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span></code></pre></figure>

  <h3 id="popovers-options">参数</h3>
  <p>可以通过 data 属性或 JavaScript 传递参数。对于 data 属性，将参数名附着到 <code>data-</code> 后面，例如 <code>data-animation=""</code>。</p>
  <div class="table-responsive">
    <table class="table table-bordered table-striped js-options-table js-options-table">
      <thead>
        <tr>
          <th>名称</th>
          <th>类型</th>
          <th>默认值</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>animation</td>
          <td>boolean</td>
          <td>true</td>
          <td>为弹出框赋予淡出的 CSS 动画效果。</td>
        </tr>
        <tr>
          <td>container</td>
          <td>string | false</td>
          <td>false</td>
          <td>
            <p>Appends the popover to a specific element. Example: <code>container: 'body'</code>. This option is particularly useful in that it allows you to position the popover in the flow of the document near the triggering element - which will prevent the popover from floating away from the triggering element during a window resize.</p>
          </td>
        </tr>
        <tr>
          <td>content</td>
          <td>string | function</td>
          <td>''</td>
          <td>
            <p>Default content value if <code>data-content</code> attribute isn't present.</p>
            <p>If a function is given, it will be called with its <code>this</code> reference set to the element that the popover is attached to.</p>
          </td>
        </tr>
        <tr>
          <td>delay</td>
          <td>number | object</td>
          <td>0</td>
          <td>
           <p>Delay showing and hiding the popover (ms) - does not apply to manual trigger type</p>
           <p>If a number is supplied, delay is applied to both hide/show</p>
           <p>Object structure is: <code>delay: { "show": 500, "hide": 100 }</code></p>
          </td>
        </tr>
        <tr>
          <td>html</td>
          <td>boolean</td>
          <td>false</td>
          <td>Insert HTML into the popover. If false, jQuery's <code>text</code> method will be used to insert content into the DOM. Use text if you're worried about XSS attacks.</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>string | function</td>
          <td>'right'</td>
          <td>
            <p>How to position the popover - top | bottom | left | right | auto.<br>When "auto" is specified, it will dynamically reorient the popover. For example, if placement is "auto left", the popover will display to the left when possible, otherwise it will display right.</p>
            <p>When a function is used to determine the placement, it is called with the popover DOM node as its first argument and the triggering element DOM node as its second. The <code>this</code> context is set to the popover instance.</p>
          </td>
        </tr>
        <tr>
          <td>selector</td>
          <td>string</td>
          <td>false</td>
          <td>If a selector is provided, popover objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have popovers added. See <a href="https://github.com/twbs/bootstrap/issues/4215">this</a> and <a href="http://jsbin.com/zopod/1/edit">an informative example</a>.</td>
        </tr>
        <tr>
          <td>template</td>
          <td>string</td>
          <td><code>'&lt;div class="popover" role="tooltip"&gt;&lt;div class="arrow"&gt;&lt;/div&gt;&lt;h3 class="popover-title"&gt;&lt;/h3&gt;&lt;div class="popover-content"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
          <td>
            <p>Base HTML to use when creating the popover.</p>
            <p>The popover's <code>title</code> will be injected into the <code>.popover-title</code>.</p>
            <p>The popover's <code>content</code> will be injected into the <code>.popover-content</code>.</p>
            <p><code>.arrow</code> will become the popover's arrow.</p>
            <p>The outermost wrapper element should have the <code>.popover</code> class.</p>
          </td>
        </tr>
        <tr>
          <td>title</td>
          <td>string | function</td>
          <td>''</td>
          <td>
            <p>Default title value if <code>title</code> attribute isn't present.</p>
            <p>If a function is given, it will be called with its <code>this</code> reference set to the element that the popover is attached to.</p>
          </td>
        </tr>
        <tr>
          <td>trigger</td>
          <td>string</td>
          <td>'click'</td>
          <td>How popover is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space. <code>manual</code> cannot be combined with any other trigger.</td>
        </tr>
        <tr>
          <td>viewport</td>
          <td>string | object | function</td>
          <td>{ selector: 'body', padding: 0 }</td>
          <td>
            <p>Keeps the popover within the bounds of this element. Example: <code>viewport: '#viewport'</code> or <code>{ "selector": "#viewport", "padding": 0 }</code></p>
            <p>If a function is given, it is called with the triggering element DOM node as its only argument. The <code>this</code> context is set to the popover instance.</p>
          </td>
       </tr>
      </tbody>
    </table>
  </div><!-- /.table-responsive -->
  <div class="bs-callout bs-callout-info" id="callout-popover-data">
    <h4>Data attributes for individual popovers</h4>
    <p>Options for individual popovers can alternatively be specified through the use of data attributes, as explained above.</p>
  </div>

  <h3 id="popovers-methods">Methods</h3>
  <h4><code>$().popover(options)</code></h4>
  <p>Initializes popovers for an element collection.</p>

  <h4><code>.popover('show')</code></h4>
  <p>Reveals an element's popover. <strong>Returns to the caller before the popover has actually been shown</strong> (i.e. before the <code>shown.bs.popover</code> event occurs). This is considered a "manual" triggering of the popover. Popovers whose both title and content are zero-length are never displayed.</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#element'</span><span class="p">).</span><span class="nx">popover</span><span class="p">(</span><span class="s1">'show'</span><span class="p">)</span></code></pre></figure>

  <h4><code>.popover('hide')</code></h4>
  <p>Hides an element's popover. <strong>Returns to the caller before the popover has actually been hidden</strong> (i.e. before the <code>hidden.bs.popover</code> event occurs). This is considered a "manual" triggering of the popover.</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#element'</span><span class="p">).</span><span class="nx">popover</span><span class="p">(</span><span class="s1">'hide'</span><span class="p">)</span></code></pre></figure>

  <h4><code>.popover('toggle')</code></h4>
  <p>Toggles an element's popover. <strong>Returns to the caller before the popover has actually been shown or hidden</strong> (i.e. before the <code>shown.bs.popover</code> or <code>hidden.bs.popover</code> event occurs). This is considered a "manual" triggering of the popover.</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#element'</span><span class="p">).</span><span class="nx">popover</span><span class="p">(</span><span class="s1">'toggle'</span><span class="p">)</span></code></pre></figure>

  <h4><code>.popover('destroy')</code></h4>
  <p>Hides and destroys an element's popover. Popovers that use delegation (which are created using <a href="#popovers-options">the <code>selector</code> option</a>) cannot be individually destroyed on descendant trigger elements.</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#element'</span><span class="p">).</span><span class="nx">popover</span><span class="p">(</span><span class="s1">'destroy'</span><span class="p">)</span></code></pre></figure>

  <h3 id="popovers-events">Events</h3>
  <div class="table-responsive">
    <table class="table table-bordered table-striped bs-events-table">
      <thead>
        <tr>
          <th>Event Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>show.bs.popover</td>
          <td>This event fires immediately when the <code>show</code> instance method is called.</td>
        </tr>
        <tr>
          <td>shown.bs.popover</td>
          <td>This event is fired when the popover has been made visible to the user (will wait for CSS transitions to complete).</td>
        </tr>
        <tr>
          <td>hide.bs.popover</td>
          <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
        </tr>
        <tr>
          <td>hidden.bs.popover</td>
          <td>This event is fired when the popover has finished being hidden from the user (will wait for CSS transitions to complete).</td>
        </tr>
        <tr>
          <td>inserted.bs.popover</td>
          <td>This event is fired after the <code>show.bs.popover</code> event when the popover template has been added to the DOM.</td>
        </tr>
      </tbody>
    </table>
  </div><!-- /.table-responsive -->
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myPopover'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">'hidden.bs.popover'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
  <span class="c1">// do something…</span>
<span class="p">})</span></code></pre></figure>
</div>

<div class="bs-docs-section">
  <h1 id="alerts" class="page-header">警告信息 <small>alert.js</small></h1>

  <h2 id="alerts-examples">实例</h2>
  <p>通过此插件可以为警告信息添加点击并消失的功能。</p>
  <p>当使用 <code>.close</code> 按钮时，它必须是 <code>.alert-dismissible</code> 的第一个子元素，并且在它之前不能有任何文本内容。</p>
  <div class="bs-example bs-example-standalone" data-example-id="dismissible-alert-js">
    <div class="alert alert-warning alert-dismissible fade in" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
    </div>

    <div class="alert alert-danger alert-dismissible fade in" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h4>Oh snap! You got an error!</h4>
      <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
      <p>
        <button type="button" class="btn btn-danger">Take this action</button>
        <button type="button" class="btn btn-default">Or do this</button>
      </p>
    </div>
  </div><!-- /example -->


  <h2 id="alerts-usage">用法</h2>

  <p>为关闭按钮添加 <code>data-dismiss="alert"</code> 属性就可以使其自动为警告框赋予关闭功能。关闭警告框也就是将其从 DOM 中删除。</p>

<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"close"</span> <span class="na">data-dismiss=</span><span class="s">"alert"</span> <span class="na">aria-label=</span><span class="s">"Close"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;span</span> <span class="na">aria-hidden=</span><span class="s">"true"</span><span class="nt">&gt;</span><span class="ni">&amp;times;</span><span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;/button&gt;</span></code></pre></figure>

  <p>为了让警告框在关闭时表现出动画效果，请确保为其添加了 <code>.fade</code> 和 <code>.in</code> 类。</p>

  <h3 id="alerts-methods">方法</h3>

  <h4><code>$().alert()</code></h4>
  <p>让警告框监听具有 <code>data-dismiss="alert"</code> 属性的后裔元素的点击（click）事件。（如果是通过 data 属性进行的初始化则无需使用）</p>

  <h4><code>$().alert('close')</code></h4>
  <p>关闭警告框并从 DOM 中将其删除。如果警告框被赋予了 <code>.fade</code> 和 <code>.in</code> 类，那么，警告框在淡出之后才会被删除。</p>


  <h3 id="alerts-events">事件</h3>
  <p>Bootstrap 的警告框插件对外暴露了一些可以被监听的事件。</p>
  <div class="table-responsive">
    <table class="table table-bordered table-striped bs-events-table">
      <thead>
        <tr>
          <th>事件类型</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>close.bs.alert</td>
          <td>当 <code>close</code> 方法被调用后立即触发此事件。</td>
        </tr>
        <tr>
          <td>closed.bs.alert</td>
          <td>当警告框被关闭后（也即 CSS 过渡效果完毕之后）立即触发此事件。</td>
        </tr>
      </tbody>
    </table>
  </div><!-- /.table-responsive -->
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myAlert'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">'closed.bs.alert'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
  <span class="c1">// do something…</span>
<span class="p">})</span></code></pre></figure>
</div>

<div class="bs-docs-section">
  <h1 id="buttons" class="page-header">按钮 <small>button.js</small></h1>

  <p class="lead">按钮的功能很丰富。通过控制按钮的状态或创建一组按钮并形成一些新的组件，例如工具条。</p>

  <div class="bs-callout bs-callout-danger" id="callout-buttons-ff-autocomplete">
    <h4>跨浏览器兼容性</h4>
    <p><a href="https://github.com/twbs/bootstrap/issues/793">在页面多次加载之间，Firefox 仍然保持表单控件的状态（禁用状态和选择状态）</a>。一个解决办法是设置 <code>autocomplete="off"</code>。参见 <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=654072">Mozilla bug #654072</a>。</p>
  </div>

  <h2 id="buttons-stateful">状态</h2>
  <p>通过添加 <code>data-loading-text="Loading..."</code> 可以为按钮设置正在加载的状态。</p>
  <p><strong class="text-danger">从 v3.3.5 版本开始，此特性不再建议使用，并且已经在 v4 版本中删除了。</strong></p>
  <div class="bs-callout bs-callout-info" id="callout-buttons-state-names">
    <h4>Use whichever state you like!</h4>
    <p>For the sake of this demonstration, we are using <code>data-loading-text</code> and <code>$().button('loading')</code>, but that's not the only state you can use. <a href="#buttons-methods">See more on this below in the <code>$().button(string)</code> documentation</a>.</p>
  </div>
  <div class="bs-example">
    <button type="button" id="loading-example-btn" data-loading-text="Loading..." class="btn btn-primary" autocomplete="off">
      Loading state
    </button>
  </div><!-- /example -->
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">id=</span><span class="s">"myButton"</span> <span class="na">data-loading-text=</span><span class="s">"Loading..."</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span> <span class="na">autocomplete=</span><span class="s">"off"</span><span class="nt">&gt;</span>
  Loading state
<span class="nt">&lt;/button&gt;</span>

<span class="nt">&lt;script&gt;</span>
  <span class="nx">$</span><span class="p">(</span><span class="s1">'#myButton'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">'click'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
    <span class="kd">var</span> <span class="nx">$btn</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">button</span><span class="p">(</span><span class="s1">'loading'</span><span class="p">)</span>
    <span class="c1">// business logic...</span>
    <span class="nx">$btn</span><span class="p">.</span><span class="nx">button</span><span class="p">(</span><span class="s1">'reset'</span><span class="p">)</span>
  <span class="p">})</span>
<span class="nt">&lt;/script&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>

  <h2 id="buttons-single-toggle">Single toggle</h2>
  <p>Add <code>data-toggle="button"</code> to activate toggling on a single button.</p>
  <div class="bs-callout bs-callout-warning" id="callout-buttons-single-pretoggled">
    <h4>Pre-toggled buttons need <code>.active</code> and <code>aria-pressed="true"</code></h4>
    <p>For pre-toggled buttons, you must add the <code>.active</code> class and the <code>aria-pressed="true"</code> attribute to the <code>button</code> yourself.</p>
  </div>
  <div class="bs-example">
    <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
      Single toggle
    </button>
  </div><!-- /example -->
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span> <span class="na">data-toggle=</span><span class="s">"button"</span> <span class="na">aria-pressed=</span><span class="s">"false"</span> <span class="na">autocomplete=</span><span class="s">"off"</span><span class="nt">&gt;</span>
  Single toggle
<span class="nt">&lt;/button&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>

  <h2 id="buttons-checkbox-radio">Checkbox / Radio</h2>
  <p>Add <code>data-toggle="buttons"</code> to a <code>.btn-group</code> containing checkbox or radio inputs to enable toggling in their respective styles.</p>
  <div class="bs-callout bs-callout-warning" id="callout-buttons-multi-preselected">
    <h4>Preselected options need <code>.active</code></h4>
    <p>For preselected options, you must add the <code>.active</code> class to the input's <code>label</code> yourself.</p>
  </div>
  <div class="bs-callout bs-callout-warning" id="callout-buttons-only-click">
    <h4>Visual checked state only updated on click</h4>
    <p>If the checked state of a checkbox button is updated without firing a <code>click</code> event on the button (e.g. via <code>&lt;input type="reset"&gt;</code> or via setting the <code>checked</code> property of the input), you will need to toggle the <code>.active</code> class on the input's <code>label</code> yourself.</p>
  </div>
  <div class="bs-example" data-example-id="buttons-checkbox">
    <div class="btn-group" data-toggle="buttons">
      <label class="btn btn-primary active">
        <input type="checkbox" checked autocomplete="off"> Checkbox 1 (pre-checked)
      </label>
      <label class="btn btn-primary">
        <input type="checkbox" autocomplete="off"> Checkbox 2
      </label>
      <label class="btn btn-primary">
        <input type="checkbox" autocomplete="off"> Checkbox 3
      </label>
    </div>
  </div><!-- /example -->
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span> <span class="na">data-toggle=</span><span class="s">"buttons"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"btn btn-primary active"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">autocomplete=</span><span class="s">"off"</span> <span class="na">checked</span><span class="nt">&gt;</span> Checkbox 1 (pre-checked)
  <span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">autocomplete=</span><span class="s">"off"</span><span class="nt">&gt;</span> Checkbox 2
  <span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">autocomplete=</span><span class="s">"off"</span><span class="nt">&gt;</span> Checkbox 3
  <span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>

  <div class="bs-example" data-example-id="buttons-radio">
    <div class="btn-group" data-toggle="buttons">
      <label class="btn btn-primary active">
        <input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1 (preselected)
      </label>
      <label class="btn btn-primary">
        <input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
      </label>
      <label class="btn btn-primary">
        <input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
      </label>
    </div>
  </div><!-- /example -->
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span> <span class="na">data-toggle=</span><span class="s">"buttons"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"btn btn-primary active"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"options"</span> <span class="na">id=</span><span class="s">"option1"</span> <span class="na">autocomplete=</span><span class="s">"off"</span> <span class="na">checked</span><span class="nt">&gt;</span> Radio 1 (preselected)
  <span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"options"</span> <span class="na">id=</span><span class="s">"option2"</span> <span class="na">autocomplete=</span><span class="s">"off"</span><span class="nt">&gt;</span> Radio 2
  <span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"options"</span> <span class="na">id=</span><span class="s">"option3"</span> <span class="na">autocomplete=</span><span class="s">"off"</span><span class="nt">&gt;</span> Radio 3
  <span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>

  <h2 id="buttons-methods">方法</h2>

  <h4><code>$().button('toggle')</code></h4>
  <p>Toggles push state. Gives the button the appearance that it has been activated.</p>

  <h4><code>$().button('reset')</code></h4>
  <p>重置按钮状态 - 将按钮上的文本还原回原始的内容。<strong>此为异步方法，此方法在内容被重置完成之前即返回。</strong></p>

  <h4><code>$().button(string)</code></h4>
  <p>Swaps text to any data defined text state.</p>

<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">id=</span><span class="s">"myStateButton"</span> <span class="na">data-complete-text=</span><span class="s">"finished!"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span> <span class="na">autocomplete=</span><span class="s">"off"</span><span class="nt">&gt;</span>
  ...
<span class="nt">&lt;/button&gt;</span>

<span class="nt">&lt;script&gt;</span>
  <span class="nx">$</span><span class="p">(</span><span class="s1">'#myStateButton'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">'click'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
    <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">button</span><span class="p">(</span><span class="s1">'complete'</span><span class="p">)</span> <span class="c1">// button text will be "finished!"</span>
  <span class="p">})</span>
<span class="nt">&lt;/script&gt;</span></code></pre></figure>
</div>

<div class="bs-docs-section">
  <h1 id="collapse" class="page-header">Collapse <small>collapse.js</small></h1>

  <p class="lead">Flexible plugin that utilizes a handful of classes for easy toggle behavior.</p>

  <div class="bs-callout bs-callout-danger" id="callout-collapse-dependency">
    <h4>Plugin dependency</h4>
    <p>Collapse requires the <a href="#transitions">transitions plugin</a> to be included in your version of Bootstrap.</p>
  </div>

  <h2 id="collapse-example">Example</h2>
  <p>Click the buttons below to show and hide another element via class changes:</p>
  <ul>
    <li><code>.collapse</code> hides content</li>
    <li><code>.collapsing</code> is applied during transitions</li>
    <li><code>.collapse.in</code> shows content</li>
  </ul>
  <p>You can use a link with the <code>href</code> attribute, or a button with the <code>data-target</code> attribute. In both cases, the <code>data-toggle="collapse"</code> is required.</p>

  <div class="bs-example">
    <p>
      <a class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Link with href
      </a>
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Button with data-target
      </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="well">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span> <span class="na">role=</span><span class="s">"button"</span> <span class="na">data-toggle=</span><span class="s">"collapse"</span> <span class="na">href=</span><span class="s">"#collapseExample"</span> <span class="na">aria-expanded=</span><span class="s">"false"</span> <span class="na">aria-controls=</span><span class="s">"collapseExample"</span><span class="nt">&gt;</span>
  Link with href
<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">data-toggle=</span><span class="s">"collapse"</span> <span class="na">data-target=</span><span class="s">"#collapseExample"</span> <span class="na">aria-expanded=</span><span class="s">"false"</span> <span class="na">aria-controls=</span><span class="s">"collapseExample"</span><span class="nt">&gt;</span>
  Button with data-target
<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"collapse"</span> <span class="na">id=</span><span class="s">"collapseExample"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"well"</span><span class="nt">&gt;</span>
    ...
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>

  <h2 id="collapse-example-accordion">Accordion example</h2>
  <p>Extend the default collapse behavior to create an accordion with the panel component.</p>

  <div class="bs-example" data-example-id="collapse-accordion">
    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
      <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="headingOne">
          <h4 class="panel-title">
            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Collapsible Group Item #1
            </a>
          </h4>
        </div>
        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
          <div class="panel-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="headingTwo">
          <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Collapsible Group Item #2
            </a>
          </h4>
        </div>
        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
          <div class="panel-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="headingThree">
          <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Collapsible Group Item #3
            </a>
          </h4>
        </div>
        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
          <div class="panel-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
    </div>
  </div><!-- /example -->
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"panel-group"</span> <span class="na">id=</span><span class="s">"accordion"</span> <span class="na">role=</span><span class="s">"tablist"</span> <span class="na">aria-multiselectable=</span><span class="s">"true"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"panel panel-default"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"panel-heading"</span> <span class="na">role=</span><span class="s">"tab"</span> <span class="na">id=</span><span class="s">"headingOne"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;h4</span> <span class="na">class=</span><span class="s">"panel-title"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;a</span> <span class="na">role=</span><span class="s">"button"</span> <span class="na">data-toggle=</span><span class="s">"collapse"</span> <span class="na">data-parent=</span><span class="s">"#accordion"</span> <span class="na">href=</span><span class="s">"#collapseOne"</span> <span class="na">aria-expanded=</span><span class="s">"true"</span> <span class="na">aria-controls=</span><span class="s">"collapseOne"</span><span class="nt">&gt;</span>
          Collapsible Group Item #1
        <span class="nt">&lt;/a&gt;</span>
      <span class="nt">&lt;/h4&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"collapseOne"</span> <span class="na">class=</span><span class="s">"panel-collapse collapse in"</span> <span class="na">role=</span><span class="s">"tabpanel"</span> <span class="na">aria-labelledby=</span><span class="s">"headingOne"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"panel-body"</span><span class="nt">&gt;</span>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"panel panel-default"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"panel-heading"</span> <span class="na">role=</span><span class="s">"tab"</span> <span class="na">id=</span><span class="s">"headingTwo"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;h4</span> <span class="na">class=</span><span class="s">"panel-title"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"collapsed"</span> <span class="na">role=</span><span class="s">"button"</span> <span class="na">data-toggle=</span><span class="s">"collapse"</span> <span class="na">data-parent=</span><span class="s">"#accordion"</span> <span class="na">href=</span><span class="s">"#collapseTwo"</span> <span class="na">aria-expanded=</span><span class="s">"false"</span> <span class="na">aria-controls=</span><span class="s">"collapseTwo"</span><span class="nt">&gt;</span>
          Collapsible Group Item #2
        <span class="nt">&lt;/a&gt;</span>
      <span class="nt">&lt;/h4&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"collapseTwo"</span> <span class="na">class=</span><span class="s">"panel-collapse collapse"</span> <span class="na">role=</span><span class="s">"tabpanel"</span> <span class="na">aria-labelledby=</span><span class="s">"headingTwo"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"panel-body"</span><span class="nt">&gt;</span>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"panel panel-default"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"panel-heading"</span> <span class="na">role=</span><span class="s">"tab"</span> <span class="na">id=</span><span class="s">"headingThree"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;h4</span> <span class="na">class=</span><span class="s">"panel-title"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"collapsed"</span> <span class="na">role=</span><span class="s">"button"</span> <span class="na">data-toggle=</span><span class="s">"collapse"</span> <span class="na">data-parent=</span><span class="s">"#accordion"</span> <span class="na">href=</span><span class="s">"#collapseThree"</span> <span class="na">aria-expanded=</span><span class="s">"false"</span> <span class="na">aria-controls=</span><span class="s">"collapseThree"</span><span class="nt">&gt;</span>
          Collapsible Group Item #3
        <span class="nt">&lt;/a&gt;</span>
      <span class="nt">&lt;/h4&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"collapseThree"</span> <span class="na">class=</span><span class="s">"panel-collapse collapse"</span> <span class="na">role=</span><span class="s">"tabpanel"</span> <span class="na">aria-labelledby=</span><span class="s">"headingThree"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"panel-body"</span><span class="nt">&gt;</span>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>

  <p>It's also possible to swap out <code>.panel-body</code>s with <code>.list-group</code>s.</p>

  <div class="panel-group" role="tablist">
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="collapseListGroupHeading1">
        <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" href="#collapseListGroup1" aria-expanded="false" aria-controls="collapseListGroup1">
            Collapsible list group
          </a>
        </h4>
      </div>
      <div id="collapseListGroup1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="collapseListGroupHeading1">
        <ul class="list-group">
          <li class="list-group-item">Bootply</li>
          <li class="list-group-item">One itmus ac facilin</li>
          <li class="list-group-item">Second eros</li>
        </ul>
        <div class="panel-footer">Footer</div>
      </div>
    </div>
  </div>

  <div class="bs-callout bs-callout-warning" id="callout-collapse-accessibility">
    <h4>Make expand/collapse controls accessible</h4>
    <p>Be sure to add <code>aria-expanded</code> to the control element. This attribute explicitly defines the current state of the collapsible element to screen readers and similar assistive technologies. If the collapsible element is closed by default, it should have a value of <code>aria-expanded="false"</code>. If you've set the collapsible element to be open by default using the <code>in</code> class, set <code>aria-expanded="true"</code> on the control instead. The plugin will automatically toggle this attribute based on whether or not the collapsible element has been opened or closed.</p>
    <p>Additionally, if your control element is targeting a single collapsible element – i.e. the <code>data-target</code> attribute is pointing to an <code>id</code> selector – you may add an additional <code>aria-controls</code> attribute to the control element, containing the <code>id</code> of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself.</p>
  </div>

  <h2 id="collapse-usage">Usage</h2>
  <p>The collapse plugin utilizes a few classes to handle the heavy lifting:</p>
  <ul>
    <li><code>.collapse</code> hides the content</li>
    <li><code>.collapse.in</code> shows the content</li>
    <li><code>.collapsing</code> is added when the transition starts, and removed when it finishes</li>
  </ul>
  <p>These classes can be found in <code>component-animations.less</code>.</p>

  <h3>Via data attributes</h3>
  <p>Just add <code>data-toggle="collapse"</code> and a <code>data-target</code> to the element to automatically assign control of a collapsible element. The <code>data-target</code> attribute accepts a CSS selector to apply the collapse to. Be sure to add the class <code>collapse</code> to the collapsible element. If you'd like it to default open, add the additional class <code>in</code>.</p>
  <p>To add accordion-like group management to a collapsible control, add the data attribute <code>data-parent="#selector"</code>. Refer to the demo to see this in action.</p>

  <h3>Via JavaScript</h3>
  <p>Enable manually with:</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'.collapse'</span><span class="p">).</span><span class="nx">collapse</span><span class="p">()</span></code></pre></figure>

  <h3 id="collapse-options">Options</h3>
  <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-parent=""</code>.</p>
  <div class="table-responsive">
    <table class="table table-bordered table-striped js-options-table">
      <thead>
       <tr>
         <th>Name</th>
         <th>type</th>
         <th>default</th>
         <th>description</th>
       </tr>
      </thead>
      <tbody>
       <tr>
         <td>parent</td>
         <td>selector</td>
         <td>false</td>
         <td>If a selector is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the <code>panel</code> class)</td>
       </tr>
       <tr>
         <td>toggle</td>
         <td>boolean</td>
         <td>true</td>
         <td>Toggles the collapsible element on invocation</td>
       </tr>
      </tbody>
    </table>
  </div><!-- /.table-responsive -->

  <h3 id="collapse-methods">Methods</h3>

  <h4><code>.collapse(options)</code></h4>
  <p>Activates your content as a collapsible element. Accepts an optional options <code>object</code>.</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myCollapsible'</span><span class="p">).</span><span class="nx">collapse</span><span class="p">({</span>
  <span class="na">toggle</span><span class="p">:</span> <span class="kc">false</span>
<span class="p">})</span></code></pre></figure>

  <h4><code>.collapse('toggle')</code></h4>
  <p>Toggles a collapsible element to shown or hidden. <strong>Returns to the caller before the collapsible element has actually been shown or hidden</strong> (i.e. before the <code>shown.bs.collapse</code> or <code>hidden.bs.collapse</code> event occurs).</p>

  <h4><code>.collapse('show')</code></h4>
  <p>Shows a collapsible element. <strong>Returns to the caller before the collapsible element has actually been shown</strong> (i.e. before the <code>shown.bs.collapse</code> event occurs).</p>

  <h4><code>.collapse('hide')</code></h4>
  <p>Hides a collapsible element. <strong>Returns to the caller before the collapsible element has actually been hidden</strong> (i.e. before the <code>hidden.bs.collapse</code> event occurs).</p>

  <h3 id="collapse-events">Events</h3>
  <p>Bootstrap's collapse class exposes a few events for hooking into collapse functionality.</p>
  <div class="table-responsive">
    <table class="table table-bordered table-striped bs-events-table">
      <thead>
       <tr>
         <th>Event Type</th>
         <th>Description</th>
       </tr>
      </thead>
      <tbody>
       <tr>
         <td>show.bs.collapse</td>
         <td>This event fires immediately when the <code>show</code> instance method is called.</td>
       </tr>
       <tr>
         <td>shown.bs.collapse</td>
         <td>This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).</td>
       </tr>
       <tr>
         <td>hide.bs.collapse</td>
         <td>
          This event is fired immediately when the <code>hide</code> method has been called.
         </td>
       </tr>
       <tr>
         <td>hidden.bs.collapse</td>
         <td>This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).</td>
       </tr>
      </tbody>
    </table>
  </div><!-- /.table-responsive -->
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myCollapsible'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">'hidden.bs.collapse'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
  <span class="c1">// do something…</span>
<span class="p">})</span></code></pre></figure>
</div>

<div class="bs-docs-section">
  <h1 id="carousel" class="page-header">Carousel <small>carousel.js</small></h1>

  <p>A slideshow component for cycling through elements, like a carousel. <strong>Nested carousels are not supported.</strong></p>

  <h2 id="carousel-examples">Examples</h2>
  <div class="bs-example" data-example-id="simple-carousel">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img data-src="holder.js/900x500/auto/#777:#555/text:First slide" alt="First slide">
        </div>
        <div class="item">
          <img data-src="holder.js/900x500/auto/#666:#444/text:Second slide" alt="Second slide">
        </div>
        <div class="item">
          <img data-src="holder.js/900x500/auto/#555:#333/text:Third slide" alt="Third slide">
        </div>
      </div>
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div><!-- /example -->
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"carousel-example-generic"</span> <span class="na">class=</span><span class="s">"carousel slide"</span> <span class="na">data-ride=</span><span class="s">"carousel"</span><span class="nt">&gt;</span>
  <span class="c">&lt;!-- Indicators --&gt;</span>
  <span class="nt">&lt;ol</span> <span class="na">class=</span><span class="s">"carousel-indicators"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">data-target=</span><span class="s">"#carousel-example-generic"</span> <span class="na">data-slide-to=</span><span class="s">"0"</span> <span class="na">class=</span><span class="s">"active"</span><span class="nt">&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">data-target=</span><span class="s">"#carousel-example-generic"</span> <span class="na">data-slide-to=</span><span class="s">"1"</span><span class="nt">&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">data-target=</span><span class="s">"#carousel-example-generic"</span> <span class="na">data-slide-to=</span><span class="s">"2"</span><span class="nt">&gt;&lt;/li&gt;</span>
  <span class="nt">&lt;/ol&gt;</span>

  <span class="c">&lt;!-- Wrapper for slides --&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"carousel-inner"</span> <span class="na">role=</span><span class="s">"listbox"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item active"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"..."</span> <span class="na">alt=</span><span class="s">"..."</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"carousel-caption"</span><span class="nt">&gt;</span>
        ...
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"..."</span> <span class="na">alt=</span><span class="s">"..."</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"carousel-caption"</span><span class="nt">&gt;</span>
        ...
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    ...
  <span class="nt">&lt;/div&gt;</span>

  <span class="c">&lt;!-- Controls --&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"left carousel-control"</span> <span class="na">href=</span><span class="s">"#carousel-example-generic"</span> <span class="na">role=</span><span class="s">"button"</span> <span class="na">data-slide=</span><span class="s">"prev"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"glyphicon glyphicon-chevron-left"</span> <span class="na">aria-hidden=</span><span class="s">"true"</span><span class="nt">&gt;&lt;/span&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"sr-only"</span><span class="nt">&gt;</span>Previous<span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"right carousel-control"</span> <span class="na">href=</span><span class="s">"#carousel-example-generic"</span> <span class="na">role=</span><span class="s">"button"</span> <span class="na">data-slide=</span><span class="s">"next"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"glyphicon glyphicon-chevron-right"</span> <span class="na">aria-hidden=</span><span class="s">"true"</span><span class="nt">&gt;&lt;/span&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"sr-only"</span><span class="nt">&gt;</span>Next<span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>

  <div class="bs-callout bs-callout-danger" id="callout-carousel-accessibility">
    <h4>Accessibility issue</h4>
    <p>The carousel component is generally not compliant with accessibility standards. If you need to be compliant, please consider other options for presenting your content.</p>
  </div>

  <div class="bs-callout bs-callout-warning" id="callout-carousel-transitions">
    <h4>Transition animations not supported in Internet Explorer 8 &amp; 9</h4>
    <p>Bootstrap exclusively uses CSS3 for its animations, but Internet Explorer 8 &amp; 9 don't support the necessary CSS properties. Thus, there are no slide transition animations when using these browsers. We have intentionally decided not to include jQuery-based fallbacks for the transitions.</p>
  </div>

  <div class="bs-callout bs-callout-warning" id="callout-carousel-active">
    <h4>Initial active element required</h4>
    <p>The <code>.active</code> class needs to be added to one of the slides. Otherwise, the carousel will not be visible.</p>
  </div>

  <div class="bs-callout bs-callout-info" id="callout-carousel-without-glyphicons">
    <h4>Glyphicon icons not necessary</h4>
    <p>The <code>.glyphicon .glyphicon-chevron-left</code> and <code>.glyphicon .glyphicon-chevron-right</code> classes are not necessarily needed for the controls. Bootstrap provides <code>.icon-prev</code> and <code>.icon-next</code> as plain unicode alternatives.</p>
  </div>

  <h3>Optional captions</h3>
  <p>Add captions to your slides easily with the <code>.carousel-caption</code> element within any <code>.item</code>. Place just about any optional HTML within there and it will be automatically aligned and formatted.</p>
  <div class="bs-example" data-example-id="carousel-with-captions">
    <div id="carousel-example-captions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-captions" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-captions" data-slide-to="1"></li>
        <li data-target="#carousel-example-captions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img data-src="holder.js/900x500/auto/#777:#777" alt="First slide image">
          <div class="carousel-caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div class="item">
          <img data-src="holder.js/900x500/auto/#666:#666" alt="Second slide image">
          <div class="carousel-caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="item">
          <img data-src="holder.js/900x500/auto/#555:#555" alt="Third slide image">
          <div class="carousel-caption">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#carousel-example-captions" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-captions" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div><!-- /example -->
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"..."</span> <span class="na">alt=</span><span class="s">"..."</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"carousel-caption"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;h3&gt;</span>...<span class="nt">&lt;/h3&gt;</span>
    <span class="nt">&lt;p&gt;</span>...<span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
<div class="try-online"><a class="btn-try btn btn-success btn-lg disabled"></a></div>

  <h2 id="carousel-usage">Usage</h2>

  <h3>Multiple carousels</h3>
  <p>Carousels require the use of an <code>id</code> on the outermost container (the <code>.carousel</code>) for carousel controls to function properly. When adding multiple carousels, or when changing a carousel's <code>id</code>, be sure to update the relevant controls.</p>

  <h3>Via data attributes</h3>
  <p>Use data attributes to easily control the position of the carousel. <code>data-slide</code> accepts the keywords <code>prev</code> or <code>next</code>, which alters the slide position relative to its current position. Alternatively, use <code>data-slide-to</code> to pass a raw slide index to the carousel <code>data-slide-to="2"</code>, which shifts the slide position to a particular index beginning with <code>0</code>.</p>
  <p>The <code>data-ride="carousel"</code> attribute is used to mark a carousel as animating starting at page load. <strong class="text-danger">It cannot be used in combination with (redundant and unnecessary) explicit JavaScript initialization of the same carousel.</strong></p>

  <h3>Via JavaScript</h3>
  <p>Call carousel manually with:</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'.carousel'</span><span class="p">).</span><span class="nx">carousel</span><span class="p">()</span></code></pre></figure>

  <h3 id="carousel-options">Options</h3>
  <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-interval=""</code>.</p>
  <div class="table-responsive">
    <table class="table table-bordered table-striped js-options-table">
      <thead>
       <tr>
         <th>Name</th>
         <th>type</th>
         <th>default</th>
         <th>description</th>
       </tr>
      </thead>
      <tbody>
       <tr>
         <td>interval</td>
         <td>number</td>
         <td>5000</td>
         <td>The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.</td>
       </tr>
       <tr>
         <td>pause</td>
         <td>string | null</td>
         <td>"hover"</td>
         <td>If set to <code>"hover"</code>, pauses the cycling of the carousel on <code>mouseenter</code> and resumes the cycling of the carousel on <code>mouseleave</code>. If set to <code>null</code>, hovering over the carousel won't pause it.</td>
       </tr>
       <tr>
         <td>wrap</td>
         <td>boolean</td>
         <td>true</td>
         <td>Whether the carousel should cycle continuously or have hard stops.</td>
       </tr>
       <tr>
         <td>keyboard</td>
         <td>boolean</td>
         <td>true</td>
         <td>Whether the carousel should react to keyboard events.</td>
       </tr>
      </tbody>
    </table>
  </div><!-- /.table-responsive -->

  <h3 id="carousel-methods">Methods</h3>

  <h4><code>.carousel(options)</code></h4>
  <p>Initializes the carousel with an optional options <code>object</code> and starts cycling through items.</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'.carousel'</span><span class="p">).</span><span class="nx">carousel</span><span class="p">({</span>
  <span class="na">interval</span><span class="p">:</span> <span class="mi">2000</span>
<span class="p">})</span></code></pre></figure>

  <h4><code>.carousel('cycle')</code></h4>
  <p>Cycles through the carousel items from left to right.</p>

  <h4><code>.carousel('pause')</code></h4>
  <p>Stops the carousel from cycling through items.</p>


  <h4><code>.carousel(number)</code></h4>
  <p>Cycles the carousel to a particular frame (0 based, similar to an array).</p>

  <h4><code>.carousel('prev')</code></h4>
  <p>Cycles to the previous item.</p>

  <h4><code>.carousel('next')</code></h4>
  <p>Cycles to the next item.</p>

  <h3 id="carousel-events">Events</h3>
  <p>Bootstrap's carousel class exposes two events for hooking into carousel functionality.</p>
  <p>Both events have the following additional properties:</p>
  <ul>
    <li><code>direction</code>: The direction in which the carousel is sliding (either <code>"left"</code> or <code>"right"</code>).</li>
    <li><code>relatedTarget</code>: The DOM element that is being slid into place as the active item.</li>
  </ul>
  <p>All carousel events are fired at the carousel itself (i.e. at the <code>&lt;div class="carousel"&gt;</code>).</p>
  <div class="table-responsive">
    <table class="table table-bordered table-striped bs-events-table">
      <thead>
       <tr>
         <th>Event Type</th>
         <th>Description</th>
       </tr>
      </thead>
      <tbody>
       <tr>
         <td>slide.bs.carousel</td>
         <td>This event fires immediately when the <code>slide</code> instance method is invoked.</td>
       </tr>
       <tr>
         <td>slid.bs.carousel</td>
         <td>This event is fired when the carousel has completed its slide transition.</td>
       </tr>
      </tbody>
    </table>
  </div><!-- /.table-responsive -->
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myCarousel'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">'slide.bs.carousel'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
  <span class="c1">// do something…</span>
<span class="p">})</span></code></pre></figure>
</div>

<div class="bs-docs-section">
  <h1 id="affix" class="page-header">Affix <small>affix.js</small></h1>

  <h2 id="affix-examples">Example</h2>
  <p>The affix plugin toggles <code>position: fixed;</code> on and off, emulating the effect found with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position#Sticky_positioning"><code>position: sticky;</code></a>. The subnavigation on the right is a live demo of the affix plugin.</p>

  <hr class="bs-docs-separator">

  <h2 id="affix-usage">Usage</h2>
  <p>Use the affix plugin via data attributes or manually with your own JavaScript. <strong class="text-danger">In both situations, you must provide CSS for the positioning and width of your affixed content.</strong></p>
  <p>Note: Do not use the affix plugin on an element contained in a relatively positioned element, such as a pulled or pushed column, due to a <a href="https://github.com/twbs/bootstrap/issues/12126">Safari rendering bug</a>.</p>

  <h3>Positioning via CSS</h3>
  <p>The affix plugin toggles between three classes, each representing a particular state: <code>.affix</code>, <code>.affix-top</code>, and <code>.affix-bottom</code>. You must provide the styles, with the exception of <code>position: fixed;</code> on <code>.affix</code>, for these classes yourself (independent of this plugin) to handle the actual positions.</p>
  <p>Here's how the affix plugin works:</p>
  <ol>
    <li>To start, the plugin adds <code>.affix-top</code> to indicate the element is in its top-most position. At this point no CSS positioning is required.</li>
    <li>Scrolling past the element you want affixed should trigger the actual affixing. This is where <code>.affix</code> replaces <code>.affix-top</code> and sets <code>position: fixed;</code> (provided by Bootstrap's CSS).</li>
    <li>If a bottom offset is defined, scrolling past it should replace <code>.affix</code> with <code>.affix-bottom</code>. Since offsets are optional, setting one requires you to set the appropriate CSS. In this case, add <code>position: absolute;</code> when necessary. The plugin uses the data attribute or JavaScript option to determine where to position the element from there.</li>
  </ol>
  <p>Follow the above steps to set your CSS for either of the usage options below.</p>

  <h3>Via data attributes</h3>
  <p>To easily add affix behavior to any element, just add <code>data-spy="affix"</code> to the element you want to spy on. Use offsets to define when to toggle the pinning of an element.</p>

<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">data-spy=</span><span class="s">"affix"</span> <span class="na">data-offset-top=</span><span class="s">"60"</span> <span class="na">data-offset-bottom=</span><span class="s">"200"</span><span class="nt">&gt;</span>
  ...
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

  <h3>Via JavaScript</h3>
  <p>Call the affix plugin via JavaScript:</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myAffix'</span><span class="p">).</span><span class="nx">affix</span><span class="p">({</span>
  <span class="na">offset</span><span class="p">:</span> <span class="p">{</span>
    <span class="na">top</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>
    <span class="na">bottom</span><span class="p">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
      <span class="k">return</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">'.footer'</span><span class="p">).</span><span class="nx">outerHeight</span><span class="p">(</span><span class="kc">true</span><span class="p">))</span>
    <span class="p">}</span>
  <span class="p">}</span>
<span class="p">})</span></code></pre></figure>


  <h3 id="affix-options">Options</h3>
  <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-offset-top="200"</code>.</p>

  <div class="table-responsive">
    <table class="table table-bordered table-striped js-options-table">
      <thead>
       <tr>
         <th>Name</th>
         <th>type</th>
         <th>default</th>
         <th>description</th>
       </tr>
      </thead>
      <tbody>
       <tr>
         <td>offset</td>
         <td>number | function | object</td>
         <td>10</td>
         <td>Pixels to offset from screen when calculating position of scroll. If a single number is provided, the offset will be applied in both top and bottom directions. To provide a unique, bottom and top offset just provide an object <code>offset: { top: 10 }</code> or <code>offset: { top: 10, bottom: 5 }</code>. Use a function when you need to dynamically calculate an offset.</td>
       </tr>
       <tr>
         <td>target</td>
         <td>selector | node | jQuery element</td>
         <td>the <code>window</code> object</td>
         <td>Specifies the target element of the affix.</td>
       </tr>

      </tbody>
    </table>
  </div><!-- /.table-responsive -->

  <h3 id="affix-methods">Methods</h3>

  <h4><code>.affix(options)</code></h4>
  <p>Activates your content as affixed content. Accepts an optional options <code>object</code>.</p>
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myAffix'</span><span class="p">).</span><span class="nx">affix</span><span class="p">({</span>
  <span class="na">offset</span><span class="p">:</span> <span class="mi">15</span>
<span class="p">})</span></code></pre></figure>

  <h4><code>.affix('checkPosition')</code></h4>
  <p>Recalculates the state of the affix based on the dimensions, position, and scroll position of the relevant elements. The <code>.affix</code>, <code>.affix-top</code>, and <code>.affix-bottom</code> classes are added to or removed from the affixed content according to the new state. This method needs to be called whenever the dimensions of the affixed content or the target element are changed, to ensure correct positioning of the affixed content.</p>
  <figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'#myAffix'</span><span class="p">).</span><span class="nx">affix</span><span class="p">(</span><span class="s1">'checkPosition'</span><span class="p">)</span></code></pre></figure>

  <h3 id="affix-events">Events</h3>
  <p>Bootstrap's affix plugin exposes a few events for hooking into affix functionality.</p>
  <div class="table-responsive">
    <table class="table table-bordered table-striped bs-events-table">
      <thead>
        <tr>
          <th>Event Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>affix.bs.affix</td>
          <td>This event fires immediately before the element has been affixed.</td>
        </tr>
        <tr>
          <td>affixed.bs.affix</td>
          <td>This event is fired after the element has been affixed.</td>
        </tr>
        <tr>
          <td>affix-top.bs.affix</td>
          <td>This event fires immediately before the element has been affixed-top.</td>
        </tr>
        <tr>
          <td>affixed-top.bs.affix</td>
          <td>This event is fired after the element has been affixed-top.</td>
        </tr>
       <tr>
        <td>affix-bottom.bs.affix</td>
          <td>This event fires immediately before the element has been affixed-bottom.</td>
        </tr>
        <tr>
          <td>affixed-bottom.bs.affix</td>
          <td>This event is fired after the element has been affixed-bottom.</td>
        </tr>
      </tbody>
    </table>
  </div><!-- /.table-responsive -->
</div>


        </div>
        
        <div class="col-md-3" role="complementary">
          <nav class="bs-docs-sidebar hidden-print hidden-xs hidden-sm">
            <ul class="nav bs-docs-sidenav">
              
                <li>
  <a href="#js-overview">概览</a>
  <ul class="nav">
    <li><a href="#js-individual-compiled">单个还是全部引入</a></li>
    <li><a href="#js-data-attrs">data 属性</a></li>
    <li><a href="#js-programmatic-api">编程方式的 API</a></li>
    <li><a href="#js-noconflict">避免命名空间冲突</a></li>
    <li><a href="#js-events">事件</a></li>
    <li><a href="#js-version-nums">Version numbers</a></li>
    <li><a href="#js-disabled">浏览器的 JavaScript 被禁用的情况</a></li>
    <li><a href="#callout-third-party-libs">第三方工具库</a></li>
  </ul>
</li>
<li><a href="#transitions">过渡效果</a></li>
<li>
  <a href="#modals">模态框</a>
  <ul class="nav">
    <li><a href="#modals-examples">实例</a></li>
    <li><a href="#modals-sizes">Sizes</a></li>
    <li><a href="#modals-remove-animation">Remove animation</a></li>
    <li><a href="#modals-related-target">Varying content based on trigger button</a></li>
    <li><a href="#modals-usage">用法</a></li>
    <li><a href="#modals-options">参数</a></li>
    <li><a href="#modals-methods">方法</a></li>
    <li><a href="#modals-events">事件</a></li>
  </ul>
</li>
<li>
  <a href="#dropdowns">下拉菜单</a>
  <ul class="nav">
    <li><a href="#dropdowns-examples">实例</a></li>
    <li><a href="#dropdowns-usage">用法</a></li>
    <li><a href="#dropdowns-methods">方法</a></li>
    <li><a href="#dropdowns-events">事件</a></li>
  </ul>
</li>
<li>
  <a href="#scrollspy">滚动监听</a>
  <ul class="nav">
    <li><a href="#scrollspy-examples">实例</a></li>
    <li><a href="#scrollspy-usage">用法</a></li>
    <li><a href="#scrollspy-methods">方法</a></li>
    <li><a href="#scrollspy-options">参数</a></li>
    <li><a href="#scrollspy-events">事件</a></li>
  </ul>
</li>
<li>
  <a href="#tabs">标签页</a>
  <ul class="nav">
    <li><a href="#tabs-examples">实例</a></li>
    <li><a href="#tabs-usage">用法</a></li>
    <li><a href="#tabs-methods">方法</a></li>
    <li><a href="#tabs-events">事件</a></li>
  </ul>
</li>
<li>
  <a href="#tooltips">工具提示</a>
  <ul class="nav">
    <li><a href="#tooltips-examples">实例</a></li>
    <li><a href="#tooltips-usage">用法</a></li>
    <li><a href="#tooltips-options">参数</a></li>
    <li><a href="#tooltips-methods">方法</a></li>
    <li><a href="#tooltips-events">事件</a></li>
  </ul>
</li>
<li>
  <a href="#popovers">弹出框</a>
  <ul class="nav">
    <li><a href="#popovers-examples">实例</a></li>
    <li><a href="#popovers-usage">用法</a></li>
    <li><a href="#popovers-options">参数</a></li>
    <li><a href="#popovers-methods">方法</a></li>
    <li><a href="#popovers-events">事件</a></li>
  </ul>
</li>
<li>
  <a href="#alerts">警告框</a>
  <ul class="nav">
    <li><a href="#alerts-examples">警告框实例</a></li>
    <li><a href="#alerts-usage">用法</a></li>
    <li><a href="#alerts-methods">方法</a></li>
    <li><a href="#alerts-events">事件</a></li>
  </ul>
</li>
<li>
  <a href="#buttons">按钮</a>
  <ul class="nav">
    <li><a href="#buttons-stateful">Stateful</a></li>
    <li><a href="#buttons-single-toggle">Single toggle</a></li>
    <li><a href="#buttons-checkbox-radio">Checkbox / Radio</a></li>
    <li><a href="#buttons-methods">方法</a></li>
  </ul>
</li>
<li>
  <a href="#collapse">Collapse</a>
  <ul class="nav">
    <li><a href="#collapse-example">实例</a></li>
    <li><a href="#collapse-example-accordion">Accordion example</a></li>
    <li><a href="#collapse-usage">用法</a></li>
    <li><a href="#collapse-options">参数</a></li>
    <li><a href="#collapse-methods">方法</a></li>
    <li><a href="#collapse-events">事件</a></li>
  </ul>
</li>
<li>
  <a href="#carousel">Carousel</a>
  <ul class="nav">
    <li><a href="#carousel-examples">实例</a></li>
    <li><a href="#carousel-usage">用法</a></li>
    <li><a href="#carousel-options">参数</a></li>
    <li><a href="#carousel-methods">方法</a></li>
    <li><a href="#carousel-events">事件</a></li>
  </ul>
</li>
<li>
  <a href="#affix">Affix</a>
  <ul class="nav">
    <li><a href="#affix-examples">实例</a></li>
    <li><a href="#affix-usage">用法</a></li>
    <li><a href="#affix-options">参数</a></li>
    <li><a href="#affix-methods">方法</a></li>
    <li><a href="#affix-events">事件</a></li>
  </ul>
</li>

              
            </ul>
            <a class="back-to-top" href="#top">
              返回顶部
            </a>
            
            <a href="#" class="bs-docs-theme-toggle" role="button">
              主题预览
            </a>
            
          </nav>
        </div>
        
      </div>
    </div>

    <!-- Footer
================================================== -->
<footer class="bs-docs-footer">
  <div class="container">
    <ul class="bs-docs-footer-links">
      <li><a href="https://github.com/twbs/bootstrap">GitHub 仓库</a></li>
      <li><a href="../getting-started/#examples">实例</a></li>
      <li><a href="http://www.youzhan.org">优站精选</a></li>
      <li><a href="../about/">关于</a></li>
    </ul>

    <p>Designed and built with all the love in the world by <a href="https://twitter.com/mdo" target="_blank">@mdo</a> and <a href="https://twitter.com/fat" target="_blank">@fat</a>. Maintained by the <a href="https://github.com/orgs/twbs/people">core team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</p>

    <p>本项目源码受 <a rel="license" href="https://github.com/twbs/bootstrap/blob/master/LICENSE" target="_blank">MIT</a>开源协议保护，文档受 <a rel="license" href="https://creativecommons.org/licenses/by/3.0/" target="_blank">CC BY 3.0</a> 开源协议保护。</p>

  </div>
</footer>

<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="../assets/js/vendor/jquery.min.js"><\/script>')</script>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>



  <script src="../assets/js/docs.min.js"></script>




<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="../assets/js/ie10-viewport-bug-workaround.js"></script>
<script type="text/javascript" src="../assets/js/and.js"></script>
<!-- <script type="text/javascript" src="../assets/js/and2.js"></script>
<script type="text/javascript" src="../assets/js/and3.js"></script> -->

  </body>
</html>
