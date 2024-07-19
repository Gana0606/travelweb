const Footer = () => {
  return (
      <div className="flex sm:justify-between justify-center px-20 py-10 bg-slate-950">
        <p className="text-white lg:block ">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
  );
};

export default Footer;