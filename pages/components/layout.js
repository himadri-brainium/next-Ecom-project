
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
    return (
            <>
                <Header />
                <main className="container-xl defpadding">
                        {children}</main>
                <Footer/>
            </>
    )
  };
  
  export default Layout;