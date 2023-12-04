<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { formSchema, type FormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	export let form: SuperValidated<FormSchema>;
	import * as m from '$paraglide/messages';
</script>

<Form.Root
	method="POST"
	{form}
	schema={formSchema}
	let:config
	class="flex flex-col max-w-md mx-auto"
>
	<div class="flex flex-col pb-10 gap-4">
		<h2 class="title center">{m.contact_title()}</h2>
		<p class="subtitle center">{m.contact_subtitle()}</p>
	</div>
	<Form.Field {config} name="name">
		<Form.Item>
			<Form.Label>{m.contact_fullName()}</Form.Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label>{m.contact_email()}</Form.Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="phone">
		<Form.Item>
			<Form.Label>{m.contact_phone()}</Form.Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="message">
		<Form.Item>
			<Form.Label>{m.contact_message()}</Form.Label>
			<Form.Textarea />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button class="mt-10">Submit</Form.Button>
</Form.Root>
