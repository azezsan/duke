<script>
	import { cn } from '$lib/utils';
	import * as m from '$paraglide/messages';
	import { Phone } from 'lucide-svelte';
	import Button from './button.svelte';
</script>

<Button variant="secondary" size="lg" dir="ltr" class="flex gap-2" href="tel:+966 13 530 0000"
	><Phone />{m.secondary_cta()}</Button
>
