<script>
	import '../app.pcss';
	import ParaglideJsSvelteKitAdapter from '$lib/ParaglideSvelteKit.svelte';
	import { ModeWatcher } from "mode-watcher";
</script>

<ParaglideJsSvelteKitAdapter>
	<ModeWatcher />
	<slot />
</ParaglideJsSvelteKitAdapter>
