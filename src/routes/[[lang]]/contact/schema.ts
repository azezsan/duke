import { z } from "zod";
export const formSchema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().email(),
    phone: z.string().min(10).max(20),
    message: z.string().min(1).max(500),
    projectType: z.enum(["تجاري", "اهلي"])
});
export type FormSchema = typeof formSchema;