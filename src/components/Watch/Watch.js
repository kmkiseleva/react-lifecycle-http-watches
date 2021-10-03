import { useEffect, useState, useMemo, useCallback } from "react";
import shortid from "shortid";
import convertTime from "./../../utils/convertTime";
import styles from "./Watch.module.css";

const hoursOffset = new Date().getTimezoneOffset() / 60;

const Watch = ({ id, title, deleteWatches, timeZone = hoursOffset }) => {
  const [hours, minute, second] = convertTime();
  const [clock, setClock] = useState({
    hour: hours - timeZone * 30,
    minute: minute,
    second: second,
  });

  const onDeleteHandler = useCallback(() => deleteWatches(id), [id]);

  return (
    <div className={styles["watch-container"]}>
      <div className={styles["watch-title"]}>
        <h5 style={{ color: "white" }}>{title}</h5>
      </div>
      <div className={styles["watch-body"]}>
        <span className={styles["watch-face"]}></span>
      </div>
      <button className={styles["watch-delete"]} onClick={onDeleteHandler}>
        X
      </button>
    </div>
  );
};

export default Watch;
