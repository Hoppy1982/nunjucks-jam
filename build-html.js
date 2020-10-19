// libs
const nunjucks = require('nunjucks');
const util = require('util');
const path = require('path');
const fs = require('fs');
// setup
const readdir = util.promisify(fs.readdir);
const writeFile = util.promisify(fs.writeFile);
nunjucks.configure( ['./src/templates'] );
const viewsDir = path.join(__dirname, 'src/templates/views');
const ctx = {
  pages: {
    general: [
      { name: 'home', href: '/index.html' },
      { name: 'about', href: '/about.html' }
    ],
    frontEndProjects: [
      { name: 'placeholder1', href: '#' },
      { name: 'placeholder2', href: '#' },
      { name: 'placeholder3', href: '#' }
    ],
    backEndProjects: [
      { name: 'placeholder4', href: '#' },
      { name: 'placeholder5', href: '#' },
      { name: 'placeholder6', href: '#' }
    ]
  }
  
};

// Run
compileViews()

/** 
 * Gets all .njks views from directory and calls buildHtml on each
 */
async function compileViews() {
  let files = await readdir(viewsDir);
  let dest = path.join(__dirname, '/pre-dist');
  let actionsComplete = [];// arr of promises

  files.forEach(file => {
    actionsComplete.push( buildHtml(file, dest) );
  })

  Promise.all(actionsComplete).then(() => {console.log('all html writeFile ops complete..')});
}

/** 
 * Compiles and saves an .html file from .njk 
 */
async function buildHtml(file, outputDir) {
  let view = `views/${file}`;
  let name = file.split('.')[0];
  let outputFile = `${outputDir}/${name}.html`;

  let htmlStr = await new Promise((resolve, reject) => {
    nunjucks.render(view, ctx, function(err, res) {
      if (err) { resolve(`<html><body><h1>nunjucks compile error:</h1><p>${err}</p></body></html>`); } 
      else { resolve(res); }
    })
  })

  try {
    await writeFile(outputFile, htmlStr);
    console.log(`${outputFile} write success..`);
  } catch (err) {
    console.log(`${outputFile} write failed..`);
  }
}