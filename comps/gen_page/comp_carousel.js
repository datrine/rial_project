function Comp_Carousel({}) {
    return <><div id="demo" class="carousel slide" data-ride="carousel">

   {/* <!-- Indicators -->*/}
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>
  
   {/* <!-- The slideshow -->*/}
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="img/1581752970200.jpg" alt="Los Angeles" width="100%" height="400px"/>
      </div>
      <div class="carousel-item">
        <img src="img/1581752970200.jpg" alt="Chicago" width="100%" height="400px"/>
      </div>
      <div class="carousel-item">
        <img src="img/1581752970200.jpg" alt="New York" width="100%" height="400px"/>
      </div>
    </div>
  
    {/*<!-- Left and right controls -->*/}
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a> 
  
  </div>
    </>;
}

export { Comp_Carousel }