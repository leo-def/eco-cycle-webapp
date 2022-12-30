import React, { useMemo } from 'react';
import { ItemOfferCrud } from '../../../../components/Module/Client/ItemOfferCrud';
import { ItemOfferTypeContext } from '../../../../contexts/Module/ItemOfferTypeContext';
import { ItemOfferTypeEnum } from '../../../../enums/Entity/ItemOfferType.enum';
import { FetchFilter } from '../../../../types/Fetch/FetchFilter';
import { FetchParams } from '../../../../types/Fetch/FetchParams';

/**
 * ClientItemOfferCollect
 *   ClientItemOfferCollect component
 * @param {any}  props Properties
 * @return {React.Component} ClientItemOfferCollect Component
 */
export const ClientItemOfferCollect = (props: any) => {

  const type = ItemOfferTypeEnum.collect;

  const hiddenFields = ({ type: true });

  const fetchFilter = useMemo(() => {
    return ({ type }) as FetchFilter;
  }, [props])

  const fetchParams = useMemo(() => {
    return ({ filter: fetchFilter }) as FetchParams;
  }, [fetchFilter])

  return (<ItemOfferTypeContext.Provider value={{ type }} >
    <ItemOfferCrud
      {...props}
      fetchParams={fetchParams}
      hiddenFields={hiddenFields} />
  </ItemOfferTypeContext.Provider>);
}
export default ClientItemOfferCollect;
