import React from "react";
import data from "./data";
import { useGlobalContext } from "./context";

const Home = () => {
    const { list, addTag, removeTag, clearAll } = useGlobalContext();

    const setCardDisplay = (tags) => {
        if (list.length === 0) {
            return true
        }
        return tags.some(tag => list.includes(tag))
    }

    return (
        <main>
            <div className="form" style= {{ display: list.length === 0 ? "none": "block" }}>
                {list.map((item, index)=> (
                    <div className="tag" key={index}>
                        <p>{item}</p>

                        <img className="cancel-btn" src="/images/icon-remove.svg" alt="remove" onClick={() => removeTag(item)} />
                    </div>
                ))}

                <p className="clear-btn" onClick={clearAll}>
                    Clear
                </p>
            </div>

            {data.map((item) => {
                const {id, company, logo, newItem, featured, position, postedAt, contract, location} = item;
                
                return(
                    <section key={id} style={{ display: setCardDisplay(item.getAllTags()) ? "block" : "none" }}>
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
                                <span className="languages">
                                    {item.getAllTags().map((lg,index) => (
                                        <span key={index} className="sub" onClick={addTag}>
                                            {lg} 
                                        </span>
                                    ))}
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
