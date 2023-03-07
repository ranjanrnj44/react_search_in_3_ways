import React, { useState, useRef, useMemo } from "react";
//libs
import { nanoid } from "nanoid";

//initial mock data
let mockData = ["one", "two", "three", "four", "five"];

export let ThreeCorrectWay = () => {
    //state
    let [datas, setDatas] = useState(mockData);
    //query state
    let [query, setQuery] = useState("");
    let inputRef = useRef();

    //separate function for filter the data
    const filteredItem = useMemo(() => {
        return datas.filter((item) => {
            return item.toLocaleLowerCase().includes(query.toLocaleLowerCase());
        });
    }, [datas, query]);
    console.log(filteredItem);

    //handleSubmit
    let handleSubmit = (e) => {
        e.preventDefault();
        //get the value using ref and check
        let valueRef = inputRef.current.value;
        if (valueRef === "") return;
        setDatas((prev) => {
            return [...prev, valueRef];
        });
        //make ref value as empty once submitted
        inputRef.current.value = "";
    };

    return (
        <div style={{ backgroundColor: "green", padding: "1rem" }}>
            <h3>Correct Way to approach to filter : 3</h3>

            <div style={{ backgroundColor: "yellowgreen", padding: "1rem" }}>
                <h4>NOTE : </h4>
                <p>
                    This is the good way. We don't have any derived state dependency. All
                    that is we keep our code in seperate function for computation
                </p>
            </div>
            <br />

            {/* search */}
            <label htmlFor="search">Search</label>
            <input
                id="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="search item!"
            />
            <br />
            <br />

            {/* form submit */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="add">Add Item : </label>
                <input
                    id="add"
                    ref={inputRef}
                    type="text"
                    placeholder="input and add!"
                />
                <button type="submit">add</button>
            </form>
            <br />
            <ul>
                {filteredItem &&
                    filteredItem.map((item) => <li key={nanoid()}>{item}</li>)}
            </ul>
        </div>
    );
};
