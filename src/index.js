const MarkdownIt = require('markdown-it');
const fs = require('fs');
const path = require('path');

const md = new MarkdownIt();

const html = fs.readFileSync(path.resolve(__dirname, 'index.html')).toString();
const fileNames = fs.readdirSync(path.resolve(__dirname, 'docs'));

for (const fileName of fileNames) {
  const data = fs.readFileSync(path.resolve(__dirname, 'docs', fileName)).toString();
  const result = md.render(data);
  const resultHTML = html.replace('{{CONTENT}}', result);
  fs.writeFileSync(path.resolve(__dirname, '..', 'docs', fileName.replace('.md', '.html')), resultHTML);
}