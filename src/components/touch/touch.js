import vc from '../vc/vc';

// const tap = new Event('tap');
// tap.init = (element) => {
//     vc.on(element, 'touchstart', () => {
//         element.dispatchEvent(tap);
//     });
// };

class Tap {
    constructor (element) {
        this.element = element;
        this.tapIns = new Event('tap');
        this.init();
    }

    init () {
        vc.on(this.element, 'touchstart', () => {
            this.element.dispatchEvent(this.tapIns);
        });
    }
}

export default Tap;
