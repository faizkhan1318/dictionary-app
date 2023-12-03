import React, { useState } from "react";
import axios from "axios";
import {useSelector, useDispatch } from "react-redux";
import { add_result } from "../Redux/action";
import "../Css/SearchBar.css";

const SearchBar = ({setResult}) =>{
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handelSearch=(e)=>{
        e.preventDefault();
        fetchSearchResult();
        setInput("");
    }

    async function fetchSearchResult(){
        try{
            const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
            setResult(data.data);
            dispatch(add_result(data.data));
        }catch(err){
            alert(err.message)
        }
    }

    return (
        <div className="search-bar">
            <form onSubmit={handelSearch} className="search">

                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="search a word"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )

}

export default SearchBar;