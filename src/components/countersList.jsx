import React, {useState} from "react"
import Counter from "./counter"

let CountersList = () => {
    let initialState = [
        { id: 0, value: 1, name: "Ненужная вещь" }, 
        { id: 1, value: 2, name: "Ложка" }, 
        { id: 2, value: 3, name: "Вилка" },
        { id: 3, value: 3, name: "Тарелка" },
        { id: 4, value: 3, name: "Набор минималиста" },
    ];

    let [counters, setCounter] = useState(initialState);

    let handleDelete = (id) => {
        let newCounters = counters.filter(counter => counter.id !== id);
        setCounter(newCounters);
    };

    let handleReset = () => {
        setCounter(initialState);
    };

    let handleIncrement = (id) => {
        setCounter(counters.map(counter => counter.id === id ? {...counter, value: counter.value + 1} : {...counter}));
    };

    let handleDecrement = (id) => {
        setCounter(counters.map(counter => counter.id === id ? {...counter, value: counter.value - 1} : {...counter}));
    }
    return (
        <>
           {counters.map(counter => (
                <Counter 
                key = {counter.id} 
                {...counter}
                onDelete = {handleDelete}
                onIncrement = {handleIncrement}
                onDecrement = {handleDecrement}
                />
            ))}
            <button 
                className="btn btn-primary btn-sm m-2" 
                onClick = {handleReset}
            >
                Сброс
            </button>
        </>
    );
}

export default CountersList;