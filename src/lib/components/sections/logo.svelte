<script>
	import Label from '../typography/label.svelte';
	import * as m from '$paraglide/messages';

	const logos = [
		{
			src: 'https://picsum.photos/100',
			alt: 'Logo'
		},
		{
			src: 'https://picsum.photos/100',
			alt: 'Logo'
		},
		{
			src: 'https://picsum.photos/100',
			alt: 'Logo'
		},
		{
			src: 'https://picsum.photos/100',
			alt: 'Logo'
		},
		{
			src: 'https://picsum.photos/100',
			alt: 'Logo'
		},
		{
			src: 'https://picsum.photos/100',
			alt: 'Logo'
		},
		{
			src: 'https://picsum.photos/100',
			alt: 'Logo'
		},
		{
			src: 'https://picsum.photos/100',
			alt: 'Logo'
		}
	];
</script>

<section class="py-20 md:py-32" id="logo">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col text-center gap-8">
		<Label>{m.logo_label()}</Label>
		<div class="flex flex-wrap justify-center gap-8">
			{#each logos as logo}
				<img src={logo.src} alt={logo.alt} />
			{/each}
		</div>
	</div>
</section>
