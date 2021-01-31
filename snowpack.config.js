// Example: snowpack.config.js
// The added "@type" comment will enable TypeScript type information via VSCode, etc.

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        // directory name: 'build directory'
        src: '/dist',
        public: '/',
    },
    devOptions: {
        port: 3000,
        src: 'src',
        bundle: false,
        routes: 'index.html',
    },
    plugins: ['@snowpack/plugin-react-refresh'],
};
