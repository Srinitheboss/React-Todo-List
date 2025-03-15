import Header from "./Header";
import React,{useState} from "react";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import "./App.css";
function App(){
const [items, setItem] = useState(
JSON.parse(localStorage.getItem('todo-list'))
);
const [newItem, setNewItem] = useState('')
const [search, setSearch] = useState('')
const addItem  = (item) => {
const id = items.length ? items[items.length-1].id+1: 1;
const addNewItem = {id, checked:false, item}
const listItems = [...items, addNewItem]
setItem(listItems)
localStorage.setItem("todo-list", JSON.stringify(listItems));
}
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
const handleButton = (e) => {
e.preventDefault()
if (!newItem) return;
console.log(newItem)
addItem(newItem)
setNewItem('')
}
return(
   <div><Header title = "Todo-list"/>
<AddItem newItem = {newItem} setNewItem = {setNewItem} handleButton = {handleButton}/>
<SearchItem search = {search} setSearch = {setSearch}/>
<Content items = {items.filter(item => ((item.item).toLowerCase().includes(search.toLowerCase())))} setItem = {setItem} handleCheck = {handleCheck} deleteButton = {deleteButton}/>
<Footer length = {items.length}/></div>
);
}
export default App;
