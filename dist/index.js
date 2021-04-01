#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var utils_1 = require("./src/utils");
var changelog = function () {
    console.log("Generating CHANGELOG...");
    console.log("");
    console.log("git log $(git describe --tags --abbrev=0)..HEAD --pretty=format:\'@begin@%s@space@%b@end@\'");
    var stdout = child_process_1.execSync('git log $(git describe --tags --abbrev=0)..HEAD --pretty=format:\'@begin@%s@space@%b@end@\'').toString();
    console.log("");
    utils_1.parseCommits(stdout);
    console.log("");
    console.log("Generated CHANGELOG successfully!!!");
    console.log("Copy paste above to ./CHANGELOG.md");
};
changelog();
