import React from "react";

const Section = ({ children }) => {
  return (
    <section>
      <div className='box gap-6 grid'>{children}</div>
    </section>
  );
};

export default Section;
