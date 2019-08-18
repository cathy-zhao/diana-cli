import program from 'commander';
import { VERSION } from './utils/constants';
import apply from './index';
import chalk  from 'chalk';

let actionMap = {
  init: {
    description: 'generate a new project from a template',
    usages: [
      'diana init <templateName> <projectName>'
    ]
  },
  config: {
    alias: 'cfg',
    description: 'config .dianarc',
    usages: [
      'diana config set <k> <v>',
      'diana config get <k>',
      'diana config remove <k>'
    ]
  },
  // other commands
}

// 添加 init、config 命令
Object.keys(actionMap).forEach(action => {
  program.command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias)
    .action(() => {
      switch(action){
        case 'config':
          // 配置
          apply(action, ...process.argv.slice(3));
          break;
        case 'init':
          // 初始化
          apply(action, ...process.argv.slice(3));
          break;
        default:
          break;
      }
    })
})

function help(){
  console.log("\nUsage:");
  Object.keys(actionMap).forEach(action => {
    actionMap[action].usages.forEach(usage => {
      console.log('  - ' + usage);
    })
  })
  console.log("\n")
}

program.usage('<command>[options]')

program.on('-h', help)
program.on('--help', help)

program.version(VERSION, '-V --version').parse(process.argv)

if(!process.argv.slice(2).length){
  program.outputHelp(make_green);
}

function make_green(txt){
  return chalk.green(txt);
}
