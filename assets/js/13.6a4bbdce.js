(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{214:function(v,e,t){"use strict";t.r(e);var _=t(0),i=Object(_.a)({},(function(){var v=this,e=v.$createElement,t=v._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"javascript执行上下文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript执行上下文","aria-hidden":"true"}},[v._v("#")]),v._v(" Javascript执行上下文")]),v._v(" "),t("p",[v._v("我们都知道，类似Java等传统编程语言，代码通常会先被编译成字节码，然后在虚拟机上转为机器码执行。")]),v._v(" "),t("p",[v._v("而"),t("code",[v._v("JavaScript")]),v._v("的编译和执行模式就不太相同了：尽管"),t("code",[v._v("JavaScript")]),v._v("代码片段在执行前也需要进行编译（词法分析，语法分析以及机器码生成等步骤），\n但通常情况下编译过程与执行环节两者衔接比较紧密， 编译完成后立刻交给引擎执行。")]),v._v(" "),t("p",[v._v("结合"),t("code",[v._v("JavaScript")]),v._v("的编译与执行过程，本文对函数的"),t("code",[v._v("执行上下文")]),v._v("以及执行过程中的知识进行梳理和总结.")]),v._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[v._v("随着"),t("code",[v._v("JavaScript")]),v._v("标准的版本更迭，关于执行上下文中的内容、词法环境的概念定义也在不断更新，本文暂以"),t("code",[v._v("ES2018")]),v._v("中的术语定义为基准。")])]),v._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[v._v("#")]),v._v(" Overview")]),v._v(" "),t("p",[v._v("在讨论之前，我们先简单介绍一下执行上下文的概念。")]),v._v(" "),t("p",[v._v("我们先看下"),t("code",[v._v("ES2018")]),v._v("标准中关于"),t("a",{attrs:{href:"http://ecma-international.org/ecma-262/#sec-execution-contexts",target:"_blank",rel:"noopener noreferrer"}},[v._v("Execution Context"),t("OutboundLink")],1),v._v("的定义：")]),v._v(" "),t("blockquote",[t("p",[v._v("An execution context is a specification device that is used to track the runtime evaluation of code by an ECMAScript implementation.\n简单来讲，"),t("code",[v._v("执行上下文")]),v._v("就是在JavaScript中代码片段执行过程中所需的信息的通常被称作"),t("code",[v._v("执行上下文")]),v._v("("),t("code",[v._v("Execution Context")]),v._v(")。")])]),v._v(" "),t("p",[v._v("JavaScript的执行上下文可以分为两种（Eval函数暂不讨论）：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("全局执行上下文")]),v._v("：全局执行上下文处于最外围且是唯一的，默认情况下代码都在全局环境下执行，在其他的执行上下文中都可以访问全局上下文中的数据。 它会创建一个全局对象（window、global），并将this指针指向该对象。")]),v._v(" "),t("li",[t("code",[v._v("函数执行上下文")]),v._v("：当程序运行到某个函数，会为该函数创建对应的执行上下文，因此函数执行上下文可以有多个。")])]),v._v(" "),t("p",[v._v("虽然各个版本的"),t("code",[v._v("JavaScript")]),v._v("标准中关于执行上下文的定义和内容会有变动，但核心的内容与设计思想没有太大变化。")]),v._v(" "),t("p",[v._v("我们知道， JavaScript在浏览器中都是单线程执行的。在代码执行过程中，指定脚本/模块装载，函数调用等操作，都会创建该对应的"),t("code",[v._v("执行上下文")]),v._v("的创建和切换操作，过程如下：")]),v._v(" "),t("ul",[t("li",[v._v("当浏览器首次加载并解析JavaScript脚本， 在程序执行前首先会创建全局执行上下文，并将其推入"),t("code",[v._v("执行栈")]),v._v("中，位于栈顶的就是运行时执行上下文(running execution context)。")]),v._v(" "),t("li",[v._v("如果我们在全局上下文中调用一个函数， 则会创建一个新的"),t("code",[v._v("函数执行上下文")]),v._v("， 并将其推入"),t("code",[v._v("执行栈")]),v._v("中。同理，如果我们在执行函数的过程中又调用了另外一个函数， 则同样会创建新的函数执行上下文并进行入栈操作。")]),v._v(" "),t("li",[v._v("当函数执行完毕， 相应函数的执行上下文从执行栈中弹出， 将程序控制权还给当前栈中上一个执行上下文。")])]),v._v(" "),t("p",[v._v("经过上面的简单介绍， 我们对"),t("code",[v._v("执行上下文")]),v._v("的概念和以及执行栈结构有了一个大体上的了解。 那么执行上下文中都包含了哪些内容呢？")]),v._v(" "),t("h3",{attrs:{id:"execution-context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execution-context","aria-hidden":"true"}},[v._v("#")]),v._v(" Execution Context")]),v._v(" "),t("p",[v._v("在代码执行过程中，执行上下文所关联的代码片段也可以是函数，脚本，模块；执行上下文中则保存了所执行代码过程中所需要的状态和信息：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("Code Evaluation State")]),v._v(": 保存该上下文的关联的代码在执行、挂起和恢复时所需要的状态和数据。")]),v._v(" "),t("li",[t("code",[v._v("Function")]),v._v("：如果是函数执行上下文（该上下文所对应的代码片段是函数），则用于保存所执行的函数对象。")]),v._v(" "),t("li",[t("code",[v._v("Realm")]),v._v("：所关联代码所能访问的内置对象和基础库。")]),v._v(" "),t("li",[t("code",[v._v("ScriptOrModule")]),v._v("：当所关联代码是脚本或者模块时，则表示正在执行的脚本或者代码。")])]),v._v(" "),t("p",[v._v("除此之外，执行上下文中还包含了词法环境对象和变量环境对象：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("LexicalEnvironment")]),v._v(": 获取和访问变量时候使用")]),v._v(" "),t("li",[t("code",[v._v("VariableEnvironment")]),v._v(": 声明变量时候使用")])]),v._v(" "),t("p",[v._v("这两者虽然是作为两个不同的对象存在，事实都都属于词法环境范畴：")]),v._v(" "),t("blockquote",[t("p",[v._v("The LexicalEnvironment and VariableEnvironment components of an execution context are always Lexical Environments.")])]),v._v(" "),t("p",[v._v("下面我们就梳理一下词法环境到底是什么。")]),v._v(" "),t("h3",{attrs:{id:"词法环境-lexical-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#词法环境-lexical-environment","aria-hidden":"true"}},[v._v("#")]),v._v(" 词法环境 Lexical Environment")]),v._v(" "),t("p",[v._v("还是先根据"),t("code",[v._v("ES2018")]),v._v("标准中的定义：")]),v._v(" "),t("blockquote",[t("p",[v._v("A Lexical Environment is a specification type used to define the association of Identifiers to specific variables and functions based upon the lexical nesting structure of ECMAScript code.")])]),v._v(" "),t("p",[v._v("简单来说，"),t("code",[v._v("Lexical Environment")]),v._v("制订了JavaScript引擎如何根据标识符名称查找变量的规则和机制，因此它维护了一个"),t("code",[v._v("Identifier-Variable")]),v._v("的映射结构（"),t("code",[v._v("Environment Record")]),v._v("）来进行管理： 这里的"),t("code",[v._v("Identifier")]),v._v("是指变量或者函数标识符的名字，"),t("code",[v._v("Variable")]),v._v("是指对应变量的引用（可以是对象，函数，基本值）。")]),v._v(" "),t("p",[v._v("通常情况下，词法环境总是和一些特定的语法结构相关联，例如函数声明（非执行），代码块，try..catch结构的catch块等。")]),v._v(" "),t("p",[v._v("每当执行到这些代码片段，JavaScript就会创建一个新的词法环境，用于记录和存储当前执行代码中所声明的变量，函数（包括函数入参）的对象。\n通过"),t("code",[v._v("Lexical Environment")]),v._v("以及对应执行环境下的词法/变量对象，构建了JavaScript变量作用域的概念。")]),v._v(" "),t("p",[v._v("除此之外，"),t("code",[v._v("Lexical Environment")]),v._v("还维护了一个指针引用"),t("code",[v._v("Outer Environment Reference")]),v._v("，它指向了当前词法环境外部词法环境。\n通过"),t("code",[v._v("Outer Environment Reference")]),v._v(" ，有嵌套代码结构的词法环境被（单向）串接了起来，从而形成了“作用域链”的设计。\n")]),t("div",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"/javascript/js-context/lexical-env.png",alt:""}})]),t("p"),v._v(" "),t("h2",{attrs:{id:"词法环境的创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#词法环境的创建","aria-hidden":"true"}},[v._v("#")]),v._v(" 词法环境的创建")]),v._v(" "),t("p",[v._v("大致理解了词法环境和执行上下文的概念以后，让我们结合上下文的切换从头回顾一下我们的代码运行过程。")]),v._v(" "),t("p",[v._v("在代码片段执行之前的"),t("code",[v._v("编译阶段")]),v._v("(词法分析，语法分析以及机器码生成)，会收集相应"),t("code",[v._v("词法环境")]),v._v("信息。\n以函数声明为例，这个过程如下：")]),v._v(" "),t("ul",[t("li",[v._v("首先需要创建一个"),t("code",[v._v("arguments object")]),v._v("对象，用于保存函数入参对象， 完成对入参的初始化.")]),v._v(" "),t("li",[v._v("扫描遍历并查找函数体中声明的函数和变量（注意表达的次序），初始化后保存在变量对象中.")])]),v._v(" "),t("p",[v._v("编译结束后，这部分数据信息都被保存在相应的AST节点中。")]),v._v(" "),t("p",[v._v("这里我们需要特别注意的是，编译阶段只是对代码中涉及的对象的声明进行查找和初始化，而真正对变量的赋值操作则是放在真正的执行过程中。")]),v._v(" "),t("p",[v._v("在这里，变量对象的创建过程也解释了函数在执行过程中为什么会有"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting",target:"_blank",rel:"noopener noreferrer"}},[v._v("变量提升"),t("OutboundLink")],1),v._v("现象的发生：")]),v._v(" "),t("blockquote",[t("p",[v._v("JavaScript 中，函数及变量的声明都将被提升到函数的最顶部, 可以先使用再声明。")])]),v._v(" "),t("p",[v._v("在代码执行之前，仍然以函数调用为例，需要对函数对象进行初始化（"),t("a",{attrs:{href:"http://ecma-international.org/ecma-262/#sec-functioninitialize",target:"_blank",rel:"noopener noreferrer"}},[v._v("FunctionInitialize "),t("OutboundLink")],1),v._v("）\n在函数对象初始化过程中，除了初始化参数列表，代码块等等，还将函数对象的私有属性"),t("code",[v._v("[[Environment]]")]),v._v("初始化为函数"),t("strong",[v._v("定义时")]),v._v("的词法环境信息，根据函数类型(Normal, Method, Arrow)设置"),t("code",[v._v("[[ThisMode]]")]),v._v("字段等等。")]),v._v(" "),t("p",[v._v("在代码执行过程中，像我们之前提到的那样，JavaScript使用执行栈对执行上下文进行管理。\n全局执行上下文始终处于栈底部，与之关联的是全局词法环境。")]),v._v(" "),t("p",[v._v("当代码执行过程中发生函数调用，则会创建一个新的"),t("code",[v._v("函数执行上下文")]),v._v("对象入栈，同时也会创建该函数的词法环境：")]),v._v(" "),t("ul",[t("li",[v._v("创建"),t("code",[v._v("Environment Record")]),v._v("对象，保存函数内部的变量")]),v._v(" "),t("li",[v._v("将函数对象的"),t("code",[v._v("[[Environment]]")]),v._v("赋给词法环境的"),t("code",[v._v("Outer Environment Reference")]),v._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"/javascript/js-context/context-stack-lexical.png",alt:""}})])])]),v._v(" "),t("p",[v._v("这样，执行上下文持有了访问对应词法环境的引用，而词法环境又持有了外层词法环境对象的引用，沿着这条链路最终可以走到最外部的全局词法环境（作用域链），因此内部的词法环境可以访问到外部的词法环境，反过来则不行。")]),v._v(" "),t("p",[v._v("执行上下文中的“作用域链”设计保证了对执行上下文有权访问的所有变量和函数的"),t("code",[v._v("有序")]),v._v("访问：\n在运行阶段，当代码试图访问某个变量或者函数对象， 引擎会沿着"),t("code",[v._v("作用域链")]),v._v("一级一级地搜索。\n这样的设计使内部执行上下文可以沿着作用域链访问外部上下文中的变量或者函数， 而外部上下文无法访问到内部上下文中的数据。")]),v._v(" "),t("h2",{attrs:{id:"this关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#this关键字","aria-hidden":"true"}},[v._v("#")]),v._v(" this关键字")]),v._v(" "),t("p",[v._v("在其他编程语言中， "),t("code",[v._v("this")]),v._v("常常用于实例对象中，表示指向当前对象的引用或指针。\n同样， JavaScript同样有\n"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this",target:"_blank",rel:"noopener noreferrer"}},[v._v("this"),t("OutboundLink")],1),v._v("\n关键字的概念， 但它的机制和表现行为上有着很大不同。")]),v._v(" "),t("p",[v._v("除了我们在"),t("router-link",{attrs:{to:"/tech/js/js-obj-create.html"}},[v._v("图解Javascript对象的创建")]),v._v("介绍过的关于this指针在创建对象过程中的使用之外， "),t("code",[v._v("this")]),v._v("引用也通常用于不同的"),t("code",[v._v("执行上下文")]),v._v("相关联。")],1),v._v(" "),t("p",[v._v("对于普通函数而言（非箭头函数），当函数被调用时，调用它的对象将被赋值给该函数"),t("code",[v._v("执行上下文")]),v._v("中的"),t("code",[v._v("this指针")]),v._v("，调用函数时使用的引用，决定了函数执行时候的"),t("code",[v._v("this")]),v._v("值。\n而对于箭头函数而言，它的this值不受调用对象的影响。")]),v._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[v._v("根据"),t("code",[v._v("ES2018")]),v._v("中的定义，this被划归到了Lexical Environment中.")])]),v._v(" "),t("p",[v._v("我们在上面讨论过函数对象的初始化过程的时候，提到函数对象本身有一个私有属性"),t("code",[v._v("[[Environment]]")]),v._v("负责保存函数"),t("strong",[v._v("定义时")]),v._v("的词法环境。\n另外，函数对象还有一个私有属性"),t("code",[v._v("[[ThisMode]]")]),v._v("，它的值是根据函数的类型和预处理指令决定的，也决定了"),t("code",[v._v("this")]),v._v("的取值：")]),v._v(" "),t("ul",[t("li",[v._v("当函数为箭头函数时，"),t("code",[v._v("[[ThisMode]]")]),v._v("值为"),t("code",[v._v("lexical")]),v._v("，表示从当前上下文中找this，不受调用对象影响；")]),v._v(" "),t("li",[v._v("当使用严格模式时，"),t("code",[v._v("[[ThisMode]]")]),v._v("值为"),t("code",[v._v("strict")]),v._v("，表示this指向调用该方法对象，如果调用对象为空，则this为null")]),v._v(" "),t("li",[v._v("其他情况下，"),t("code",[v._v("[[ThisMode]]")]),v._v("值为"),t("code",[v._v("global")]),v._v("，表示当this值如果为undefined，则取global；")])]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("执行环境中，变量对象（作用域）负责收集并维护由所有声明的标识符和引用， 而作用域链则设计了对于标识符的查询规则和方式，二者共同确定了当前代码对于这些标识符的访问权限。")]),v._v(" "),t("p",[v._v("当我们理解了整个"),t("code",[v._v("作用域链")]),v._v("的设计，就不难理解JavaScript中关于"),t("router-link",{attrs:{to:"/tech/js/js-closure.html"}},[v._v("「闭包」")]),v._v("的设计与原理了。")],1)])}),[],!1,null,null,null);e.default=i.exports}}]);