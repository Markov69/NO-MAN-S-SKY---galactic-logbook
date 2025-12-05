
import { getStore } from "https://esm.sh/@netlify/blobs@0.7.0";

export default async (request) => {
  try {
    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    const store = getStore("planets");
    const data = await store.getJSON(key);

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
