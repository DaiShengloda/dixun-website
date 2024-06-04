/**
 * 微应用为hash，注册微应用
 * name - 微应用的名称，微应用之间必须确保唯一；
 * container - 微应用的容器节点的选择器或者 Element 实例；
 * activeRule - 微应用的激活规则 string | (location: Location) => boolean | Array<string> ；
 * entry - 微应用的入口；
 * locEntry - 本地运行入口；
 * onlineEntry - 线上运行入口；
 */

const defApps = [
  {
    name: 'resume',
    container: '#subapp-container',
    activeRule: [
      '#/resume',
    ],
    locEntry: `http://127.0.0.1:8090`,
    onlineEntry: `/resume/`
  }
];

/**
 * 根据不同环境，写入微应用entry值
 */
const MicroApps = defApps.map((app) => {
  const { locEntry, onlineEntry } = app;
  let entry = '';
  if (process.env.NODE_ENV === 'production') {
    entry = onlineEntry;
  } else {
    entry = locEntry;
  }
  const newApp = Object.assign(app, {entry: entry})
  return newApp;
});
console.log('******【主应用注册的微应用MicroApps】******', MicroApps);
export default MicroApps;
