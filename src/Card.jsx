import React from 'react'

const Card = ({items}) => {
    return (
        <>
        {
            items.map((curElem)=>{
                const{id,name,title,des,img} = curElem;
                return(
                <div className="container-fluid" key={id}>
                    <div className="row">
                    <div className="col-lg-4">
                        <div className="card" style={{width:'18rem'}}>
                        <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{des}</p>
                            <a href="#" className="btn btn-primary">More</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                );
            })
            }
        </>
    )
}

export default Card
