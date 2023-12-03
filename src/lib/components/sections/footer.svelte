<script>
	import Headline from '../typography/headline.svelte';
	import Label from '../typography/label.svelte';
	import Title from '../typography/title.svelte';
	import * as m from '$paraglide/messages';
	
	import LogoAr from '$lib/assets/duke_ar.svelte';
	import LogoEn from '$lib/assets/duke_en.svelte';
	import { languageTag } from '$paraglide/runtime';
</script>

<section class="pt-20 md:pt-32" id="footer">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="flex flex-col gap-8">
			<div class="grid md:grid-cols-2 gap-6 md:gap-12">
				<div class="flex flex-col gap-6">
					{#if languageTag() === 'en'}
						<LogoEn />
					{:else}
						<LogoAr />
					{/if}
					<Headline>{m.footer_subtitle()}</Headline>
				</div>
				<!-- <div class="flex gap-16 md:gap-0 md:justify-evenly">
					<div class="flex flex-col gap-6 justify-center">
						<Label>Lorem ipsum</Label>
						<a href="#">Lorem ipsum</a>
						<a href="#">Lorem ipsum</a>
						<a href="#">Lorem ipsum</a>
					</div>
					<div class="flex flex-col gap-6 justify-center">
						<Label>Lorem ipsum</Label>
						<a href="#">Lorem ipsum</a>
						<a href="#">Lorem ipsum</a>
						<a href="#">Lorem ipsum</a>
					</div>
				</div> -->
			</div>
			<div
				class="flex flex-col md:flex-row md:justify-between p-6 border-t-2 text-center md:text-start"
			>
				<p>{m.footer_rights()}</p>
				<p>Lorem ipsum dolor sit amet</p>
				<div class="flex gap-4 justify-around">
					<a href="#">{m.footer_privacy()}</a>
					<a href="#">{m.footer_terms()}</a>
				</div>
			</div>
		</div>
	</div>
</section>
