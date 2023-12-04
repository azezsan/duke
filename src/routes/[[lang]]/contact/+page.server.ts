import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "./schema";
import { fail } from "@sveltejs/kit";
import { Resend } from 'resend';


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

        const resend = new Resend('re_CLKnLazT_PVoBXoWtnieuaBnUyNxf8WaH');

        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'dukegulf1@gmail.com',
            subject: 'Hello World',
            html: `<p>الاسم :<strong>${form.data.name}</strong></p><p>البريد الالكتروني :<strong>${form.data.email}</strong></p><p>الهاتف :<strong>${form.data.phone}</strong></p><p>الرسالة :<strong>${form.data.message}</strong></p>`
        });

        return {
            form
        };
    }
};