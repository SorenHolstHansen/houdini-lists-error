<script lang="ts">
	import { graphql, query, Grids } from '$houdini';

	const { data: gridData } = query<Grids>(graphql`
		query Grids {
			grids {
				id
				colors
			}
		}
	`);

	$: console.log('data', $gridData);
</script>

<div class="flex flex-wrap justify-around">
	{#each $gridData.grids as grid}
		{#if grid.colors}
			{#each grid.colors as color}
				<li>{color}</li>
			{/each}
		{/if}
	{/each}
</div>
