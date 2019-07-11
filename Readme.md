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

## Fetch new branches from repository

```bash
git fetch
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

## Check local branches and selected branch

```bash
git branch
```

## Delete branch

######Format

```bash
git branch -D [BRANCH_NAME]
```

######Example

```bash
git branch -D feature/#2233-authSystem
```

## Show the working tree status

```bash
git status
```

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
