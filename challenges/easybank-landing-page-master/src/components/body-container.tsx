import React from "react";

const BodyContainer = (Component: any) => props => {
  return (
    <section id={props.id} className="body-container">
      <Component {...props} />
    </section>
  );
};

export default BodyContainer;
