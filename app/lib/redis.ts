import { createClient } from "redis";

async function initializeRedisClient() {
  const client = createClient({
    url: "redis://localhost:6379",
  });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();
  return client;
}

const redisClientPromise = initializeRedisClient();

export default redisClientPromise;
