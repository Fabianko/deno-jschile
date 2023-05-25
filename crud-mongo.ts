
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { MongoClient, ObjectId } from "https://deno.land/x/mongo/mod.ts";

const PORT = 8000;
const DB_CONNECTION_STRING = "your_mongodb_connection_string";
const DB_NAME = "your_database";
const COLLECTION_NAME = "your_collection";

const app = new Application();
const router = new Router();

const client = new MongoClient();
client.connectWithUri(DB_CONNECTION_STRING);
const db = client.database(DB_NAME);
const collection = db.collection(COLLECTION_NAME);

router.get("/data/:id", async (context) => {
  if (context.params && context.params.id) {
    const id = context.params.id;
    const objectId = ObjectId(id);
    const data = await collection.findOne({ _id: objectId });
    context.response.body = data;
  }
});

router.post("/data", async (context) => {
  const body = await context.request.body();
  if (body.type === "json") {
    const document = body.value;
    const insertId = await collection.insertOne(document);
    context.response.body = insertId;
  }
});

router.put("/data/:id", async (context) => {
  if (context.params && context.params.id) {
    const id = context.params.id;
    const objectId = ObjectId(id);
    const body = await context.request.body();
    if (body.type === "json") {
      const document = body.value;
      await collection.updateOne({ _id: objectId }, { $set: document });
      context.response.body = { message: "Updated" };
    }
  }
});

router.delete("/data/:id", async (context) => {
  if (context.params && context.params.id) {
    const id = context.params.id;
    const objectId = ObjectId(id);
    await collection.deleteOne({ _id: objectId });
    context.response.body = { message: "Deleted" };
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: PORT });