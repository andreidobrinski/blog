---
title: Helpful Bash/Zsh Aliases
date: '2020-08-02'
updated: '2021-04-07'
description: Snippets that improve my productivity in the terminal
---

This is a list of aliases that I use in the terminal that help me be more productive by automating parts of my workflow. Hopefully they can help you as well!

I work on machine running macOS, zsh, and the stock Terminal app.

## Add a new alias

```bash
alias addalias="code ~/.zshrc"
```

Opens VS Code with my current zsh aliases.

## Open an environment to learn from a course

```bash
alias learn="cd path/to/repo && code . & open -a 'Google Chrome' https://link-to-current-course.com"
```

This opens VS Code with the repo and Chrome with the course material. I'll update the repo path and course link as they change.

My next step is to snap Chrome to the left half and VS Code to the right half of the screen. If you have any suggestions, let me know!

## Open and run a project

```bash
alias pfl="cd path/to/portfolio && code . && yarn start"
```

I use a few of these for projects I frequently come back to. I alias `pfl` (as in "portfolio") to navigate into the repo, open VS Code and run a project. I use this less frequently because of the VS Code Workspace Switcher [extension](https://github.com/sadesyllas/vscode-workspace-switcher), but it's still handy.

## Open multiple browsers to localhost

```bash
alias cbt="open -a 'Google Chrome' http://localhost:3000 & open -a 'Firefox Developer Edition' http://localhost:3000 & open -a 'Safari' http://localhost:3000"
```

`cbt` (cross-browser test) opens localhost:3000 in Chrome, Firefox and Safari. This could further be improved by passing the localhost port as an argument.

## Open files with changes from a branch in VS Code

```bash
wip() {
  git diff --name-only $1 | xargs code
}

# shortcut with main branch
alias wipm="git diff --name-only main | xargs code"
```

`wip` (work in progress) accepts and argument of a branch name, performs a git diff of changed files with the current branch and pipes the result into VS Code, which opens each file. I find this useful for context switching, as it quickly takes my workspace back into the state it was when I was last working on a branch. It also allows me to clean up my workspace knowing that I can easily return to the work-in-progress state.

## Run an Android simulator

```bash
alias runavd="~/Library/Android/sdk/emulator/emulator -avd Nexus_5X_API_28"
```

I use this for Flutter and React Native development as it lets me quickly open the emulator without having to open and navigate through Android Studio. The path and avd should both be valid to use.

## Open a Jira ticket in the browser

```bash
jira() {
  open -a 'Google Chrome' https://your-company.atlassian.net/browse/BOARD-$1
}
```

I pass ticket number as an argument and Chrome opens with that ticket. Useful for when a teammate gives me a ticket number verbally.

## Push current git branch to staging

```bash
alias gps='git push staging $(git rev-parse --abbrev-ref HEAD):main -f'
```

The prerequisite here is that my environment needs to be configured so that `git push staging your-branch:main -f` is the command to push to staging. The other piece in the `gps` (git push staging) alias finds the git branch that I'm currently on, so that I don't need to write out the entire command.

## Print my recent git branches

```bash
alias grb="git for-each-ref --count=10 --sort=-committerdate refs/heads/ --format='%(refname:short)'"
```

`grb` (git recent branches) gives me the 10 most recent branches in my git repository.

## Print test suite from working directory

```bash
testDiff() {
  newTests=$(git diff --name-only main | grep .test.'[ts|tsx|js|jsx]')
  array=()
  for FILE in $(echo "${newTests[@]}");do
    array+=("${FILE}")
  done
  testOutput=$(npm run test -- --findRelatedTests $array --verbose)
  echo $testOutput
}
```

Keep in mind that this function is hardcoded to diff against the `main` branch.

## Decrease Key Repeat and Increase Track Speed on Mac

```bash
# decrease key repeats
defaults write -g KeyRepeat -int 1
defaults read -g KeyRepeat # 1

defaults write -g InitialKeyRepeat -int 10
defaults read -g InitialKeyRepeat # 10

# increase tracking speed
defaults write -g com.apple.trackpad.scaling -float 3.0
defaults read -g com.apple.trackpad.scaling # 3

defaults write -g com.apple.mouse.scaling -float 10.0
defaults read -g com.apple.mouse.scaling # 10
```

## Miscellaneous git shortcuts

```bash
alias gco="git checkout"
alias branch="git checkout -b"
alias gcm="git checkout main"
alias gc-="git checkout -"
```

The goal with these is to save a few keystrokes on commands I frequently use.

If you have have any suggestions for improvements or feedback, I'd love to hear it! Let me know via [Twitter](https://twitter.com/andreidobrinski).
