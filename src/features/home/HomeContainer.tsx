import Loading from "@/components/common/loading";
import { getVideoInfo } from "@/services/video";
import { IVideoInfo } from "@/utils/interfaces/IVideoInfo";
import { useState } from "react";
import DownloadVideoInfo from "./download";
import FormDownload from "./form";

const HomeContainer = () => {
  const [urlVideo, setUrlVideo] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IVideoInfo | null>(null);

  const handleDownloadVideo = async () => {
    const tikTokUrlRegex =
      /^.*https:\/\/(?:m|www|vm)?\.?tiktok\.com\/((?:.*\b(?:(?:usr|v|embed|user|video)\/|\?shareId=|\&item_id=)(\d+))|\w+)/;

    if (!urlVideo) {
      alert("Vui lòng nhập url cần tải");
      return;
    }

    if (!tikTokUrlRegex.test(urlVideo)) {
      alert("Vui lòng nhập url tiktok");
      return;
    }
    setIsLoading(true);
    const res = await getVideoInfo(urlVideo);

    if (res) {
      setIsLoading(false);
      setData(res);
    }

    console.log(res);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="pb-8">
          {!data ? (
            <FormDownload
              setUrlVideo={setUrlVideo}
              onDownloadVideo={handleDownloadVideo}
            />
          ) : (
            <DownloadVideoInfo data={data} setData={setData} />
          )}
        </div>
      )}
    </>
  );
};

export default HomeContainer;
