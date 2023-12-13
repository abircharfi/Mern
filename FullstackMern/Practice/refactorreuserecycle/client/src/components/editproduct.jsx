import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from './Form'; // Make sure to import the correct Form component

const Editproduct = (props) => {
  const { products, setProducts, onProductUpdate } = props;
  const { id } = useParams();
  const nav = useNavigate();

  const [editingProduct, setEditingProduct] = useState(null);

useEffect(() => {
  const product = products.find((product) => product._id === id);

 
  if (product) {
    setEditingProduct({
      title: product.title,
      price: product.price,
      description: product.description,
    });
  }
}, [products, id]);

 
  const handleSubmission = (submittedData) => {
    axios
      .patch(`http://localhost:5000/api/products/${id}`, submittedData)
      .then((res) => {
        console.log(res.data.result);

        const indexToUpdate = products.findIndex((product) => product._id === id);

        console.log(indexToUpdate);

        if (indexToUpdate !== -1) {
          console.log('okkkkkkkkkkkkkkk');
          // Update the product at the found index
          const updatedProducts = [...products];
          updatedProducts[indexToUpdate] = submittedData; 
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
        productToEdit={editingProduct}
      />
    </div>
  );
};

export default Editproduct;
