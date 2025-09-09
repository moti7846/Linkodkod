import type { PropsWithChildren } from "react";
import Logo from "./application-layout/Logo";
import Slogan from "./application-layout/Slogan";
import "./styles/Layout.css"
import ButtonsNav from "./application-layout/ButtonsNav";

export default function Layout({ children } : PropsWithChildren<{}>) {
    return (
        <>
            <header className='nav-menu'>
                <Logo />
                <ButtonsNav />
                <Slogan />
            </header>
            <main>
                { children }
            </main>
        </>
    )
}
