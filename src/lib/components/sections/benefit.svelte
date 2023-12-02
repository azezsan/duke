<script>
	import * as m from '$paraglide/messages';
	import Headline from '../typography/headline.svelte';
	import Title from '../typography/title.svelte';

	const benefits = [
		{
			title: m.benefit_title_1(),
			subtitle: m.benefit_subtitle_1(),
			src: 'https://picsum.photos/1000',
			alt: 'benefit'
		},
		{
			title: m.benefit_title_2(),
			subtitle: m.benefit_subtitle_2(),
			src: 'https://picsum.photos/1000',
			alt: 'benefit'
		},
		{
			title: m.benefit_title_3(),
			subtitle: m.benefit_subtitle_3(),
			src: 'https://picsum.photos/1000',
			alt: 'benefit'
		},
		{
			title: m.benefit_title_4(),
			subtitle: m.benefit_subtitle_4(),
			src: 'https://picsum.photos/1000',
			alt: 'benefit'
		}
	];
</script>

<section class="py-20 md:py-32" id="benefit">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="flex flex-col gap-20">
			{#each benefits as { title, subtitle, src, alt }}
			<div class="grid md:grid-cols-2 gap-6 md:gap-12">
				<div class="flex flex-col gap-6 justify-center">
					<Title>{title}</Title>
					<Headline>{subtitle}</Headline>
				</div>
				<img {src} {alt} />
			</div>
			{/each}
		</div>
	</div>
</section>
