<script>
	import * as m from '$paraglide/messages';
	import Headline from '../typography/headline.svelte';
	import Title from '../typography/title.svelte';
	import PrimaryButton from '../ui/button/primaryButton.svelte';
	import SecondaryButton from '../ui/button/secondaryButton.svelte';
	import image from '$lib/assets/Inside_Bulding.png';
</script>

<section class="py-20 md:py-32" id="cta">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="grid md:grid-cols-2 gap-6 md:gap-12">
			<div class="flex flex-col gap-6 justify-center md:order-1">
				<Title>{m.cta_title()}</Title>
				<Headline>{m.cta_subtitle()}</Headline>
				<div class="flex flex-col md:flex-row gap-2">
					<PrimaryButton />
					<SecondaryButton />
				</div>
			</div>
			<img src={image} alt="hero" />
		</div>
	</div>
</section>
