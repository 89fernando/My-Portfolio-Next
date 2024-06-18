import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaMail } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
const socials = [
  {
    name: "Github",
    path: "https://github.com/89soares",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/89soares/",
    icon: <FaLinkedin />,
  },
  {
    name: "Twitter",
    path: "https://twitter.com/feernando",
    icon: <FaTwitter />,
  },
  {
    name: "Medium",
    path: "https://medium.com/@89fernando",
    icon: <SiMedium />,
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
