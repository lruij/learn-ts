var testEgg = function (egg) {
    console.log(egg.weight);
};
// 由于存在缓存机制 ts 弱校验 只要含有应该的属性就不报错
var cegg = {
    weight: 100,
    sex: 'male'
};
testEgg(cegg);
var testBigEgg = function (bigEgg) {
    bigEgg.open();
};
testBigEgg({
    weight: 100,
    open: function () {
        console.log('我裂开了');
    }
});
/**
 * 类继承接口
 *
 * @class OldEgg
 * @implements {BigEgg}
 */
var OldEgg = /** @class */ (function () {
    function OldEgg() {
        this.weight = 100;
    }
    OldEgg.prototype.open = function () {
        console.log('老裂开了');
    };
    return OldEgg;
}());
var testSayHello = function (enn) {
    return enn;
};
console.log(testSayHello('Hello'));
