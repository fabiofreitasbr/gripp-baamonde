import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
    title: "Gripp & Baamonde",
    description: "A maior Clíniccca de estética da região - Com cobertura completa de estética e cirúrgia com total qualidade de atendimento e procedimentos certificados.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="pt-br">
            <body className={`${poppins.className} antialiased overflow-x-hidden`}>
                {children}
            </body>
        </html>
    );
}
