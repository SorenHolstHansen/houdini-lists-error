import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Grocery {
	@Field(() => Int)
	id: number;

	@Field(() => String)
	name: string;
}

@ObjectType()
export class GroceryEdge {
	@Field(() => Int)
	cursor: number;

	@Field(() => Grocery)
	node: Grocery;
}

@ObjectType()
export class PageInfo {
	@Field()
	hasNextPage: boolean;
}

@ObjectType()
export class PaginatedGroceries {
	@Field(() => [GroceryEdge])
	edges: GroceryEdge[];

	@Field(() => PageInfo)
	pageInfo: PageInfo;
}
