import React from "react";
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

                            <div className="sub-section">
                                <div>
                                    <span>{company}</span>
                                    <span className={`${newItem === true && "bg"}`}>{newItem ? "new!" : null}</span>
                                    <span className={`${featured === true && "ft"}`}>{featured ? "featured": null}</span>
                                </div>
                                
                                <div className="position">
                                    {position}
                                </div>

                                <div>
                                    <span>{postedAt}</span><span>.</span>
                                    <span>{contract}</span><span>.</span>
                                    <span>{location}</span>
                                </div>
                            </div>

                            <div className="tags">
                                <span className="role">{role}</span>
                                <span className="level">{level}</span>
                                <span className="languages">
                                    {languages.map((lg,index)=>{
                                        return(
                                            <span key={index} className="sub">
                                                {lg}
                                            </span>
                                        );
                                    })}
                                </span>
                                <span>
                                    {tools.map((tool,index)=>{
                                        return(
                                            <span key={index} className="tls">
                                                {tool}
                                            </span>
                                        );
                                    })}
                                </span>
                            </div>
                            
                        </article>
                    </section>
                );
            })}

        </main>  
    );
}

export default Home;
