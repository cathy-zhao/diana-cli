import { getAll } from './rc';
import downloadGit from 'download-git-repo';

const downloadLocal = async (templateName, projectName) => {
  let config = await getAll();
  let api = `${config.registry}/${templateName}`;
  console.log("api", api)
  return new Promise((resolve, reject) => {
    downloadGit(api, projectName, err => {
      if(err){
        console.log("err", err)
        reject(err)
      }
      resolve()
    })
  })
}

export default downloadLocal
