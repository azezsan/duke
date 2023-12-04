<script>
	import '../app.pcss';
	import ParaglideJsSvelteKitAdapter from '$lib/ParaglideSvelteKit.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import Button from '$lib/components/ui/button/button.svelte';
	import image from '$lib/assets/Logos/whatsapp.svg';
</script>

<ParaglideJsSvelteKitAdapter>
	<ModeWatcher />
	<slot />
	<Button class="fixed bottom-5 right-5 px-2" size="lg">
		<a
			href="https://wa.me/966539040070"
			target="_blank"
			class="flex justify-between items-center gap-1"
		>
			<span>تواصل معنا</span>
			<img src={image} alt="whatsapp" width="30" height="30" />
		</a>
	</Button>
</ParaglideJsSvelteKitAdapter>
