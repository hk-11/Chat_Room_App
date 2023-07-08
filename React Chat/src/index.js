import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import Spinner from "./Spinner";
import { logout } from "./action";


const store = createStore(rootReducer, composeWithDevTools());

const Root = (props) => {
  const email = useSelector((state) => state?.user);
  //naviagte for navgation 
  const navigate = useNavigate();
  //dispatch redux ke action ko call karna ke liya use kartay hn 
  const dispatch = useDispatch();

  useEffect(() => {
    //this code is for checking that the user is login or not 
    if (email?.user.email !== undefined) {
      navigate("/");
    } else {
      dispatch(logout());
      navigate("/login");
    }
  }, []);

  //Routes Define hn idhar App wala main ha jidhar chat ha 
  return props.isLoading ? (
    <Spinner />
  ) : (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//redux ka store ke andar porri app ko rakhana hota ha 
root.render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>
);

reportWebVitals();
