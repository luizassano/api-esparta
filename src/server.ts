import app from "./app";
import { AppDataSource } from "./data-source";

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error(err);
  });
  app.listen(process.env.PORT || 3000, () => console.log("Running at http://localhost:3000"))
})();
