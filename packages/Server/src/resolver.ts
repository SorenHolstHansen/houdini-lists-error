import { Grocery, PaginatedGroceries } from './entity';
import { Arg, Query, Resolver } from 'type-graphql';

const groceries: Grocery[] = [...Array(50).keys()].map((i) => ({
	id: i,
	name: `Grcoery ${i}`,
}));

@Resolver(Grocery)
export class GroceryResolver {
	@Query(() => PaginatedGroceries)
	paginatedGroceries(
		@Arg('first') first: number,
		@Arg('after') after: number
	): PaginatedGroceries {
		let res: PaginatedGroceries = {
			edges: groceries
				.slice(after, first + after)
				.map((g) => ({ cursor: g.id, node: g })),
			pageInfo: { hasNextPage: first + after < 50 },
		};
		return res;
	}
}
