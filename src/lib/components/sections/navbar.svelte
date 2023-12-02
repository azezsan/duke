<script lang="ts">
	import * as m from '../../../paraglide/messages';
	import Button from '../ui/button/button.svelte';
	import { setLanguageTag, languageTag, sourceLanguageTag } from '../../../paraglide/runtime';
	import { Sun, Moon } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
	import PrimaryButton from '../ui/button/primaryButton.svelte';
	import SecondaryButton from '../ui/button/secondaryButton.svelte';

	function translatePath(href: string) {
		return languageTag()
			? `${languageTag() === sourceLanguageTag ? '' : '/' + languageTag()}${href}`
			: href;
	}
</script>

<header class="py-4 md:py-8">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="flex items-center justify-between">
			<div class="flex gap-4 items-center">
				<img src="/favicon.png" alt="Logo" height="30" width="30" />
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
			<nav class="flex gap-6 z-10 md:items-center">
				<ul class="hidden items-center whitespace-nowrap md:flex">
					<li><a href="/about" class="p-3">link</a></li>
					<li><a href="#services" class="p-3">link</a></li>
					<li><a href={translatePath('/contact')} class="p-3">link</a></li>
					<li><a href="#services" class="p-3">link</a></li>
				</ul>
				<div class="flex gap-2 md:items-center w-full">
					<PrimaryButton />
				</div>
			</nav>
		</div>
	</div>
</header>
