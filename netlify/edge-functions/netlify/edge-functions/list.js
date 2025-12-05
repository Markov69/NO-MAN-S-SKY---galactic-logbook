import { getStore } from "https://esm.sh/@netlify/blobs@0.7.0";

export default async () => {
  try {
    const store = getStore("planets");
    const list = await store.list();

    return new Response(JSON.stringify(list), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
