
import Navbar from "./constructor/Navbar.js"
import Search from "./constructor/Search.js"
import Product from "./constructor/product.js"
import About from "./constructor/About.js"
import Fotter from "./constructor/Fotter.js"

function APP() {
    return(
    <div>
        <Navbar></Navbar>
        <Search></Search>
        <Product></Product>
        <About></About>
        <Fotter></Fotter>
    </div>
    )
}

export default APP