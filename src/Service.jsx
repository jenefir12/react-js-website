import React,{useState} from 'react';
import Servicedata from './Servicedata';

const Service = () => {
    const[items,setItems] = useState(Servicedata);
    return (
        <>
        <h3 className="text-center my-4 mt-5 pt-5">Our Services</h3>
        <div className="container-fluid">
            <div className="row mt-5">
                {
                    items.map((curElement) => {
                        const{id,title,des,image,color} = curElement;
                        return(
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12" key={id} style={color}>
                                <h5 className="text-black text-center pt-4 text-white">{title}</h5>
                                <p className="text-white text-center pt-4">
                                   {des}
                                </p>
                                <img src={image} alt="image" className="img-fluid"/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Service
