export class FetchState {

  constructor(
    public config: any = null,
    public name: string = 'ITEM',
    public SET_FETCH_PARAMS: string = 'SET_FETCH_PARAMS_ITEM',
    public CLEAR: string = 'CRUD_CLEAR_ITEM',

    // FETCH CREATE DELETE UPDATE
    public FETCH: string = 'FETCH_ITEM',
    public FETCH_WITH_DEBOUNCE: string = 'FETCH_WITH_DEBOUNCE_ITEM',
    
    // PENDING - FETCH CREATE DELETE UPDATE
    public FETCH_PENDING: string = 'FETCH_ITEM_PENDING',
    public FETCH_WITH_DEBOUNCE_PENDING: string = 'FETCH_WITH_DEBOUNCE_ITEM_PENDING',

    // SUCCESS - FETCH CREATE DELETE UPDATE
    public FETCH_SUCCESS: string = 'FETCH_ITEM_SUCCESS',
    public FETCH_WITH_DEBOUNCE_SUCCESS: string = 'FETCH_WITH_DEBOUNCE_ITEM_SUCCESS',

    // FAILURE - FETCH CREATE DELETE UPDATE
    public FETCH_FAILURE: string = 'FETCH_ITEM_FAILURE',
    public FETCH_WITH_DEBOUNCE_FAILURE: string = 'FETCH_WITH_DEBOUNCE_ITEM_FAILURE') {
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
    this.SET_FETCH_PARAMS = (config.SET_FETCH_PARAMS || `SET_FETCH_PARAMS_${name}`);
    this.CLEAR = (config.CLEAR || `CRUD_CLEAR_${name}`);

    // FETCH CREATE DELETE UPDATE
    this.FETCH = (config.FETCH || `FETCH_${name}`);
    this.FETCH_WITH_DEBOUNCE = (config.FETCH_WITH_DEBOUNCE || `FETCH_WITH_DEBOUNCE_${name}`);
    // PENDING - FETCH CREATE DELETE UPDATE 
    this.FETCH_PENDING = (config.FETCH_PENDING || `FETCH_${name}_PENDING`);
    this.FETCH_WITH_DEBOUNCE_PENDING = (config.FETCH_WITH_DEBOUNCE_PENDING || `FETCH_WITH_DEBOUNCE_${name}_PENDING`);

    // SUCCESS - FETCH CREATE DELETE UPDATE
    this.FETCH_SUCCESS = (config.FETCH_SUCCESS || `FETCH_${name}_SUCCESS`);
    this.FETCH_WITH_DEBOUNCE_SUCCESS = (config.FETCH_WITH_DEBOUNCE_SUCCESS || `FETCH_WITH_DEBOUNCE_${name}_SUCCESS`);

    // FAILURE - FETCH CREATE DELETE UPDATE
    this.FETCH_FAILURE = (config.FETCH_FAILURE || `FETCH_${name}_FAILURE`);
    this.FETCH_WITH_DEBOUNCE_FAILURE = (config.FETCH_WITH_DEBOUNCE_FAILURE || `FETCH_WITH_DEBOUNCE_${name}_FAILURE`);

    return this;
  }
}
