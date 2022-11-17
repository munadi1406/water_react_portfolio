const FecthingData = (props) => {
  const container = document.querySelectorAll(".container-product");
  const wrapper = document.querySelector(".wrapper");

  // container.forEach(e=>{
  //   wrapper.appendChild(e);
  // })

  return (
    <div className="card">
      <h1>{props.title}</h1>
      <img src={props.img} alt={props.alt} width={100} />
      <div className="stock">{props.stock}</div>
      <div className="price">{props.price}</div>
     

      {
        props.val === "true" ?
          <div className="wrapper-button">
          <button className="order">Order</button>
        <button className="desc">Desc</button>
        </div>
        : <div>Loading</div>
        }
      

      
    </div>
  );
};

export default FecthingData;
