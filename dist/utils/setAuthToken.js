import e from"../../_snowpack/pkg/axios.js";export const setAuthToken=o=>{o?e.defaults.headers.common.Authorization=o:delete e.defaults.headers.common.Authorization};
