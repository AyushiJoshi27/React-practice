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

export default ShowProducts;