import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(1);

  // generate random RGB values
  function generateColor() {
    let value = Math.ceil(Math.random() * 255);
    return value;
  }

  // assign random background color to child items
  function assignColor() {
    let firstItem = document.querySelector(".first");
    let secondItem = document.querySelector(".second");
    let thirdItem = document.querySelector(".third");
    let fourthItem = document.querySelector(".forth");
    let fifthItem = document.querySelector(".fifth");

    for (let i = 1; i <= 5; i++) {
      let red = generateColor();
      let green = generateColor();
      let blue = generateColor();

      switch (i) {
        case 1: {
          // assign color to first item
          firstItem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
          break;
        }

        case 2: {
          // assign color to second item
          secondItem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
          break;
        }

        case 3: {
          // assign color to third item
          thirdItem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
          break;
        }

        case 4: {
          // assign color to fourth item
          fourthItem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
          break;
        }

        default: {
          // assign color to fifth item
          fifthItem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
          break;
        }
      }
    }
  }

  useEffect(() => {
    assignColor();
  }, []);

  // When the changes happen inside the input box it will track that changes
  function handleChange(e) {
    const value = +e.target.value;
    setNumber(value);
  }

  // When we click to any items inside of the left container, It will responsible to dispatch item to their original position inside the center container
  function handleItem(e) {
    let className = e.target.className;
    let node = document.getElementsByClassName(className)[0];
    let childCenter = document.querySelector(".child-center");
    let noOfChildren = document.querySelector(".child-center").children.length;
    let ref = childCenter.firstChild;

    if (className === "first") {

      // When we click on first item
      if (noOfChildren) {
        childCenter.insertBefore(node, ref);
      } else {
        childCenter.appendChild(node);
      }

    } else if (className === "second") {

      // When we click on second item
      if (noOfChildren) {
        let className = childCenter.firstChild.className;
        if (className === "first") {
          ref.parentNode.insertBefore(node, ref.nextSibling);
        } else {
          childCenter.insertBefore(node, ref);
        }
      } else {
        childCenter.appendChild(node);
      }

    } else if (className === "third") {
      // When we click on third item

      if (noOfChildren) {
        let className = childCenter.firstChild.className;
        if (className === "first") {
          if (!ref.nextSibling) {
            ref.parentNode.insertBefore(node, ref.nextSibling);
          } else {
            ref.parentNode.insertBefore(node, ref.nextSibling.nextSibling);
          }
        } else if (className === "second") {
          ref.parentNode.insertBefore(node, ref.nextSibling);
        } else {
          childCenter.insertBefore(node, ref);
        }
      } else {
        childCenter.appendChild(node);
      }

    } else if (className === "forth") {

      // When we click on fourth item
      if (noOfChildren) {
        let className = childCenter.lastChild.className;
        if (className === "fifth") {
          childCenter.insertBefore(node, ref);
        } else {
          childCenter.appendChild(node);
        }
      } else {
        childCenter.appendChild(node);
      }

    } else {

      // When we click on fifth item
      childCenter.appendChild(node);

    }
  }
  function handleButton() {
    // When we enter any number between 1 to 5 inside input box then click to shoot button, It will responsible for append that particular item to inside the left container

    switch (number) {
      case 1: {
        const item = document.querySelector(".first");
        const div = document.querySelector(".child-left");
        div.append(item);
        break;
      }

      case 2: {
        const item = document.querySelector(".second");
        const div = document.querySelector(".child-left");
        div.append(item);
        break;
      }

      case 3: {
        const item = document.querySelector(".third");
        const div = document.querySelector(".child-left");
        div.append(item);
        break;
      }

      case 4: {
        const item = document.querySelector(".forth");
        const div = document.querySelector(".child-left");
        div.append(item);
        break;
      }

      case 5: {
        const item = document.querySelector(".fifth");
        const div = document.querySelector(".child-left");
        div.append(item);
        break;
      }
    }
  }

  return (
    <div className="parent">
      <div className="child-left"></div>

      <div className="child-center">
        <div className="first" onClick={handleItem}></div>
        <div className="second" onClick={handleItem}></div>
        <div className="third" onClick={handleItem}></div>
        <div className="forth" onClick={handleItem}></div>
        <div className="fifth" onClick={handleItem}></div>
      </div>

      <div className="child-right">
        <input
          type="number"
          onChange={handleChange}
          value={number}
          min={1}
          max={5}
        />

        <button onClick={handleButton}>shoot</button>
      </div>
    </div>
  );
}

export default App;
