export type WordItem = {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  definition: string;
  published: boolean;
  publishedDate: string;
};

export type ArchiveWordList = WordItem[];
