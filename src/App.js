import React from "react";
import store from "./store";
import { Provider, useSelector,useDispatch } from "react-redux";
import {addReqAsyncAc,decReqAC} from './store/actions'
import "./App.css";

const App = () => {
  const store = useSelector(store => store);
  const dispatch = useDispatch();


  const handleOnAdd = () => {
    dispatch(addReqAsyncAc(store.number));
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
