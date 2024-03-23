import { NextRequest, NextResponse } from "next/server";
import { getSSLHubRpcClient, Message } from "@farcaster/hub-nodejs";
import { NEXT_PUBLIC_URL, HUB_URL } from "@/config";

// const HUB_URL1 = HUB_URL || "";
// const hubClient = getSSLHubRpcClient(HUB_URL1);

const postUrl = `${NEXT_PUBLIC_URL}`;

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const {
    untrustedData: { inputText },
    trustedData: { messageBytes },
  } = await req.json();
  // const frameMessage = Message.decode(Buffer.from(messageBytes, "hex"));
  // const validateResult = await hubClient.validateMessage(frameMessage);
  // if (validateResult.isOk() && validateResult.value.valid) {
  //   const validMessage = validateResult.value.message;

  //   let urlBuffer = validMessage?.data?.frameActionBody?.url ?? [];
  //   const urlString = Buffer.from(urlBuffer).toString("utf-8");
  //   if (!urlString.startsWith(process.env["HOST"] ?? "")) {
  //     return new NextResponse("Bad Request", { status: 400 });
  //   }

  const message = inputText || "no";
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  if (randomNumber.toString() === message) {
    const imageUrl = `${NEXT_PUBLIC_URL}/api/images/win`;
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Echo Says:</title>
          <meta property="og:title" content="Roll and winned" />
          <meta property="og:image" content="${imageUrl}" />

        
          <meta name= "of:version" content="vNext"/>
          <meta name= "of:accepts:farcaster" content="vNext"/>
          <meta name= "of:accepts:xmtp" content="2024-02-01"/>
          <meta name= "of:post_url" content="${postUrl}" />
          <meta name= "of:image" content="${imageUrl}" />

          <meta name="of:button:1" content="source code" />
          <meta name="of:button:1:action" content="link" />
          <meta name="of:button:1:target" content="https://github.com/LeoFranklin015/XMTP-frames" />


          <meta name="fc:frame" content="vNext" />
          <meta name="fc:frame:post_url" content="${postUrl}" />
          <meta name="fc:frame:image" content="${imageUrl}" />
 
          <meta name="fc:frame:button:1" content="source code" />
          <meta name="fc:frame:button:1:action" content="link" />
          <meta name="fc:frame:button:1:target" content="https://github.com/LeoFranklin015/XMTP-frames" />
        </head>
        <body/>
      </html>`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  } else {
    const imageUrl = `${NEXT_PUBLIC_URL}/api/images/lose`;
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Echo Says:</title>
          <meta property="og:title" content="Roll and Lost" />
          <meta property="og:image" content="${imageUrl}" />

            <meta name= "of:version" content="vNext"/>
          <meta name= "of:accepts:farcaster" content="vNext"/>
          <meta name= "of:accepts:xmtp" content="2024-02-01"/>
          <meta name= "of:post_url" content="${postUrl}" />
          <meta name= "of:image" content="${imageUrl}" />

          <meta name="of:button:1" content="source code" />
          <meta name="of:button:1:action" content="link" />
          <meta name="of:button:1:target" content="https://github.com/LeoFranklin015/XMTP-frames" />

          
          <meta name="fc:frame" content="vNext" />
          <meta name="fc:frame:post_url" content="${postUrl}" />
          <meta name="fc:frame:image" content="${imageUrl}" />

          <meta name="fc:frame:button:1" content="source" />
          <meta name="fc:frame:button:1:action" content="link" />
          <meta name="fc:frame:button:1:target" content="https://github.com/LeoFranklin015/XMTP-frames" />
        </head>
        <body/>
      </html>`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  }
}
// }
export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";

// <meta name="of:button:1" content="Try again 💪" />
// <meta name="of:button:1:action" content="post" />
// <meta name="of:button:1:target" content="https://xmtp-frames.vercel.app/api/tryagain" />

// <meta name="fc:frame:button:1" content="Try again 💪" />
// <meta name="fc:frame:button:1:action" content="post" />
// <meta name="fc:frame:button:1:target" content="${postUrl}" />
