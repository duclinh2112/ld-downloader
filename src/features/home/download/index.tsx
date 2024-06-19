import { IVideoInfo } from "@/utils/interfaces/IVideoInfo";
import Image from "next/image";

type DownloadVideoInfoProps = {
  data: IVideoInfo;
  setData: (value: IVideoInfo | null) => void;
};

const DownloadVideoInfo = ({ data, setData }: DownloadVideoInfoProps) => {
  const handleDownloadVideo = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.substring(url.lastIndexOf("/") + 1);
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="w-full flex mx-[-15px]">
          <div className="w-[33.33%] px-[15px]">
            <div className="text-center">
              <p>{data.author.nickname}</p>
              <div className="relative w-full h-[250px] mt-6">
                <Image
                  src={data.thumbnail.originCover}
                  alt={data.author.nickname}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <div className="w-[66.66%] px-[15px]">
            <div>
              <h1>Thông tin tải xuống</h1>
              <p>
                Các tệp tải xuống, chúng thường được lưu vào thư mục tải xuống
                bạn đã làm mặc định. Trình duyệt của bạn thường đặt thư mục này
                cho bạn. Trong cài đặt trình duyệt, bạn có thể thay đổi và chọn
                thủ công thư mục đích cho video đã tải xuống của mình
              </p>
              <div className="flex flex-col items-start gap-4 mt-8">
                <button
                  className="w-auto h-[45px] bg-primary rounded-lg text-white px-4"
                  onClick={() => handleDownloadVideo(data.video.url)}
                >
                  Download Video
                </button>
                <button
                  className="w-auto h-[45px] bg-primary rounded-lg text-white px-4"
                  onClick={() => handleDownloadVideo(data.video.urlWithLogo)}
                >
                  Download Video With Logo
                </button>
                <button
                  className="w-auto h-[45px] bg-primary rounded-lg text-white px-4"
                  onClick={() => handleDownloadVideo(data.music.playUrl)}
                >
                  Download Audio
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <button
            className="w-auto h-[45px] bg-white rounded-lg text-primary px-4 border-solid border-primary border"
            onClick={() => setData(null)}
          >
            Download Video Khác
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadVideoInfo;
