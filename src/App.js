import Header from "./Header";
import React,{useState,useEffect} from "react";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import "./App.css";
import ApiRequest from "./ApiRequest";
function App(){
const API_URL = "http://localhost:3500/items";
const [items, setItem] = useState([]
);
const [newItem, setNewItem] = useState('')
const [search, setSearch] = useState('')
const [fetchError, setFetchError] = useState(null)
const [isLoading, setIsLoading] = useState(true)
const addItem  = async (item) => {
const id = items.length ? items[items.length-1].id+1: 1;
const addNewItem = {id, checked:false, item}
const listItems = [...items, addNewItem]
setItem(listItems)
localStorage.setItem("todo-list", JSON.stringify(listItems));
const postOptions = {
method: "POST",
headers: {
'Content-Type':'application/json'
},
body: JSON.stringify(addNewItem)
}
const result = await ApiRequest(API_URL, postOptions)
if(result) setFetchError(result)
}
useEffect(()=>{
const fetchItems = async () => {
try{
const response = await fetch(API_URL);
if(!response.ok) throw Error("Data not received")
const listItems = await response.json();
setItem(listItems);
setFetchError(null)
}catch (err){
setFetchError(err.message)
}finally{
{setIsLoading(false)}
}}
setTimeout(() => {
(async () =>{await fetchItems();})();}, 2000)}, [])
const handleCheck = async (id) => {
const listItems = items.map((item)=> item.id===id ? {...item, checked:!item.checked} :item)
setItem(listItems)
const myItem = listItems.filter((item) => item.id===id)
const updateOptions = {
method: "PATCH",
headers: {
'Content-Type':'application/json'
},
body: JSON.stringify({checked:myItem[0].checked})
}
const reqUrl = `${API_URL}/${id}`
const result = await ApiRequest(reqUrl, updateOptions)
if(result) setFetchError(result)
}
const deleteButton = async (id) => {
const listItems = items.filter((item)=>item.id!==id)
setItem(listItems)
const deleteOptions = {method:"DELETE"}
const reqUrl = `${API_URL}/${id}`
const result = await ApiRequest(reqUrl, deleteOptions)
if(result) setFetchError(result)
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
<main>{isLoading && <p> Loading lists..</p>}{fetchError && <p>{`Error: ${fetchError}`}</p>}
{!isLoading && !fetchError && <Content items = {items.filter(item => ((item.item).toLowerCase().includes(search.toLowerCase())))} setItem = {setItem} handleCheck = {handleCheck} deleteButton = {deleteButton}/>}</main>
<Footer length = {items.length}/></div>
);
}
export default App;
