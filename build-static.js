import { build } from 'vite';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildStatic() {
  console.log('Building static version...');
  
  try {
    // Backup original main.tsx
    const mainTsxBackup = await fs.readFile('./src/main.tsx', 'utf-8');
    
    // Create static main.tsx
    const staticMainTsx = `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.static.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`;

    // Replace main.tsx temporarily
    await fs.writeFile('./src/main.tsx', staticMainTsx);
    
    // Build with static config
    await build({
      configFile: path.resolve(__dirname, 'vite.static.config.ts'),
    });
    
    // Copy docs.html to dist
    await fs.copyFile('./public/docs.html', './dist/docs.html');
    
    // Restore original main.tsx
    await fs.writeFile('./src/main.tsx', mainTsxBackup);
    
    console.log('✅ Static build completed successfully with documentation!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    
    // Try to restore main.tsx even if build failed
    try {
      const mainTsxBackup = await fs.readFile('./src/main.tsx.backup', 'utf-8');
      await fs.writeFile('./src/main.tsx', mainTsxBackup);
    } catch (restoreError) {
      console.error('Could not restore main.tsx');
    }
    
    process.exit(1);
  }
}

buildStatic();