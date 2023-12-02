<script>
	import * as m from '$paraglide/messages';
	import Headline from '../typography/headline.svelte';
	import Title from '../typography/title.svelte';
	import PrimaryButton from '../ui/button/primaryButton.svelte';
	import SecondaryButton from '../ui/button/secondaryButton.svelte';
</script>

<section class="py-20 md:py-32" id="hero">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="grid md:grid-cols-2 gap-6 md:gap-12">
			<div class="flex flex-col gap-6 justify-center">
				<Title>{m.hero_title()}</Title>
				<Headline>{m.hero_subtitle()}</Headline>
				<div class="flex flex-col md:flex-row gap-2">
					<PrimaryButton />
					<SecondaryButton />
				</div>
			</div>
			<img src="https://picsum.photos/1000" alt="hero" />
		</div>
	</div>
</section>
