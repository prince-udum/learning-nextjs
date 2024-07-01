import Link from "next/link";

const Products = () => {
  return (
    <>
      <h1>Product list</h1>
      <p>
        <Link href="/products/1">Product 1</Link>
      </p>
      <p>
        <Link href="/products/2">Product 2</Link>
      </p>
      <p>
        <Link href="/products/3" replace>
          Product 3
        </Link>
      </p>
    </>
  );
};

export default Products;
