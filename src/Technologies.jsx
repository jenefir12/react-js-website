import React,{useState} from 'react';
import Front from './Front';

const color = {
    border:'1px solid black',
    cursor:'pointer'
}

const Technologies = () => {
    const[front,setFront] = useState(Front);
    const filterItems = (yolo) => {
        const newData = Front.filter((yolo1) => {
            return yolo1.category === yolo;
        });
        setFront(newData);
    }
    const allFilter = () => {
        setFront(Front);
    }
    return (
        <>
        <h3 className="text-center mt-5 pt-4">Our Technologies</h3>
        <div className="container">
            <div className="row mt-5 mb-5 text-center">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 pt-2 bg-success text-white border" style={color}>
                    <h5 className="newColor" onClick={()=>{
                        filterItems('front')
                    }}>Web Front End</h5>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 pt-2 bg-success text-white border" style={color}>
                    <h5 className="newColor" onClick={()=> {
                        filterItems('mob')
                    }}>Mobile</h5>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 pt-2 bg-success text-white border" style={color}>
                    <h5 className="newColor" onClick={allFilter}>All Technologies</h5>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                {
                    front.map((curElement) => {
                        const{id,image,title} = curElement;
                        return(
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12 gy-4" key={id}>
                                <div className="card">
                                    <img src={image} className="card-img-top" alt="image"/>
                                    <h5 className="card-title text-center pt-2">{title}</h5>
                                </div>
                            </div>
                        )
                    })
                }
                {/* <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default Technologies
