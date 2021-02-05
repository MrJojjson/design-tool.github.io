// Example: snowpack.config.js
// The added "@type" comment will enable TypeScript type information via VSCode, etc.
const httpProxy = require('http-proxy');
const authProxy = httpProxy.createServer({ target: process.env.SNOWPACK_PUBLIC_AUTH_URL });
const serverProxy = httpProxy.createServer({ target: process.env.SNOWPACK_PUBLIC_SERVER_URL });

/** @type {import("snowpack").SnowpackUserConfig } */
/** @type {import.meta.env.SNOWPACK_PUBLIC_* } */

// eslint-disable-next-line no-undef
module.exports = {
    mount: {
        // directory name: 'build directory'
        src: '/dist',
        public: '/',
    },
    routes: [
        { match: 'routes', src: '.*', dest: '/index.html' },
        {
            src: '/api/auth',
            dest: (req, res) => authProxy.web(req, res),
        },
        {
            src: '/api/graphql',
            dest: (req, res) => serverProxy.web(req, res),
        },
    ],
    devOptions: {
        port: 3000,
        src: 'src',
        bundle: false,
        routes: 'index.html',
    },
    plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
};
