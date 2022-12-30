import i18n from 'i18next';
/**
 * TraducaoService
 */
export class TraducaoService {

  /**
  * traduzir
  * @param {{item, value, idioma, defaults}}  props Properties
  * @return {React.Component} valor traduzido
  */
  static traduzir(props: any) {
    const idioma = props.idioma || props.language || i18n.language;
    const value = (props.item ? props.item[props.value] : props.value) || [];

    if (value && typeof value === 'string') {
      return value;
    }
    if (!idioma || !value) {
      return '';
    }
    const traducaoObj =
      idioma
        ? value.find((item) =>
          item &&
          TraducaoService.compare(item.idioma, idioma)
        ) || (props.defaults ? value[0] : null)
        : (props.defaults ? value[0] : null);

    const traducao = traducaoObj ? (traducaoObj.traducao || '') : '';
    return traducao;
  }

  static formatDate(date: Date, options?: any) {
    const idioma = i18n.language.toLowerCase();
    return date.toLocaleDateString(idioma, options);
  }

  static formatTime(date: Date, options?: any) {
    const idioma = i18n.language.toLowerCase();
    return date.toLocaleTimeString(idioma, options);
  }

  static formatNumber(number: number, options?: any) {
    const idioma = i18n.language.toLowerCase();
    return number.toLocaleString(idioma, options);
  }

  static formatCurrency(number: number, options?: any) {
    const idioma = i18n.language.toLowerCase();
    number = number || 0;
    if(!options || !options.currency) {
      return TraducaoService.formatNumber(number, options);
    }
    return number.toLocaleString(idioma, { style: 'currency', ...options });
  }

  static formatDecimalNumber(number: number, options?: any) {
    return TraducaoService.formatCurrency(number, options);
  }

  static getOptions(options) {
    return (options || []).map(val => val.codigo || val).filter(val => val);
  }

  static compare(a, b) {
    if (!a || !b) {
      return false;
    }
    return (
      a === b ||
      TraducaoService.resume(a) === TraducaoService.resume(b)
    );
  }

  static find(list, language, defaults = false) {
    const finded = (list || []).find(val => TraducaoService.compare(val, language));
    return (finded || (defaults ? list[0] : null));
  }

  static resume(language) {
    return language ? language.toString().toLowerCase().split('-')[0] : null;
  }

}