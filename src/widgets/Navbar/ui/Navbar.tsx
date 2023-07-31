import { Link } from "react-router-dom";
import { classNames } from "shared/lib";
import cls from "./Navbar.module.scss"
import {AppLink} from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Main Page</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About Page</AppLink>
        </div>
        
    </div>
)

