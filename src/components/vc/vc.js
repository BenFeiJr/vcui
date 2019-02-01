const vc = {};

vc.version = '0.0.1';

/**
 * 事件处理
 */
vc.on = (element, eventName, eventHandler) => {
    element.addEventListener(eventName, eventHandler);
};

/**
 * 数组处理
 */

vc.log = console.log;

export default vc;
