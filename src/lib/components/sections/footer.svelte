<script>
	import Headline from '../typography/headline.svelte';
	import Label from '../typography/label.svelte';
	import Title from '../typography/title.svelte';
</script>

<section class="pt-20 md:pt-32" id="footer">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="flex flex-col gap-8">
			<div class="grid md:grid-cols-2 gap-6 md:gap-12">
				<div class="flex flex-col gap-6">
					<Title>Footer</Title>
					<Headline>Footer</Headline>
				</div>
				<div class="flex gap-16 md:gap-0 md:justify-evenly">
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
				</div>
			</div>
			<div class="flex flex-col md:flex-row md:justify-between p-6 border-t-2 text-center md:text-start">
				<p>Lorem ipsum dolor sit amet</p>
				<p>Lorem ipsum dolor sit amet</p>
				<div class="flex gap-4 justify-around">
					<a href="#">Lorem ipsum</a>
					<a href="#">Lorem ipsum</a>
				</div>
			</div>
		</div>
	</div>
</section>
