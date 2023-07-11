import { useState } from "react";
import "./App.css";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(150);
  conts [product2, setProduct2] = useState(800);
  conts [product3, setProduct3] = useState(300);

  return (
    <div className="App">
      </div>
      <h3>จำนวนสินค้าในตะกร้า {totalItems}</h3>
      <h3>ราคาสินค้าในตะกร้าทั้งหมด {totalItems} บาท </h3>
      </div>
      <img src="case.jpg" alt="case" width="15%" />< br />
      เคสโทรศัพท์ ราคา {product1} บาท
      </div>
      <button onClick={()} {
        setTotalItems(setTotalItems + 1);
        setTotalPrice(totalPrice + product1):
      }}>เพิ่มเข้าตะกร้า
      <h1>{state}</h1>
      <button onClick={()=>setTotalItems(totalItems + 1)}>เพิ่มเข้าตะกร้า</button><button>นำออกจากตะกร้า</button> 
      </div>
       <img src="cap.jpg" alt="cap" width="15%" />< br />
       เคสโทรศัพท์ ราคา {product1} บาท
       <h1>{state}</h1>
       <button onClick={()=>setTotalItems(totalItems + 1)}>เพิ่มเข้าตะกร้า</button><button>นำออกจากตะกร้า</button> 
       </div>
       </div>
       <img src="sthirt.jpg" alt="sthirt" width="15%" />< br />
       เคสโทรศัพท์ ราคา {product1} บาท
       <h1>{state}</h1>
       <button>เพิ่มเข้าตะกร้า</button><button>นำออกจากตะกร้า</button> 
       </div>
  );
}

export default App;
