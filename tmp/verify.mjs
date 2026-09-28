import assert from 'node:assert/strict'
import fs from 'node:fs'
import {createServer} from 'vite'
import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'

// Source-level rendering only. This does not open or access a browser.
const server = await createServer({server:{middlewareMode:true},appType:'custom',logLevel:'error'})
try {
  const plants = JSON.parse(fs.readFileSync('src/plants.json','utf8'))
  assert.equal(plants.length,89)
  assert.equal(new Set(plants.map(p=>p.scientific)).size,89)
  assert.equal(new Set(plants.map(p=>p.family)).size,43)
  assert.equal(plants.find(p=>p.scientific==='Ipomoea batatas').ur,82)
  for(const plant of plants){
    assert(plant.local && plant.parts && plant.family)
    assert.equal(plant.categories.length,plant.uses,plant.scientific)
    assert(plant.categories.every(code=>['C','W','VA','G','OV','VF','OF','L','S'].includes(code)))
  }
  globalThis.window={location:{hash:'#home'}}
  for(const name of ['Home','Plants','FoodCategories','Community','Findings','Heritage','Gallery','Research']){
    const {default: Page}=await server.ssrLoadModule(`/src/pages/${name}.jsx`)
    const html=renderToStaticMarkup(React.createElement(Page,{onSelect:()=>{}}))
    assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${name}: one page heading`)
    assert(!html.includes('undefined'),`${name}: undefined content`)
    for(const match of html.matchAll(/(?:src|href)="(\/images\/[^"#]+|\/talaandig-food-ethnobotany.pdf)(?:#[^"]*)?"/g)) assert(fs.existsSync(`public${match[1]}`),match[1])
    if(name==='Plants') assert.equal((html.match(/class="plant-card /g)||[]).length,89)
    if(name==='FoodCategories') assert.equal((html.match(/class="category-card"/g)||[]).length,9)
    console.log(`PASS ${name}: source render, heading, local assets`)
  }
  const {default: Plants}=await server.ssrLoadModule('/src/pages/Plants.jsx')
  window.location.hash='#plants?category=C'
  const filtered=renderToStaticMarkup(React.createElement(Plants,{onSelect:()=>{}}))
  assert.equal((filtered.match(/class="plant-card /g)||[]).length,plants.filter(p=>p.categories.includes('C')).length)
  const {default: Header}=await server.ssrLoadModule('/src/components/Header.jsx')
  const header=renderToStaticMarkup(React.createElement(Header,{page:'home'}))
  assert.equal((header.match(/href="#[a-z]+"/g)||[]).length,9)
  assert(header.includes('aria-current="page"'))
  console.log('PASS 89 records, 43 families, category links, 8 navigation destinations')
} finally { await server.close() }
