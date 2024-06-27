const Docs = ({ params }) => {
  if (params.slug?.length === 2) {
    return (
      <h1>
        viewing docs for features {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>viewing docs for features {params.slug[0]}</h1>;
  }
  return <h1>Docs home page</h1>;
};

export default Docs;
