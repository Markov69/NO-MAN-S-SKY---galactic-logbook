// Netlify Blobs API Wrapper
// This file must be loaded as a module via <script type="module">

// SAVE FILE TO BLOB STORAGE
export async function saveBlob(path, content){
    const r = await fetch(`/blob/${path}`, {
        method: "PUT",
        body: content
    });
    if (!r.ok) throw new Error("Blob save failed: " + r.status);
}

// READ FILE
export async function readBlob(path){
    const r = await fetch(`/blob/${path}`);
    if (!r.ok) throw new Error("Blob read failed: " + r.status);
    return await r.text();
}

// LIST FILES BY PREFIX
export async function listBlobs(prefix){
    const r = await fetch(`/blob/list?prefix=${prefix}`);
    if (!r.ok) throw new Error("Blob list failed: " + r.status);
    return await r.json();
}
