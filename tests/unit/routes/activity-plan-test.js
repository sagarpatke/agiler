import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | activity-plan', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:activity-plan');
    assert.ok(route);
  });
});
