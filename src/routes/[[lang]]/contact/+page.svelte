<script lang="ts">
	import Footer from '$lib/components/sections/footer.svelte';
	import Navbar from '$lib/components/sections/navbar.svelte';
	import SettingsForm from './settings-form.svelte';
	export let data;
	import * as m from '$paraglide/messages';
</script>

<Navbar />
<section class="py-8 md:py-10" id="contact">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<SettingsForm form={data.form} />
	</div>
</section>
<Footer />
