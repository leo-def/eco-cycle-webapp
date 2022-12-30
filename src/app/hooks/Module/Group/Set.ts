import { useContext } from "react";
import { useSelector } from "react-redux"
import { GroupContext } from "../../../contexts/Module/GroupContext";
import { RootState } from "../../../reducers"


export const getSetGroup = () => {
  return useSelector((state: RootState) => state.module.group.set.item);
}


export const isSetGroupFixed = () => {
  return useSelector((state: RootState) => state.module.group.set.fix);
}


  export const getSetGroupFromContext = () => {
    const { item } = useContext(GroupContext);
    return item;
  }


  export const isSetGroupFixedFromContext = () => {
    const { fix } = useContext(GroupContext);
    return fix;
  }
