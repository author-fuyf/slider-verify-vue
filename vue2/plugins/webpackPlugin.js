class MyPlugin {
  constructor(options) {
    console.log('MyPlugin initialized with options:', options);
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
      const outputFiles = Object.keys(compilation.assets);
      console.log('打包后的文件列表:', outputFiles);
    });
  }
}

module.exports = MyPlugin;
