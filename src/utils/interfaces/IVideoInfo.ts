export interface IVideoInfo {
  author: {
    id: string;
    nickname: string;
    shortId?: string;
    signature?: string;
    uniqueId?: string;
    avatarThumb?: string;
    avatarMedium?: string;
    avatarLarger?: string;
  };
  music: {
    id: string;
    authorName: string;
    title: string;
    playUrl: string;
    duration: number;
  };
  slug: string;
  thumbnail: {
    cover: string;
    dynamicCover: string;
    originCover: string;
    zoomCover: {
      240: string;
      480: string;
      720: string;
      960: string;
    };
  };
  title: string;
  video: {
    url: string;
    urlWithLogo: string;
  };
}
