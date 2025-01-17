// import React from 'react'
import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          &copy;{new Date().getFullYear()} All rights reserved
        </p>

        {socials.map((item) => (
          <a
            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            key={item.id}
            target="_blank"
            href={item.url}
          >
            <img src={item.iconUrl} width={16} height={16} alt="icon" />
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Footer;
