var assert = require('assert');
var Task = require('../task.js');
// var Hero = require('../hero.js');
// var Food = require('../food.js');

describe('Task', function(){
  var task1;
  // var task2;
  // var task3;
  // var task4;

beforeEach(function(){
  task1 = new Task("Remove a spider from girlfriend's livingroom", 1, 4, 2);
  // task2 = new Task("Give CPR to a dying man", 3, 5, 3);
  // task3 = new Task("Kill a tyrant", 5, 2, 3);
  // task4 = new Task("Climb a mountain", 2, 1, 2);
})

it("can be marked complete", function(){
  task1.markAsComplete();
  assert.strictEqual(task1.complete, true);
})

})
