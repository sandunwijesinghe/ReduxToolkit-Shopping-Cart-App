import { Alert } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { notifyActions } from "../store/notify-slice";

const Notification = ({ type, message }) => {
  const notification = useSelector((state) => state.notify.notification);
  const dispatch = useDispatch();
  
  const closeNotification = () => {
    dispatch(notifyActions.showNotification({ open: false }));
  };

  return (
    <div>
      {notification.open && (
        <Alert severity={type} onClose={closeNotification}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
