import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
	title(i) { return `todo ${i}`; },
	isComplete: faker.random.boolean,
	createdAt:  faker.date.past,
	list: 1
});
