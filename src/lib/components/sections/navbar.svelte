<script lang="ts">
	import * as m from '../../../paraglide/messages';
	import Button from '../ui/button/button.svelte';
	import { setLanguageTag, languageTag, sourceLanguageTag } from '../../../paraglide/runtime';
	import PrimaryButton from '../ui/button/primaryButton.svelte';
	import LogoAr from '$lib/assets/duke_ar.svelte';
	import LogoEn from '$lib/assets/duke_en.svelte';

	function translatePath(href: string) {
		return languageTag()
			? `${languageTag() === sourceLanguageTag ? '' : '/' + languageTag()}${href}`
			: href;
	}
</script>

<header class="py-4 md:py-8">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="flex items-center justify-between">
			<a href={translatePath('/')} aria-label="back to home page" class="flex gap-4 items-center">
				{#if languageTag() === 'en'}
					<LogoEn />
				{:else}
					<LogoAr />
				{/if}
			</a>
			<nav class="flex gap-6 z-10 md:items-center">
				<ul class="hidden items-center whitespace-nowrap md:flex">
					<li><a href="/#about" class="p-3">{m.about()}</a></li>
					<li><a href="/#services" class="p-3">{m.services()}</a></li>
					<li><a href="/#portfolio" class="p-3">{m.portfolio()}</a></li>
					<li><a href="/#location" class="p-3">{m.location()}</a></li>
				</ul>

				<div class="flex gap-2 md:items-center w-full">
					{#if languageTag() === 'en'}
						<Button
							on:click={() => setLanguageTag('ar')}
							variant="outline"
							size="icon"
							class="items-center"
						>
							<span class="sr-only">Toggle language</span>
							<span>ع</span>
						</Button>
					{:else}
						<Button on:click={() => setLanguageTag('en')} variant="outline" size="icon">
							<span class="sr-only">Toggle language</span>
							<span>En</span>
						</Button>
					{/if}
					<PrimaryButton />
				</div>
			</nav>
		</div>
	</div>
</header>
