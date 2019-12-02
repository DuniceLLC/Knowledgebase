## Installing docker
###Mac OS:
[Download Docker for Mac](https://docs.docker.com/v17.09/docker-for-mac/install/)

1. [Sign Up](https://hub.docker.com/signup) on docker hub.

2. Install downloaded .dmg file and login in the Docker application


### Ubuntu
[Installation for Ubuntu](https://docs.docker.com/v17.09/engine/installation/linux/docker-ce/ubuntu/)

## Installing docker-compose
### Mac OS:
For mac OS docker-compose installs automatically with Docker
    
### Ubuntu:
Install docker compose

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

Test the installation

```bash
docker-compose --version
```

### Start containers via docker-compose
Run the command in the directory with `docker-compose.yml`:

```bash
docker-compose up
```

### Start containers for specific docker-compose.yml file
*Replace docker-compose.dev.yml* to you docker-compose file path

```bash
docker-compose -f docker-compose.dev.yml up
```

### Start docker-compose in background
Add -d flag to your docker-compose command. i.e:

```bash
docker-compose up -d
```

### Stop docker-compose started in background
```bash
docker-compose down
```

or

```bash
docker-compose -f <path/to/docker-compose.yml> down
```

### Run specific container or command in container
```bash
docker-compose run --rm <service name from docker-compose> <command>
```

#### Examples:
Start `web` service and attach to bash, to execute any bash commands

```bash
docker-compose run --rm web bash
```

Start `web` service and run any command

```
docker-compose run --rm web npm run start
```

Start `web` service and run multiple commands

```
docker-compose run --rm web bash -c "cd /code/web && npm run start"
```

### Attach to bash of running container
1. Get list of running containers

```bash
docker ps
```

2. Grep name of container which you need. (I.e its `app_web_1`)

3. Connect to started container

```bash
docker exec -it app_web_1 bash
```

*Note*:

`docker-compose run ...` creates new container from a  service from docker-compose

`docker exec -it bash` attaches to started docker container
