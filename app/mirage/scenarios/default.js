import Mirage, {faker} from 'ember-cli-mirage';

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  //create todos
  var todo, listId, todosIds, rand, isComplete;
  
  for(var i=0; i<5; i++){
  	listId = i+1;
  	todosIds = [];
  	rand = getRandomIntInclusive(0, 8);
  	for (var j=0; j<rand; j++) {

  		todo = server.create('todo', {
        list:listId,
        isComplete: ( faker.random.boolean())
        
      });
  		todosIds.push(todo.id);
  	}
  	server.create('list', {
  		todos: todosIds,
  		todosCount: todosIds.length
  	});
  }
}