import { build } from "esbuild";
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

async function buildProject() {
    try {
        console.log("🏗️  Building Projex...\n");

        // Build frontend (Vite)
        console.log("📦 Building frontend...");
        execSync("vite build", {
            external: ["better-sqlite3"],
            sourcemap: true,
        });

        console.log("\n✅ Build complete!");
        console.log("📁 Output: dist/");
        console.log("   - dist/public/ (frontend)");
        console.log("   - dist/index.cjs (backend)");
    } catch (error) {
        console.error("\n❌ Build failed:", error);
        process.exit(1);
    }
}

buildProject();
