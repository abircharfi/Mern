import React, { useEffect, useState } from 'react';
import Form from './Form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Editproduct = (props) => {
  const { products, setProducts, onProductUpdate } = props;
  const { id } = useParams();
  const nav = useNavigate();

  const [productTitle, setProductTitle] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState('');

  useEffect(() => {
    const product = products.find((product) => product._id === id);

    // Update the state with the product values
    if (product) {
      setProductTitle(product.title);
      setProductPrice(product.price);
      setProductDescription(product.description);
    }
  }, [products, id]);

  const handleSubmission = (submittedData) => {
    console.log(id);

    axios
      .patch('http://localhost:5000/api/products/' + id, submittedData)
      .then((res) => {
        console.log(res.data.result);

        // Find the index of the product in the local state
        const indexToUpdate = products.findIndex((product) => product._id === id);

        if (indexToUpdate !== -1) {
          console.log('okkkkkkkkkkkkkkk');
          // Update the product at the found index
          const updatedProducts = [...products];
          updatedProducts[indexToUpdate].title = submittedData.title;
          updatedProducts[indexToUpdate].price = submittedData.price;
          updatedProducts[indexToUpdate].description = submittedData.description;
          setProducts(updatedProducts);
        }

        onProductUpdate();
        nav('/products');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Edit the Product</h1>
      <Form
        onSubmission={handleSubmission}
        initialTitle={productTitle}
        initialPrice={productPrice}
        initialDescription={productDescription}
      ></Form>
    </div>
  );
};

export default Editproduct;