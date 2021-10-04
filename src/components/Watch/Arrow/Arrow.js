import classes from "./Arrow.module.css";

const Arrow = ({styles, time}) => (
    <span className={`${classes[styles[0]]} ${classes[styles[1]]}`} style={{transform: `rotate(${time}deg)`}}/>
)

export default Arrow;