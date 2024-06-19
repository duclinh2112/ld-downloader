const Header = () => {
  return (
    <header>
      <nav className="w-full h-[65px] flex items-center">
        <div className="container mx-auto">
          <a href="/" className="text-[24px] font-semibold">
            <span className="text-primary">LD</span>
            Downloader
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
