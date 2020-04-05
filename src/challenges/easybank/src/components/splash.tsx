import Button from "./button";
import { getImage } from "../../../../services/easybank/easybank-api-utils";

const Splash = () => {
  return (
    <section id="splash" className="flex">
      <>
        <LeftSplash />
        <RightSplash />
      </>
      <style jsx>{`
        #splash {
          padding-left: var(--main-side-margins);
          background-color: var(--Very-Light-Gray);
        }
      `}</style>
    </section>
  );
};

const LeftSplash = () => {
  return (
    <section id="splash-left" className="w-7/12 py-32 align-middle">
      <h3> Next generation </h3>
      <h3> digital banking</h3>
      <p className="py-8 pr-20">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <section>
        <Button label={"Request Invite"} />
      </section>
      <style jsx>
        {`
          #splash-left > h3 {
            font-size: calc(var(--main-font-size) * 3);
            line-height: calc(var(--main-font-size) * 4);
          }
          #splash-left > p {
            font-size: calc(var(--main-font-size) * 1.25);
            color: var(--Grayish-Blue);
          }
        `}
      </style>
    </section>
  );
};

const RightSplash = () => {
  const mockupImageSrc = getImage("image-mockups.png");
  const backgroundIntroImageSrc = getImage("bg-intro-desktop.svg");
  return (
    <section id="splash-right" className="w-5/12">
      <img id="img-foreground" src={mockupImageSrc}></img>
      <style jsx>{`
        #splash-right {
          width: 70%;
          position: relative;
          background: url(${backgroundIntroImageSrc});
          background-position: -50px -205px;
          background-size: 62em;
          background-repeat: no-repeat;
          padding-bottom: 30em;
          overflow: hidden;
        }

        #img-foreground {
          position: absolute;
          top: -80px;
          -webkit-transform: translateX(100px);
          transform: translateX(165px) scale(1.15);
          width: 85%;
        }
        #img-foreground-container {
          position: relative;
        }
      `}</style>
    </section>
  );
};

export default Splash;
