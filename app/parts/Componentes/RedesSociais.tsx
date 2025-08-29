import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import redesLista from "../dados/contentRedesBanner";
import Link from "next/link";

interface PropsRedesSociais {
  classColor: string;
  classHoverColor: string;
  className: string;
  classBgColor: string;
}

export default function RedesSociais(props: PropsRedesSociais) {
  const iconColor = props.classColor;
  const hoverColor = props.classHoverColor;
  const name = props.className;
  const bgColor = props.classBgColor;

  return (
    <div className={` ${iconColor} ${name}  `}>
      {redesLista.map((singleLista)  => (
        <div key={singleLista.link}  >
          <Link href={singleLista.link} target="_blank" >
            <FontAwesomeIcon
              icon={singleLista.icon}
              className={`  md:w-4 md:h-4 lg:w-6 lg:h-6  ${hoverColor} ${bgColor} `}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
