"use client"

import Header from "../components/Header"
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="w-full">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;