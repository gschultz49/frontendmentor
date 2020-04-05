import Button from "./button";
import BodyContainer from "./body-container";
import { getImage } from "../../../../../services/easybank/easybank-api-utils";

const Navigation = props => {
  const logoImageSource = getImage("logo.svg");
  return (
    <div className="flex items-center">
      <div className="flex-1 py-6">
        <img src={logoImageSource} />
      </div>

      <div className="flex-1 text-center px-4 py-2 m-2">
        <section id="sub-navigation" className="flex justify-between">
          <a className="py-3" href="/">
            Home
          </a>
          <a className="py-3" href="/">
            About
          </a>
          <a className="py-3" href="/">
            Contact
          </a>
          <a className="py-3" href="/">
            Blog
          </a>
          <a className="py-3" href="/">
            Careers
          </a>
        </section>
      </div>
      <div className="flex-1 px-4 py-3 m-2">
        <section className="flex justify-end">
          <Button label={"Request Invite"} />
        </section>
      </div>
      <style jsx>{`
        #sub-navigation > a {
          color: var(--Grayish-Blue);
          font-weight: var(--main-font-weight);
          font-size: var(--sub-navigation-font-size);
        }

        #navigation-container {
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default BodyContainer(Navigation);
