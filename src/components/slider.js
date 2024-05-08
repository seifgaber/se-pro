import './slider.css'
function Slider(){
    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://th.bing.com/th/id/OIP.Pzau5WXTZAhdXRzask-eUQHaFj?rs=1&pid=ImgDetMain" className="d-block w-100 height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.tK32KQmDzwLfoBgNtkcBQQHaHa?rs=1&pid=ImgDetMain" className="d-block w-100 height-500"  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.h-kD2RokUdmafJ5m_Z5nyAHaEO?rs=1&pid=ImgDetMain" className="d-block w-100 height-500" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
}
export default Slider;