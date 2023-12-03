<script lang="ts">
	let { className = '' } = $props();
</script>

<p class="text-xl {className}">
	<slot />
</p>
