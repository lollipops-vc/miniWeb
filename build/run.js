const childProcess = require ('child_process')
const path = require('path')
const filePath = {
    vue2:path.join(__dirname,'../vue2'),
    vue3:path.join(__dirname,'../vue3'),
}
console.log(filePath);

// cd 子应用的目录，npm run dev 启动项目
function runChild (){
    Object.keys(filePath).forEach(item =>{
        const projectPath = filePath[item];
        childProcess.spawn('npm', ['run', 'dev'], {
            cwd: projectPath,
            stdio: "inherit",
            shell: true
        })

        // Object.values(filePath).forEach(item =>{
        //     childProcess.spawn(`cd ${item} && npm run dev`,
        //          {
        //             stdio:"inherit",
        //             shell:true
        //         }
        //     )
        // })
    })
}
runChild()