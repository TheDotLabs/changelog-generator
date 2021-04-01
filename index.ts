#!/usr/bin/env node
import {execSync,} from "child_process";
import {parseCommits} from "./src/utils";

const changelog = function () {
    console.log("Generating CHANGELOG...");
    console.log("");
    console.log("git log $(git describe --tags --abbrev=0)..HEAD --pretty=format:\'@begin@%s@space@%b@end@\'");
    const stdout = execSync('git log $(git describe --tags --abbrev=0)..HEAD --pretty=format:\'@begin@%s@space@%b@end@\'').toString();
    console.log("");
    parseCommits(stdout);
    console.log("");
    console.log("Generated CHANGELOG successfully!!!");
    console.log("Copy paste above to ./CHANGELOG.md");
}

changelog();