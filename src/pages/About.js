import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      ></motion.div>
      <div className="about">
        <h2> About </h2>
        <article>
          <p>
            Consectetur quis magnis elementum porttitor ac elit suspendisse
            penatibus pulvinar fermentum ad commodo! Pulvinar purus magnis ante
            orci feugiat maecenas eleifend nibh metus rhoncus nullam integer.
            Accumsan pretium, arcu mi sem! Cras molestie eleifend netus
            sollicitudin potenti. Aenean proin lobortis nibh, purus at volutpat
            interdum inceptos velit leo eleifend. Praesent suspendisse fames.
          </p>
          <p>
            Quam urna inceptos, tellus sit nullam fames augue laoreet pretium
            hac tempus. Mi, lacus faucibus vel? Ipsum ultrices egestas magna
            parturient. Imperdiet neque habitasse imperdiet congue ante dictum!
            Faucibus pulvinar sem dictumst et porttitor lorem hac id! Mus magna,
            malesuada placerat volutpat vehicula facilisis cras justo. Dictumst
            quisque cursus platea ipsum per lacus eleifend amet nostra auctor ad
            facilisis. Pulvinar lorem diam senectus adipiscing urna malesuada?
          </p>
          <p>
            Tempor conubia per diam! Curae; quisque interdum risus praesent a!
            Massa fames scelerisque sapien a commodo condimentum. Cursus morbi
            euismod facilisi imperdiet, elementum metus justo est. Vestibulum
            suspendisse, laoreet facilisi! Turpis lorem dis a. Praesent maecenas
            adipiscing per conubia accumsan et vestibulum elit interdum etiam
            lorem non? Vehicula enim sapien congue etiam, ut sem. Nisl cum
            elementum diam, semper nulla. Praesent nam suscipit consequat litora
            interdum dapibus nisl tincidunt venenatis. Mus fames primis
            convallis tempus euismod montes justo justo sodales fringilla
            pellentesque!
          </p>
          <p>
            Lacinia condimentum ullamcorper donec dictumst! Velit sociosqu
            varius netus enim, eros senectus per adipiscing leo. Eleifend mus
            est magna. Est dapibus et nostra, euismod rutrum maecenas inceptos
            praesent. Rutrum sem ullamcorper in per consectetur proin adipiscing
            rutrum fermentum, dapibus rutrum donec? Auctor per sagittis nulla
            dictum sit porta bibendum ullamcorper porttitor magna. Penatibus
            vitae potenti magnis.
          </p>
          <p>
            Fusce viverra risus sollicitudin in sem class nam. Maecenas faucibus
            vulputate est vivamus platea diam imperdiet commodo curae; facilisis
            pulvinar nascetur. Suscipit blandit condimentum viverra lacus
            himenaeos ligula convallis aenean ridiculus. Ultricies habitasse et
            senectus sapien dis adipiscing fusce elit. Viverra non nulla arcu
            suspendisse malesuada tincidunt consectetur erat! Ante tristique
            curae; mattis duis hendrerit penatibus pulvinar mi eu. Curabitur
            eros ut augue praesent. Aptent mus, blandit habitant rhoncus urna
            proin. Et malesuada aptent mattis consequat primis dignissim. Porta
            non, ut scelerisque. Quis vehicula dictum curae; mi semper aliquam
            dui, velit lorem in?
          </p>
        </article>
      </div>
    </>
  );
};

export default About;
