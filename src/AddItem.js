import React from "react";
const AddItem = () => {
return(
<form>
<label htmlFor="addItem">Add List</label>
<input auto-focus id="addItem" type="text" placeholder="Your choice" required/>
<button type="submit" aria-label="Add List">Add</button>

</form>
);
}
export default AddItem;
