// check-structure.js
const fs = require('fs');

const requiredFiles = ['index.html', 'src/input.css', 'tailwind.config.js'];
const missing = requiredFiles.filter(file => !fs.existsSync(file));

if (missing.length > 0) {
  console.error("❌ ERROR: Your project structure is incorrect!");
  console.error("Missing files:", missing.join(', '));
  process.exit(1); // This stops the git push
}

console.log("✅ Structure check passed!");
process.exit(0);