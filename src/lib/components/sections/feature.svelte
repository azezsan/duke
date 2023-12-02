<script>
	import * as m from '$paraglide/messages';
	import Headline from '../typography/headline.svelte';
	import Title from '../typography/title.svelte';

	const features = [
		{
			title: m.feature_title_1(),
			subtitle: m.feature_subtitle_1(),
			src: 'https://picsum.photos/100',
			alt: 'feature'
		},
		{
			title: m.feature_title_2(),
			subtitle: m.feature_subtitle_2(),
			src: 'https://picsum.photos/100',
			alt: 'feature'
		},
		{
			title: m.feature_title_3(),
			subtitle: m.feature_subtitle_3(),
			src: 'https://picsum.photos/100',
			alt: 'feature'
		}
	];
</script>

<section class="py-20 md:py-32" id="feature">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each features as { title, subtitle, src, alt }}
				<div class="grid flex-col mx-auto justify-items-center text-center">
					<img {src} {alt} />
					<Title>{title}</Title>
					<Headline>{subtitle}</Headline>
				</div>
			{/each}
		</div>
	</div>
</section>
