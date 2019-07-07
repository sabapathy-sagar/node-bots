require('colors')
const path = require('path')
const shell = require('shelljs')
const { repositories } = require('./config.json')

const reposDirectory = path.join(__dirname, 'my-repos')

function cloneRepos(reposPath, reposList = []) {
    const reposCount = reposList.length

    if (!reposPath || reposCount === 0) {
        console.log('Invalid path or repos list')
        return
    }

    console.log(`Cloning repos to: ${reposDirectory}`.blue)

    shell.cd(reposPath)

    reposList.forEach((reposUrl, index) => {
        console.log(`Cloning ${index + 1} of ${reposCount}`.cyan);

        shell.exec(`git clone ${reposUrl} --progress -b master`)
    })

    console.log('Completed cloning of repositories'.green)
}

cloneRepos(reposDirectory, repositories)