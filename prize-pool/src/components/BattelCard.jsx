import React from 'react'

const BattelCard = () => {

    return (
        <div className='container'>
            <div className='row'>
            <div className='container m-1 border-0 '>
            <p className='head text-center text-white'>Competition Programs</p>
            <h1 className='heading text-center h4 pb-2 mb-4 text-danger border-bottom border-danger p-2 '>BATTLE CATEGORIES</h1>
            <div class="row">
                <div className="col-md-6  border border-danger border rounded-end m-1 w-25">
                    <div className="card bg-black">
                        <h5 className='icon text-danger'><i className="bi bi-robot"></i>Mini Category
                        <p className=' text-white'>Robat Battle </p></h5>
                        {/* <p className='text-danger'></p> */}
                        
                        <div className="card-body">
                            <div className='container '>
                                <div className='row '>
                                    <div className='col-md-6 text-white'>
                                        <p>1-5 Members</p>
                                    </div>
                                    <div className='col-md-6 text-white'>
                                        <p>Upto to 110kg</p>
                                    </div>

                                    <div>
                                        <p className='text-white'>
                                            150 x 150x200 cm
                                        </p>
                                    </div>
                                    <p className='text-white'>Teams design powerful combat robats equipped with weapons , armor and control systems to compete in high-intensity arena battles.</p>
                                    <button className=''>RULEBOX</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6  border border-danger border rounded-end m-1 w-25">
                    <div className="card bg-black">
                        <h5 className='icon text-danger'><i className="bi bi-mortarboard"></i>JUNIOR Category
                        <p className=' text-white'>Mini Robat Battle </p></h5>
                        <div className="card-body">
                            <div className='container'>
                                <div className='row '>
                                    <div className='col-md-6'>
                                        <p className='text-white'>1-5 Members</p>
                                    </div>
                                    <div className='col-md-6 text-white'>
                                        <p>Upto to 110kg</p>
                                    </div>

                                    <div>
                                        <p className='text-white'>
                                            150 x 150x200 cm
                                        </p>
                                    </div>
                                    <p className='text-white'>Teams design powerful combat robats equipped with weapons , armor and control systems to compete in high-intensity arena battles.</p>
                                    <button className='btn-sm  text-text-white'>RULEBOX</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>


    )
}

export default BattelCard