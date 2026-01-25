import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import { mkdirSync } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

async function buildProject() {
    try {
        console.log("🏗️  Building Projex...\n");

        // Build frontend (Vite)
        console.log("📦 Building frontend...");
        execSync("npx vite build", {
            cwd: rootDir,
            stdio: "inherit",
            env: { ...process.env, NODE_ENV: "production" },
        });

        // Ensure dist directory exists
        const distDir = path.join(rootDir, "dist");
        mkdirSync(distDir, { recursive: true });

        console.log("\n✅ Build complete!");
        console.log("📁 Output: dist/");
        console.log("   - dist/public/ (frontend)");
        console.log("   - Ready to start with: npm start");
    } catch (error) {
        console.error("\n❌ Build failed:", error);
        process.exit(1);
    }
}

buildProject();

