const svrx = require('@svrx/svrx')

const server = svrx({
  root: './webroot',
  route: '../config/route.js',
})

server.start().then(port => {
  console.log(`Mock server started@localhost:${port}`)
})
