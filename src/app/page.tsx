import { Metadata } from "next";
import Xmtp from "@/app/components/Xmtp";
import { NEXT_PUBLIC_URL } from "@/config";

const postUrl = `${NEXT_PUBLIC_URL}/api/roll`;

export async function generateMetadata(): Promise<Metadata> {
  const imageUrl = `${NEXT_PUBLIC_URL}/api/images/start`;
  return {
    title: "Roll the Dice",
    description: "Roll the dice and if it matches You win",
    openGraph: {
      title: "Roll the Dice",
      images: [imageUrl],
    },
    other: {
      "fc:frame": "vNext",
      "fc:frame:image": imageUrl,
      "fc:frame:post_url": postUrl,
      "fc:frame:input:text": "Enter 1-6",
      "fc:frame:button:1": "Roll 🎲",
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col text-center lg:p-16">
      <Xmtp />
    </main>
  );
}
