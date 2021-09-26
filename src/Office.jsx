import React,{useState} from 'react';
import Off from './Off';

const Office = () => {
    const[office,setOffice] = useState(Off);
    return (
        <> 
        <h3 className="text-center mt-5 pt-4">Our Office</h3>
        <div className="container">
            <div className="row mt-5">
                {
                    office.map((curElem) => {
                        const{id,title,image} = curElem;
                        return(
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12" key={id}>
                                <div class="card mt-5 text-center">
                                    <img src={image} class="card-img-top" alt="image"/>
                                    <div class="card-body">
                                        <h3 class="card-text">{title}</h3>
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

export default Office
