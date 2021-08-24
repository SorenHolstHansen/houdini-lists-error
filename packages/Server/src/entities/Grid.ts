import { Field, Int, ObjectType, registerEnumType } from 'type-graphql';

export enum Color {
	black = 'black',
	white = 'white',
	gray = 'gray',
	orange = 'orange',
	purple = 'purple',
	red = 'red',
	yellow = 'yellow',
	green = 'green',
	blue = 'blue',
}

registerEnumType(Color, {
	name: 'Color', // this one is mandatory
	description: 'Various Colors', // this one is optional
});

@ObjectType()
export class Grid {
	@Field(() => Int)
	id: number;

	// undefined => no colors
	@Field(() => [[Color]], {
		nullable: 'items',
	})
	colors?: (Color | null)[][];
}
