const git = require('simple-git/promise')

async function demo() {
    await git('./local-repo').clone('https://github.com/freewind-demos/javascript-frontend-hello-world-demo.git', 'demo-project')

    console.log('cloned to: local-repo/demo-project')

    const demoGit = git('./local-repo/demo-project')
    const result = await demoGit.log(['HEAD'])
    console.log('----------------- git log HEAD -------------')
    console.log(JSON.stringify(result, null, 2))
}

demo()