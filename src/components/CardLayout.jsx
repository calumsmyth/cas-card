import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";

const CardLayout = ({ children }) => {
    return(
        <div className="card">
            <div className="card-header">
                <HamburgerMenu/>
            </div>

            <main className="card-content">
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default CardLayout;