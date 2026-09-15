const fs = require('fs');

if (fs.existsSync('app_part_formatted.js')) {
  const code = fs.readFileSync('app_part_formatted.js', 'utf8');

  const searches = [
    "Wealth above the land",
    "What farmers face",
    "What we do",
    "THE TRANSFORMATION",
    "Billions of dollars",
    "Training and agritech tools",
    "OF GHANA'S GDP",
    "data driven",
    "currently going to waste"
  ];

  searches.forEach(s => {
    const pos = code.indexOf(s);
    console.log(`Search '${s}': ${pos !== -1 ? 'FOUND at ' + pos : 'NOT FOUND'}`);
    if (pos !== -1) {
      console.log('   Snippet:', code.substring(pos - 100, pos + 250).replace(/\n/g, ' '));
    }
  });
} else {
  console.log('app_part_formatted.js not found');
}
