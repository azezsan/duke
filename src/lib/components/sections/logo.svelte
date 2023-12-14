<script>
	import * as m from '$paraglide/messages';
	import logo1 from '$lib/assets/Logos/Group146.svg?w=100&format=webp';
	import logo2 from '$lib/assets/Logos/alahsa_municipality.svg?w=100&format=webp';
	import logo3 from '$lib/assets/Logos/aramco.svg?w=100&format=webp';
	import logo4 from '$lib/assets/Logos/madinah_authority.svg?w=100&format=webp';
	import logo5 from '$lib/assets/Logos/madinah_municipality.svg?w=100&format=webp';
	import logo6 from '$lib/assets/Logos/nwc.svg?w=100&format=webp';
	import logo7 from '$lib/assets/Logos/sapac.svg?w=100&format=webp';
	import logo8 from '$lib/assets/Logos/saudi_electricity.svg?w=100&format=webp';

	const logos = [
		{
			src: logo1,
			alt: 'Logo'
		},
		{
			src: logo2,
			alt: 'Logo'
		},
		{
			src: logo3,
			alt: 'Logo'
		},
		{
			src: logo4,
			alt: 'Logo'
		},
		{
			src: logo5,
			alt: 'Logo'
		},
		{
			src: logo6,
			alt: 'Logo'
		},
		{
			src: logo7,
			alt: 'Logo'
		},
		{
			src: logo8,
			alt: 'Logo'
		}
	];
</script>

<section class="py-8 md:py-10" id="logo">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col text-center gap-8">
		<p class="label center">{m.logo_label()}</p>
		<div class="flex flex-wrap justify-center gap-8 max-w-xl mx-auto">
			{#each logos as logo}
				<img src={logo.src} alt={logo.alt} width="75" height="75" />
			{/each}
		</div>
	</div>
</section>
