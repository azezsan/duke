<script>
	import * as m from '$paraglide/messages';
	import Headline from '../typography/headline.svelte';
	import Title from '../typography/title.svelte';

	const stats = [
		{
			number: m.about_stat_number_1(),
			label: m.about_stat_label_1()
		},
		{
			number: m.about_stat_number_2(),
			label: m.about_stat_label_2()
		},
		{
			number: m.about_stat_number_3(),
			label: m.about_stat_label_3()
		},
		{
			number: m.about_stat_number_4(),
			label: m.about_stat_label_4()
		}
	];
</script>

<section class="py-20 md:py-32" id="about">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="grid md:grid-cols-2 gap-6 md:gap-12">
			<div class="flex flex-col gap-6 justify-center">
				<Title>{m.about_title()}</Title>
				<Headline>{m.about_subtitle()}</Headline>
				<div class="grid grid-cols-2 gap-2">
					{#each stats as { number, label }}
						<div class="flex flex-col gap-1">
							<span class="text-3xl font-bold">{number}</span>
							<span>{label}</span>
						</div>
					{/each}
				</div>
			</div>
			<img src="https://picsum.photos/1000" alt="hero" />
		</div>
	</div>
</section>
