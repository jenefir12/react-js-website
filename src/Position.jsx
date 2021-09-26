import React,{useState} from 'react';
import Vac from './Vac';

const Position = () => {
    const[vac,setVac] = useState(Vac);
    return (
        <>
        <h3 className="text-center mt-5 pt-4">Our Positions</h3>
        <div className="container">
            <div className="row mt-5">
                {
                    vac.map((curElem) => {
                        const{id,title,des,button,image} = curElem;
                        return(
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12" key={id}>
                                <div className="card text-center">
                                    <img src={image} className="card-img-top" alt="image"/>
                                    <div className="card-body pt-3">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">{des}</p>
                                        <a href="#" className="btn btn-outline-primary">{button}</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>

        </div>
        </>
    )
}

export default Position
