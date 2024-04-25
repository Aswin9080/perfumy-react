//product
import one from "../images/one.jpg"
import two from "../images/two.jpg"
import three from "../images/three.jpg"


function Product() {
  return (
    <div className='productitem'>
      <div className="product1">
        <img src={one} alt='one'></img>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>

      <div className="product1">
        <img src={two} alt='two'></img>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>

      <div className="product1">
        <img src={three} alt='three'></img>
        <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
      </div>

    </div>
  )
}
export default Product