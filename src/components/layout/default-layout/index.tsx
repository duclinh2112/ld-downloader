import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactNode } from "react";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="w-full h-full flex-1 max-md:h-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
