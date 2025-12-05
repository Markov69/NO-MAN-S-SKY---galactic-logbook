import { getStore } from "https://esm.sh/@netlify/blobs@0.7.0";

export default async (request, context) => {
  try {
    const store = getStore("planets");

    const body = await request.json();
    const { key, data } = body;

    await store.setJSON(key, data);

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
