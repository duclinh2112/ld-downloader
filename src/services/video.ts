import { get } from "@/utils/libs/axios";

export const getVideoInfo = async (url: string) => {
  const res = await get("getdata", { url });
  return res;
};
