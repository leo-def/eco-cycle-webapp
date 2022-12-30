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
import { ActionTypeEnum } from '../../../enums/Crud/ActionTypeEnum.enum';
import { PhysicalQuantityForm } from '../../Shared/Entity/Measure/PhysicalQuantity/PhysicalQuantityForm';
import { PhysicalQuantityTable } from '../../Shared/Entity/Measure/PhysicalQuantity/PhysicalQuantityTable';
import { physicalQuantityCrudState } from '../../../reducers/Module/Admin/PhysicalQuantity/Crud';

/**
 * PhysicalQuantityCrud
 *   PhysicalQuantityCrud component
 * @param {any}  props Properties
 * @return {React.Component} PhysicalQuantityCrud Component
 */
export const PhysicalQuantityCrud = (props: any) => {
  const { fetchParams, pathParams, fixedFields, hiddenFields } = props;
  const dispatch = useDispatch();

  const physicalQuantityCrudData = useSelector((state: RootState) => state.module.admin.physicalQuantity.crud);

  // data
  const fetchResponse = physicalQuantityCrudData.fetchResponse;
  const rows = fetchResponse?.items || [];
  const selected = physicalQuantityCrudData.item;
  const action = physicalQuantityCrudData.action;
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
  const formId = 'physicalQuantity-crud-form';
  // actions
  const fetch = (fetchParams) => {
    dispatch({
      type: physicalQuantityCrudState.FETCH,
      payload: { fetchParams, pathParams }
    })
  }

  const save = (item) => {
    dispatch({
      type: isCreate ? physicalQuantityCrudState.CREATE : physicalQuantityCrudState.UPDATE,
      payload: { item, pathParams }
    })
  }

  const remove = (item) => {
    dispatch({
      type: physicalQuantityCrudState.DELETE,
      payload: { item, pathParams }
    })
  }

  const setAction = (action: ActionTypeEnum, item?: any) => {
    dispatch({
      type: physicalQuantityCrudState.SET_ACTION,
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
    <PhysicalQuantityTable
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
          ? <PhysicalQuantityForm
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
export default PhysicalQuantityCrud;