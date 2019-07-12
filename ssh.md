# SSH

## Initialisation ssh keys
1.  Run in terminal - `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
2.  Skip all (click enter many times)
3.  Ready you can check it in ~/.ssh/ (id_rsa - private key, id_rsa.pub - public key)

---

## Connect to server via ssh
### Format
```bash
ssh -i ~/.ssh/id_rsa [name_of_user]@[domain_name]
```
### Example
```bash
ssh -i ~/.ssh/id_rsa ubuntu@google.dunice-testing.com
```

---

## Connection via ssh with agent forwarding
### Format
```bash
ssh -i ~/.ssh/id_rsa -A [name_of_user]@[domain_name]
```
### Example
```bash
ssh -i ~/.ssh/id_rsa -A ubuntu@google.dunice-testing.com
```

---

## Send file via ssh
### Format
```bash
scp -i ~/.ssh/id_rsa [path_to_file] [name_of_user]@[domain_name]:[/path/to/file]
```
### Example
```bash
scp -i ~/.ssh/id_rsa ./build.tar.gz ubuntu@google.dunice-testing.com:/home/ubuntu
```

---

## Download file via ssh
### Format
```bash
scp -i ~/.ssh/id_rsa [name_of_user]@[domain_name]:[/path/to/file] [path_to_save]
```
### Example
```bash
scp -i ~/.ssh/id_rsa ubuntu@google.dunice-testing.com:/home/ubuntu/dump.tar.gz ./
```

---

## Share server port (i.e staging db port) to your local machine
### Format
```bash
ssh -i ~/.ssh/id_rsa [name_of_user]@[domain_name] -L [local_port]:localhost:[server_port]
```
### Example
```bash
ssh -i ~/.ssh/id_rsa ubuntu@google.dunice-testing.com -L 27018:localhost:27017
```
---