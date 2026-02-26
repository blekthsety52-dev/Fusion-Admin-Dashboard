import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Mock API routes
  app.get("/api/stats", (req, res) => {
    res.json({
      totalRevenue: "$45,231.89",
      revenueChange: "+20.1% from last month",
      subscriptions: "+2350",
      subscriptionsChange: "+180.1% from last month",
      sales: "+12,234",
      salesChange: "+19% from last month",
      activeNow: "+573",
      activeNowChange: "+201 since last hour",
    });
  });

  app.get("/api/recent-sales", (req, res) => {
    res.json([
      { id: 1, name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
      { id: 2, name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
      { id: 3, name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00" },
      { id: 4, name: "William Kim", email: "will@email.com", amount: "+$99.00" },
      { id: 5, name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" },
    ]);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
