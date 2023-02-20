import React from "react";

function Home() {
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://png.pngtree.com/png-vector/20190501/ourlarge/pngtree-add-to-cart--icon-design-png-image_1012451.jpg" alt="" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://m.media-amazon.com/images/I/71yzJoE7WlL._SX679_.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                            I-Phone
                    </span>
                    <span>
                            Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button> Add To Cart</button>
                </div>
            </div>
            
        </div>
    )
    
}

export default Home;