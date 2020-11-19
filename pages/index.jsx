import Layout from "../components/layout";
import Hero from "../components/ui/hero";
import { H2 } from "../components/ui/heading";
import styled from "styled-components";

const p = `font-light text-white tracking-wide`;

export default function Home() {
  return (
    <Layout seo={{ title: `WOP | Digital Agency` }}>
      <div id='bg' className='pt-32'>
        <main
          className='relative pt-10 pb-8 flex box'
          style={{ minHeight: "calc(64vh - 7rem)" }}
        >
          <section>
            <Hero>Designing digital products is never easy. We can help.</Hero>
          </section>
        </main>
      </div>
      <section className='bg-blue-600 '>
        <div className='box max-w-5xl mx-auto gap-6 grid '>
          <H2 className='text-3xl text-white leading-8 font-bold tracking-tighter mb-4'>
            We bring 11+ years of practice to help you navigate the complexities
            of designing, building, and scaling the right service for your
            audience.
          </H2>
          <p className={`${p}`}>
            <span className='font-bold'>Enterprise clients</span> work with us
            to augment their internal resources, taking advantage of our outside
            perspective and “drop-in” product expertise.
          </p>
          <p className={`${p}`}>
            <span className='font-bold'>Scale-ups</span> partner with us to
            validate their products and improve their user experience, making
            sure they're able to scale with growing needs.
          </p>
          <p className={`${p}`}>
            We'll provide your team with tried and tested processes that
            guarantee quality and speed to market. The biggest benefit? From
            enterprise to scale-ups, we get your product right the first time.
          </p>
        </div>
      </section>
    </Layout>
  );
}
