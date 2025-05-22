import type { IBlogPost } from "../interface/types";
//Mock data
export const mockBlogPosts: IBlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React',
    body: 'React is a powerful JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience. Developed and maintained by Meta (formerly Facebook), React has become one of the most popular tools in modern front-end development.',
    author: {
      id: '101',
      name: 'Jane Doe',
      email: 'jane@example.com',
    },
  },
  {
    id: '2',
    title: 'TypeScript Basics',
    body: "TypeScript is a strongly typed superset of JavaScript that compiles down to plain JavaScript. It adds static typing to the language, enabling developers to catch errors early, improve code readability, and build more robust applications. If you're coming from a JavaScript background, TypeScript feels familiar but offers powerful enhancements.",
    author: {
      id: '102',
      name: 'John Smith',
      email: 'john@example.com',
    },
  },
  {
    id: '3',
    title: 'GraphQL Introduction',
    body: "GraphQL Introduction GraphQL is a powerful query language for APIs and a runtime for fulfilling those queries with your existing data. Developed by Facebook in 2012 and open-sourced in 2015, GraphQL offers a more flexible and efficient alternative to REST APIs. What is GraphQL? GraphQL lets clients request exactly the data they need—nothing more, nothing less. Instead of multiple endpoints returning fixed data structures (like in REST), GraphQL exposes a single endpoint where clients can shape their queries based on the structure of the data.",
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