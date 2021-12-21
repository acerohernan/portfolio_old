import { FaReact as ReactIcon } from "react-icons/fa";
import {
  SiRedux as Redux,
  SiStyledcomponents as Styled,
  SiFirebase as Firebase,
} from "react-icons/si";
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
    name: "Firebase",
    icon: () => <Firebase />,
  },
  {
    name: "CSS",
    icon: () => <CSS />,
  },
];

export default icons;
