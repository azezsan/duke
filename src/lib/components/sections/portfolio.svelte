<script>
	import * as m from '$paraglide/messages';
	import Headline from '../typography/headline.svelte';
	import Title from '../typography/title.svelte';
	import Badge from '../ui/badge/badge.svelte';
	import project1 from '$lib/assets/project_1.png';
	import project2 from '$lib/assets/project_2.png';
	import project3 from '$lib/assets/project_3.png';

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
			<div class="flex flex-col text-center gap-4">
				<Title>{m.portfolio_title()}</Title>
				<Headline>{m.portfolio_subtitle()}</Headline>
			</div>
			<div>
				{#each portfolio as { title, tags, src, alt }, i}
					<div
						class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto justify-between p-10"
					>
						<img {src} {alt} width="800" class={i % 2 == 1 ? 'order-1' : ''} />
						<div class="flex flex-col gap-4 justify-center">
							<Title>{title}</Title>
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
