import { z } from "zod";
export const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(10).max(20),
});
export type FormSchema = typeof formSchema;