<script lang="ts">
	let { className = '' } = $props();
</script>

<p class="text-xl text-justify {className}">
	<slot />
</p>
