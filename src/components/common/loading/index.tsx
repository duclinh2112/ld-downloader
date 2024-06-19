import IconLoading from "@/utils/icons/IconLoading";

const Loading = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-white flex items-center justify-center z-10">
      <div className="text-primary">
        <IconLoading width="48px" color="currentColor" />
      </div>
    </div>
  );
};

export default Loading;
