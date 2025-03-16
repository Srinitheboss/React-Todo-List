import React from "react";
import { useRef } from "react";

const AddItem = ({handleButton, newItem, setNewItem}) => {
const inputRef = useRef()
return(
<form onSubmit = {handleButton}>
<label htmlFor="addItem">Add List</label>
<input auto-focus ref={inputRef}id="addItem" type="text" placeholder="Your choice" required value={newItem} onChange = {(e)=>setNewItem(e.target.value)}/>
<button type="submit" onClick={()=> inputRef.current.focus()} aria-label="Add List">Add</button>

</form>
);
}
export default AddItem;
