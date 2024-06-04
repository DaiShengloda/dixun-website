export const isPC = () => {
  const userAgentInfo = navigator.userAgent;
  const agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  let flag = true;
  for(const agent of agents) {
    if(userAgentInfo.includes(agent)) {
      flag = false;
      break;
    }
  }
  return flag;
}