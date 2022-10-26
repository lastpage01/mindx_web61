/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { connect } from "react-redux";
import React, { Component} from "react";
import { retrieveProducts, updateProduct } from "../../actions/products";
import productServices from "../../services/product.services";
import { Link } from "react-router-dom";

class Products extends Component {
  item_pro;
  constructor(props) {
    super(props);
    this.handleFavourite = this.handleFavourite.bind(this);
    this.getProductId = this.getProductId.bind(this);
    this.updateProductFavourite = this.updateProductFavourite.bind(this);
    // this.setStateProduct = this.setStateProduct.bind(this);
    this.state = {
      currentProduct: {
        _id: null,
        Name: "",
        Id_Category: "",
        Price: null,
        Promotion: null,
        Favourite: null,
        Img: "",
      },
    };
  }
  componentDidMount() {
    console.log("list did mount");
    this.props.retrieveProducts();
  }

  handleFavourite = (e) => {
    // e.target.style.color = "red";

    // const Favourite = Number(e.target.getAttribute("data-favourite")) + 1;

    // let pro = this.state.currentProduct;
    // pro.Favourite = Favourite;
    // this.setState({
    //   currentProduct: pro,
    // });
    this.updateProductFavourite(e.target.getAttribute("data"));
  };

  // setStateProduct = (id) => {
  //   // const id = e.target.getAttribute("data");
  //   // this.getProductId(id);
  //   // cho nay e muon lmj the
  // };

  getProductId = (id) => {
    productServices
      .get(id)
      .then((response) => {
          this.setState({
            currentProduct: response.data,
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  updateProductFavourite = (id) => {
    const product = {
      
        "Name": "aaaaa ",
        "Id_Category": "001",
        "Price": 940000,
        "Favourite": 19,
        "Img": "AoKhoac_1.jpg",
        "Promotion": 17
    
    };
console.log(123);
    this.props
      .updateProduct(id, product)
      .then((response) => {
        console.log(response);
        // this.setState({ message: "The tutorial was updated successfully!" });
        // em đang thử update luôn cái bản ghi đấy mà vẫn k dk

      })
      .catch((e) => {
        console.log(e);
      });
  };
  render() {
    const { products } = this.props;
    return (
      <div className="row">
        {products.length > 0
          ? products.map((product, index) => {
              return (
                <div key={index} className="col-sm-6 col-md-6 col-lg-4 ">
                  <div className="product">
                    <a href="#" className="img-prod">
                      <img
                        className="img-fluid"
                        src={`img/${product.Img}`}
                        alt={`${product.Img}`}
                      />
                      <span className="status">{product.Promotion}%</span>
                      <div className="overlay"></div>
                    </a>
                    <div className="text py-3 px-3">
                      <h3>
                        <a href="#">{product.Name}</a>
                      </h3>
                      <div className="d-flex">
                        <div className="pricing">
                          <p className="price">
                            <span className="mr-2 price-dc">
                              {product.Price}
                            </span>
                            <span className="price-sale">
                              {product.Price -
                                (product.Price * product.Promotion) / 100}
                            </span>
                          </p>
                        </div>
                        <div className="rating">
                          <p className="text-right">
                            <i
                              className="material-icons"
                              data-favourite={product.Favourite} 
                              data={product._id}
                              onClick={this.handleFavourite} // nay đúng kh em// vâng ạ e
                              style={{ cursor: "pointer" }}
                            >
                              favorite_border 12333
                            </i>
                            {/* // cái trái tym kìa anh oke :D */}
                          </p>
                        </div>
                      </div>
                      <p className="bottom-area d-flex px-3">
                        <Link
                          to={`/shop/${product._id}`}  // em muốn nhấn vào link thì nó truyền id vào sau , oke, thu xem em
                          // ơ hôm trước em làm như này luôn mà bị lỗi sao hôm nay lại đk
                          // e có nhầm `` vs '' kh à nhỉ thế a xem em cái uodate với ạ
                          // cho
                          className="add-to-cart text-center py-2 mr-1"
                          data={product._id}
                          // onMouseDown={this.setStateProduct}
                          // onMouseUp={this.setStateProduct}
                          // onClick={() => this.setStateProduct(product._id)}
                        >
                          Add to cart +
                        </Link>
                        {/* <a href="#" className="buy-now text-center py-2">
                          Buy now
                          <span>
                            <i className="ion-ios-cart ml-1"></i>
                          </span>
                        </a> */}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          : "Not found any item"}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, { retrieveProducts, updateProduct })(
  Products
);
