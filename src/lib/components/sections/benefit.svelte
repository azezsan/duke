<script>
	import * as m from '$paraglide/messages';
	import Headline from '../typography/headline.svelte';
	import Title from '../typography/title.svelte';
	import image1 from '$lib/assets/Modren_Bulding.png';
	import image2 from '$lib/assets/Tall_Bulding.png'
	import image3 from '$lib/assets/Middle_Bulding.png';
	import image4 from '$lib/assets/Glass_Bulding.png';

	const benefits = [
		{
			title: m.benefit_title_1(),
			subtitle: m.benefit_subtitle_1(),
			src: image1,
			alt: 'benefit'
		},
		{
			title: m.benefit_title_2(),
			subtitle: m.benefit_subtitle_2(),
			src: image2,
			alt: 'benefit'
		},
		{
			title: m.benefit_title_3(),
			subtitle: m.benefit_subtitle_3(),
			src: image3,
			alt: 'benefit'
		},
		{
			title: m.benefit_title_4(),
			subtitle: m.benefit_subtitle_4(),
			src: image4,
			alt: 'benefit'
		}
	];
</script>

<section class="py-20 md:py-32" id="benefit">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="flex flex-col gap-20">
			{#each benefits as { title, subtitle, src, alt }, i}
				<div class="grid md:grid-cols-2 gap-6 md:gap-12">
					<div class="flex flex-col gap-6 justify-center {i % 2 == 0 ? 'md:order-1' : ''}">
						<Title>{title}</Title>
						<Headline>{subtitle}</Headline>
					</div>
					<img {src} {alt} />
				</div>
			{/each}
		</div>
	</div>
</section>
