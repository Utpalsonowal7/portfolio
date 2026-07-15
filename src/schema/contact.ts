import { isValidPhoneNumber } from "libphonenumber-js";
import { z } from "zod";

export const ContactSchema = z.object({
     name: z
          .string()
          .trim()
          .min(3, "Name must be at least 3 characters")
          .max(50, "Name cannot exceed 50 characters"),

     email: z.email("Invalid email address"),

     url: z.url("Invalid website URL").optional().or(z.literal("")),

     phone: z
          .string()
          .refine((value) => value === "" || isValidPhoneNumber(value), {
               message: "Invalid phone number",
          })
          .optional(),

     message: z
          .string()
          .trim()
          .min(20, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof ContactSchema>;
