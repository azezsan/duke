<script lang="ts">
	import * as m from '$paraglide/messages';
	import PrimaryButton from '../ui/button/primaryButton.svelte';
	import SecondaryButton from '../ui/button/secondaryButton.svelte';
	import image1 from '$lib/assets/Hero_Image/top_line.svg';
	import image2 from '$lib/assets/Hero_Image/top_image.png?w=600&format=webp';
	import image3 from '$lib/assets/Hero_Image/middle_line.svg';
	import image4 from '$lib/assets/Hero_Image/bottom_image.png?w=600&format=webp';
	import image5 from '$lib/assets/Hero_Image/bottom_line.svg';

	let isMounted = $state(false);

	$effect(() => {
		isMounted = true;
		console.log('mounted');
	});
</script>

<section class="py-20 md:py-32" id="hero">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="grid md:grid-cols-2 gap-6 md:gap-12">
			<div class="flex flex-col gap-6 justify-center">
				<h1
					class="title transition-all delay-0 duration-[1000ms] ease-in-out {isMounted
						? 'opacity-100'
						: 'opacity-0 -translate-y-5'}"
				>
					{m.hero_title()}
				</h1>
				<p
					class="subtitle transition-all delay-0 duration-[1000ms] ease-in-out {isMounted
						? 'opacity-100'
						: 'opacity-0 -translate-y-5'}"
				>
					{m.hero_subtitle()}
				</p>
				<div
					class="flex flex-col md:flex-row gap-2 transition-all delay-[200ms] duration-[1500ms] ease-in-out {isMounted
						? 'opacity-100'
						: 'opacity-0 -translate-y-5'}"
				>
					<PrimaryButton />
					<SecondaryButton />
				</div>
			</div>
			<picture class="relative w-auto h-auto aspect-square">
				<img
					src={image1}
					alt="hero"
					class="absolute top-0 left-0 w-full h-full transition-all delay-[1700ms] duration-[1200ms] ease-in-out {isMounted
						? 'opacity-100'
						: 'opacity-0'}"
				/>
				<img
					src={image2}
					alt="hero"
					height="700"
					width="700"
					class="absolute top-0 left-0 w-full h-full transition-all delay-[2000ms] duration-[1200ms] ease-in-out {isMounted
						? 'opacity-100'
						: 'opacity-0'}"
				/>
				<img
					src={image3}
					alt="hero"
					class="absolute top-0 left-0 w-full h-full transition-all delay-[1200ms] duration-[1200ms] ease-in-out {isMounted
						? 'opacity-100'
						: 'opacity-0'}"
				/>
				<img
					src={image4}
					alt="hero"
					height="700"
					width="700"
					class="absolute top-0 left-0 w-full h-full transition-all delay-[1400ms] duration-[1200ms] ease-in-out {isMounted
						? 'opacity-100'
						: 'opacity-0'}"
				/>
				<img
					src={image5}
					alt="hero"
					class="absolute top-0 left-0 w-full h-full transition-all delay-[1600ms] duration-[1200ms] ease-in-out {isMounted
						? 'opacity-100'
						: 'opacity-0'}"
				/>
			</picture>
		</div>
	</div>
</section>
