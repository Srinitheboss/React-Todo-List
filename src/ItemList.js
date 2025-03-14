import React from "react";

const ItemList = ({items, setItem, handleCheck, deleteButton}) => {
return(
<ul>
{items.map((item) =>(
<li key = {item.id}>
<input type="checkbox" onChange={()=>handleCheck(item.id)}  checked = {item.checked}/>
<label style={(item.checked)? {textDecoration: "line-through"}:null} onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
<button onClick={()=>deleteButton(item.id)} aria-label = {`Delete ${item.item}`}>Delete</button>
</li>
))}
</ul>)
}
export default ItemList;

