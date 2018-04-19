//一个个写有点笨，这里封装一下，再通过数组foreach进去
const context = {};

//为context设置一下setter
function delegateSet(property, name) {
  context.__defineSetter__(name, val => {
    this[property][name] = val;
  });
}
//设置一下getter
function delegateGet(property, name) {
  context.__defineGetter__(name, val => {
    return this[property][name];
  });
}
