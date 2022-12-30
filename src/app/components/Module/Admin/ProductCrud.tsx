import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from '@mui/material';
import { RootState } from '../../../reducers';
import { productCrudState } from '../../../reducers/Module/Admin/Product/Crud';
import { ActionTypeEnum } from '../../../enums/Crud/ActionTypeEnum.enum';
import { ProductForm } from '../../Shared/Entity/Product/ProductForm';
import { ProductTable } from '../../Shared/Entity/Product/ProductTable';

/**
 * ProductCrud
 *   ProductCrud component
 * @param {any}  props Properties
 * @return {React.Component} ProductCrud Component
 */
export const ProductCrud = (props: any) => {
  const { fetchParams, pathParams, fixedFields, hiddenFields } = props;
  const dispatch = useDispatch();

  const productCrudData = useSelector((state: RootState) => state.module.admin.product.crud);

  // data
  const fetchResponse = productCrudData.fetchResponse;
  const rows = fetchResponse?.items || [];
  const selected = productCrudData.item;
  const action = productCrudData.action;
  const isRemove = (action === ActionTypeEnum.REMOVE);
  const isShow = (action === ActionTypeEnum.SHOW);
  const isEdit = (action === ActionTypeEnum.EDIT);
  const isCreate = (action === ActionTypeEnum.CREATE);
  const isModalOpen = (isRemove || isShow || isEdit || isCreate);
  const showModalForm = (isShow || isEdit || isCreate);
  const modalFormDisabled = (isShow);
  const getDialogTitle = (action, item) => {
    switch (action) {
      case ActionTypeEnum.REMOVE:
        return `Remover ${item && item.id ? item.id : ''}`; // i18n
      case ActionTypeEnum.SHOW:
        return `Visualizar ${item && item.id ? item.id : ''}`; // i18n 
      case ActionTypeEnum.EDIT:
        return `Editar ${item && item.id ? item.id : ''}`; // i18n 
      case ActionTypeEnum.CREATE:
        return `Criar ${item && item.id ? item.id : ''}`; // i18n
    }
    return null
  }
  const removeModalText = 'Deseja mesmo remover o item ?'; // i18n
  const dialogTitle = getDialogTitle(action, selected);
  const formId = 'product-crud-form';
  // actions
  const fetch = (fetchParams) => {
    dispatch({
      type: productCrudState.FETCH,
      payload: { fetchParams, pathParams }
    })
  }

  const save = (item) => {
    dispatch({
      type: isCreate ? productCrudState.CREATE : productCrudState.UPDATE,
      payload: { item, pathParams }
    })
  }

  const remove = (item) => {
    dispatch({
      type: productCrudState.DELETE,
      payload: { item, pathParams }
    })
  }

  const setAction = (action: ActionTypeEnum, item?: any) => {
    dispatch({
      type: productCrudState.SET_ACTION,
      payload: { action, item, pathParams }
    })
  }

  const toShow = (item) => {
    setAction(ActionTypeEnum.SHOW, item);
  }
  const toCreate = (item) => {
    setAction(ActionTypeEnum.CREATE, item);
  }
  const toEdit = (item) => {
    setAction(ActionTypeEnum.EDIT, item);
  }
  const toRemove = (item) => {
    setAction(ActionTypeEnum.REMOVE, item);
  }

  const handleClose = () => {
    setAction(ActionTypeEnum.LIST);
  }

  const handleRemoveConfirm = () => {
    remove(selected);
  }

  const handleOnSubmit = (values) => {
    save(values)
  }

  // effect
  useEffect(() => {
    if (action === ActionTypeEnum.LIST) {
      fetch(fetchParams)
    }
  }, [action, fetchParams])


  return (<React.Fragment>
    <ProductTable
      rows={rows}
      fixedFields={fixedFields}
      show={toShow}
      create={toCreate}
      edit={toEdit}
      remove={toRemove}
    />
    <Dialog
      open={isModalOpen}
      onClose={handleClose}
      className="crud-dialog"
      aria-labelledby="crud-dialog-title"
      aria-describedby="crud-dialog-description"
      maxWidth="md"
    >
      <DialogTitle id="crud-dialog-title">
        {dialogTitle}
      </DialogTitle>
      <DialogContent>
        {showModalForm
          ? <ProductForm
            {...props}
            fixedFields={fixedFields}
            hiddenFields={hiddenFields}
            value={selected}
            disabled={modalFormDisabled}
            onSubmit={handleOnSubmit}
            id={formId}
          />
          : null}
        {isRemove ? <DialogContentText id="crud-dialog-description">{removeModalText}</DialogContentText> : null}
      </DialogContent>
      {isRemove ? (
        <DialogActions>
          <Button onClick={handleRemoveConfirm}>
            Sim{/* // i18n */}
          </Button>
          <Button onClick={handleClose} autoFocus>
            Não{/* // i18n */}
          </Button>
        </DialogActions>
      ) : (
        <DialogActions>
          {!isShow ? <Button type="submit" form={formId} >Salvar</Button> : null}
          <Button onClick={handleClose} autoFocus>
            Voltar{/* // i18n */}
          </Button>
        </DialogActions>)
      }

    </Dialog>
  </React.Fragment>);
}
export default ProductCrud;