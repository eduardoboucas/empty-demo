export default async function handler(req: Request) {
    const hasCacheStorage = 'CacheStorage' in globalThis
    return Response.json({hasCacheStorage})
}