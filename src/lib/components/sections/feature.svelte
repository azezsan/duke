<script>
	import * as m from '$paraglide/messages';
	import { Lightbulb, Sparkle, Sprout } from 'lucide-svelte';

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
			<div class="flex flex-col gap-4">
				<h2 class="title center">{m.feature_title()}</h2>
				<p class="subtitle center">{m.feature_subtitle()}</p>
			</div>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each features as { icon, title, subtitle }}
					<div class="flex flex-col gap-8">
						<svelte:component
							this={icon}
							class="w-16 h-16 mx-auto"
							color="hsl(var(--primary) / var(--tw-text-opacity))"
						/>
						<h3 class="title self-center">{title}</h3>
						<p class="subtitle">{subtitle}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
