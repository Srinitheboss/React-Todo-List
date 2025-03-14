import Header from "./Header";
import React,{useState} from "react";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem";
function App(){
const [items, setItem] = useState([{
id: 1, checked: true, item: "Born to win"},
{id:2, checked: false, item: "Just keep going"},
{id:3, checked: false, item: "Don't remember the past"
}]);
const handleCheck = (id) => {
const listItems = items.map((item)=> item.id===id ? {...item, checked:!item.checked} :item)
setItem(listItems)
localStorage.setItem("todo-list", JSON.stringify(listItems));
}
const deleteButton = (id) => {
const listItems = items.filter((item)=>item.id!==id)
setItem(listItems)
localStorage.setItem("todo-list", JSON.stringify(listItems));
}
return(
   <div><Header title = "todo-list"/>
<AddItem />
<Content items = {items} setItem = {setItem} handleCheck = {handleCheck} deleteButton = {deleteButton}/>
<Footer length = {items.length}/></div>
);
}
export default App;
