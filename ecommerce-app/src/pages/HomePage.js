import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import "./HomePage.css"; // Import your custom CSS file

const HomePage = () => {
  // Featured categories JSON data
  const categories = [
    {
      name: "Electronics & Accessories",
      description: "Explore the latest in electronics including gadgets, smartphones, accessories, and more.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/417025426/WZ/GM/WZ/57183086/e-commerce-electronics-amp-accessories-photography.jpg"
    },
    {
      name: "Clothing & Apparel",
      description: "Browse a wide variety of clothing options, from casual wear to formal attire.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPkPvwO2RiD1aBepTE0ycCbUxXgeUX4yddw&s"
    },
    {
      name: "Home Décor",
      description: "Transform your home with stylish furniture, décor items, lighting, and more.",
      image: "https://cdn.zeebiz.com/sites/default/files/2022/09/20/201274-homedecor.gif"
    },
    {
      name: "Sports & Outdoors",
      description: "Gear up for your next adventure with sports equipment, outdoor gear, fitness accessories.",
      image: "https://thumbs.dreamstime.com/b/sports-equipment-clothing-scattered-gym-sports-equipment-clothing-157854603.jpg"
    }
  ];

  // Featured products JSON data
  const products = [
    {
      name: "Camera",
      description: "Capture stunning photos and videos with the latest digital cameras.",
      price: "599.99 USD",
      image: "https://static.toiimg.com/thumb/msid-113671547,imgsize-1194121,width-400,resizemode-4/113671547.jpg",
      rating: "⭐⭐⭐"
    },
    {
      name: "Laptop",
      description: "High-performance laptops for work, study, and entertainment.",
      price: "899.99 USD",
      image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/white/notebook-g16-7630-nt-white-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3500&hei=2625&qlt=100,1&resMode=sharp2&size=3500,2625&chrss=full&imwidth=5000",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Shirt",
      description: "Comfortable and stylish shirts for every occasion.",
      price: "29.99 USD",
      image: "https://www.jiomart.com/images/product/original/rv09fetprs/baleshwar-man-s-solid-slim-fit-casual-shirt-for-men-shirts-bl-xl-product-images-rv09fetprs-0-202303061154.jpg?im=Resize=(500,630)",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Shoes",
      description: "Step into style with a variety of shoes, from casual sneakers to formal dress shoes.",
      price: "49.99 USD",
      image: "https://rukminim2.flixcart.com/image/850/1250/xif0q/shoe/o/7/u/7-pista-7-roaster-white-original-imagwdw5fgx2hepm.jpeg?q=90&crop=false",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Mobile",
      description: "Stay connected with the latest smartphones featuring cutting-edge technology.",
      price: "699.99 USD",
      image: "https://m.media-amazon.com/images/I/61cDF+Iat-L.jpg",
      rating: "⭐⭐⭐"
    },
    {
      name: "Bag",
      description: "Stylish and functional bags for every need, including backpacks and tote bags.",
      price: "39.99 USD",
      image: "https://www.jiomart.com/images/product/original/rvbio8oyjc/quail-waterproof-bags-for-traveling-office-bag-packs-school-bags-35l-with-3-compartments-trendy-black-product-images-orvbio8oyjc-p605732677-0-202310230923.jpg?im=Resize=(1000,1000)",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      "name": "Books",
      "description": "Explore a wide range of books, from educational to recreational, that cater to different interests and learning needs.",
      "price": "19.99 USD",
      "image": "https://5.imimg.com/data5/SELLER/Default/2021/7/KY/FK/GG/133645048/school-books-500x500.jpg",
      rating: "⭐⭐⭐⭐"
    },
    {
      "name": "Watch",
      "description": "Luxury watches that add elegance and sophistication to your style. Available in various designs and materials.",
      "price": "249.99 USD",
      "image": "https://images-cdn.ubuy.co.in/660c49ac8668c42e8b70193a-olevs-mens-gold-watches-luxury-gold.jpg",
      rating: "⭐⭐⭐"
    }
  ];

  return (
    <div className="bg-black min-h-screen pt-20 m-5">
      {/* Hero Section */}
      <section className="text-white py-10 text-center m-">

        
        <h1 className="text-4xl font-bold mt-4">Welcome to ShopWay</h1>
        <p className="text-lg mb-6">Explore the best products at unbeatable prices. Shop Now!</p>
        <Link
          to="/products"
          className="btn btn-outline-light btn-lg px-6 py-3 mt-4 hover:bg-white hover:text-black transition-all"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Categories */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Featured Categories</h2>
        <p className="text-lg mb-6 text-white">
          Discover a wide variety of categories, each offering unique and quality products tailored to your needs. From electronics to fashion, we have something for everyone.
        </p>
        <Row xs={1} sm={2} md={4} className="g-4">
          {categories.map((category, index) => (
            <Col key={index}>
              <Card className="category-card">
                <Card.Img variant="top" src={category.image} style={{ padding: '10px', objectFit: 'cover', height: '200px' }} />
                <Card.Body>
                  <Card.Title>{category.name}</Card.Title>
                  <Card.Text>{category.description}</Card.Text>
                  <Link
  to="/products"
  state={{ category }}
  className="btn btn-primary"
>
  View All
</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Featured Products */}
<section className="shiva py-16 text-center">
  <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
  <p className="text-lg mb-6">
    Explore our selection of top-rated products, carefully curated to offer you the best quality and value. From cameras to smartphones, find the perfect product for your needs.
  </p>
  <Row xs={1} sm={2} md={4} className="g-4">
    {products.map((product, index) => (
      <Col key={index}>
        <Card className="product-card">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ padding: "10px", objectFit: "cover", height: "200px" }}
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Card.Text>{product.rating}</Card.Text>
            <Link
              to={`/product/${index + 1}`}
              state={{ product }}
              className="btn btn-primary"
            >
              View Product
            </Link>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</section>

      {/* Call to Action */}
      <section className="bg-black text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Limited Time Offer!</h2>
        <p className="text-lg mb-6">
          Get 20% off on your first order. Don't miss out, shop now!
        </p>
        <Link
          to="/products"
          className="btn btn-outline-light btn-lg px-6 py-3 mt-4 hover:bg-white hover:text-black transition-all"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
