<script>
	import * as m from '$paraglide/messages';

	import LogoAr from '$lib/assets/duke_ar.svelte';
	import LogoEn from '$lib/assets/duke_en.svelte';
	import { languageTag } from '$paraglide/runtime';
	import Button from '../ui/button/button.svelte';
	import { Sun, Moon } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
	import X from '$lib/assets/Logos/x.svelte';
	import Facebook from '$lib/assets/Logos/facebook.svelte';
	import Youtube from '$lib/assets/Logos/youtube.svelte';
	import Snapchat from '$lib/assets/Logos/snapchat.svelte';
	import Instagram from '$lib/assets/Logos/instagram.svelte';
	import Tiktok from '$lib/assets/Logos/tiktok.svelte';
</script>

<section class="pt-20 md:pt-32" id="footer">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="flex flex-col gap-8">
			<div class="grid md:grid-cols-2 gap-6 md:gap-12">
				<div class="flex flex-col gap-6">
					<div class="flex gap-4">
						{#if languageTag() === 'en'}
							<LogoEn />
						{:else}
							<LogoAr />
						{/if}
						<Button on:click={toggleMode} variant="outline" size="icon">
							<Sun
								class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
							/>
							<Moon
								class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
							/>
							<span class="sr-only">Toggle theme</span>
						</Button>
					</div>
					<p class="text-justify">{m.footer_subtitle()}</p>
				</div>
				<div class="flex gap-16 md:gap-0 md:justify-evenly">
					<!-- <div class="flex flex-col gap-6 justify-center">
						<Label>Lorem ipsum</Label>
						<a href="#">Lorem ipsum</a>
						<a href="#">Lorem ipsum</a>
						<a href="#">Lorem ipsum</a>
					</div> -->
					<div class="flex flex-col gap-6 justify-center">
						<h4 class="label">{m.footer_socials()}</h4>
						<div class="flex flex-wrap gap-3">
							<Button
								variant="outline"
								size="icon"
								href="https://x.com/dukegulf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<X />
							</Button>
							<Button
								variant="outline"
								size="icon"
								href="https://www.facebook.com/people/dukegulf/100092443881590/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Facebook />
							</Button>
							<Button
								variant="outline"
								size="icon"
								href="https://www.youtube.com/@Dukegulf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Youtube />
							</Button>
							<!-- <Button variant="outline" size="icon">
								<Snapchat />
							</Button> -->
							<Button
								variant="outline"
								size="icon"
								href="https://www.instagram.com/dukegulf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Instagram />
							</Button>
							<Button
								variant="outline"
								size="icon"
								href="https://www.tiktok.com/@dukegulf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Tiktok />
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div
				class="flex flex-col md:flex-row md:justify-between p-6 border-t-2 text-center md:text-start"
			>
				<p>{m.footer_rights()}</p>
				<p>{m.made_by_itar()}</p>
				<div class="flex gap-4 justify-around">
					<a href="#">{m.footer_privacy()}</a>
					<a href="#">{m.footer_terms()}</a>
				</div>
			</div>
		</div>
	</div>
</section>
