import {QUERY_ALL_PRODUCTS} from "../../utils/queries"
import { useQuery } from "@apollo/client"
function Item() {
    const {data,loading} =useQuery(QUERY_ALL_PRODUCTS)
    const products = data?.products||[]
    console.log(products)
    
    return (
        <section class="shop_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Latest Products
        </h2>
      </div>
      <div class="row">
        {loading?"loading":products.map(product=>{
            return(
                <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="box">
                  <a href="">
                    <div class="img-box">
                      <img src={"images/"+product.image} alt=""/>
                    </div>
                    <div class="detail-box">
                      <h6>
                        {product.name}
                      </h6>
                      <h6>
                        Price
                        <span>
                          ${product.price}
                        </span>
                      </h6>
                    </div>
                    <div class="new">
                      <span>
                        New
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            )
        })}
      
 
      </div>
      <div class="btn-box">
        <a href="">
          View All Products
        </a>
      </div>
    </div>
  </section>
    )
}
export default Item