const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "8gVv6nxq6gY", width: 1080, height: 800, alt: "photo" },
  { id: "Dhmn6ete6g8", width: 1080, height: 1620, alt: "photo" },
  { id: "RkBTPqPEGDo", width: 1080, height: 720, alt: "photo" },
  { id: "Yizrl9N_eDA", width: 1080, height: 721, alt: "photo" },
  { id: "KG3TyFi0iTU", width: 1080, height: 1620, alt: "photo" },
  { id: "Jztmx9yqjBw", width: 1080, height: 607, alt: "photo" },
  { id: "-heLWtuAN3c", width: 1080, height: 608, alt: "photo" },
  { id: "xOigCUcFdA8", width: 1080, height: 720, alt: "photo" },
  { id: "1azAjl8FTnU", width: 1080, height: 1549, alt: "photo" },
  { id: "ALrCdq-ui_Q", width: 1080, height: 720, alt: "photo" },
  { id: "twukN12EN7c", width: 1080, height: 694, alt: "photo" },
  { id: "9UjEyzA6pP4", width: 1080, height: 1620, alt: "photo" },
  { id: "sEXGgun3ZiE", width: 1080, height: 720, alt: "photo" },
  { id: "S-cdwrx-YuQ", width: 1080, height: 1440, alt: "photo" },
  { id: "q-motCAvPBM", width: 1080, height: 1620, alt: "photo" },
  { id: "Xn4L310ztMU", width: 1080, height: 810, alt: "photo" },
  { id: "iMchCC-3_fE", width: 1080, height: 610, alt: "photo" },
  { id: "X48pUOPKf7A", width: 1080, height: 160, alt: "photo" },
  { id: "GbLS6YVXj0U", width: 1080, height: 810, alt: "photo" },
  { id: "9CRd1J1rEOM", width: 1080, height: 720, alt: "photo" },
  { id: "xKhtkhc9HbQ", width: 1080, height: 1440, alt: "photo" },
];

const photos = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  alt: photo.alt,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
      alt: "photo",
    };
  }),
}));

export default photos;
