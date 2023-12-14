<script>
	import * as m from '$paraglide/messages';
	import Badge from '../ui/badge/badge.svelte';
	import project1 from '$lib/assets/project_1.png?w=600&format=webp';
	import project2 from '$lib/assets/project_2.png?w=600&format=webp';
	import project3 from '$lib/assets/project_3.png?w=600&format=webp';

	const portfolio = [
		{
			title: m.portfolio_title_1(),
			tags: [m.portfolio_tag_1()],
			src: project1,
			alt: 'work'
		},
		{
			title: m.portfolio_title_2(),
			tags: [m.portfolio_tag_2()],
			src: project2,
			alt: 'work'
		},
		{
			title: m.portfolio_title_3(),
			tags: [m.portfolio_tag_3()],
			src: project3,
			alt: 'work'
		}
	];
</script>

<section class="py-20 md:py-32" id="portfolio">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="flex flex-col gap-20">
			<div class="flex flex-col gap-4">
				<h2 class="title center">{m.portfolio_title()}</h2>
				<p class="subtitle center">{m.portfolio_subtitle()}</p>
			</div>
			<div class="flex flex-col gap-10">
				{#each portfolio as { title, tags, src, alt }, i}
					<div
						class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto justify-between"
					>
						<img {src} {alt} width="600" height="600" class={i % 2 == 1 ? 'md:order-1' : ''} />
						<div class="flex flex-col gap-4 justify-center">
							<h3 class="label">{title}</h3>
							<div class="flex flex-row gap-4">
								{#each tags as tag}
									<Badge variant="secondary">{tag}</Badge>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
