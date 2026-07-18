import React from 'react'

const PrizePool = () => {
    return (
        <div className='container'>
            <p className='head'>2026 SEASON</p>
            <h1 className='heading h4 pb-2 mb-4 text-danger border-bottom border-danger'>PrizePool</h1>
            <p className='text-white'>Complete for significant price across both championship categories.Top Teams takehome majorreword with prixe amounts mentioned in russian rubles (rub). </p>

            <div>
                <div className="row">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card border border-warning bg-black">
                            <div className="card-body">
                                <h5 className='icon'><i className="bi bi-trophy"></i></h5>
                                <h5 className="card-title text-center text-warning">1st Prize </h5>
                                <p className="card-text text-center fw-bold text-warning">30,00,000</p>
                                <p className="card-text text-center text-warning ">RUSSIAN RUBLES</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 m-0">
                        <div className="card border border-white bg-black">
                            <div className="card-body">
                                <h5 className='icon'><i className="bi bi-award"></i></h5>
                                <h5 className="card-title text-center text-white">2nd Prize </h5>
                                <p className="card-text text-center fw-bold text-white">20,00,000</p>
                                <p className="card-text text-center text-white ">RUSSIAN RUBLES</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card border border-warning-subtle bg-black">
                            <div className="card-body">
                                <h5 className='icon'><i className="bi bi-award"></i></h5>
                                <h5 className="card-title text-center text-warning">3rd Prize </h5>
                                <p className="card-text text-center fw-bold text-warning">10,00,000</p>
                                <p className="card-text text-center text-warning">RUSSIAN RUBLES</p>
                            </div>
                        </div>
                    </div>

                    <div className='container m-2'>
                        <h2 className="p-3  bg-opacity-10 border border-danger border rounded-end text-white"><i className="bi bi-bookmark-fill m-0"></i>TOTAL PRIZE FUND</h2>
                    </div>

                    <div>
                        <div className="container m-2">
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className='text-white '><i className="bi bi-bookmark-fill m-0"></i>TROPHIES & MEDALS</p>
                                </div>
                                <div className="col-sm-3">
                                    <p className='text-white icon'><i className="bi bi-globe-europe-africa-fill"></i> GLOBAL RECOGINITION</p>
                                </div>
                                <div className="col-sm-3">
                                    <p className='text-white icon'> <i class="bi bi-airplane"></i>INTERNATIONAL OPPORTUNITIES</p>
                                </div>
                                <div className="col-sm-3">
                                    <p className='text-white'><i class="bi bi-patch-check"></i>CERTFICATES</p>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PrizePool