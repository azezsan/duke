<script lang="ts">
	import Headline from '$lib/components/typography/headline.svelte';
	import * as Form from '$lib/components/ui/form';
	import { formSchema, type FormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	export let form: SuperValidated<FormSchema>;
	import * as m from '$paraglide/messages';
	import Title from '$lib/components/typography/title.svelte';
</script>

<Form.Root
	method="POST"
	{form}
	schema={formSchema}
	let:config
	class="flex flex-col max-w-md mx-auto"
>
	<div class="text-center pb-10">
		<Title>{m.hero_title()}</Title>
		<Headline>{m.hero_subtitle()}</Headline>
	</div>
	<Form.Field {config} name="name">
		<Form.Item>
			<Form.Label>Name</Form.Label>
			<Form.Input />
			<Form.Description>This is your public display name.</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label>email</Form.Label>
			<Form.Input />
			<Form.Description>This is your public display name.</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="phone">
		<Form.Item>
			<Form.Label>phone</Form.Label>
			<Form.Input />
			<Form.Description>This is your public display name.</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button class="mt-10">Submit</Form.Button>
</Form.Root>
