import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
	title(i) { return `list ${i}`; },
	isComplete: false,
	createdAt:  new Date(),
	todosCount: 4
});
