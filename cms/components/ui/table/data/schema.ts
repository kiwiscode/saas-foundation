import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

// Define the Zod schema for the NewsletterSubscriber model
export const newsletterSubscriberSchema = z.object({
  id: z.number().int(),
  email: z.string().email(),
  name: z.string().nullable().optional(),
  createdAt: z.date().default(() => new Date()),
  status: z.string().default("active"),
  source: z.string().nullable().default("website").optional(),
  tags: z.array(z.string()),
  language: z.string().nullable().optional(),
  country: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  consent: z.boolean().default(false),
  unsubscribedAt: z.date().nullable().optional(),
});

export type Task = z.infer<typeof taskSchema>;
export type NewsletterSubscriber = z.infer<typeof newsletterSubscriberSchema>;
