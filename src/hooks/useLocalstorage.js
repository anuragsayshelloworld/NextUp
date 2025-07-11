import { useEffect, useState } from "react";

export default function useLocalstorage(key){

const [deletedList, setDeletedList] = useState([]);

useEffect(()=>{
const list = JSON.parse(localStorage.getItem(key));
setDeletedList(list); 
},[key]);

return deletedList;
}