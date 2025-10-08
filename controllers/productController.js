import { v4 as uuidv4 } from "uuid";

let products = [
  { id: uuidv4(), name: "Laptop", description: "HP EliteBook", price: 1000, category: "Electronics", inStock: true },
  { id: uuidv4(), name: "Phone", description: "iPhone 14", price: 1200, category: "Electronics", inStock: false },
];

export const getAllProducts = (req, res) => {
  const { category, page = 1, limit = 5 } = req.query;
  let filtered = products;

  if (category) filtered = filtered.filter(p => p.category === category);

  const start = (page - 1) * limit;
  const end = start + Number(limit);
  res.json(filtered.slice(start, end));
};

export const getProductById = (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return next({ status: 404, message: "Product not found" });
  res.json(product);
};

export const createProduct = (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

export const updateProduct = (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next({ status: 404, message: "Product not found" });

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
};

export const deleteProduct = (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next({ status: 404, message: "Product not found" });

  products.splice(index, 1);
  res.json({ message: "Product deleted successfully" });
};

export const searchProducts = (req, res) => {
  const { name } = req.query;
  const results = products.filter(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
  res.json(results);
};

export const getStats = (req, res) => {
  const stats = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
  res.json(stats);
};
