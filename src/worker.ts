/// <reference types="@cloudflare/workers-types" />

export default {
	async fetch(request: Request, env: any): Promise<Response> {
		const url = new URL(request.url);
		let pathname = url.pathname;

		// Try to get the static asset first
		let asset = await env.__STATIC_CONTENT.get(pathname);

		if (asset) {
			const contentType = getContentType(pathname);
			return new Response(asset, {
				headers: {
					'Content-Type': contentType,
					'Cache-Control': pathname.endsWith('.html')
						? 'public, max-age=0, must-revalidate'
						: 'public, max-age=3600',
				},
			});
		}

		// For SPA routing: if path doesn't have a file extension and doesn't exist,
		// serve index.html so the frontend router can handle it
		if (!pathname.includes('.') || pathname === '/') {
			asset = await env.__STATIC_CONTENT.get('/index.html');
			if (asset) {
				return new Response(asset, {
					headers: {
						'Content-Type': 'text/html',
						'Cache-Control': 'public, max-age=0, must-revalidate',
					},
				});
			}
		}

		return new Response('404 - Not Found', { status: 404 });
	},
} as ExportedHandler;

function getContentType(pathname: string): string {
	if (pathname.endsWith('.html')) return 'text/html';
	if (pathname.endsWith('.css')) return 'text/css';
	if (pathname.endsWith('.js')) return 'application/javascript';
	if (pathname.endsWith('.json')) return 'application/json';
	if (pathname.endsWith('.svg')) return 'image/svg+xml';
	if (pathname.endsWith('.png')) return 'image/png';
	if (pathname.endsWith('.jpg') || pathname.endsWith('.jpeg')) return 'image/jpeg';
	if (pathname.endsWith('.gif')) return 'image/gif';
	if (pathname.endsWith('.webp')) return 'image/webp';
	if (pathname.endsWith('.woff2')) return 'font/woff2';
	if (pathname.endsWith('.woff')) return 'font/woff';
	return 'application/octet-stream';
}
