const path = require('path')
const { getArgv, toAtomicType, toCapitalize, createDirectory, createFile } = require('../utils')
const {
  createBaseComp,
  createStyledComp,
  createMD,
  createStories,
  createTest
} = require('./templates')
const { ANSI_FONT_RED } = require('./constants')

// exec
init(getArgv('unit'), getArgv('name'))

// func
async function init(unit, name) {
  try {
    // names
    const dirname = toAtomicType(unit) // atom, molecules, organisms, template, pages...
    const filename = toCapitalize(name) // div, input, searchBar, loginForm...
    const atomicName = toCapitalize(dirname)
    // paths
    const componentsPath = path.join(__dirname, '..', '..', 'src', 'components')
    const componentPath = path.join(componentsPath, dirname)
    const targetPath = path.join(componentPath, name)
    // directories
    await createDirectory(componentPath)
    await createDirectory(targetPath)
    // files
    await createFile(path.join(targetPath, `${filename}.js`), createBaseComp(filename))
    await createFile(path.join(targetPath, `${filename}.styled.js`), createStyledComp(filename))
    await createFile(
      path.join(targetPath, `${filename}.stories.js`),
      createStories(atomicName, filename)
    )
    await createFile(path.join(targetPath, `${filename}.test.js`), createTest(filename))
    await createFile(path.join(targetPath, `${filename}.md`), createMD(atomicName, filename))
    // await createFile(path.join(targetPath, `${filename}.scss`), createSCSS())
  } catch (error) {
    console.log(ANSI_FONT_RED, error.message)
  }
}
