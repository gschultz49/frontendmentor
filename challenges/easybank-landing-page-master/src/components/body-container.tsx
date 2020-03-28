import React from "react";

interface id {
  id: string;
}

const BodyContainer = (Component: React.FC<id>) => ({ id }: id) => {
  return (
    <section id={id} className="body-container">
      <Component id={id} />
    </section>
  );
};

export default BodyContainer;
