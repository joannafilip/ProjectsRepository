const Signe = ({ image, nom, description }) => (
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
    <h1>{nom}</h1>
    <img src={`images/${image}`} />
    <p>{description}</p>
  </div>
);
export default Signe;
