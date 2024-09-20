import { createClient } from "redis";

async function initializeRedisClient() {
  const client = createClient({
    url: process.env.REDIS_URL,
  });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();
  return client;
}

const redisClientPromise = initializeRedisClient();

export default redisClientPromise;
