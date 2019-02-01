function aa(m, b, bNum, bSum) {
    const eosNum = bNum || 842.3434;
    const eosSum = bSum || 45360;

    const z = () => {
        return (eosSum + m) / ((m / b) + eosNum);
    };

    console.log(`之前成本${eosSum / eosNum}元，花${m}元，平均成本可以降到${z()}元`);
};

function bb(a, b) {
    const eosNum = 842.3434;
    const eosSum = 45360;

    const z = () => {
        return ((a * b * eosNum) - (a * eosSum)) / (a - b);
    };

    console.log(`之前成本${eosSum / eosNum}元，eos${a}元时，需要花${z()}才可以降到${b}元`);
};

/**
 * 大于30买EOS已经不划算了，对拉低平均值几乎没有影响
 * 
 */