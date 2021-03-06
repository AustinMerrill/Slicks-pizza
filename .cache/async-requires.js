// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-beers-js": () => import("./../../../src/pages/beers.js" /* webpackChunkName: "component---src-pages-beers-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-order-js": () => import("./../../../src/pages/order.js" /* webpackChunkName: "component---src-pages-order-js" */),
  "component---src-pages-pizza-js": () => import("./../../../src/pages/pizza.js" /* webpackChunkName: "component---src-pages-pizza-js" */),
  "component---src-pages-slicemasters-js": () => import("./../../../src/pages/slicemasters.js" /* webpackChunkName: "component---src-pages-slicemasters-js" */),
  "component---src-templates-pizza-js": () => import("./../../../src/templates/Pizza.js" /* webpackChunkName: "component---src-templates-pizza-js" */),
  "component---src-templates-slicemaster-js": () => import("./../../../src/templates/Slicemaster.js" /* webpackChunkName: "component---src-templates-slicemaster-js" */)
}

