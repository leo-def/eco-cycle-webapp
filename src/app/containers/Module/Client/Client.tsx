import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';
import { ClientItemOfferCollect } from './ItemOffer/ClientItemOfferCollect';
import { ClientItemOfferSupply } from './ItemOffer/ClientItemOfferSupply';

/**
 * Client
 * @param {any}  props Properties
 * @return {React.Component} Client Component
 */
export const Client = React.memo(() => {
  Client.displayName = 'Client';
  return (
    <Routes>
      <Route path="collect" element={<ClientItemOfferCollect />} />
      <Route path="supply" element={<ClientItemOfferSupply />} />
    </Routes>);
})
