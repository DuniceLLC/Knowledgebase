[<- back to index](index.html)

# Dunice Docker Registry

## What is it

Для того чтоы было проще работать с Docker образами (image), есть глобальное хранилище всех образов (типа как *nmpjs.org* только для *Docker*)

Но, нельзя выгружать приватный код на общедоступные сервера. Это как минимум не безопастно.

Поэтому, мы запустили свое мини хранилище Docker образов (доступно по домену `docker-registry.dunice-testing.com`)

Примерный флоу работы такой:

1) На локальной машине (либо на машине CI/CD) мы авторизуемся в нашем хранилище.
2) Создаем новый Docker image
3) Отправляем image в наше хранилище
4) Заходим на VPS, где мы хотим развернуть
5) Авторизуемся в нашем хранилище
6) Стягиваем нужный нам image и запускаем контейнер (или запускаем docker-compose)
7) Деавторизуемся

## How to use

### Auth

Для начала нам нужно авторизоваться (для локальных машин, в офисе, это достаточно будет сделать один раз. Для облачных VPS в целях безопасности, нам каждый раз нужно авторизовываться и деавторизовываться)

`docker login docker-registry.dunice-testing.com`

 - логин и пароль можно узнать у техлида или технического директора.

Для того чтобы деавторизовываться нужно выполнить

`docker logout docker-registry.dunice-testing.com`

### Use

Сборка образа
`docker build . -t docker-registry.dunice-testing.com/<image_name>`

Отправляем образ в хранилище
`docker push docker-registry.dunice-testing.com/<image_name>`

Забираем образ из хранилища
`docker pull docker-registry.dunice-testing.com/<image_name>`

Можно указать `docker-registry.dunice-testing.com/<image_name>` в поле image у докер-композа.
