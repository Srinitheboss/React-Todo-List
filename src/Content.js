import React from "react";
import {useState} from "react";
import ItemList from "./ItemList";

const Content = ({items, setItem, handleCheck, deleteButton}) => {
return (
<>
{(items.length)?(
<ItemList items = {items} setItem = {setItem} handleCheck = {handleCheck} deleteButton = {deleteButton}/>
):(<p> Your list is empty </p>)}
</>
);
}
export default Content;
