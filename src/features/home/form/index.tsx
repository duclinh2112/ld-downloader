import { ChangeEvent } from "react";

type FormDownloadProps = {
  setUrlVideo: (value: string) => void;
  onDownloadVideo: () => void;
};

const FormDownload = ({ setUrlVideo, onDownloadVideo }: FormDownloadProps) => {
  const handleOnChangeInput = (e: string) => {
    if (e) {
      setUrlVideo(e);
    }
  };

  return (
    <div className="w-full py-12 bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-8 text-white">
          <h2 className="text-[45px] font-bold max-md:text-[24px]">
            Trình tải xuống video LD
          </h2>
          <p className="text-[28px] font-medium max-md:text-[18px]">
            Tải xuống video tiktok, douyin trên LD trực tuyến
          </p>
        </div>
        <div className="w-full flex items-start max-md:px-2 max-md:flex-col max-md:gap-3">
          <input
            type="text"
            className="w-full h-[49px] px-5 flex-1 max-md:flex-none bg-[rgba(255,255,255,.2)] rounded-s-md outline-none border-none text-[18px] text-white placeholder-white placeholder-opacity-70 max-md:rounded-sm"
            placeholder="Dán liên kết của bạn ở đây"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleOnChangeInput(e.target.value)
            }
          />
          <button
            className="w-[191px] h-[49px] flex items-center justify-center rounded-e-md bg-white text-primary max-md:w-full max-md:rounded-sm"
            onClick={onDownloadVideo}
          >
            Tải Xuống
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormDownload;
