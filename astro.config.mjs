import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    server: {
        port: 2999,
        host: "localhost",
    },
});
