function aa(m, b, bNum, bSum) {
    const eosNum = bNum || 256.5065;
    const eosSum = bSum || 22360;
    const usdToCny = 6.64;

    const z = () => {
        return (eosSum + m) / ((m / (b * usdToCny)) + eosNum);
    };

    console.log(`现在币价${b * usdToCny}元，花${m}元，平均成本可以降到${z()}元，${z() / usdToCny}美金`);
};