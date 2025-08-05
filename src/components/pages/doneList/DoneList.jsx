import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromDone } from "../../../redux/doneSlice";
import "./DoneList.scss";

const DoneList = () => {
  const dispatch = useDispatch();
  const doneList = useSelector((s) => s.done.done);

  const Delete = (id) => {
    dispatch(removeFromDone(id));
  };

  return (
    <section id="donelist">
      <div className="container">
        <h2>Выполненные задачи</h2>
        {doneList.length === 0 ? (
          <p>Пока ничего не завершено</p>
        ) : (
          <div className="donelist">
            {doneList.map((el) => (
              <div key={el.id} className="donelist--item">
                <h3>{el.name}</h3>
                <p>{el.comment}</p>
                <button onClick={() => Delete(el.id)}>Удалить</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DoneList;
