// 通过命令行工具做简单的复制，以达到统一格式的目的
import fs from 'fs'
import path from 'path'
import inquirer from 'inquirer'

const HOOK_FN_KEY = 'hookFnName'
const questions = [
    {
        type: 'input',
        message: "请输入你的 Hook 函数名称 ：",
        name: HOOK_FN_KEY,
        default: "use***"
    }
]
inquirer.prompt(questions)
    .then((answers) => {
        // Use user feedback for... whatever!!
        // 暂时不检测开发者输入 
        createHookByTemplate(answers)
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
})
function createHookByTemplate (answers: any) {
    const hookDirname = answers[HOOK_FN_KEY]
    const templatePath = path.join(__dirname, '../src/core/_template')
    const target = path.join(__dirname, `../src/core/${hookDirname}`)
    fs.mkdir(target, function() {

    })
    fs.readdir(templatePath, function(err,paths) {
        if(err) throw err;
        paths.forEach(path => {
            var _src = templatePath + '/'+path
            var _dst= target +'/'+path
            fs.stat(_src,function(err,st){
                if(err){
                    throw err;
                }
                if(st.isFile()){
                    fs.createReadStream(_src).pipe(fs.createWriteStream(_dst))
                }
               })
        })
    })
}

