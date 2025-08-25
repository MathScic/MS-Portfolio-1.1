import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function About() {
  return (
    <div className="text-center">
      <p className="text-2xl pt-4 text-[#222]">
        Passionné par le développement et la création web. <br />
        Je tente de donner vie à vos projets.
      </p>
      <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center items-center ">
        <button className="text-1xl rounded-full bg-[#FF4500] text-white px-6 py-3 transition duration-300 hover:bg-[#ff7a29] cursor-pointer">
          <Link href="/about">A propos de moi</Link>
        </button>
        <button className="text-1xl rounded-full bg-[#333] text-white px-6 py-3 transition duration-300 hover:bg-[#444] cursor-pointer">
          <Link href="images/CV Intégrateur Web.pdf" download="Mon_CV">
            Télécharger le CV
          </Link>
        </button>
      </div>

      <ul className="space-y-2 text-center flex flex-rows justify-center gap-8 mt-8">
        <li>
          <Link
            href="https://www.linkedin.com/in/mathieu-scicluna-8346482ba/"
            target="_blank"
            className="hover:text-[#FF4500]"
          >
            <FaLinkedin className="inline mr-2 text-2xl" />
          </Link>
        </li>

        <li>
          <Link
            href="https://github.com/MathScic"
            target="_blank"
            className="hover:text-[#FF4500]"
          >
            <FaGithub className="inline mr-2 text-2xl" />
          </Link>
        </li>

        <li>
          <Link
            href="mailto:scicluna.mathieu@hotmail.fr"
            target="_blank"
            className="hover:text-[#FF4500]"
          >
            <MdEmail className="inline mr-2 text-2xl" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
