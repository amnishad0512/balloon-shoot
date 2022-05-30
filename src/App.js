import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(1);

  // generate RGB values between 0 - 255
  function generateColor() {
    let min = 0,
      max = 255;
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  }

  function GenerateRandom(min = 0, max = 255) {
    let firstItem = document.querySelector(".first");
    let secondItem = document.querySelector(".second");
    let thirdItem = document.querySelector(".third");
    let fourthItem = document.querySelector(".forth");
    let fifthItem = document.querySelector(".fifth");

    for (let i = 1; i <= 5; i++) {
      switch (i) {
        case 1: {
          firstItem.style.cssText = `background-color : rgb(${generateColor()}, ${generateColor()}, ${generateColor()}`;
          break;
        }
        case 2: {
          secondItem.style.backgroundColor = `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`;
          break;
        }
        case 3: {
          thirdItem.style.backgroundColor = `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`;
          break;
        }
        case 4: {
          fourthItem.style.backgroundColor = `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`;
          break;
        }
        default: {
          fifthItem.style.backgroundColor = `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`;
          break;
        }
      }
    }
  }
  useEffect(() => {
    GenerateRandom();
  }, []);

  function handleChange(e) {
    const value = +e.target.value;

    setNumber(value);
    // console.log(number);
  }

  function handleItem(e) {
    let className = e.target.className;
    let node = document.getElementsByClassName(className)[0];
    let childCenter = document.querySelector(".child-center");
    let noOfChildren = document.querySelector(".child-center").children.length;

    if (className === "first") {
      if (noOfChildren) {
        let ref = childCenter.firstChild;
        childCenter.insertBefore(node, ref);
      } else {
        childCenter.appendChild(node);
      }
    } else if (className === "second") {
      if (noOfChildren) {
        let ref = childCenter.firstChild;
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
      if (noOfChildren) {
        let ref = childCenter.firstChild;
        let className = childCenter.firstChild.className;
        if (className === "first" && ref.nextSibling.className !== "second") {
          ref.parentNode.insertBefore(node, ref.nextSibling);
        } else if (className === "second") {
          ref.parentNode.insertBefore(node, ref.nextSibling);
        } else {
          childCenter.insertBefore(node, ref);
        }
      } else {
        childCenter.appendChild(node);
      }
    } else if (className === "forth") {
      if (noOfChildren) {
        let ref = childCenter.lastChild;
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
      childCenter.appendChild(node);
    }
  }

  function handleButton() {
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
