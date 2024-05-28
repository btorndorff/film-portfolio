import { useState, useEffect } from "react";
import axios from "axios";

export interface Image {
  url: string;
  width: number;
  height: number;
  public_id: string;
}

const BACKEND_URL = "/api/images"; // Use the Next.js API route

export const useFetchImages = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(BACKEND_URL);
        if (response.status !== 200) {
          throw new Error("Failed to fetch images");
        }
        const data = response.data;
        setImages(data.images);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return { images, loading, error };
};
