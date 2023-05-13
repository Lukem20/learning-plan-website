export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","PathwayExtreme/PathwayExtreme-VariableFont.ttf","portfolioLogo.svg"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.d34efa09.js","imports":["_app/immutable/entry/start.d34efa09.js","_app/immutable/chunks/index.35a29703.js","_app/immutable/chunks/singletons.86309ca2.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.261982fb.js","imports":["_app/immutable/entry/app.261982fb.js","_app/immutable/chunks/index.35a29703.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/learning-plan",
				pattern: /^\/learning-plan\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
