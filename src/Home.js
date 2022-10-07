import React, { useState } from "react";
import data from "./data";

const Home = ()=> {

    return(
        <main>
            {data.map((item)=>{
                const {id, company, logo, newItem, featured, position, 
                role, level, postedAt, contract, location, languages, tools} = item;
                return(
                    <section key={id}>
                        <article className="container">
                            <img src={logo} alt={company} className="img" />
                            
                        </article>
                    </section>
                );
            })}

        </main>  
    );
}

export default Home;
