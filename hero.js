var Hero = function(name, health, fav_food){
  this.name = name;
  this.health = health;
  this.fav_food = fav_food;
  this.tasks = [];
}

Hero.prototype.talk = function(){
    return "Cowabunga!";
}

Hero.prototype.eat = function(food){
   if (food.name === "Pilchards"){
    this.health += (food.replenishmentValue * 1.5);
   } else {
    this.health += food.replenishmentValue;
   }
}

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
}


Hero.prototype.displayAsComplete = function(){
  var completedTasks = [];
  var incompleteTasks = [];
  this.tasks.forEach(function(task){
    if (task.complete === true){
      completedTasks.push(task.description);
    } else {
      incompleteTasks.push(task.description);
    }
  })
  return completedTasks;
  return incompleteTasks;
}


// Hero.prototype.compareDifficulty = function(task1, task2){
//   if (task1.difficulty > task2.difficulty) {
//     return 1;
//   } else if (task1.difficulty === task2.difficulty) {
//     return 0;
//     else {
//       return 1;
//     }
//     }
//     this.tasks.sort(compareDifficulty);
//     return (tasks);
//   }




// Hero.prototype.sortByDifficulty = function(){
//   var difficultyValue = 0;
//   var orderByDifficulty = [];
//   this.tasks.forEach(function(task){
//     if (task.difficultyLevel > difficultyValue){
//       difficultyValue = task.difficultyValue;
//     }
//     orderByDifficulty.push(task);
//   })
// }


module.exports = Hero;
