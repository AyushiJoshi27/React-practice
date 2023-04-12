import DisplayData from "./Hover";

export default function ChangeColors() {
    const jsonData = [
        {
            "id": 0,
            "a": "button1"
        },
        {
            "id": 1,
            "a": "button2"
        },
        {
            'id': 2,
            "a": "button3"
        },
        {
            'id': 3,
            "a": "button4"
        }
    ];

    console.log("JsonData" ,jsonData);
    
    //return <DisplayData data={jsonData} />
}

/*import React, {useState, useRef, useEffect} from 'react'; 
function ShowProducts(products) {
  //const [products] = props;
  const [onHover, setOnHover] = useState('');

  useEffect(() => {

    const selectedElement = document.querySelectorAll('.main-content');

    const HandleOnElement = (event) => {
      setOnHover(Number(event.target.id));
    };
  
    const HandleLeaveElement = (event) => {
      setOnHover(null)
    };

    selectedElement.forEach((selectedEle) => {
      selectedEle.addEventListener('mouseenter', HandleOnElement);
      selectedEle.addEventListener('mouseleave', HandleLeaveElement);
    })

    return () => {
      selectedElement.forEach((selectedEle) => {
        selectedEle.addEventListener('mouseenter', HandleOnElement);
        selectedEle.addEventListener('mouseleave', HandleLeaveElement);
      })
    };
  }, []);

  return (
    <div className="content-wrapper">
      {products.map((product) => (
        <div className="main-content"
          id={product.id} 
          key={product.id}
          style={{boxShadow: onHover === product.id ? 
            "1px 2px 5px 0px blue" 
          : "1px 2px 5px 0px lughtgrey"}}
          >
          <div className="img-wrap">
            <img src={product.image} alt={product.title} className="item-img" />
          </div>
          <div className="details">
            <p><b>Title: </b>{product.title}</p>
            <p><b>Price: </b>{product.price}</p>
            <p><b>Category: </b>{product.category}</p>
            <p><b>Rating: </b>{product.rating.rate}</p>
            <p><b>Available: </b>{product.rating.count} only</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowProducts;

import React, {useState, useEffect} from 'react'; 

const ShowProducts = ({products}) => {
  const [choosenElement, setChoosenElement] = useState([]);

  const SelectElement = (id) => {
    setChoosenElement(previousElement => previousElement.includes(id) 
      ? previousElement.filter(elementId => elementId !== id)
      : [...previousElement, id]
    );
  };
  
  useEffect(() => {
    const element = document.querySelectorAll('.main-content');
    element.forEach(obj => {
      obj.style.boxShadow = choosenElement.includes(obj.id) ? "1px 2px 5px 0px red" : "1px 2px 5px 0px lightgray";
    })
  }, [choosenElement]);

    return (
      <div className="content-wrapper">
        {products.map((item) => (
          <div className="main-content" onMouseOver={SelectElement} id={item.id} key={item.id}>
            <div className="img-wrap">
              <img src={item.image} alt={item.title} className="item-img" />
            </div>
            <div className="details">
              <p><b>Title: </b>{item.title}</p>
              <p><b>Price: </b>{item.price}</p>
              <p><b>Category: </b>{item.category}</p>
              <p><b>Rating: </b>{item.rating.rate}</p>
              <p><b>Available: </b>{item.rating.count} only</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

export default ShowProducts;*/
