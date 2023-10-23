
# # Node.jsの公式イメージをベースとする
FROM node:18-alpine3.17
# FROM --platform=linux/amd64 node:18-alpine3.17
# FROM node:18-alpine

# # 作業ディレクトリの設定
WORKDIR /app

# # 依存関係のファイルをコンテナにコピー
COPY prisma ./
COPY package*.json ./

# # 依存関係のインストール
RUN npm install

# # Prisma Clientの生成
RUN npx prisma generate
# RUN npm run postinstall

# # ソースコードをコンテナにコピー
COPY . .

# # アプリケーションの起動コマンド
CMD ["npm", "run", "dev"]
