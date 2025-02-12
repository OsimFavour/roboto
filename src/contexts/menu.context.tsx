import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type MenuProps = {
    children: ReactNode
}

type MenuContextType = {
    isMenuOpen: boolean; 
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
    isNavbarOpen: boolean;
    setIsNavbarOpen: Dispatch<SetStateAction<boolean>>;
};


export const MenuContext = createContext<MenuContextType>({
    isMenuOpen: false,
    setIsMenuOpen: () => {},
    isNavbarOpen: false,
    setIsNavbarOpen: () => {}
})


export const MenuProvider: React.FC<MenuProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)

    const value = {
        isMenuOpen,
        setIsMenuOpen,
        isNavbarOpen,
        setIsNavbarOpen
    }

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}