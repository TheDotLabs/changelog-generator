"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCommits = void 0;
var parseCommits = function (output) {
    var _a;
    var commits = output.split("@begin@");
    if (commits[0] === "") {
        commits.shift();
    }
    for (var _i = 0, commits_1 = commits; _i < commits_1.length; _i++) {
        var commit = commits_1[_i];
        var title = commit.split("@space@")[0];
        var body = commit.split("@space@")[1].replace('@end@', '');
        var bodyLines = body.split('\n');
        console.log("- " + title.trim() + "  ");
        for (var _b = 0, bodyLines_1 = bodyLines; _b < bodyLines_1.length; _b++) {
            var bodyLine = bodyLines_1[_b];
            if (!bodyLine.includes('Signed-off') && bodyLine !== "") {
                if (!title.includes('(#')) {
                    var urlRegex = /(https?:\/\/[^ ]*)/g;
                    var urls = (_a = bodyLine.match(urlRegex)) !== null && _a !== void 0 ? _a : [];
                    var newBodyLine = bodyLine;
                    for (var _c = 0, urls_1 = urls; _c < urls_1.length; _c++) {
                        var url = urls_1[_c];
                        newBodyLine = newBodyLine.replace(url, "[" + url + "](" + url + ")");
                    }
                    console.log(newBodyLine.trim());
                }
            }
        }
    }
};
exports.parseCommits = parseCommits;
