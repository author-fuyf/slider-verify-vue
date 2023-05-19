/* eslint-disable */
// @ts-nocheck

import SliderVerify from './SliderVerify/index.vue'

const pkgs = {
  SliderVerify,
}

const pkgSetup = (app) => {
  Object.keys(pkgs).forEach((pkg) => {
    // const str = pkg.replace(pkg[0], pkg[0].toLowerCase());
    // const name = str.replace(/([A-Z])/g, "-$1").toLowerCase();
    app.component(pkg, pkgs[pkg])
  })
}

export default pkgSetup;
