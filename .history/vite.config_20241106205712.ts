import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: 'https://magdalenatyminska.github.io/React-Project-2/',
	server: {
		port: 5000,
	},
	css: {
		devSourcemap: true,
	},
});
