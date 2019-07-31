import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem"
  },
  input: {
    marginRight: "1rem"
  }
};

function TodoItem(props) {
    const {removeTodo} = useContext(Context);
  const classes = []; 
  if (props.completed) classes.push('done')
  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          style={styles.input}
          type="checkbox"
          onChange={() => props.onChange(props.id)}
          checked={props.completed}
        />
        <strong>{props.index + 1}</strong> &nbsp;
        {props.title}
      </span>

      <button className="rm" onClick={() => {removeTodo(props.id)}}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  props: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default TodoItem;
