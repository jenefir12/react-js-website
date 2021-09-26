import React,{useState} from 'react';
import Pdata1 from './Pdata1';
import Pdata2 from './Pdata2';
import {FaLongArrowAltDown} from 'react-icons/fa';

const Process = () => {
    const[p1,setProcess] = useState(Pdata1);
    const[p2,setProcess2] = useState(Pdata2);
    return (
        <>
        <h3 className="text-center mt-5 pt-4">Our Process</h3>
        <p className="text-center my-0">This is how we deliver high quality software to our clients</p>
        <div className="container">
            <div className="row mt-5">
                {
                    p1.map((fElem) => {
                        const{id,image,title,arrow} = fElem;
                        return(
                            <>
                            <div className="col-lg-3 col-md-12 col-sm-12 col-12" key={id}>
                                <img src={image} alt="image" className="img-fluid"/>
                                <h4 className="text-center mt-3">{title}</h4>
                            </div>
                            <div className={`col-lg-1 mx-3 mt-5 fontawesome-style ${arrow}`}>
                            </div>
                            </>
                        );
                    })
                }
            </div>
        </div>
        <div className="container">
            <div className="row mt-5">
                {
                    p2.map((sElem)=>{
                        const{id,image,title,arrow} = sElem;
                        return(
                            <>
                            <div className="col-lg-3 col-md-12 col-sm-12 col-12" key={id}>
                                <img src={image} alt="image" className="img-fluid"/>
                                <h4 className="text-center mt-3">{title}</h4>
                            </div>
                            <div className={`col-lg-1 mx-3 mt-5 fontawesome-style ${arrow}`}>
                            </div>
                            </>
                        );
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Process
