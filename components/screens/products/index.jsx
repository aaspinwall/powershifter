import React from "react";
import Section from "../../ui/section";

const Products = () => {
  return (
    <Section>
      <ul className='flex justify-between text-xl font-bold'>
        <li>01</li>
        <li>02</li>
        <li>03</li>
      </ul>
      <h3 className={`text-2xl font-light`}>
        Have you ever wondered what the most effective implementation plan for a
        new rollout would look like? Or lost sleep thinking about the change
        management needed for new process improvements?
      </h3>
    </Section>
  );
};

export default Products;
