import type { IBlogPost } from "../interface/types";

export const mockBlogPosts: IBlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React',
    body: 'React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.',
    author: {
      id: '101',
      name: 'Jane Doe',
      email: 'jane@example.com',
    },
  },
  {
    id: '2',
    title: 'TypeScript Basics',
    body: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing to the language.',
    author: {
      id: '102',
      name: 'John Smith',
      email: 'john@example.com',
    },
  },
  {
    id: '3',
    title: 'GraphQL Introduction',
    body: 'GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data.',
    author: {
      id: '103',
      name: 'Alice Johnson',
      email: 'alice@example.com',
    },
  },
  {
    id: '4',
    title: 'Building UI with shadcn',
    body: 'shadcn/ui provides beautifully designed components that you can use directly in your React applications with minimal setup.',
    author: {
      id: '104',
      name: 'Bob Williams',
      email: 'bob@example.com',
    },
  },
];