var test = require('tape');
var indexOf = require('./index-of');


test('amp-index-of', function (t) {
    t.equal(indexOf(['a', 'b'], 1), -1);
    t.equal(indexOf(undefined, 1), -1);
    t.equal(indexOf(null, 1), -1);
    t.equal(indexOf(NaN, 1), -1);
    t.equal(indexOf({}, 1), -1);
    t.equal(indexOf(['a'], 'a'), 0);
    t.equal(indexOf(['a' , 1], 1), 1);
    t.end();
});
