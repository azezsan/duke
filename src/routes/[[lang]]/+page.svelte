<script lang="ts">
	import About from '$lib/components/sections/about.svelte';
	import Benefit from '$lib/components/sections/benefit.svelte';
	import Cta from '$lib/components/sections/cta.svelte';
	import Feature from '$lib/components/sections/feature.svelte';
	import Footer from '$lib/components/sections/footer.svelte';
	import Hero from '$lib/components/sections/hero.svelte';
	import Location from '$lib/components/sections/location.svelte';
	import Logo from '$lib/components/sections/logo.svelte';
	import Navbar from '$lib/components/sections/navbar.svelte';
	import Portfolio from '$lib/components/sections/portfolio.svelte';
</script>

<svelte:head>
	<title>home</title>
</svelte:head>

<Navbar />
<Hero />
<Logo />
<Benefit />
<Feature />
<About />
<Portfolio />
<Cta />
<Location />
<Footer />
