import  { useState } from 'react';
import { mockBlogPosts } from '../data/mockData';
import { BlogSidebar } from './BlogSideBar';
import { BlogPostCard } from './BlogPostCard';
import { cn } from '../lib/utils';

export default function BlogViewer() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(
    mockBlogPosts.length > 0 ? mockBlogPosts[0].id : null
  );

  const selectedPost = mockBlogPosts.find(post => post.id === selectedPostId) || null;

  return (
      <div className={cn("flex", "h-screen")}>
    <BlogSidebar
      posts={mockBlogPosts}
      selectedPostId={selectedPostId}
      onSelectPost={setSelectedPostId}
    />
    <main className={cn("flex-1", "p-6", "overflow-auto")}>
      {selectedPost ? (
        <BlogPostCard post={selectedPost} />
      ) : (
        <p className="text-gray-500">Select a post.</p>
      )}
    </main>
  </div>
  );
}