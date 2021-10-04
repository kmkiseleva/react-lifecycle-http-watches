import { useEffect, useState, useCallback } from "react";
import convertTime from "./../../utils/convertTime";
import styles from "./Watch.module.css";
import Arrow from "./Arrow/Arrow";
import watchImg from "../../img/watch_face.jpg";

const hoursOffset = new Date().getTimezoneOffset() / 60;

const Watch = ({ id, title, deleteWatches, timeZone = hoursOffset }) => {
  const [hour, minute, second] = convertTime();
  const [clock, setClock] = useState({
    hour: hour - timeZone * 30,
    minute: minute,
    second: second,
  });

  // обновление состояния - эмуляция хода часов
  useEffect(() => {
    const timerID = setTimeout(() => {
      setClock({
        hour: hour - timeZone * 30,
        minute: minute,
        second: second,
      });
    }, 1000);
    return () => {
      clearTimeout(timerID);
    };
  });

  // удаление часов
  const onDeleteHandler = useCallback(() => deleteWatches(id), [id]);

  return (
    <div className={styles["watch-container"]}>
      <div className={styles["watch-title"]}>
        <h5 style={{ color: "white" }}>{title}</h5>
      </div>
      <div className={styles["watch-body"]}>
        <img src={watchImg} className="watch-image" alt={Math.random()} />
        <Arrow
          time={clock.hour}
          styles={["watch-arrow", "watch-arrow__hour"]}
        />
        <Arrow
          time={clock.minute}
          styles={["watch-arrow", "watch-arrow__minute"]}
        />
        <Arrow
          time={clock.second}
          styles={["watch-arrow", "watch-arrow__second"]}
        />
      </div>
      <button className={styles["watch-delete"]} onClick={onDeleteHandler}>
        X
      </button>
    </div>
  );
};

export default Watch;
