import React, { useState, useRef } from "react";
//libs
import { nanoid } from "nanoid";

//initial mock data
let mockData = ["one", "two", "three", "four", "five"];

export let TwoFilterExtraWithSameValue = () => {
    //state
    let [datas, setDatas] = useState(mockData);
    //filteredState
    let [filteredItem, setFilteredItem] = useState([]);
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
        //repeatative work
        setFilteredItem(() => {
            return [...datas, valueRef];
        });

        //make ref value as empty once submitted
        inputRef.current.value = "";
    };

    //handleChange
    let handleChange = (e) => {
        let changeValue = e.target.value;
        setFilteredItem(
            datas.filter((item) =>
                item.toLocaleLowerCase().includes(changeValue.toLocaleLowerCase())
            )
        );
    };

    return (
        <div style={{ backgroundColor: "skyblue", padding: "3rem" }}>
            <h3>Filtered approach : 2</h3>

            <div style={{ backgroundColor: "white", padding: "1rem" }}>
                <h4>
                    NOTE : Don't do this kind of derived state approach in React. (DS
                    means, keeping state values that is from other state)
                </h4>
                <p>
                    This is also a good approach but we are repeating things, actually we
                    are placing the same code in (dataState, filterState) on submitting
                    and this is not an efficient way of coding
                </p>
                <p>
                    In case of editing an item then we have to share the same code in 2
                    places
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
            <ul>
                {filteredItem &&
                    filteredItem.map((item) => <li key={nanoid()}>{item}</li>)}
            </ul>
        </div>
    );
};
