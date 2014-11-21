var test = require('tape');
var isNull = require('./is-null');


test('amp-is-null', function (t) {
    t.ok(!isNull(undefined), 'undefined is not null');
    t.ok(!isNull(NaN), 'NaN is not null');
    t.ok(isNull(null), 'but null is');
    t.end();
});
