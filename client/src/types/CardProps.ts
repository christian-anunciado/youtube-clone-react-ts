interface Props {
  createdAt: string;
  description: string;
  dislikes: [];
  likes: [];
  tags: [];
  thumbnailUrl: string;
  title: string;
  updatedAt: string;
  _id: string;
  videoUrl: string;
  views: number;
  userId: string;
}

export type CardProps = Required<Props>;
