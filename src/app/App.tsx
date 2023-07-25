import { Link, Route, Routes } from "react-router-dom"
import "./styles/index.scss"
import { Suspense } from "react"
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib"

const App = () => {
    const {theme, toggleTheme} = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPage/>}/>
                    <Route path={"/"} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App