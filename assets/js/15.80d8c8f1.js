(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{241:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript的模块机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript的模块机制","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript的模块机制")]),t._v(" "),a("p",[t._v("伴随着前端应用的复杂化， 将程序按照模块进行解耦和拆分逐渐成为了常态。\n而JavaScript直到ES6才正式引入模块机制， 在这之前， 社区中涌现了CommonJS、AMD等多种模块化解决方案。")]),t._v(" "),a("p",[t._v("在JavaScript的语法规则中，脚本和模块是两种不同的概念：")]),t._v(" "),a("blockquote",[a("p",[t._v("脚本是由宿主环境引入并主动执行的JavaScript代码段，而模块则是在JavaScript代码中通过import引入进来，等待被调用的库.")])]),t._v(" "),a("p",[t._v("相对于脚本而言，模块机制主要有语句，"),a("code",[t._v("import")]),t._v("声明和"),a("code",[t._v("export")]),t._v("声明组成。 但是不同规范和方案下的模块导入导出规则太难记了，本文就对ES6和CommonJS相应语法规则进行了梳理和总结。")]),t._v(" "),a("h2",{attrs:{id:"es6-moldue语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-moldue语法","aria-hidden":"true"}},[t._v("#")]),t._v(" ES6 Moldue语法")]),t._v(" "),a("ul",[a("li",[t._v("import 声明")])]),t._v(" "),a("p",[t._v("ES6的"),a("code",[t._v("import")]),t._v("声明有两种使用方式：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moduleA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入moduleA模块, 确保moduleA模块中代码被执行")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moduleA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把模块moduleA默认的导出值放入当前变量 a")]),t._v("\n")])])]),a("p",[t._v("我们经常使用的是第二种带from关键字的，它有很多灵活的使用语法：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moduleA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入moduleA中声明的默认导出对象")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moduleA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入moduleA中所导出的变量")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" bbb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moduleA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moduleA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将moduleA中所有导出的变量都放入当前x对象中")]),t._v("\n")])])]),a("ul",[a("li",[t._v("export 声明")])]),t._v(" "),a("p",[a("code",[t._v("export")]),t._v(" 命令声明了模块对外暴露的接口, 主要有三种使用方式：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// export要导出的变量列表")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接在声明语句之前使用")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认导出")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" a\n")])])]),a("p",[t._v("这里，"),a("code",[t._v("export default")]),t._v("的语义是，将a对象的值赋给一个名为"),a("code",[t._v("default")]),t._v("的变量并导出，以便引用方无需知道变量名就可以直接引入并使用：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bbb "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moduleA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入moduleA中声明的默认导出对象")]),t._v("\n")])])]),a("p",[t._v("这里有一点需要特别注意一下，"),a("code",[t._v("export default")]),t._v("导出的是一个变量值，后续模块中的变化和该值没有关系；而"),a("code",[t._v("export")]),t._v("导出的是变量本身，因此还会受到模块内部的控制和影响。")]),t._v(" "),a("h2",{attrs:{id:"commonjs语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs语法","aria-hidden":"true"}},[t._v("#")]),t._v(" CommonJS语法")]),t._v(" "),a("p",[a("code",[t._v("CommonJS")]),t._v("是一种模块规范，而Node使用了CommonJS规范来对模块进行管理。")]),t._v(" "),a("ul",[a("li",[t._v("导出")])]),t._v(" "),a("p",[t._v("在CommonJS的模块导出语法有两种：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 整体导出")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导出对象a")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导出多个变量")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这里，"),a("code",[t._v("module.exports")]),t._v("和"),a("code",[t._v("exports")]),t._v("指向了同一个引用对象（var exports = module.exports），都指向了最终模块所导出的对象。\n需要注意的是，由于模块最终导出的对象一定是"),a("code",[t._v("module.exports")]),t._v("所指向的对象，因此我们只能向exports上挂载变量，而不要去改变"),a("code",[t._v("exports")]),t._v("指向的对象。")]),t._v(" "),a("ul",[a("li",[t._v("导入")])]),t._v(" "),a("p",[t._v("CommonJS的模块导出相对来说比较简单：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moduleA'")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载并读取moduleA所声明的module.exports对象")]),t._v("\n")])])]),a("p",[t._v("在Node中，"),a("code",[t._v("require")]),t._v("命令会读入并执行一个"),a("code",[t._v("JavaScript")]),t._v("模块文件，并根据该模块中所声明的"),a("code",[t._v("module.exports")]),t._v("在内存中创建一个导出对象（原对象的copy）。")]),t._v(" "),a("h2",{attrs:{id:"对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对比","aria-hidden":"true"}},[t._v("#")]),t._v(" 对比")]),t._v(" "),a("p",[t._v("虽然CommonJS和ES6在语法颇为相似，但是在模块加载机制上却相去甚远。")]),t._v(" "),a("p",[t._v("我们上面提到，CommonJS在首次require一个模块的时候，会执行该模块代码并将所声明的"),a("code",[t._v("module.exports")]),t._v("对象缓存起来，以便下次使用。同时，这里所缓存的对象是原模块对象中的拷贝。")]),t._v(" "),a("p",[t._v("而ES6的import只是在编译阶段使用了一个引用来保存被导出对象，当代码执行期间才会根据引用地址去读取对应的值。因此，在外部对于导出变量的修改，可以影响到被引用模块内部。")]),t._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[t._v("#")]),t._v(" References")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/module-loader#ES6-%E6%A8%A1%E5%9D%97%E4%B8%8E-CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B7%AE%E5%BC%82",target:"_blank",rel:"noopener noreferrer"}},[t._v("《ES6 模块与 CommonJS 模块的差异》—— 阮一峰"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);