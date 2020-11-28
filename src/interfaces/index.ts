export type WordItem = {
  id: number;
  title: string;
  definition: string;
  published: boolean;
  publishedDate: Date;
};

export type ArchiveWordList = WordItem[];
