# Like a Saas Project / EntHub

## 環境構築
> dockerを使用します。まだインストールしてない場合は以下より
> - [for mac](https://docs.docker.com/desktop/install/mac-install/)
> - [for windows](https://docs.docker.com/desktop/install/mac-install/)

- dockerのビルドに`.env`が必要なので、オーナーよりもらう。
```
$ git clone git@github.com:mhatanorks/enthub.git
$ cd enthub

$ docker compose build
$ docker compose up
```
以下にアクセス
`http://localhost:3030/`
