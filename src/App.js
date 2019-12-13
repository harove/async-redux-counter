import React from "react";
import store from "./store";
import {useSelector,useDispatch } from "react-redux";
import {addAsyncAc,decReqAC} from './store/modules/add/actions'
import "./App.css";

const App = () => {
  const store = useSelector(store => store);
  const dispatch = useDispatch();


  const handleOnAdd = () => {
    dispatch(addAsyncAc(store.number));
  };

  const handleOnDec = () => {
    dispatch(decReqAC(store.number));
  };


  return (
    <div>
      <label>{JSON.stringify(store)}</label>
      <button onClick={handleOnAdd}>Add</button>
      <button onClick={handleOnDec}>Dec</button>
      
    </div>
  );
};

export default App;
