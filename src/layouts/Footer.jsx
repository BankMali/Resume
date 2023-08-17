import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { MdEmail, MdPhone } from "react-icons/md";
import ButtonIcon from "../components/ButtonIcon";

export default function Footer() {
  return (
    <div className=" px-10 py-10 w-full flex gap-5 justify-center sm:justify-start">
      <a href="mailto: watchira_5@hotmail.com">
        <ButtonIcon>
          <MdEmail />
        </ButtonIcon>
      </a>
      <a href="tel:+66815565528">
        <ButtonIcon>
          <MdPhone />
        </ButtonIcon>
      </a>

      <a href="https://www.linkedin.com/in/watchira/">
        <ButtonIcon>
          <BiLogoLinkedin />
        </ButtonIcon>
      </a>

      <a href="https://www.github.com/BankMali">
        <ButtonIcon>
          <AiFillGithub />
        </ButtonIcon>
      </a>
    </div>
  );
}
