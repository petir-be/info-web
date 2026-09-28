import fs from 'node:fs'
import path from 'node:path'
import {parse} from '@babel/parser'
import generate from '@babel/generator'
import postcss from 'postcss'

for(const directory of ['src','src/components','src/pages','src/data']){
  for(const file of fs.readdirSync(directory)){
    if(!/\.(jsx|js)$/.test(file))continue
    const target=path.join(directory,file)
    const ast=parse(fs.readFileSync(target,'utf8'),{sourceType:'module',plugins:['jsx']})
    const print=generate.default||generate
    fs.writeFileSync(target,print(ast,{compact:false,comments:true,jsescOption:{minimal:true}}).code+'\n')
  }
}
for(const file of ['src/App.css','src/index.css']){
  const root=postcss.parse(fs.readFileSync(file,'utf8'))
  function format(container,depth=0){
    for(const node of container.nodes||[]){
      node.raws.before='\n'+'  '.repeat(depth)
      if(node.type==='decl')node.raws.between=': '
      if(node.nodes){node.raws.between=' ';node.raws.after='\n'+'  '.repeat(depth);node.raws.semicolon=true;format(node,depth+1)}
    }
  }
  format(root)
  fs.writeFileSync(file,root.toString().trim()+'\n')
}
