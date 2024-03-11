// const fs = require("fs");
// const path = require("path");
// const { Buffer } = require("node:buffer");

async function saveDecodedImage(encodedImageData: string, savePath: string) {
  //   // base64デコード
  //   const decodedData = Buffer.from(encodedImageData).toString("base64");
  //   // デコードされたデータをBlobオブジェクトに変換
  //   const blob = new Blob([decodedData], { type: "image/png" });
  //   // 保存先ディレクトリが存在しない場合は作成
  //   try {
  //     await fs.promises.mkdir(savePath, { recursive: true });
  //   } catch (err) {
  //     throw new Error(`error creating save directory: ${err}`);
  //   }
  //   // BlobオブジェクトをURLに変換
  //   const objectURL = URL.createObjectURL(blob);
  //   // 画像をファイルに保存
  //   try {
  //     const response = await fetch(objectURL, { cache: "no-store" });
  //     const buffer = await response.arrayBuffer();
  //     // 画像ファイルを保存
  //     await fs.promises.writeFile(savePath, Buffer.from(buffer));
  //   } catch (err) {
  //     throw new Error(`error saving image file: ${err}`);
  //   }
}

export { saveDecodedImage };
