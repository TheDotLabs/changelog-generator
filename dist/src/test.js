"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var testOutput = "@begin@[CI/CD] Disable Flutter web build and firebase hosting@space@Signed-off-by: Ayush P Gupta <ayushpguptaapg@gmail.com>\n" +
    "@end@\n" +
    "@begin@[CI/CD] Update email template and add more recipients@space@Signed-off-by: Ayush P Gupta <ayushpguptaapg@gmail.com>\n" +
    "@end@\n" +
    "@begin@Update CHANGELOG.md@space@Signed-off-by: Ayush P Gupta <ayushpguptaapg@gmail.com>\n" +
    "@end@\n" +
    "@begin@[CI/CD] Push changelog to tech docs on release@space@Signed-off-by: Ayush P Gupta <ayushpguptaapg@gmail.com>\n" +
    "@end@\n" +
    "@begin@[CI/CD] Reorganize and rename workflows@space@Signed-off-by: Ayush P Gupta <ayushpguptaapg@gmail.com>\n" +
    "@end@\n" +
    "@begin@[Logout] Clear AppPrefs on logout@space@@end@\n" +
    "@begin@[Home] Fix check for monthly opening stock@space@@end@\n" +
    "@begin@[Order Taking] Remove Category and subCategory with 0 products@space@@end@\n" +
    "@begin@[Location Error] Fix UI overflow bug@space@@end@\n" +
    "@begin@[Select Placement] Hide Add-Edit Button@space@@end@\n" +
    "@begin@ [Login] Add Auto mobile number picker support (#62)@space@* [Mobile Number Picker] Auto Login Flow Added for Indian Numbers\n" +
    "\n" +
    "* [Mobile Number Picker And Build Analysis] mobile picker package updated to 0.0.1+3 , auto login flow completed and must_call_super added to build_analysis\n" +
    "\n" +
    "* [Mobile Number Picker] Dispose stream in OnDispose\n" +
    "\n" +
    "* [Mobile Number Plugin] Dispose StreamSubscription in OnDispose@end@\n" +
    "@begin@[CI/CD] Update github-asana-action to v3.6.1@space@Signed-off-by: Ayush P Gupta <ayushpguptaapg@gmail.com>\n" +
    "@end@\n" +
    "@begin@Update README.md@space@@end@\n" +
    "@begin@Update README.md@space@Add company change, setting links@end@\n" +
    "@begin@Update README.md@space@@end@\n" +
    "@begin@Update README.md@space@@end@\n" +
    "@begin@[Closing Stock] Enable Opening+Inward stock count (#61)@space@@end@\n" +
    "@begin@[Location] Create Location Error Page (#60)@space@* [Location] Add LocationException class\n" +
    "\n" +
    "* [Location Error] Create Location Error Widget\n" +
    "\n" +
    "* [Location Error] Create Basic Location error UI\n" +
    "\n" +
    "* [Refactor] Move Error Widgets in a sep folder\n" +
    "\n" +
    "* [Location Error] Add Image Asset on Location Error Page\n" +
    "\n" +
    "* [Location Error] Push Error Page on Location Timeout@end@\n" +
    "@begin@[Mark Leave] Don't show submit button while loading (#59)@space@* [Mark Leave] Don't show submit button while loading\n" +
    "\n" +
    "* Add relevent comments\n" +
    "\n" +
    "* Update comments@end@\n" +
    "@begin@[Error] Enhance error page UI (#58)@space@* [General] Add error UI\n" +
    "\n" +
    "* Add error page\n" +
    "\n" +
    "* Add error page route\n" +
    "\n" +
    "* [ErrorWidget] Enhance error widget UI\n" +
    "\n" +
    "* [ErrorWidget] Minor changes\n" +
    "\n" +
    "* Fix errors\n" +
    "\n" +
    "* Resize supercommander in error page\n" +
    "\n" +
    "* Update image size@end@\n" +
    "@begin@[CI/CD] Update asana action to v3.6.0@space@https://app.asana.com/0/1199639699575756/1200107355785896/f\n" +
    "Signed-off-by: Ayush P Gupta <ayushpguptaapg@gmail.com>\n" +
    "@end@\n" +
    "@begin@[GitHub] Update pr template (#57)@space@https://app.asana.com/0/1199639699575756/1200107355785894/f@end@\n" +
    "@begin@[CI/CD] Add synchronize to github action@space@Signed-off-by: Ayush P Gupta <ayushpguptaapg@gmail.com>\n" +
    "@end@\n" +
    "@begin@[CI/CD] Update github-asana-action to v3.4.1@space@Signed-off-by: Ayush P Gupta <ayushpguptaapg@gmail.com>\n" +
    "@end@\n" +
    "@begin@[CI/CD] Update github-asana-action to v3.4.0@space@Signed-off-by: Ayush P Gupta <ayushpguptaapg@gmail.com>\n" +
    "@end@\n" +
    "@begin@[CI/CD] Update asana action to v3.3.1@space@@end@";
utils_1.parseCommits(testOutput);
