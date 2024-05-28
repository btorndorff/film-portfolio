"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "../types/Image";

const BACKEND_URL = "/api/images";

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
        const processedImages = data.images.map((image: any) => ({
          ...image,
          src: image.url,
          url: undefined,
        }));
        setImages(processedImages);
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
