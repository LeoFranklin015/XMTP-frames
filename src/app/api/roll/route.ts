import { NextRequest, NextResponse } from "next/server";

const HUB_URL = process.env["HUB_URL"] || "nemes.farcaster.xyz:2283";

const postUrl = `${process.env["HOST"]}/api/code`;

export async function POST(req: NextRequest) {
  const {
    untrustedData: { inputText },
    trustedData: { messageBytes },
  } = await req.json();

  const message = inputText ?? "";
  const imageUrl = `${
    process.env["HOST"]
  }/api/images/echo?date=${Date.now()}&message=${message}`;
  return new NextResponse(
    `<!DOCTYPE html>
      <html>
        <head>
          <title>Echo Says:</title>
          <meta property="og:title" content="Echo Says:" />
          <meta property="og:image" content="${imageUrl}" />
          <meta name="fc:frame" content="vNext" />
          <meta name="fc:frame:post_url" content="${postUrl}" />
          <meta name="fc:frame:image" content="${imageUrl}" />
          <meta name="fc:frame:button:1" content="See code" />
          <meta name="fc:frame:button:1:action" content="post_redirect" />
          <meta name="fc:frame:button:2" content="(coming soon)" />
          <meta name="fc:frame:button:2:action" content="link" />
          <meta name="fc:frame:button:2:target" content="https://github.com/horsefacts/echo-the-dolphin" />
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

export const GET = POST;
