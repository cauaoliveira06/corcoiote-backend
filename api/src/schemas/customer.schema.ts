//esquema de validação

import z, { } from 'zod';

export const createCustomerSchema = z.object({
  name: z.string().min(2), //verifica se nome é realmente string.
  email: z.email(),
  imageUrl: z.url().optional()
});

export const updateCustomerSchema = createCustomerSchema.partial();

export type CreateCustomer = z.infer<typeof createCustomerSchema>;
export type updateCustomer = z.infer<typeof updateCustomerSchema>;


