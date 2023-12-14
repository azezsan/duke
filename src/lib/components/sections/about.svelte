<script>
	import * as m from '$paraglide/messages';
	import image from '$lib/assets/3_Buldings.png?w=600&format=webp';

	const stats = [
		{
			number: m.about_stat_number_1(),
			label: m.about_stat_label_1()
		},
		{
			number: m.about_stat_number_2(),
			label: m.about_stat_label_2()
		}
	];
</script>

<section class="py-20 md:py-32" id="about">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="grid md:grid-cols-2 gap-6 md:gap-12">
			<div class="flex flex-col gap-6 justify-center">
				<h2 class="title">{m.about_title()}</h2>
				<p class="subtitle">{m.about_subtitle()}</p>
				<div class="grid grid-cols-2 gap-4">
					{#each stats as { number, label }}
						<div class="flex flex-col gap-1">
							<span class="label">{number}</span>
							<span class="text-justify">{label}</span>
						</div>
					{/each}
				</div>
			</div>
			<img src={image} alt="hero" width="600" height="600" />
		</div>
	</div>
</section>
