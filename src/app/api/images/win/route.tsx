import { ImageResponse } from "next/og";
import { join } from "path";
import * as fs from "fs";

const interRegPath = join(process.cwd(), "public/Lato-Regular.ttf");
let interReg = fs.readFileSync(interRegPath);

const interBoldPath = join(process.cwd(), "public/Lato-Regular.ttf");
let interBold = fs.readFileSync(interBoldPath);

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "purple",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 96,
            }}
          >
            Roll the dice 🎲
          </div>
          <div
            style={{
              fontSize: 128,
            }}
          >
            Hurray 🎉 ! You won.
          </div>
        </div>
      </div>
    ),
    {
      width: 1528,
      height: 800,
      fonts: [
        {
          name: "Inter",
          data: interReg,
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter",
          data: interBold,
          weight: 800,
          style: "normal",
        },
      ],
    }
  );
}
