import _ from 'lodash';

export interface IDTO {
  assign(target: any, source: any): any;
  fromJson(json: any): any;
  toJson(value?: any): any;
  fromForm(form: any): any;
  toForm(): any;
  toDTO(): any;
}

export class DTO implements IDTO {

  constructor(partial?: any) {
    this.fromJson(partial);
  }

  static resolveMapDTO(map: any, payload?: any, parser?: any) {
    parser = parser || ((val) => val);
    if (!payload) {
      return map;
    }
    Object.keys(payload).map((key => map[key] = parser(payload[key])));
  }

  static apply(obj: any, method: any, params?: any) {
    if (!obj || !obj[method]) {
      return null;
    }
    // eslint-disable-next-line prefer-spread
    return obj[method].apply(obj, params);
  }

  static fromJson(obj: any, json: any) {
    return DTO.apply(obj, 'fromJson', [json]) || JSON.parse(json);
  }

  static toJson(obj: any) {
    return DTO.apply(obj, 'toJson') || JSON.stringify(obj);
  }

  static fromForm(obj: any, json: any) {
    return DTO.apply(obj, 'fromForm', [json]) || JSON.parse(json);
  }

  static toForm(obj: any) {
    return DTO.apply(obj, 'toForm') || JSON.stringify(obj);
  }

  assign(target: any, source: any): any {
    target = target || this as any;
    // Object.assign(target, source)
    Object.keys(source).forEach(key => (target[key] = source[key]));
    return target;
  }

  fromJson(json: any): any {
    if (!json) { return this; }
    try {
      json = (typeof json === 'string') ? JSON.parse(json) : json;
      this.assign(this, json);
      // eslint-disable-next-line no-empty
    } catch (err) { }
    return this;
  }

  toJson(value?: any): any {
    return JSON.stringify(value || this);
  }

  fromForm(form: any): any {
    return this.fromJson(form);
  }

  toForm(): any {
    return this.toJson();
  }

  toDTO(): any {
    return _.clone(this) as any;
  }


}
