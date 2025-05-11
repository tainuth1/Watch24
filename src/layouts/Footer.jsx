import React from "react";

const Footer = () => {
  return (
      <div className="border-t py-6 md:py-0 mt-8">
        <div className="w-[1300px] m-auto flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with data from{" "}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              TMDB
            </a>
            . All movie information and images © their respective owners.
          </p>
        </div>
      </div>
  );
};

export default Footer;
