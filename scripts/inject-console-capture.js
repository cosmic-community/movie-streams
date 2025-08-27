const fs = require('fs');
const path = require('path');
const glob = require('glob');

const CONSOLE_SCRIPT = `<script src="/dashboard-console-capture.js"></script>`;

function injectConsoleCapture() {
  // Find all HTML files in the build output
  const htmlFiles = glob.sync('**/*.html', { 
    cwd: path.join(process.cwd(), '.next'),
    absolute: true 
  });

  console.log(`Found ${htmlFiles.length} HTML files to process...`);

  htmlFiles.forEach((filePath) => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if script is already injected
      if (content.includes('/dashboard-console-capture.js')) {
        console.log(`Skipping ${path.relative(process.cwd(), filePath)} - already has console capture script`);
        return;
      }
      
      // Inject the script in the head section
      if (content.includes('<head>')) {
        content = content.replace(
          '<head>',
          `<head>\n    ${CONSOLE_SCRIPT}`
        );
        
        fs.writeFileSync(filePath, content);
        console.log(`✓ Injected console capture into ${path.relative(process.cwd(), filePath)}`);
      } else {
        console.log(`⚠ No <head> tag found in ${path.relative(process.cwd(), filePath)}`);
      }
    } catch (error) {
      console.error(`✗ Error processing ${filePath}:`, error.message);
    }
  });

  console.log('Console capture injection completed!');
}

// Run the injection
injectConsoleCapture();