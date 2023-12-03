import React from "react";
import SearchBar from "./SearchBar";
import DisplayResult from "./DisplayResult";
import { useState } from "react";

const Home = ()=>{

    const [result, setResult] = useState([]);
    return (
        <div>
            <SearchBar setResult={setResult}/>
            <DisplayResult result={result}/>
        </div>
    )
}

export default Home