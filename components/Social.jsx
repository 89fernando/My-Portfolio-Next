import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
const socials = [
  {
    name: "Github",
    path: "https://github.com/89fernando",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/89fernando",
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
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
