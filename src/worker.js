export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    const path = url.pathname

    const extensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp', '.woff', '.woff2', '.ttf', '.json']
    const isAsset = extensions.some(ext => path.endsWith(ext))

    if (isAsset) {
      const asset = await env.ASSETS.fetch(request)
      if (asset.status === 200) return asset
    }

    return env.ASSETS.fetch(new Request(new URL('/index.html', request.url), request))
  },
}
