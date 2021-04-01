export const parseCommits = function (output: String) {
    const commits = output.split("@begin@");
    if (commits[0] === "") {
        commits.shift();
    }

    for (const commit of commits) {
        const title = commit.split("@space@")[0];
        const body = commit.split("@space@")[1].replace('@end@', '').split('\n');
        console.log(`- ${title.trim()}  `);
        for (const bodyLine of body) {
            if (!bodyLine.includes('Signed-off') && bodyLine !== "") {
                if (bodyLine.includes('app.asana.com')) {
                    console.log(`Asana Task: [${bodyLine}](${bodyLine})`.trim());
                } else if (!title.includes('(#'))
                    console.log(bodyLine.trim());
            }
        }
    }
}
