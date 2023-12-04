<script>
	import * as m from '$paraglide/messages';
	import image1 from '$lib/assets/Modren_Bulding.png';
	import image2 from '$lib/assets/Tall_Bulding.png';
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

<section class="py-20 md:py-32" id="services">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="flex flex-col gap-20">
			<div class="flex flex-col gap-4">
				<h2 class="title center">{m.servcies_title()}</h2>
				<p class="subtitle center">{m.servcies_subtitle()}</p>
			</div>
			<div class="flex flex-col gap-20">
				{#each benefits as { title, subtitle, src, alt }, i}
					<div class="grid md:grid-cols-2 gap-6 md:gap-12">
						<div class="flex flex-col gap-6 justify-center {i % 2 == 0 ? 'md:order-1' : ''}">
							<h3 class="title">{title}</h3>
							<p class="subtitle">{subtitle}</p>
						</div>
						<img {src} {alt} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
