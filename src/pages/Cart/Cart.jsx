import { cloneElement, useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Item from "../../components/Item/Item";
import "./CartStyle.css";

const Cart = () => {
  const { products, clearCart, removeProduct } = useContext(CartContext);
  const navigate = useNavigate();
  const db = getFirestore();
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInput = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm =
    formValue.name === "" || formValue.phone === "" || formValue.email === "";

  const createOrder = (e) => {
    e.preventDefault();
    const orderSnapshot = collection(db, "orders");

    const newOrder = {
      buyer: formValue,
      items: products.map((product) => {
        return {
          title: product.title,
          price: product.price,
          id: product.id,
          quantity: product.quantity,
        };
      }),
      date: new Date(),
      total: products.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      ),
    };

    addDoc(orderSnapshot, newOrder)
      .then((res) => {
        updateProductStock();
        alert("Your Order has been placed!");
        clearCart();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const updateProductStock = () => {
    products.forEach((prod) => {
      const querySnapshot = doc(db, "products", prod.id);
      updateDoc(querySnapshot, {
        stock: prod.stock - prod.quantity,
      });
    });
  };

  return (
    <div>
      <h2>Carrito de compras!</h2>
      <button className="btn btnClearAll" onClick={clearCart}>
        Vaciar Carrito
      </button>
      <form>
        <div className="mb-3">
          <strong className="form-strong">Nombre</strong>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese su nombre"
            value={formValue.name}
            onChange={handleInput}
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <strong className="form-strong">Teléfono</strong>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese su teléfono"
            value={formValue.phone}
            onChange={handleInput}
            name="phone"
            required
          />
        </div>
        <div className="mb-3">
          <strong className="form-strong">Dirección de E-mail</strong>
          <input
            type="email"
            className="form-control"
            placeholder="Ingrese su E-Mail"
            value={formValue.email}
            onChange={handleInput}
            name="email"
            required
          />
        </div>
        <button
          onClick={createOrder}
          className="btn btn-primary"
          type="submit"
          disabled={validateForm}
        >
          Confirmar Compra
        </button>
      </form>

      {products.length > 0 ? (
        <div className="ItemsCart">
          {products.map((item) => {
            return (
              <div key={item.id}>
                <Item
                  title={item.title}
                  // description={item.description}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                  action={() => removeProduct(item.id)}
                  button="Eliminar"
                />
              </div>
            );
          })}
        </div>
      ) : (
        <h2>Aún no tienes productos en el carrito!</h2>
      )}
    </div>
  );
};

export default Cart;
