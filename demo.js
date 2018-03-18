#!/user/bin/env node

var fs = require('fs')

var dirName = process.argv[2] // 你传的参数是从第 2 个开始的

var folder_exists = fs.existsSync(dirName); 
if(folder_exists == false){
    fs.mkdirSync("./" + dirName) // mkdir $1
    process.chdir("./" + dirName) // cd $1
    fs.mkdirSync('css') // mkdir css
    fs.mkdirSync('js') // mkdir js

    fs.writeFileSync("./index.html", "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>\n<h2>没错说的就是你这只shebang,软链也救不了你！</h2>")
    fs.writeFileSync("./css/style.css", "h1{color: red;}")
    fs.writeFileSync("./js/main.js", "var string = 'Hello World'\nalert(string)")

    process.exit(0)
}
else{
    console.log(dirName+"文件夹已存在");
    process.exit(1)
}
