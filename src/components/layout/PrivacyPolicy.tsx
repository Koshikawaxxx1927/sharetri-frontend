import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import ColoredLine from "../elements/ColoredLine";

const PrivacyPolicy = () => {
  const textColor = grey[900];
  return (
    <Container maxWidth="md" sx={{ marginBottom: "50px" }}>
      <Typography
        align="center"
        variant="h5"
        sx={{ margin: "60px 0 20px", fontWeight: "bold" }}
      >
        プライバシーポリシー
      </Typography>
      <Typography sx={{ color: textColor }}>
        本ウェブサイト上で提供するサービス「Sharetri」（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
      </Typography>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第1条（個人情報）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、特定の個人を識別できる情報（個人識別情報）を指します。
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第2条（個人情報の収集方法）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          本サービスは、ユーザーが利用登録をする際に、メールアドレスまたはGoogleアカウント情報を取得します。
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第3条（個人情報を収集・利用する目的）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          本サービスが個人情報を収集・利用する目的は、以下のとおりです。
          <Box sx={{ marginY: "6px" }}>
            <ul style={{ listStyle: "disc", listStylePosition: "inside" }}>
              <li>本サービスの提供・運営のため</li>
              <li>
                ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）
              </li>
              <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
              <li>
                利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため
              </li>
              <li>
                ユーザーにご自身の登録情報の閲覧や変更を行っていただくため
              </li>
              <li>上記の利用目的に付随する目的 第4条（利用目的の変更）</li>
              <li>
                本サービスは、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
              </li>
              <li>
                利用目的の変更を行った場合には、変更後の目的について、本サービス所定の方法により、ユーザーに通知、または本ウェブサイト上に公表するものとします。
              </li>
            </ul>
          </Box>
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第5条（個人情報の第三者提供）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          本サービスは、ユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第6条（プライバシーポリシーの変更）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。
          <br />
          本サービスが別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
