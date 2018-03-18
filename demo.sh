if [ -d $1 ]; then
  echo “$1已经存在了”
  exit 1
else
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/main.js
  echo -e "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>\n<h2>好烦呀为什么shebang会提示No such file or directory嘛</h2>\n<n1>明明软链也添加了</n2>" > index.html
  echo -e "h1{color: red;}\nh2{color: gray;}" > css/style.css
  echo -e "var string = 'Hello World'\nalert(string)" > js/main.js
  exit 0
fi
