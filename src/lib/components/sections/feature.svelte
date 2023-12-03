<script>
	import * as m from '$paraglide/messages';
	import { Lightbulb, Sparkle, Sprout } from 'lucide-svelte';
	import Headline from '../typography/headline.svelte';
	import Title from '../typography/title.svelte';

	const features = [
		{
			icon: Sprout,
			title: m.feature_title_1(),
			subtitle: m.feature_subtitle_1()
		},
		{
			icon: Lightbulb,
			title: m.feature_title_2(),
			subtitle: m.feature_subtitle_2()
		},
		{
			icon: Sparkle,
			title: m.feature_title_3(),
			subtitle: m.feature_subtitle_3()
		}
	];
</script>

<section class="py-20 md:py-32" id="feature">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="flex flex-col gap-20">
			<div class="flex flex-col text-center gap-4">
				<Title>{m.feature_title()}</Title>
				<Headline>{m.feature_subtitle()}</Headline>
			</div>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each features as { icon, title, subtitle }}
				<div class="grid flex-col mx-auto justify-items-center text-center gap-8">
					<svelte:component
					this={icon}
					class="w-16 h-16 mx-auto"
					color="hsl(var(--primary) / var(--tw-text-opacity))"
					/>
					<Title>{title}</Title>
					<Headline>{subtitle}</Headline>
				</div>
				{/each}
			</div>
		</div>
	</div>
</section>
