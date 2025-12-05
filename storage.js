// Netlify Blobs API Wrapper

const site = "cheery-arithmetic-506327";  
const base = `https://api.netlify.com/api/v1/badges/${site}/blobs`; 

// SAVE FILE
async function saveBlob(path, content){
    await fetch(`/blob/${path}`, {
        method: "PUT",
        body: content
    });
}

// READ FILE
async function readBlob(path){
    const r = await fetch(`/blob/${path}`);
    return await r.text();
}

// LIST FILES
async function listBlobs(prefix){
    const r = await fetch(`/blob/list?prefix=${prefix}`);
    return await r.json();
}
