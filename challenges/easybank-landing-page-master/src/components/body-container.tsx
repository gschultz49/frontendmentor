import React from "react";

const BodyContainer = (Component: any) => {
  const FuncComponent = ({ id }) => {
    return (
      <section id={id} className="body-container">
        <Component />
      </section>
    );
  };

  FuncComponent.getInitialProps = async ctx => {
    // If Page/Component has a `getInitialProps`, we should call it.
    const props =
      Component.getInitialProps && (await Component.getInitialProps(ctx));
    return { ...props };
  };

  return FuncComponent;
};

export default BodyContainer;
