var assert = require('assert');
var Task = require('../task.js');
var Hero = require('../hero.js');
var Food = require('../food.js');


describe('Hero', function(){

  var hero;
  var iceCream;
  var pilchards;
  var task1;
  var task2;
  var task3;
  var task4;


  beforeEach(function(){
    hero = new Hero("Raphael McTavish", 5, "Pilchards");
    iceCream = new Food("Ice Cream", 1);
    pilchards = new Food("Pilchards", 2)
    task1 = new Task("Remove a spider from girlfriend's livingroom", 1, 4, 2);
    task2 = new Task("Give CPR to a dying man", 3, 5, 5);
    task3 = new Task("Kill a tyrant", 5, 2, 2);
    task4 = new Task("Climb a mountain", 2, 1, 3);
  })

  it("should be able to talk", function(){
    assert.strictEqual(hero.talk(), "Cowabunga!");
  })

  it("should be able to eat", function(){
    hero.eat(iceCream);
    assert.strictEqual(hero.health, 6);
  })

  it("should be able to add a list of tasks to an array", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.addTask(task4);
    assert.strictEqual(hero.tasks.length, 4);
  })

  it("should be able to eat and gain 150% food replenishment value from favourite food", function(){
    hero.eat(pilchards);
    assert.strictEqual(hero.health, 8);
  })

  it("can be marked complete", function(){
    task1.markAsComplete();
    assert.strictEqual(task1.complete, true);
  })

  it("should be able to indicate task completed", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.addTask(task4);
    task2.markAsComplete();
    task3.markAsComplete();

    assert.deepEqual(hero.displayAsComplete(), ["Give CPR to a dying man", "Kill a tyrant"]);
  })
})

  // it("should be able to sort tasks by difficulty level", function(){
  //   assert.deepEqual(hero.compareDifficulty(), [task3, task2, task4, task1]);
  // })
