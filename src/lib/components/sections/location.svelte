<script>
	import * as m from '$paraglide/messages';
	import Headline from '../typography/headline.svelte';
	import Title from '../typography/title.svelte';
	import { languageTag } from '$paraglide/runtime';
</script>

<section class="py-20 md:py-32" id="location">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="flex flex-col gap-20">
			<div class="flex flex-col text-center gap-4">
				<Title>{m.location_title()}</Title>
				<Headline>{m.location_subtitle()}</Headline>
			</div>
			<div class="grid md:grid-cols-2 gap-6 md:gap-12">
				<div class="flex flex-col gap-8">
					<div class="flex flex-col gap-6 justify-center">
						<Title>{m.location_title_1()}</Title>
						<Headline>{m.location_subtitle_1()}</Headline>
					</div>
					<div class="flex flex-col gap-6 justify-center">
						<Title>{m.location_title_2()}</Title>
						<Headline>{m.location_subtitle_2()}</Headline>
					</div>
					<div class="flex flex-col gap-6 justify-center">
						<Title>{m.location_title_3()}</Title>
						<div class="flex flex-col gap-4">
							<a
								href="tel:+966 13 530 0000"
								dir="ltr"
								class={languageTag() === 'ar' ? 'text-right' : ''}>+966 13 530 0000</a
							>
							<a href="mailto:Dukegulf1@gmail.com">Dukegulf1@gmail.com</a>
						</div>
					</div>
				</div>
				<div class="w-full h-full relative">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3619.7816225383763!2d46.592693999999995!3d24.871306999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUyJzE2LjciTiA0NsKwMzUnMzMuNyJF!5e0!3m2!1sen!2sae!4v1701598489817!5m2!1sen!2sae"
						width="600"
						height="450"
						style="border:0;"
						class="absolute inset-0 w-full h-full"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
	</div>
</section>
