import React, { useMemo } from 'react';
import { ItemOfferCrud } from '../../../../components/Module/Group/ItemOfferCrud';
import { ItemOfferTypeEnum } from '../../../../enums/Entity/ItemOfferType.enum';
import { getSetGroup } from '../../../../hooks/Module/Group/Set';
import { FetchFilter } from '../../../../types/Fetch/FetchFilter';
import { FetchParams } from '../../../../types/Fetch/FetchParams';

/**
 * GroupItemOfferSupply
 *   GroupItemOfferSupply component
 * @param {any}  props Properties
 * @return {React.Component} GroupItemOfferSupply Component
 */
export const GroupItemOfferSupply = (props: any) => {
  const setGroup = getSetGroup();
  const pathParams = useMemo(() => setGroup ? ({ group: setGroup.id }) : null, [setGroup]);

  const type = ItemOfferTypeEnum.supply;

  const fixedFields = ({ type: true });
  const hiddenFields = ({ type: true });

  const fetchFilter = useMemo(() => {
    return ({ type }) as FetchFilter;
  }, [props])

  const fetchParams = useMemo(() => {
    return ({ filter: fetchFilter }) as FetchParams;
  }, [fetchFilter])

  return (<ItemOfferCrud
    {...props}
    fetchParams={fetchParams}
    pathParams={pathParams}
    fixedFields={fixedFields}
    hiddenFields={hiddenFields} />);
}
export default GroupItemOfferSupply;