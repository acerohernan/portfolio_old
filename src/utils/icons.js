import { FaReact as ReactIcon, FaFigma as Figma } from "react-icons/fa";
import { SiRedux as Redux, SiStyledcomponents as Styled } from "react-icons/si";
import { IoLogoCss3 as CSS } from "react-icons/io";

const icons = [
  {
    name: "React",
    icon: () => <ReactIcon />,
  },
  {
    name: "Redux",
    icon: () => <Redux />,
  },
  {
    name: "Styled-components",
    icon: () => <Styled />,
  },
  {
    name: "CSS",
    icon: () => <CSS />,
  },
  {
    name: "Figma",
    icon: () => <Figma />,
  },
];

export default icons;
