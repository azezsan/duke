<script>
	import * as m from '$paraglide/messages';
	import Headline from '../typography/headline.svelte';
	import Title from '../typography/title.svelte';
</script>

<section class="py-20 md:py-32" id="location">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="grid md:grid-cols-2 gap-6 md:gap-12">
			<div class="flex flex-col gap-6 justify-center">
				<Title>{m.location_title()}</Title>
				<Headline>{m.location_subtitle()}</Headline>
			</div>
			<img src="https://picsum.photos/600/300" alt="hero" />
		</div>
	</div>
</section>
