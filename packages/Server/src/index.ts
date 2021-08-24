import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { GridResolver } from './resolvers/grid';

const main = async () => {
	const app = express();

	app.use(
		cors({
			origin: 'http://localhost:3000',
			credentials: true,
		})
	);

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [GridResolver],
			validate: false,
		}),
	});

	apolloServer.applyMiddleware({
		app,
		cors: false,
	});

	app.listen(4000, () => {
		console.log('Server started on localhost:4000');
	});
};

main();
