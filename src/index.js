const MarkdownIt = require('markdown-it');
const fs = require('fs');
const path = require('path');

const md = new MarkdownIt();

const fileNames = fs.readdirSync(path.resolve(__dirname, 'docs'));

for (const fileName of fileNames) {
  const data = fs.readFileSync(path.resolve(__dirname, 'docs', fileName)).toString();
  const result = md.render(data);
  fs.writeFileSync(path.resolve(__dirname, '..', 'docs', fileName.replace('.md', '.html')), result);
}