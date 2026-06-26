const fs = require('fs');
const content = fs.readFileSync('C:/Users/Arnav/.gemini/antigravity-ide/brain/57fe7804-d113-4bc5-85f7-d9f9bc4f1f05/.system_generated/steps/24/content.md', 'utf-8');
const match = content.match(/src="(data:image\/png;base64,[^"]+)"/);
if (match) {
    const base64Data = match[1].replace(/^data:image\/png;base64,/, "");
    fs.writeFileSync('public/logo.png', base64Data, 'base64');
    console.log('Saved logo.png');
} else {
    console.log('No base64 image found');
}
