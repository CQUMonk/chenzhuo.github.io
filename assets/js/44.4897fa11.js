(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{210:function(v,_,t){"use strict";t.r(_);var a=t(0),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"客户端资源缓存设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端资源缓存设计","aria-hidden":"true"}},[v._v("#")]),v._v(" 客户端资源缓存设计")]),v._v(" "),t("p",[v._v("对于动态化业务而言，客户端网络情况的复杂且难以控，而保证业务资源的及时更新和提高页面渲染的速度，是提高产品体验和页面性能最重要的一环。")]),v._v(" "),t("p",[v._v("为了保障页面的稳定性，提升页面首屏打开速度，我们需要在客户端设计并实现相应的资源缓存方案。")]),v._v(" "),t("h2",{attrs:{id:"i-业务场景分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-业务场景分类","aria-hidden":"true"}},[v._v("#")]),v._v(" I. 业务场景分类")]),v._v(" "),t("p",[v._v("在移动端，业务页面的展示通常会包含两个比较重要的部分："),t("code",[v._v("页面UI")]),v._v("与"),t("code",[v._v("业务数据")]),v._v("。\n我们在开发实践过程中发现，不同的业务场景对于这两部分的实时性需求不尽相同， 主要可以总结为以下两类：")]),v._v(" "),t("ul",[t("li",[v._v("业务数据实时性要求高")])]),v._v(" "),t("p",[v._v("对于大多数业务场景而言，通常都可以接受一定范围内的页面加载渲染和业务网络请求耗时，但需要保证业务数据的实时性。\n对于此类业务场景， 客户端本地的资源缓存和校验机制可以大幅提高页面资源加载效率， 在异步请求数据和进行UI渲染时页面展示"),t("code",[v._v("Loading")]),v._v("状态即可。")]),v._v(" "),t("ul",[t("li",[v._v("页面首屏时间要求高")])]),v._v(" "),t("p",[v._v("处于关键路径上的页面通常对页面首屏时间要求比较高（例如App首页）。\n为了提高用户体验， 这些页面通常需要即时打开， 不能采用蒙层或者"),t("code",[v._v("Loading")]),v._v("框来暂时遮蔽页面。\n此时，页面首次打开或缓存失效都会引发执行资源的更新与下载任务，导致页面打开延时，无法立即呈现。")]),v._v(" "),t("p",[v._v("对于此类业务场景，客户端可以采用资源预置和业务缓存数据的方式来应对。")]),v._v(" "),t("h2",{attrs:{id:"ii-业务资源管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ii-业务资源管理","aria-hidden":"true"}},[v._v("#")]),v._v(" II. 业务资源管理")]),v._v(" "),t("p",[v._v("考虑到上述两种业务场景和相应需求， 我们在客户端侧设计并实现了相应的资源缓存管理与加载策略。\n页面资源从构建到被渲染呈现的整体流程如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"/weex/weex-res-manage-overview.png",alt:""}})]),v._v(" "),t("ol",[t("li",[t("p",[v._v("在平台侧， 业务开发同学通过发布平台进行工程构建，资源发布与投放操作（这部分具体参见"),t("router-link",{attrs:{to:"/tech/weex/wx-platform.html"}},[v._v("Weex动态化部署与投放方案")]),v._v("）。\n另外，在App发版前需要将必要的业务资源预置到App中（关于预置资源的处理与操作见下文）。")],1)]),v._v(" "),t("li",[t("p",[v._v("通过发布平台， 构建完毕的页面资源文件被上传到CDN，而关于该页面资源信息则会交付给"),t("code",[v._v("AppConfig")]),v._v("的服务端，用于完成向指定客户端的投放。")])]),v._v(" "),t("li",[t("p",[v._v("客户端通过"),t("code",[v._v("AppConfig")]),v._v("将页面信息拉取到本地. 一个页面的相关信息主要包括：业务标识、相关资源与web链接、降级开关以及其他校验信息。\n客户端将会根据所获取到的业务资源信息下载对应的资源文件到本地磁盘。另外， 之前预置的业务资源也会适时同步到磁盘中，具体操作在下文介绍。")])]),v._v(" "),t("li",[t("p",[v._v("为了保证页面加载的稳定性，提高页面加载速度，客户端本地采用了"),t("code",[v._v("Disk Cache")]),v._v("和"),t("code",[v._v("Memory Cache")]),v._v("两级缓存策略：")])])]),v._v(" "),t("div",{staticClass:"tip custom-block"},[t("ul",[t("li",[t("code",[v._v("Disk Cache")]),v._v(": 每个加载过的业务，其资源文件都会被缓存在本地磁盘的缓存目录中。")]),v._v(" "),t("li",[t("code",[v._v("Memory Cache")]),v._v(": 当前每个加载过的业务资源内容及其信息都会缓存在内存中，采用"),t("code",[v._v("LRU算法")]),v._v("进行管理和维护。")])])]),v._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[v._v("除此之外，在业务读取资源文件到内存并渲染之前，还需要根据页面信息完成资源内容的安全性和完整性校验.")])]),v._v(" "),t("h2",{attrs:{id:"iii-资源预置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iii-资源预置","aria-hidden":"true"}},[v._v("#")]),v._v(" III. 资源预置")]),v._v(" "),t("p",[v._v("处于关键业务路径上的页面通常都会对页面首屏时间有严格要求的需求。")]),v._v(" "),t("p",[v._v("为了应对此类业务场景，我们需要在App发布前将这些业务的页面资源文件预置到App中。\n这部分需要完成的工作主要包括平台侧和客户端侧两部分：")]),v._v(" "),t("ul",[t("li",[v._v("预置资源处理")])]),v._v(" "),t("p",[v._v("在将页面资源预置进App之前，平台侧在页面构建阶段需要对资源文件进行一系列处理，如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"/weex/weex-presets-process.png",alt:""}})]),v._v(" "),t("p",[v._v("在工程A中，所有的页面都会被构建成对应的资源文件，在加入一系列安全校验规则处理后（由于涉及公司具体校验规则，这里就不详细介绍了），进行压缩和预置。")]),v._v(" "),t("ul",[t("li",[v._v("预置资源同步\n每次App启动后， 检测是否需要将预置的资源同步到磁盘缓存中，流程如下所示：")])]),v._v(" "),t("p",[t("img",{attrs:{src:"/weex/weex-presets-copy.png",alt:""}})]),v._v(" "),t("p",[v._v("如果有新版本首次安装，或磁盘缓存被人为清空的情况下，都会触发解压预置资源到磁盘缓存中的操作。")]),v._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[v._v("需要注意的一点是， 为了保证同一业务所对应资源文件的唯一性，每次解压预置资源到本地缓存之前，需要先将本地缓存清空。")])]),v._v(" "),t("h2",{attrs:{id:"iv-资源加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iv-资源加载","aria-hidden":"true"}},[v._v("#")]),v._v(" IV. 资源加载")]),v._v(" "),t("p",[v._v("为了提高页面打开效率，保证页面渲染速度和稳定性，客户端侧实现了二级缓存结构。\n除此之外，在页面真正渲染之前还需要考虑到所加载文件的完整性和安全性，因此相应的校验机制也显得必不可少。\n同时，为了进一步提升对于关键路径上页面的打开速度， 也可以考虑提前进行相关页面资源的预加载操作。")]),v._v(" "),t("h3",{attrs:{id:"_1-资源预加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-资源预加载","aria-hidden":"true"}},[v._v("#")]),v._v(" 1. 资源预加载")]),v._v(" "),t("p",[v._v("通过资源的预加载操作，就是在真正进入页面之前就将指定页面对应的资源加载到内存中，从而提高该页面的打开效率。\n流程如下所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"/weex/weex-preload-flow.png",alt:""}})]),v._v(" "),t("ol",[t("li",[v._v("首先尝试从MC（memory cache）中读取页面资源，如果未命中，则在DC中查找。")])]),v._v(" "),t("p",[v._v("通常情况下，我们会在App中预置关键路径页面资源并同步到DC中， 这类业务场景通过预加载可以直接从DC中获取到指定业务资源文件。\n但是不排除用户主动清除本地磁盘中文件的行为。")]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[v._v("当未能从DC中获取到指定页面资源时， 需要判断该资源是否被预置过，并尝试从预置资源中读取。")])]),v._v(" "),t("li",[t("p",[v._v("仅仅从DC中查找并读取到相应的资源文件是不够的，我们需要保证所有读取进内存的资源的合法性和正确性， 应该在读取前进行一些资源校验操作。")])])]),v._v(" "),t("h3",{attrs:{id:"_2-容器内加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-容器内加载","aria-hidden":"true"}},[v._v("#")]),v._v(" 2. 容器内加载")]),v._v(" "),t("p",[v._v("将页面资源的预加载到内存是利用空间换时间的方法来提高关键业务路径上页面打开效率的一种方式，并不是中必要的手段。\n而进入业务页面后， 需要从缓存中取出对应页面的资源进行页面渲染， 流程如下：\n"),t("img",{attrs:{src:"/weex/weex-load-flow.png",alt:""}})]),v._v(" "),t("p",[v._v("加载流程与上面预加载流程很相似， 区别在于如果未从缓存（MC或DC）中读取到资源，需要同步从服务端检查更新。\n即便从本地缓存中成功读取，也需要异步校验当前所加载的资源文件是否需要更新。")]),v._v(" "),t("h2",{attrs:{id:"v-资源更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-资源更新","aria-hidden":"true"}},[v._v("#")]),v._v(" V. 资源更新")]),v._v(" "),t("p",[v._v("当本地缓存中资源过期或者被删除，需要及时向服务端请求， 流程如下：\n"),t("img",{attrs:{src:"/weex/weex-update-flow.png",alt:""}})]),v._v(" "),t("p",[v._v("通过对比当前资源文件的MD5值与服务端文件的MD5值（配置中获取），可以判断当前资源是否需要更新。")]),v._v(" "),t("p",[v._v("更新成功后的资源文件会被加载到内存中，并通知给业务方。")]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("从业务角度而言，不同的业务场景提出了不同的动态化需求；\n而从技术的角度而言，更要保证页面资源文件的安全和稳定，同时还要兼顾到业务本身的性能。\n这里简单总结了我们在实践过程中遇到的问题和相应的解决方案。")])])}),[],!1,null,null,null);_.default=e.exports}}]);