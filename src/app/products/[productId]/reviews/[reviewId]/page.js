const ReviewDetail = ({ params }) => {
  return (
    <h2>
      Reviews {params.reviewId} Product {params.productId}
    </h2>
  );
};

export default ReviewDetail;
