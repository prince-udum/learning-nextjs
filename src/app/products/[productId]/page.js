const SingleProduct = ({ params }) => {
  return (
    <div>
      <h2>This is single product page</h2>
      <p>product {params.productId} details</p>
    </div>
  );
};

export default SingleProduct;
