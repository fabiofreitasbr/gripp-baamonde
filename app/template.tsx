import Footer from "./parts/estrutura/Footer";
import Menu from "./parts/estrutura/menu";

export default function Template({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <Menu />
            {children}
            <Footer />
        </>
    )
}