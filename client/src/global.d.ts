declare module 'global/window';
declare module 'global/document';
declare module 'github-pages-deploy-action';
interface ImportMeta {
    env: {
        SNOWPACK_PUBLIC_ENV: string;
        SNOWPACK_PUBLIC_SERVER_URL: string;
        SNOWPACK_PUBLIC_AUTH_URL: string;
    };
}
