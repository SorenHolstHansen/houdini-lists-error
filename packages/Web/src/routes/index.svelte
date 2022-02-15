<script lang="ts">
	import { graphql, paginatedQuery } from '$houdini';

	const { loadNextPage, data } = paginatedQuery(graphql`
		query Groceries {
			paginatedGroceries(first: 10) @paginate(name: "SomeName") {
				edges {
					node {
						id
						name
					}
				}
			}
		}
	`);

	$: console.log({ data: $data });
</script>
