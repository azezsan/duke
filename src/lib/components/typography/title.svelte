<script lang="ts">
	let { className = "" } = $props();
</script>

<h1 class="text-3xl font-bold {className}">
	<slot />
</h1>
