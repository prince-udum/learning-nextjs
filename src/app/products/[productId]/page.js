import { Metadata } from "next";

export const generateMetadata = ({ params }) => {
  return {
    title: `Product ${params.productId}`,
  };
};

const SingleProduct = ({ params }) => {
  return (
    <div>
      <h2>This is single product page</h2>
      <p>product {params.productId} details</p>
    </div>
  );
};

export default SingleProduct;
