#SSH

##Initialisation ssh keys

> 1.  Run in terminal - `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
> 2.  Skip all (click enter many times)
> 3.  Ready you can check it in ~/.ssh/ (id_rsa - private key, id_rsa.pub - public key)

##Connect to server via ssh
######Format

```bash
ssh -i ~/.ssh/id_rsa [name_of_user]@[domain_name]
```

######Example

```bash
ssh -i ~/.ssh/id_rsa ubuntu@google.dunice-testing.com)
```

##Connection via ssh with agent forwarding
######Format

```bash
ssh -i ~/.ssh/id_rsa -A [name_of_user]@[domain_name]
```

######Example

```bash
ssh -i ~/.ssh/id_rsa -A ubuntu@google.dunice-testing.com
```

##Send file via ssh
######Format

```bash
scp -i ~/.ssh/id_rsa [path_to_file] [name_of_user]@[domain_name]:[/path/to/file]
```

######Example

```bash
scp -i ~/.ssh/id_rsa ./build.tar.gz ubuntu@google.dunice-testing.com:/home/ubuntu
```

##Download file via ssh
######Format

```bash
scp -i ~/.ssh/id_rsa [name_of_user]@[domain_name]:[/path/to/file] [path_to_save]
```

######Example

```bash
scp -i ~/.ssh/id_rsa ubuntu@google.dunice-testing.com:/home/ubuntu/dump.tar.gz ./
```

##Share server port (i.e staging db port) to your local machine
######Format

```bash
ssh -i ~/.ssh/id_rsa [name_of_user]@[domain_name] -L [local_port]:localhost:[server_port]
```

######Example

```bash
ssh -i ~/.ssh/id_rsa ubuntu@google.dunice-testing.com -L 27018:localhost:27017
```

#Github

## Clone existing repository

######Format

```bash
git clone [URL]
```

## Fetch new branches from repository

```bash
git fetch
```
#####With branch selection

```bash
git fetch origin [BRANCH_NAME]
```

## Pull changes from remote branch

#####Current branch

```bash
git pull
```

#####With branch selection
######Format

```bash
git pull origin [YOUR_BRANCH]
```
######Example

```bash
git pull origin feature/#2233-authSystem
```
Caution: if you are not at the YOUR_BRANCH locally, YOUR_BRANCH will be merged with local branch

## Create new branch

######Format

```bash
git checkout -b [BRANCH_NAME]
```

######Example

```bash
git checkout -b feature/#2233-authSystem
```

## Change branch

######Format

```bash
git checkout [BRANCH_NAME]
```

######Example

```bash
git checkout feature/#2233-authSystem
```

## Rename branch

######Format

```bash
git branch -m [NEW_NAME_FOR_CURRENT_BRANCH]
git branch -m [OLD_NAME] [NEW_NAME]
```

## Add changes, commit and push to repository

######Format

```bash
git add .
git commit -m "[YOUR_MESSAGE]"
git push
```

######Example

```bash
git add .
git commit -m "implemented ideal logic"
git push
```

## Update commit name or add new files to a commit

######Format

```bash
git commit --amend
```

######Example

```bash
git add src/some-forgotten-file.js
git commit --amend
```
Caution: amend SHOULD only be used when your commits are not pushed. 

## Check local branches and selected branch

```bash
git branch
```
#####Only merged branches (can be deleted safely)
```bash
git branch --merged
```

## Delete branch

#####Safely (merged only)

######Format

```bash
git branch -d [ALREADY_MERGED_BRANCH_NAME]
```
#####Force

######Format

```bash
git branch -D [ANY_BRANCH_NAME]
```

######Example

```bash
git branch -D feature/#2233-authSystem
```

## Show the working tree status

```bash
git status
```

## Check changes in files

#####Not staged

######Format

```bash
git diff [PATH_TO_FILE_OR_FOLDER]
```

#####Staged (added with `git add`)

######Format

```bash
gid diff --cached [PATH_TO_STAGED_FILES]
```

######Example
```bash
git diff src
```

Note: `PATH_TO_FILE_OR_FOLDER` and `PATH_TO_STAGED_FILES` can be omitted

## Drop merge changes

```bash
git reset --merge
```

## Undo last commit

```bash
git reset HEAD~1
```

## See all commit history

####Global

```bash
git log
```

####For a file

```bash
git log -p [YOUR_FILE_NAME]
```

## Check what commits you have done since [BRANCH_NAME]

######Format
```bash
git cherry -v [BRANCH_NAME]
```

######Example
```bash
git cherry -v master
```

## Manage set of tracked repositories

####Add origin

```bash
git remote add origin [YOUR_REPOSITORY]
```

####Check origin

```bash
git remote -v
```

##Configure your Git username/email
####Global
######Format

```bash
git config --global user.name "[YOUR_NAME]"
```

######Example

```bash
git config --global user.name "eholodov"
```

####Local
######Format

```bash
git config --local user.name "[YOUR_NAME]"
```

######Example

```bash
git config --global user.email "e.holodov@dunice.net"
```
