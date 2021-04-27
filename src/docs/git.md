[<- back to index](index.html)

# Git (SCM)

## Clone existing repository
### Format
```bash
git clone [URL]
```

---

## Fetch new branches from repository
```bash
git fetch
```

---

## Pull changes from remote branch
### Format
```bash
git pull # Current branch
git pull origin [YOUR_BRANCH] # With branch selection
```
> Caution: if you are not at the YOUR_BRANCH locally, YOUR_BRANCH will be merged with local branch
### Example
```bash
git pull origin feature/2233-redesign-home-page
```

---

## Change branch
### Format
```bash
git checkout [BRANCH_NAME]
```
### Example

```bash
git checkout feature/2233-redesign-home-page
```

---

## Create new branch
### Format
```bash
git checkout -b [BRANCH_NAME]
```
### Example
```bash
git checkout -b feature/2233-redesign-home-page
```

---

## Rename branch
### Format
```bash
git branch -m [NEW_NAME_FOR_CURRENT_BRANCH]
git branch -m [OLD_NAME] [NEW_NAME]
```
### Example
```bash
git branch -m feature/2233-redisign-home-page feature/2233-redesign-home-page
```

---

## Show the working tree status

```bash
git status
```

---

## Add changes, commit and push to repository
### Format
```bash
git add -A # Add all files to staged index
git commit -m "[YOUR_MESSAGE]" # Create commit with all files from index
git push [REMOTE] [BRANCH_NAME_or_HEAD] # Load changes to the remote server
```
### Example
```bash
git add -A
git commit -m "Redesign header on home page"
git push origin HEAD
```

---

## Update commit name or add new files to a commit
### Format
```bash
git commit --amend
```
### Example
```bash
git add src/some-forgotten-file.js # Add one file to staged index
git commit --amend
```
> Caution: amend SHOULD only be used when your commits are not pushed.

---

## Check local branches and selected branch
```bash
git branch
git branch --merged # Only merged branches (can be deleted safely)
```

---

## Delete branch
### Format
```bash
git branch -d [ALREADY_MERGED_BRANCH_NAME] # safely (merged only)
git branch -D [ANY_BRANCH_NAME] # force
```
### Example
```bash
git branch -D feature/2233-redesign-home-page
```

---

## Check changes in files
### Format
```bash
git diff [PATH_TO_FILE_OR_FOLDER]
```
### Example
```bash
git diff src
```
> Note: `PATH_TO_FILE_OR_FOLDER` can be omitted

---


## Drop merge changes (upon merge failure)
```bash
git reset --merge
```

---

## Undo last commit
```bash
git reset HEAD~1
```

---


## See all commit history
```bash
git log # common
git log -p [YOUR_FILE_NAME] # for specific file
```

---


## Check what commits you have done since [BRANCH_NAME]
### Format
```bash
git cherry -v [BRANCH_NAME]
```
### Example
```bash
git cherry -v master
```

---

## Manage set of tracked repositories
### Format
```bash
git remote add [REMOTE_NAME] [YOUR_REPOSITORY] # add new remote
git remote -v # Show connected remotes
```
### Example
```bash
git remote add origin git@codebasehq.com:dunice/knowledgebase/wiki.git
```

---

## Configure your Git username/email
### Format
```bash
git config --global user.name "[YOUR_NAME]" # Global (for system)
git config --local user.name "[YOUR_NAME]" # Local (for current repository)
```
### Example
```bash
git config --global user.name "John Smith"
git config --global user.email "j.smith@example.com"
```
