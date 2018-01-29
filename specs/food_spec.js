var assert = require('assert');
var Food = require('../food.js')

describe('Food', function(){

  var food1;
  var food2;

  beforeEach(function(){
    food1 = new Food("Ice Cream", 1);
    food2 = new Food("Pilchards", 2)
  })

  it("has a name", function(){
    assert.strictEqual(food1.name, "Ice Cream");
  })

  it("has a replenishment value", function(){
    assert.strictEqual(food1.replenishmentValue, 1);
  })


})
