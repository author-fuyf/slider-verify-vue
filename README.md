## 一个基于vue2和vue3的插件打包工程, 目前主要应用于slider-verify滑块插件；作用插件源码需确保兼容不同vue版本。

## Demo演示

> **Demo**：[https://portal.fuyunfeng.top/plugins_v3/index.html](https://portal.fuyunfeng.top/plugins_v3/index.html)  

> **在vue2.js中使用?**: [https://github.com/author-fuyf/slider-verify-v2](https://github.com/author-fuyf/slider-verify-v2)  

> **在vue3.js中使用?**: [https://github.com/author-fuyf/slider-verify-v3](https://github.com/author-fuyf/slider-verify-v3)  

## 为什么被创建

- 最初本意希望达到的目的是完全兼容v2、v3插件工程，能够只存在一个npm包被不同版本兼容引用，解决重复仓库、版本、代码维护的问题。
- 尝试过vue-demi包装处理，但存在问题。（应是v3版本升级存在编译破坏性的不兼容处理导致）
- 最终降级方案：参考ui-coms，兼容语法上的改动处理 + 工程配置上解决代码多份维护的情况，感谢！



## 参考链接

- [https://github.com/hangjob/ui-coms](https://github.com/hangjob/ui-coms)


