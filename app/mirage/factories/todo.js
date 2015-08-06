import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
	title(i) { return `todo ${i}`; },
	isComplete: false,
	createdAt:  new Date(),
	list: 1
});
