import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import Sdata from './Sdata';
import './index.css';



ReactDOM.render(
    <>
        <h2 className="heading_style">Top Netflix Series to Binge Watch This Month</h2>
        {
            Sdata.map((val) => {
                return (
                    <Cards
                        sname={val.sname}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        link={val.link}
                    />
                );
            })
        };
    </>
    , document.getElementById("root")
); 