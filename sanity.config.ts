import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from '@/sanity/schemas';

const config = defineConfig({
    projectId: 'jnxte51r',
    dataset: 'production',
    title: "My Personal Website",
    apiVersion: "2023-11-27",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;