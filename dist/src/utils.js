"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCommits = void 0;
var parseCommits = function (output) {
    var commits = output.split("@begin@");
    if (commits[0] === "") {
        commits.shift();
    }
    for (var _i = 0, commits_1 = commits; _i < commits_1.length; _i++) {
        var commit = commits_1[_i];
        var title = commit.split("@space@")[0];
        var body = commit.split("@space@")[1].replace('@end@', '').split('\n');
        console.log("- " + title.trim() + "  ");
        for (var _a = 0, body_1 = body; _a < body_1.length; _a++) {
            var bodyLine = body_1[_a];
            if (!bodyLine.includes('Signed-off') && bodyLine !== "") {
                if (bodyLine.includes('app.asana.com')) {
                    console.log(("Asana Task: [" + bodyLine + "](" + bodyLine + ")").trim());
                }
                else if (!title.includes('(#'))
                    console.log(bodyLine.trim());
            }
        }
    }
};
exports.parseCommits = parseCommits;
