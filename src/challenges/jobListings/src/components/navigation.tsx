import { getImage } from "../../../../services/joblistings/joblistings-api-utils";

const Navigation = () => {
  const backgroundLogoImageSource = getImage("bg-header-desktop.svg");
  return (
    <div id="background" className="h-40">
      <div id="background-image" className="h-full w-full"></div>
      <style jsx>{`
        #background {
          background-color: var(--Desaturated-Dark-Cyan);
        }
        #background-image {
          background: url(${backgroundLogoImageSource});
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

export default Navigation;
