var test = require('tape');
var keys = require('./index');

test('keys()', function (t) {
  t.ok(keys().match(/authorized_keys$/));
  t.end();
});

