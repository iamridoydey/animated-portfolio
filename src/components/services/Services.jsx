import { useRef } from "react";
import "./services.scss";
import { motion} from "framer-motion";

const Services = () => {
  const variants = {
    initial: { x: -500, y: 100, opacity: 0 },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.5 },
    },
  };


  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView={"animate"}
    >
      <motion.div className="text_container" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="title_container" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b
              whileHover={{
                color: "orange",
                transition: { delay: .2 },
              }}
            >
              Unique
            </motion.b>{" "}
            Ideas
          </h1>
        </div>

        <div className="title">
          <h1>
            <motion.b
              whileHover={{
                color: "orange",
                transition: { delay: .2 },
              }}
            >
              For Your
            </motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="list_container" variants={variants}>
        <motion.div
          className="list"
          whileHover={{
            backgroundColor: "rgb(169, 169, 169)", // darkgray in RGB
            color: "rgb(255, 255, 255)", // yellow in RGB
          }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis est
            atque, culpa alias modi recusandae sequi? Odit quia animi, itaque
            libero error fuga explicabo obcaecati quibusdam nemo facere! Aut,
            ab.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="list"
          whileHover={{
            backgroundColor: "rgb(169, 169, 169)", // darkgray in RGB
            color: "rgb(255, 255, 255)", // yellow in RGB
          }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis est
            atque, culpa alias modi recusandae sequi? Odit quia animi, itaque
            libero error fuga explicabo obcaecati quibusdam nemo facere! Aut,
            ab.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="list"
          whileHover={{
            backgroundColor: "rgb(169, 169, 169)", // darkgray in RGB
            color: "rgb(255, 255, 255)", // yellow in RGB
          }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis est
            atque, culpa alias modi recusandae sequi? Odit quia animi, itaque
            libero error fuga explicabo obcaecati quibusdam nemo facere! Aut,
            ab.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="list"
          whileHover={{
            backgroundColor: "rgb(169, 169, 169)", // darkgray in RGB
            color: "rgb(255, 255, 255)", // yellow in RGB
          }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis est
            atque, culpa alias modi recusandae sequi? Odit quia animi, itaque
            libero error fuga explicabo obcaecati quibusdam nemo facere! Aut,
            ab.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
