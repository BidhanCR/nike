import PopularProductCard from "../components/PopularProductCard"
import {products} from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin font-bold text-4xl">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg font-montserrat mt-2 text-slate-gray">Experience top-notch quality and style with our sough-after selection. Discover a world of comfort, design and value</p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product)=> (
          <PopularProductCard key={"product.name"} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts