const Element = ({
  image, nom, description,
}) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border-2 border-red-500">
    <h1 className="text-center font-bold mt-2">{nom}</h1>
    <img src={`images/${image}`} />
    <p className="text-justify m-3.5">{description}</p>
  </div>
);

export default Element;
