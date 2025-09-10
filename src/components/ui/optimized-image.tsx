"use client";

import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "quality"> & {
  mobileQuality?: number;
  desktopQuality?: number;
};

export function OptimizedImage({ mobileQuality = 60, desktopQuality = 85, ...rest }: Props) {
  const quality = typeof window !== "undefined" && window.innerWidth < 768 ? mobileQuality : desktopQuality;
  return <Image {...rest} quality={quality} />;
}


