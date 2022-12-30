export class CrudState {

  constructor(
    public config: any = null,
    public name: string = 'ITEM',
    // ACTIONS
    public SET_ITEM: string = 'CRUD_SET_ITEM_VAL',
    public SET_ACTION: string = 'CRUD_SET_ACTION_ITEM',
    public SET_FETCH_PARAMS: string = 'CRUD_SET_FETCH_PARAMS_ITEM',
    public CLEAR: string = 'CRUD_CLEAR_ITEM',

    // FETCH CREATE DELETE UPDATE
    public FETCH: string = 'CRUD_FETCH_ITEM',
    public CREATE: string = 'CRUD_CREATE_ITEM',
    public DELETE: string = 'CRUD_DELETE_ITEM',
    public UPDATE: string = 'CRUD_UPDATE_ITEM',
    public FIND: string = 'CRUD_FIND_ITEM',

    // PENDING - FETCH CREATE DELETE UPDATE
    public FETCH_PENDING: string = 'CRUD_FETCH_ITEM_PENDING',
    public CREATE_PENDING: string = 'CRUD_CREATE_ITEM_PENDING',
    public DELETE_PENDING: string = 'CRUD_DELETE_ITEM_PENDING',
    public UPDATE_PENDING: string = 'CRUD_UPDATE_ITEM_PENDING',
    public FIND_PENDING: string = 'CRUD_FIND_ITEM_PENDING',

    // SUCCESS - FETCH CREATE DELETE UPDATE
    public FETCH_SUCCESS: string = 'CRUD_FETCH_ITEM_SUCCESS',
    public CREATE_SUCCESS: string = 'CRUD_CREATE_ITEM_SUCCESS',
    public DELETE_SUCCESS: string = 'CRUD_DELETE_ITEM_SUCCESS',
    public UPDATE_SUCCESS: string = 'CRUD_UPDATE_ITEM_SUCCESS',
    public FIND_SUCCESS: string = 'CRUD_FIND_ITEM_SUCCESS',

    // FAILURE - FETCH CREATE DELETE UPDATE
    public FETCH_FAILURE: string = 'CRUD_FETCH_ITEM_FAILURE',
    public CREATE_FAILURE: string = 'CRUD_CREATE_ITEM_FAILURE',
    public DELETE_FAILURE: string = 'CRUD_DELETE_ITEM_FAILURE',
    public UPDATE_FAILURE: string = 'CRUD_UPDATE_ITEM_FAILURE',
    public FIND_FAILURE: string = 'CRUD_FIND_ITEM_FAILURE') {
    if (config) {
      this.load(config);
    }
  }

  load(config: any = {}) {
    let name = 'ITEM';
    if (config && typeof config === 'string') {
      name = config.toUpperCase();
      config = { name };
    }
    this.name = name;
    this.config = config;
    this.SET_ITEM = (config.SET_ITEM || `CRUD_SET_ITEM_${name}`);
    this.SET_ACTION = (config.SET_ACTION || `CRUD_SET_ACTION_${name}`);
    this.SET_FETCH_PARAMS = (config.SET_FETCH_PARAMS || `CRUD_SET_FETCH_PARAMS_${name}`);
    this.CLEAR = (config.CLEAR || `CRUD_CLEAR_${name}`);

    // FETCH CREATE DELETE UPDATE
    this.FETCH = (config.FETCH || `CRUD_FETCH_${name}`);
    this.CREATE = (config.CREATE || `CRUD_CREATE_${name}`);
    this.DELETE = (config.DELETE || `CRUD_DELETE_${name}`);
    this.UPDATE = (config.UPDATE || `CRUD_UPDATE_${name}`);
    this.FIND = (config.FIND || `CRUD_FIND_${name}`);

    // PENDING - FETCH CREATE DELETE UPDATE 
    this.FETCH_PENDING = (config.FETCH_PENDING || `CRUD_FETCH_${name}_PENDING`);
    this.CREATE_PENDING = (config.CREATE_PENDING || `CRUD_CREATE_${name}_PENDING`);
    this.DELETE_PENDING = (config.DELETE_PENDING || `CRUD_DELETE_${name}_PENDING`);
    this.UPDATE_PENDING = (config.UPDATE_PENDING || `CRUD_UPDATE_${name}_PENDING`);
    this.FIND_PENDING = (config.FIND_PENDING || `CRUD_FIND_${name}_PENDING`);

    // SUCCESS - FETCH CREATE DELETE UPDATE
    this.FETCH_SUCCESS = (config.FETCH_SUCCESS || `CRUD_FETCH_${name}_SUCCESS`);
    this.CREATE_SUCCESS = (config.CREATE_SUCCESS || `CRUD_CREATE_${name}_SUCCESS`);
    this.DELETE_SUCCESS = (config.DELETE_SUCCESS || `CRUD_DELETE_${name}_SUCCESS`);
    this.UPDATE_SUCCESS = (config.UPDATE_SUCCESS || `CRUD_UPDATE_${name}_SUCCESS`);
    this.FIND_SUCCESS = (config.FIND_SUCCESS || `CRUD_FIND_${name}_SUCCESS`);

    // FAILURE - FETCH CREATE DELETE UPDATE
    this.FETCH_FAILURE = (config.FETCH_FAILURE || `CRUD_FETCH_${name}_FAILURE`);
    this.CREATE_FAILURE = (config.CREATE_FAILURE || `CRUD_CREATE_${name}_FAILURE`);
    this.DELETE_FAILURE = (config.DELETE_FAILURE || `CRUD_DELETE_${name}_FAILURE`);
    this.UPDATE_FAILURE = (config.UPDATE_FAILURE || `CRUD_UPDATE_${name}_FAILURE`);
    this.FIND_FAILURE = (config.FIND_FAILURE || `CRUD_FIND_${name}_FAILURE`);

    return this;
  }
}
