import { z } from "zod";

// Contact form inquiry schema for in-memory storage
export const insertContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  sector: z.enum(["defense", "medical", "enterprise"], {
    required_error: "Please select a sector",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;

export interface Contact extends InsertContact {
  id: string;
  createdAt: Date;
}
