import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "./schema";
import { fail } from "@sveltejs/kit";

export const load = () => {
    return {
        form: superValidate(formSchema)
    };
};

export const actions = {
    default: async (event) => {
        const form = await superValidate(event, formSchema);
        if (!form.valid) {
            return fail(400, {
                form
            });
        }
        return {
            form
        };
    }
};