export type Customer = {
  id: number;
  name: string;
  email: string;
  imageUrl: string | null; // cliente pode optar por nao armazenar.
  createdAt:Date;
};