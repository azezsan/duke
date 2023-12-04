<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import type { FormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	export let form: SuperValidated<FormSchema>;
	import * as m from '$paraglide/messages';
</script>

<Form.Root method="POST" {form} let:config class="flex flex-col max-w-md mx-auto">
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
	<Form.Button class="mt-10">{m.contact_submit()}</Form.Button>
</Form.Root>
