import { Color, Grid } from '../entities/Grid';
import { Query, Resolver } from 'type-graphql';

@Resolver(Grid)
export class GridResolver {
	@Query(() => [Grid])
	grids(): Grid[] {
		const grids: Grid[] = [
			{
				id: 1,
				colors: [
					[Color.blue, null],
					[null, Color.green],
				],
			},
			{
				id: 2,
				colors: [
					[Color.red, null],
					[null, Color.blue],
				],
			},
		];
		return grids;
	}
}
