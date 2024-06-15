console.log("Hello World!");
const defineDomOperation = function () {
  const _window = window as any;
  //创建元素
  _window.createElement = function (tagName: string) {
    return document.createElement(tagName);
  };
  //从父元素中移除
  _window.removeElement = function (element: HTMLElement) {
    element.parentElement?.removeChild(element);
  };
};
defineDomOperation(); //配置dom操作
