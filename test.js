const fs = require('fs');

let buildNumber

async function test () {
  const data = await fs.readFileSync('/Users/andreiserguienko/Documents/beyond-ionic/ios/App/App/Info.plist', {encoding: 'utf8'})

  const regex = /<key>CFBundleVersion<\/key>\s*<string>(\d*)<\/string>/
  const found = data.match(regex)
  console.log(+found[1])
  buildNumber = +found[1]

  console.log('test')
  console.log(buildNumber)
}

test()
