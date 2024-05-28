import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const { resources } = await cloudinary.v2.api.resources({
      type: "upload",
      prefix: "film-portfolio",
      max_results: 100,
    });

    const images = resources.map((image: any) => ({
      url: image.secure_url,
      width: image.width,
      height: image.height,
      public_id: image.public_id,
    }));

    return NextResponse.json({ images });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
