
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import type { IBlogPost } from '../interface/types';
import { cn } from '../lib/utils';

interface BlogPostCardProps {
  post: IBlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
     <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>By {post.author.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className={cn("text-gray-700")}>{post.body}</p>
        <div className={cn("mt-4", "text-sm", "text-gray-500")}>
          Author : {post.author.name}
        </div>
      </CardContent>
    </Card>
  );
}