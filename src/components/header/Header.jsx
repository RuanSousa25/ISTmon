import HeaderLink from "./HeaderLink";
import "./Header.css";
import {
  FaBook,
  FaHouse,
  FaSchool,
  FaSpaghettiMonsterFlying,
} from "react-icons/fa6";
export default function Header() {
  return (
    <header>
      <span>
        <h2 className="title">ISTmon</h2>
        <p className="subtitle">
          Nós <strong>NÃO</strong> temos que pegar!
        </p>
      </span>
      <nav>
        <HeaderLink path="/" Icon={FaHouse} color="#de0a26">
          Página Inicial
        </HeaderLink>
        <HeaderLink path="/classes" Icon={FaSchool} color="#ee6b2f">
          Aulas
        </HeaderLink>
        <HeaderLink path="/activities" Icon={FaBook} color="#e6bc2f">
          Atividades
        </HeaderLink>
        <HeaderLink
          path="/catalog"
          Icon={FaSpaghettiMonsterFlying}
          color="#4dad5b"
        >
          Catálogo
        </HeaderLink>
      </nav>
    </header>
  );
}
