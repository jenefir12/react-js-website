import React,{useState} from 'react';
import Galdata from './Galdata';


const Portfolio = () => {
    const[menu,setMenu] = useState(Galdata);
    const filterItems = (cate) => {
        const updateData = Galdata.filter((elem) => {
            return elem.category === cate;
        });
        setMenu(updateData);
    }
    const allFunction = () => {
        setMenu(Galdata);
    }
    return (
        <>
        <h3 className="text-center my-4 mt-5 pt-4">Portfolio</h3>
        <div className="container-fluid">
            <div className="row text-center my-5 mx-5">
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                    <button className="btn btn-outline-danger" onClick={()=>{
                        filterItems('website')
                    }}>Website</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                    <button className="btn btn-outline-primary" onClick={() => {
                        filterItems('ecommerce')
                    }}>eCommerce</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                    <button className="btn btn-outline-success" onClick={() =>{
                        filterItems('design')
                    }}>Ui/Ux Design</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                    <button className="btn btn-outline-warning" onClick={allFunction}>See All</button>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row text-center mx-5">
                {
                    menu.map((firstElem) => {
                        const{id,image,title,link} = firstElem;
                        return(
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center gy-4" key={id}>
                                <div className="card">
                                <a href={link} target="_blank"><img src={image} className="card-img-top img-fluid" alt="image"/></a>
                                    <div className="card-body">
                                        <p className="card-text">{title}</p>
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

export default Portfolio
