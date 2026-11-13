import "dotenv/config";
import app from "./src/app.js";
import { verifyMailConnection } from "./src/config/mail.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  await verifyMailConnection();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Server startup failed:", error);
  process.exit(1);
});