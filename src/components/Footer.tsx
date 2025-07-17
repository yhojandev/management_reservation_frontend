const Footer = () => {
  return (
    <footer className="pc-footer">
      <div className="footer-wrapper container-fluid mx-10">
        <div className="grid grid-cols-12 gap-1.5">
          <div className="col-span-12 sm:col-span-6 my-1">
            <p className="m-0">Desarrolado por...</p>
          </div>
          <div className="col-span-12 sm:col-span-6 my-1">
            <ul className="mb-0 ltr:sm:text-right rtl:sm:text-left *:text-theme-bodycolor dark:*:text-themedark-bodycolor hover:*:text-primary-500 dark:hover:*:text-primary-500">
              <li className="inline-block max-sm:mr-2 sm:ml-2">
                <a href="/">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
