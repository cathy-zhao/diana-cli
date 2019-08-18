import { version } from '../../package.json';

export const VERSION = version;

// 用户的根目录
const HOME = process.env[process.platform === 'win32'?'USERPROFILE':'HOME'];

// 配置文件 .dianarc 目录
export const RC = `${HOME}/.dianarc`
console.log("RC", RC)
export const DEFAULTS = {
  registry: 'cathy-zhao',
  type: 'users'
}
