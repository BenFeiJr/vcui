const vc = {};
vc.on = (element, eventName, eventHandler) => {
    element.addEventListener(eventName, eventHandler);
};

vc.log = console.log;

export default vc;
