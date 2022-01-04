import {
  FaReact as ReactIcon,
  FaFigma as Figma,
  FaSass as SASS,
  FaNodeJs as NodeJS,
} from "react-icons/fa";
import {
  SiRedux as Redux,
  SiStyledcomponents as Styled,
  SiExpress as Express,
  SiMongodb as MongoDB,
} from "react-icons/si";

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
    name: "Figma",
    icon: () => <Figma />,
  },
  {
    name: "SASS",
    icon: () => <SASS />,
  },
  {
    name: "NodeJS",
    icon: () => <NodeJS />,
  },
  {
    name: "Express",
    icon: () => <Express />,
  },
  {
    name: "MongoDB",
    icon: () => <MongoDB />,
  },
];

export default icons;
