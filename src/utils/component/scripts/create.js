const inquirer = require('inquirer');
const fs = require('fs-extra');
const replace = require('replace-in-file');
const templatePath = './src/utils/component/template';
const rootPath = './src/components';

let componentNamespace = [];
let dirName;
let path = rootPath;

const propmptForComponentName = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'componentName',
        message: 'Type component name'
      }
    ])
    .then(answers => {
      dirName = answers.componentName;
      const componentPath = `${path}/${dirName}`;
      fs.copySync(templatePath, componentPath);
      const componentName = `${componentNamespace.join('')}${dirName}`;
      replace.sync({
        files: [
          'Component.vue',
          'index.ts',
          'index.stories.mdx',
          'index.spec.ts',
          '_stories_/Example.vue'
        ].map(file => `${componentPath}/${file}`),
        from: /BvComponent/g,
        to: componentName
      });
    });
};

const propmptForParentComponent = (availableComponents) => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'parentComponent',
        message: 'Select one of available components:',
        choices: availableComponents
      }
    ])
    .then(answers => {
      componentNamespace.push(answers.parentComponent);
      path = `${path}/${answers.parentComponent}`;
      readComponents();
    });
};

const readComponents = () => {
  let components = [];
  const items = fs.readdirSync(path); 
  items.forEach(item => {
    const isDir = fs.lstatSync(`${path}/${item}`).isDirectory();
    const isComponent = !/_*_/.test(item);
    if (isDir && isComponent) {
      components.push(item);
    }
  });
  
  if (components.length > 0) {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'type',
          message: 'Do you want to create root or nested component?',
          choices: ['root', 'nested']
        }
      ])
      .then(answers => {
        if (answers.type === 'root') {
          propmptForComponentName();
        } else {
          propmptForParentComponent(components);
        }
      });
  } else {
    propmptForComponentName();
  }
};

readComponents();