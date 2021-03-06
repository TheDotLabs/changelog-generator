# changelog-generator ![GitHub](https://img.shields.io/github/license/apgapg/changelog-generator) ![GitHub Repo stars](https://img.shields.io/github/stars/apgapg/changelog-generator?style=social) ![npm](https://img.shields.io/npm/v/@apgapg/changelog-generator) ![Twitter Follow](https://img.shields.io/twitter/follow/ayushpgupta?style=social)

Generates CHANGELOG based on the commits since last tag

## 💻 Installation

```
$ npm install -g @apgapg/changelog-generator
```

## ❔ Usage

Run following command at the root of your of project (must be a valid git project).
```
$ changelog-generator
```

Sample output

```
Generating CHANGELOG...

git log $(git describe --tags --abbrev=0)..HEAD --pretty=format:'@begin@%s@space@%b@end@'

- [CI/CD] Disable Flutter web build and firebase hosting
- [CI/CD] Reorganize and rename workflows
- [Logout] Clear AppPrefs on logout
- [CI/CD] Update asana action to v3.6.0
Asana Task: [https://app.asana.com/0/1199639699575756/1200107355785896/f](https://app.asana.com/0/1199639699575756/1200107355785896/f)
- [Select Placement] Hide Add-Edit Button

Generated CHANGELOG successfully!!!
Copy paste above to the ./CHANGELOG.md

```

## 👍 Contribution

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -m 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## ✨ Active Contributors

<table>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/apgapg>
            <img src=https://avatars.githubusercontent.com/u/13887407?v=4 width="100;"  alt=Ayush P Gupta/>
            <br />
            <sub style="font-size:14px"><b>Ayush P Gupta</b></sub>
        </a>
    </td>
</tr>
</table>

<table>
  <tr>
    <td align="center"><a href="https://github.com/apgapg"><img src="https://avatars0.githubusercontent.com/u/13887407?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ayush P Gupta</b></sub></a><br /></td>
  </tr>
  
</table>
