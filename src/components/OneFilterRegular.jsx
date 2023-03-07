import React, { useState, useRef } from "react";
//libs
import { nanoid } from "nanoid";

//initial mock data
let mockData = ["one", "two", "three", "four", "five"];

export let OneFilterRegular = () => {
    //state
    let [datas, setDatas] = useState(mockData);
    let inputRef = useRef();

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

    //handleChange
    let handleChange = (e) => {
        let changeValue = e.target.value;
        setDatas((prev) => {
            return prev.filter((item) =>
                item.toLocaleLowerCase().includes(changeValue.toLocaleLowerCase())
            );
        });
    };

    return (
        <div style={{ backgroundColor: "orange", padding: "1rem" }}>
            <h3>Regular Search approach : 1</h3>

            <div style={{ backgroundColor: "wheat", padding: "1rem" }}>
                <h4>NOTE : </h4>
                <p>
                    There is issue with this approach, we cannot get the state values once
                    we clear the search input.
                </p>
                <p>
                    Since, we are directly filtering the state value this will not work as
                    expected!
                </p>
            </div>
            <br />

            {/* search */}
            <label htmlFor="search">Search</label>
            <input
                id="search"
                onChange={handleChange}
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
            </form>
            <br />
            <ul>{datas && datas.map((item) => <li key={nanoid()}>{item}</li>)}</ul>
        </div>
    );
};
