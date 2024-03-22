import { NextRequest, NextResponse } from "next/server";

import { NEXT_PUBLIC_URL, HUB_URL } from "@/config";

const postUrl = `${NEXT_PUBLIC_URL}/api/roll`;
const imageUrl = `${NEXT_PUBLIC_URL}/api/images/start`;

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const {
    untrustedData: { inputText },
    trustedData: { messageBytes },
  } = await req.json();

  return new NextResponse(
    `<!DOCTYPE html>
      <html>
        <head>
          <title>Echo Says:</title>
          <meta property="og:title" content="Roll the dice" />
          <meta property="og:image" content="${imageUrl}" />

        
          <meta name= "of:version" content="vNext"/>
          <meta name= "of:accepts:farcaster" content="vNext"/>
          <meta name= "of:accepts:xmtp" content="2024-02-01"/>
          <meta name= "of:post_url" content="${postUrl}" />
          <meta name= "of:image" content="${imageUrl}" />
          <meta name="of:input:text" content="Enter 1-6" />
          <meta name="of:button:1" content="Roll 🎲" />
          <meta name="of:button:1:action" content="post" />
          <meta name="of:button:1:target" content="https://xmtp-frames.vercel.app/api/roll" />
         


          <meta name="fc:frame" content="vNext" />
          <meta name="fc:frame:post_url" content="${postUrl}" />
          <meta name="fc:frame:image" content="${imageUrl}" />
          <meta name="fc:frame:text" content="Enter 1-6" />
          
          <meta name="fc:frame:button:1" content="Roll 🎲" />
          <meta name="fc:frame:button:1:action" content="post" />
          <meta name="fc:frame:button:1:target" content="https://xmtp-frames.vercel.app/api/roll" />
          
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
// }
export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}
