import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
    integrations: [vue()],
    vite: {
        plugins: [
            Components({
                resolvers: [AntDesignVueResolver({ importStyle: 'less' })],
                dts: './src/components.d.ts'
            })
        ],
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true
                }
            }
        }
    }
});