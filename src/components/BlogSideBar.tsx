
import { Button } from './ui/button';
import type { IBlogPost } from '../interface/types';
import { cn } from '../lib/utils';

interface Props {
  posts: IBlogPost[];
  selectedPostId: string | null;
  onSelectPost: (id: string) => void;
}

export function BlogSidebar({ posts, selectedPostId, onSelectPost }: Props) {
  return (
     <aside className="w-64 bg-white border-r p-4">
      <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
      <div className="space-y-2">
        {posts.map(post => (
          <Button
            key={post.id}
            variant={selectedPostId === post.id ? 'default' : 'ghost'}
            className={cn(
              'w-full justify-start',
              selectedPostId === post.id && 'bg-blue-500 text-white hover:bg-blue-600'
            )}
            onClick={() => onSelectPost(post.id)}
          >
            {post.title}
          </Button>
        ))}
      </div>
    </aside>
  );
}