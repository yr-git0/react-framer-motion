import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(254, 202, 87)", transition: { duration: 3 } },
};

function App() {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 300], [-360, 360]);
  const gradient = useTransform(
    x,
    [-300, 0, 300],
    [
      "linear-gradient(135deg,#1bebfa,#056eaa)",
      "linear-gradient(135deg,#e09,#d0e)",
      "linear-gradient(135deg,#ffe608,#918701)",
    ]
  );
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log(latest);
  // });

  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotate, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
