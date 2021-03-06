var test = require('tape');
var clone = require('./clone');


test('amp-clone', function (t) {
    var moe = {name : 'moe', lucky : [13, 27, 34]};
    var moeClone = clone(moe);
    t.equal(moeClone.name, 'moe', 'the clone as the attributes of the original');

    moeClone.name = 'curly';
    t.ok(moeClone.name === 'curly' && moe.name === 'moe', 'clones can change shallow attributes without affecting the original');

    moeClone.lucky.push(101);
    t.equal(moe.lucky[moe.lucky.length - 1], 101, 'changes to deep attributes are shared with the original');

    t.equal(clone(undefined), void 0, 'non objects should not be changed by clone');
    t.equal(clone(1), 1, 'non objects should not be changed by clone');
    t.equal(clone(null), null, 'non objects should not be changed by clone');
    t.end();
});
