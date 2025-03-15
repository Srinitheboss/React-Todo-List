import React from "react";
const AddItem = ({handleButton, newItem, setNewItem}) => {
return(
<form onSubmit = {handleButton}>
<label htmlFor="addItem">Add List</label>
<input auto-focus id="addItem" type="text" placeholder="Your choice" required value={newItem} onChange = {(e)=>setNewItem(e.target.value)}/>
<button type="submit" aria-label="Add List">Add</button>

</form>
);
}
export default AddItem;
