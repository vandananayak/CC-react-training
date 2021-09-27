function ListComp() {
    const Fruits =['Banana','Apple','Mango'];
    const listItems = Fruits.map((item,index) => <li key={index}>{item}</li>);

    return (
      <div>
      {listItems}
      </div>
    );
    }
    
  
  export default ListComp;
  