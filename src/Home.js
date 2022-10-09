import React from "react";
import data from "./data";
import { useGlobalContext } from "./context";

const Home = ()=> {
    const { list, addTag, removeTag, clearAll } = useGlobalContext();

    console.log(list)
    return(
        <main>
            <div className={list.length === 0 ? "form-none" : "form"}>
                {list.map((item,index)=>{
                    return(
                        <div className="tag" key={index}>
                            <p>{item}</p>

                            <button onClick={addTag}>
                                <img src="/images/icon-remove.svg" />
                            </button>
                        </div>
                    );
                })}
            </div>

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
                                <span className="level">{level}</span><br className="break" />
                                <span className="languages">
                                    {languages.map((lg,index)=>{
                                        return(
                                            <span key={index} className="sub">
                                                {lg}
                                            </span>
                                        );
                                    })}
                                </span>
                                <span className="tools">
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
