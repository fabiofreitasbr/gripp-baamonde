import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ContentLinks from "./contentLinks";

const redesLista = [
    {
        title: ContentLinks.instagramShow,
        icon: faInstagram,
        link: ContentLinks.instagram,
    },
    {
        title: ContentLinks.facebookShow,
        icon: faFacebookSquare,
        link: ContentLinks.facebook,
    },
    {
        title: ContentLinks.address1,
        icon: faLocationDot,
        link: ContentLinks.maps,
    },
];
export default redesLista;
