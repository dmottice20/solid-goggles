import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/ProductsPage.css';

const Products = () => {
  return (
    <div className='content-container'>
      <div className="products-container">
        <h1>Products</h1>
        {/* Other content of your Products Page */}
        
        <div className="go-connect-link">
          <Link to="/connect" className="go-connect">
            Have I convinced you to reach out yet? <FaArrowRight className="arrow-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;