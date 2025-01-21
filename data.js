const posts = [
  {
    id: 1,
    title: "The Future of Technology",
    content: "Exploring advancements in AI and robotics.",
    authorId: 1,
    date: "2025-01-01",
  },
  {
    id: 2,
    title: "Healthy Eating Tips",
    content: "10 ways to improve your diet for a healthier life.",
    authorId: 3,
    date: "2025-01-05",
  },
  {
    id: 3,
    title: "Travel Guide to Japan",
    content: "Top attractions and tips for a memorable trip.",
    authorId: 4,
    date: "2025-01-10",
  },
  {
    id: 4,
    title: "The Benefits of Yoga",
    content: "How yoga can improve your physical and mental health.",
    authorId: 5,
    date: "2025-01-12",
  },
  {
    id: 5,
    title: "Understanding Cryptocurrency",
    content: "A beginner's guide to Bitcoin and Ethereum.",
    authorId: 2,
    date: "2025-01-15",
  },
];

const products = [
  {
    id: 1,
    name: "Laptop Pro",
    price: 1200.99,
    category: "Electronics",
    stock: 15,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 199.99,
    category: "Accessories",
    stock: 50,
  },
  {
    id: 3,
    name: "Gaming Chair",
    price: 349.99,
    category: "Furniture",
    stock: 8,
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 249.99,
    category: "Wearables",
    stock: 25,
  },
  {
    id: 5,
    name: "Electric Kettle",
    price: 39.99,
    category: "Kitchen",
    stock: 100,
  },
];

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 25,
    isActive: true,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 32,
    isActive: false,
  },
  {
    id: 3,
    name: "Catherine Green",
    email: "catherine.green@example.com",
    age: 28,
    isActive: true,
  },
  {
    id: 4,
    name: "Daniel Lee",
    email: "daniel.lee@example.com",
    age: 35,
    isActive: true,
  },
  {
    id: 5,
    name: "Evelyn Brown",
    email: "evelyn.brown@example.com",
    age: 30,
    isActive: false,
  },
];

export default { posts, products, users };
