import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
  state = {
    isOpen: false
  };
  render() {
    return (
      <React.Fragment>
        <button style={{marginBottom: '1rem'}} onClick={() => this.setState({ isOpen: true })}>
          Дополнительная информация
        </button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
                        <h1>Дополнительная информация</h1>
              <p>Данный ToDo лист сделан с использованием реакт-хуков. Создано модальное окно для тренировки возврата нескольких элементов из компонента с помощью React.Fragment</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Закрыть модальное окно
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
