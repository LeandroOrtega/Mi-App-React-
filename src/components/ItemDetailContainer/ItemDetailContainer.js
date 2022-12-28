import { doc, getDoc, getFirestore } from "firebase/firestore";
import Item from "../item/ItemList";
const ItemDetailContainer = () => {
  return (
    <div>
      <Item />
    </div>
  );
};

export default ItemDetailContainer;
