import Button from "./button";
import BodyContainer from "./body-container";

const Navigation = props => {
  return (
    <div className="flex items-center">
      <div className="flex-1 py-6">
        <img src={"/images/logo.svg"} />
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
    </div>
  );
};

export default BodyContainer(Navigation);
