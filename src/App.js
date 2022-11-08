import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { notifyActions } from "./store/notify-slice";
let isFirstRender=true;

function App() {
  const cart = useSelector((state) => state.cart);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notify.notification);

  useEffect(() => {

    if(isFirstRender){
      isFirstRender=false;
      return;
    }

    const sendRequest = async () => {
      //notify state as "Sending request"
      dispatch(
        notifyActions.showNotification({
          open: true,
          message: "Sending Request",
          type: "info",
        })
      );

      const res = await fetch(
        "https://reduxtoolkit-shoppingcart-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      //notify state as "request is succesful"
      dispatch(
        notifyActions.showNotification({
          open: true,
          message: "Senet request to database succesfully",
          type: "success",
        })
      );
    };
    sendRequest().catch((err) => {
      //notify state as "Error"
      dispatch(
        notifyActions.showNotification({
          open: true,
          message: "Sending request failed",
          type: "error",
        })
      );
    });
  }, [cart]);

  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
