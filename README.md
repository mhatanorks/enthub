# Like a Saas Project / EntHub
[about project](https://github.com/mhatanorks/enthub/wiki)

## 環境構築
> dockerを使用するのでインストールしてない場合は以下より
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


```
// 最新リモートブランチの取り込み
$ git fetch origin
// リモートブランチ確認（省略可）
$ git branch -a   
// プルリク受け取ったブランチに移動
$ git checkout -b {ブランチ名} {リモートのブランチ名}
```
