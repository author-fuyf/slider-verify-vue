import pkgSetup from '../../../packages/pkg'

const install = (app) => {
  pkgSetup(app)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


export {
  install
}

export default install;
