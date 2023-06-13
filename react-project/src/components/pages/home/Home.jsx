import "./Home.css";
const Home = () => {
  return (
    <main className="section principal">
      <div className="maind-service container-fluid">
        <div className="row nuestra-experiencia">
          <div className="col-sm-10 col-md-8 col-lg-8">
            <h1 className="mb-3 text-uppercase text-lg-center">
              urku extreme mountain tours
            </h1>
            <img
              className="product-image"
              src="https://res.cloudinary.com/dy3sghcyn/image/upload/v1686670284/tour%20Monta%C3%B1a/imagen_qph4zc.jpg"
              alt=""
            />
            <div className="card-body texto-bajo">
              <p className="card-text fs-6 mt-2 text-justify">
                LA MEJOR DESCARGA DE ADRENALINA DE ECUADOR ¡El tour de aventura
                Extreme Ecuador es una descarga de adrenalina de principio a
                fin, repleto de una amplia gama de actividades activas y
                divertidas que a cualquier adicto a la aventura le encantará!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="carusel-principal mb-4">
        {/* Aquí deberías usar un componente de carrusel de React, como react-bootstrap's Carousel */}
      </section>
    </main>
  );
};

export default Home;
