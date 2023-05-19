export default function myPlugin() {
  return {
    name: 'my-plugin',
    apply: 'build',
    enforce: 'post',
    generateBundle(options, bundle) {
      console.log('生成的文件列表:');
      for (const fileName in bundle) {
        if (bundle[fileName].isEntry) {
          console.log(fileName);
        }
      }
    },
  }
}
