
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { mockBlogPosts } from '../data/mockData';




const mockLink = {
  request: async () => {
    return {
      data: {
        blogPosts: mockBlogPosts
      }
    }
  }
}

export const client = new ApolloClient({
  link:mockLink, 
  cache: new InMemoryCache(),
});