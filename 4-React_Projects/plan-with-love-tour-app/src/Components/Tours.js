import Card from "./Card";
function Tours({ tours, removeTours }) {
  return (
    <div className="container">
      <div >
        <h2 className="title"> Plan with love</h2>
      </div>

      <div className="cards">
        {
            tours.map((tour) => {
            return <Card key={tour.id} {...tour} removeTours={removeTours}></Card>;
           })
        }
      </div>

    </div>
  );
}

export default Tours;
