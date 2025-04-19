export type Category = {
  name: string;
};

export type CategoryWithId = {
  id: number;
} & Category;
