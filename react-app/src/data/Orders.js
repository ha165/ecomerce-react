const mockOrders = [
  {
    id: "ORD1234",
    date: "2025-03-10",
    status: "Delivered",
    total: 4500,
    items: [{ name: "Smartphone X", quantity: 1, price: 4500 }],
  },
  {
    id: "ORD1235",
    date: "2025-03-12",
    status: "Processing",
    total: 3200,
    items: [{ name: "Headphones", quantity: 2, price: 1600 }],
  },
];

localStorage.setItem("orders", JSON.stringify(mockOrders));
