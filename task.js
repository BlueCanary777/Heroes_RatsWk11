var Task = function(description, difficultyLevel, urgencyLevel, reward){
  this.description = description;
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.complete = false;
}

Task.prototype.markAsComplete = function(){
  this.complete = true;
}

module.exports = Task;
