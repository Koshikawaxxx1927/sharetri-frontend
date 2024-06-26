import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import ColoredLine from "../elements/ColoredLine";

const TermsofServices = () => {
  const textColor = grey[900];
  return (
    <Container maxWidth="md" sx={{ marginBottom: "50px" }}>
      <Typography
        align="center"
        variant="h5"
        sx={{ margin: "60px 0 20px", fontWeight: "bold" }}
      >
        利用規約
      </Typography>
      <Typography sx={{ color: textColor }}>
        この利用規約（以下、「本規約」といいます。）は、このウェブサイト上で提供するサービス「Sharetri」（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
      </Typography>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第1条（適用）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          本規約は、ユーザーと本サービスの利用に関わる一切の関係に適用されるものとします。
          <br />
          本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
          <br />
          本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第2条（利用登録）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          本サービスにおいては、登録希望者が本規約に同意の上、本サービスの定める方法によって利用登録を申請し、本サービスがこれを承認することによって、利用登録が完了するものとします。
          <br />
          本サービスは、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
          <Box sx={{ marginY: "6px" }}>
            <ul style={{ listStyle: "disc", listStylePosition: "inside" }}>
              <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
              <li>本規約に違反したことがある者からの申請である場合</li>
              <li>その他、本サービスが利用登録を相当でないと判断した場合</li>
            </ul>
          </Box>
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第3条（ユーザーIDおよびパスワードの管理）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
          <br />
          ユーザーは、ユーザーIDおよびパスワードを第三者に譲渡または貸与、もしくは第三者と共用することはできません。本サービスは、ユーザーIDが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。
          <br />
          ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は、本サービスは一切の責任を負わないものとします。
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第4条（利用料金）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          ユーザーは、本サービスを無料で利用することができます。本サービスは、利用料金を請求することはありません。
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第5条（禁止事項）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
          <Box sx={{ marginY: "6px" }}>
            <ul style={{ listStyle: "disc", listStylePosition: "inside" }}>
              <li>法令または公序良俗に違反する行為 犯罪行為に関連する行為</li>
              <li>
                本サービスの内容等、本サービスに含まれる著作権、商標権または知的財産権を侵害する行為
              </li>
              <li>
                本サービス、他のユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
              </li>
              <li>本サービスによって得られた情報を商業的に利用する行為</li>
              <li>
                本サービスの運営を妨害するおそれのある行為
                不正アクセス、またはこれを試みる行為
              </li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>
                不正な目的を持って本サービスを利用する行為
                本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為
              </li>
              <li>他のユーザーに成りすます行為</li>
              <li>
                本サービスが許諾しない本サービス上での宣伝、広告、勧誘、または営業行為
              </li>
              <li>面識のない異性との出会いを目的とした行為</li>
              <li>
                本サービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
              </li>
              <li>その他、本サービスが不適切と判断する行為</li>
            </ul>
          </Box>
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第6条（本サービスの提供の停止等）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          本サービスは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
          <Box sx={{ marginY: "6px" }}>
            <ul style={{ listStyle: "disc", listStylePosition: "inside" }}>
              <li>本サービスにかかるシステムの保守点検または更新を行う場合</li>
              <li>
                地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
                コンピュータまたは通信回線等が事故により停止した場合
              </li>
              <li>
                その他、本サービスの提供が困難と判断した場合
                本サービスは、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
              </li>
            </ul>
          </Box>
        </Typography>
      </Box>
      <Typography
        variant="h5"
        sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
      >
        第7条（利用制限および登録抹消）
      </Typography>
      <ColoredLine color="grey" />
      <Typography sx={{ color: textColor }}>
        本サービスは、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限、またはユーザーとしての登録を抹消することができるものとします。
        <Box sx={{ marginY: "6px" }}>
          <ul style={{ listStyle: "disc", listStylePosition: "inside" }}>
            <li>本規約のいずれかの条項に違反した場合</li>
            <li>登録事項に虚偽の事実があることが判明した場合</li>
            <li>本サービスからの連絡に対し、一定期間返答がない場合</li>
            <li>本サービスについて、最終の利用から一定期間利用がない場合</li>
            <li>その他、本サービスの利用を適当でないと判断した場合</li>
            <li>
              本サービスは、本条に基づき行った行為によりユーザーに生じた損害について、一切の責任を負いません。
            </li>
          </ul>
        </Box>
      </Typography>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第8条（保証の否認および免責事項）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          本サービスは、事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
          <br />
          本サービスは、ユーザーに生じたあらゆる損害について、一切の責任を負いません。
          <br />
          本サービスは、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第9条（サービス内容の変更等）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          本サービスは、ユーザーへの事前の告知をすることなく、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第10条（利用規約の変更）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          本サービスは、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
          <br />
          本サービスは、本規約の変更後にユーザーが本サービスを利用した場合、変更後の規約に同意したものとみなします。
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第11条（個人情報の取扱い）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          本サービスの利用によって取得する個人情報については、「プライバシーポリシー」に従い適切に取り扱うものとします。
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第12条（通知または連絡）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          ユーザーと本サービスとの間の通知または連絡は、本サービスの定める方法によって行うものとします。現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、発信時にユーザーへ到達したものとみなします。
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第13条（権利義務の譲渡の禁止）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          ユーザーは、事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "40px 0 8px", fontWeight: "bold" }}
        >
          第14条（準拠法・裁判管轄）
        </Typography>
        <ColoredLine color="grey" />
        <Typography sx={{ color: textColor }}>
          本規約の解釈にあたっては、日本法を準拠法とします。
          <br />
          本サービスに関して紛争が生じた場合には、本サービスの運営者所在地を管轄する裁判所を専属的合意管轄とします。
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsofServices;
