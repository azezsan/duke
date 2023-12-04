<script lang="ts">
	import * as m from '$paraglide/messages';
	import { languageTag, sourceLanguageTag } from '$paraglide/runtime';
	import Button from './button.svelte';

	function translatePath(href: string) {
		return languageTag()
			? `${languageTag() === sourceLanguageTag ? '' : '/' + languageTag()}${href}`
			: href;
	}
</script>

<Button size="lg" href={translatePath('/contact')}>{m.primary_cta()}</Button>
