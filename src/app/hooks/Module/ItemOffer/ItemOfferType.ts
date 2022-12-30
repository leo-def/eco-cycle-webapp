import { useContext } from "react";
import { ItemOfferTypeContext } from "../../../contexts/Module/ItemOfferTypeContext";

export const getItemOfferType = () => {
    const { type } = useContext(ItemOfferTypeContext);
    return type;
  }
