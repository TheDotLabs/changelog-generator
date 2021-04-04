export const parseCommits = function (output: String) {
  const commits = output.split("@begin@");
  if (commits[0] === "") {
    commits.shift();
  }

  for (const commit of commits) {
    const title = commit.split("@space@")[0];
    const body = commit.split("@space@")[1].replace('@end@', '');
    const bodyLines = body.split('\n');
    console.log(`- ${ title.trim() }  `);
    for (const bodyLine of bodyLines) {
      if (!bodyLine.includes('Signed-off') && bodyLine !== "") {
        if (!title.includes('(#')) {
          const urlRegex = /(https?:\/\/[^ ]*)/g;
          const urls = bodyLine.match(urlRegex) ?? [];
          let newBodyLine: string = bodyLine;
          for (const url of urls) {
            newBodyLine = newBodyLine.replace(url, `[${ url }](${ url })`)
          }
          console.log(newBodyLine.trim());
        }
      }
    }
  }
}
