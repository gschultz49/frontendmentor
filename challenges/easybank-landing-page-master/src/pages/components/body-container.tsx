import React from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

const BodyContainer = (Component: any) => props => {
  return (
    <section id={props.id} className="body-container">
      <Component {...props} />
    </section>
  );
};

// const hoistStatics = higherOrderComponent => BaseComponent => {
//   const NewComponent = higherOrderComponent(BaseComponent);
//   hoistNonReactStatics(NewComponent, BaseComponent);
//   return NewComponent;
// };
export default BodyContainer;
