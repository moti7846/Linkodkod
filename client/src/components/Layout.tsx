import type { PropsWithChildren } from "react";
import Logo from "./application-layout/Logo";
import Slogan from "./application-layout/Slogan";

export default function Layout({ children } : PropsWithChildren<{}>) {
    return (
        <>
            <header className='nav-menu'>
                <Logo />
                <Slogan />
            </header>
            <main>
                { children }
            </main>
        </>
    )
}
