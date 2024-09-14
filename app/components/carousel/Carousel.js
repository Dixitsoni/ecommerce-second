import React from 'react'

function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img style={{ height: 450 }} className="d-inline-block w-100" src="assets/images/lala-jii-ghee-banner-1.webp" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img style={{ height: 450 }} className="d-inline-block w-100" src="assets/images/ghee_banner.webp" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img style={{ height: 450 }} className="d-inline-block w-100" src="assets/images/ghee-banner-one.webp" alt="Third slide" />
                </div>
                <div className="carousel-item px-5 py-2">
                    <img style={{ height: 450 }} className="d-inline-block w-100" src="assets/images/top-10-refined-oil-brands-in-india-with-price-variety-health-demands-in-market-da2129e.webp" alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <img style={{ height: 450 }} className="d-inline-block img-fluid w-100" src="assets/images/simply-better-cold-pressed-oil-banner.jpg" alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <img style={{ height: 450 }} className="d-inline-block w-100" src="assets/images/c290d3c0a07ae8263ad7cf737a3618c2.jpg" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev prev-btn" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon bg-info p-4" aria-hidden="true"></span>
                <span className="sr-only p-4">Previous</span>
            </a>
            <a className="carousel-control-next next-btn" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon bg-info p-4" aria-hidden="true"></span>
                <span className="sr-only p-4">Next</span>
            </a>
        </div>
    )
}

export default Carousel