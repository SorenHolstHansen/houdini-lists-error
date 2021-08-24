/** @type {import('houdini').ConfigFile} */
const config = {
	schemaPath: './schema.graphql',
	sourceGlob: 'src/**/*.svelte',
	module: 'esm',
	framework: 'kit',
	apiUrl: 'http://localhost:4000/graphql',
	scalars: {
		// the name of the scalar we are configuring
		DateTime: {
			// the corresponding typescript type
			type: 'Date',
			// turn the api's response into that type
			unmarshal(val) {
				return new Date(val);
			},
			// turn the value into something the API can use
			marshal(date) {
				return date.getTime();
			},
		},
		ObjectId: {
			// the corresponding typescript type
			type: 'string',
			// turn the api's response into that type
			unmarshal(val) {
				return String(val);
			},
			// turn the value into something the API can use
			marshal(value) {
				return value;
			},
		},
		JSON: {
			type: 'any',
			unmarshal(val) {
				return val;
			},
			marshal(val) {
				return Object(val);
			},
		},
	},
};

export default config;
