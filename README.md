# Start

Follow offical docs of React Native to setup environment first and then run these commands:

```
git clone http://gitlab.infonam.com/ME/entribe-mobile.git EnTribeMobile
cd EnTribeMobile
npm install
react-native run-android
```

Note: for the "`react-native run-android`", have a android simulator run first before running this command.

# Convention

## Config VSCode for coding style

Integrate two extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Go to Code/Preferences/Settings. Open `settings.json` and add key-value pairs as below:

```
"editor.tabSize": 2,
"editor.formatOnSave": true,
"eslint.autoFixOnSave": true,
"prettier.eslintIntegration": true
```

## Commit message convention

We will follow [Semantic Commit Messages](https://seesparkbox.com/foundry/semantic_commit_messages).
