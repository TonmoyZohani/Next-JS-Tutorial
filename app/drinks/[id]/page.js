const SinglePageDrink = ({ params }) => {
  console.log(params);

  return <div>{params.id}</div>;
};

export default SinglePageDrink;
