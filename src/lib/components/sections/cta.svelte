<script>
	import * as m from '$paraglide/messages';
	import PrimaryButton from '../ui/button/primaryButton.svelte';
	import SecondaryButton from '../ui/button/secondaryButton.svelte';
	import image from '$lib/assets/Inside_Bulding.png?w=600&format=webp';
</script>

<section class="py-20 md:py-32" id="cta">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="grid md:grid-cols-2 gap-6 md:gap-12">
			<div class="flex flex-col gap-6 justify-center md:order-1">
				<h2 class="title">{m.cta_title()}</h2>
				<p class="subtitle">{m.cta_subtitle()}</p>
				<div class="flex flex-col md:flex-row gap-2">
					<PrimaryButton />
					<SecondaryButton />
				</div>
			</div>
			<img src={image} alt="hero" width="600" height="600" />
		</div>
	</div>
</section>
