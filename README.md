# Sharetri アプリ

URL: https://sharetri-frontend.vercel.app

## 開発背景

コロナの規制も緩和され、学会や旅行で日本中様々な場所に行く機会が増えてきました。そんな中、旅慣れしている人がお勧めしてくれる場所は、どこも行ってよかったと思える場所でした。そんな場所を共有するためこのWebアプリを作成しました。この共有には写真や行った日付、かかった費用を含みます。利用者にはできるだけベストな写真を貼っていただき、その場所の良さを伝えてもらえると嬉しいです。

## 工夫した点

1. ウィンドウサイズに応じてグリッドの配置を変えることで、PC、スマートフォンで使用しやすいようにしました。

2. 画像の読み込みを遅くすることでページ全体の読み込みを早くしました。

3. 常にインテラクティブな操作を実現するため、クライアント側で値の更新、取得を実行しました。

## メイン機能の使い方

1. 画面右上のアイコンボタンからアカウントにサインイン

<img width="316" alt="スクリーンショット 2024-05-18 10 04 53" src="https://github.com/Koshikawaxxx1927/sharetri-frontend/assets/89830436/481518f8-bd48-44ac-9bf7-6f45e1b2fff5">
<img width="330" alt="スクリーンショット 2024-05-18 10 06 17" src="https://github.com/Koshikawaxxx1927/sharetri-frontend/assets/89830436/63cb2147-b850-40c7-bcf8-202522cb2797">

2. 旅行先を登録

<img width="680" alt="スクリーンショット 2024-05-18 10 13 50" src="https://github.com/Koshikawaxxx1927/sharetri-frontend/assets/89830436/d42ccab3-8b7d-458f-8ca4-89bdf132b215">
<img width="678" alt="スクリーンショット 2024-05-18 10 12 44" src="https://github.com/Koshikawaxxx1927/sharetri-frontend/assets/89830436/9af06296-9b56-4983-a920-a71e8ec12b2f">

3. 旅行先で訪れたスポットの登録

4. 旅行先やスポットで撮った写真をあげる

## 主な使用技術

バックエンド: go v1.21  gin v1.9.1  gorm v1.25.8

- データベース: MySQL

フロントエンド: Typescript v5.3.3 React v18.2.0  Nextjs v14.1.0

インフラ: Vercel / Heroku

環境構築: Docker / Docker compose

認証: Firebase Authentication

