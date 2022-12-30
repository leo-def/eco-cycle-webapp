

export function isFieldDisabled(name: number | string, props: any) {
  return (
    props.disabled ||
    (props.fixedFields && props.fixedFields[name])
  );
}

export function isFieldHidden(name: number | string, props: any) {
  return (
    (props.hiddenFields && props.hiddenFields[name]) ||
    (props.fixedFields && props.fixedFields[name])
  );
}

/**
 * Metodo para obter o name do campo consierando o caminho no formulário
 *   inserindo o prefixed antes do name do campo
 * @param {string} name Nome do campo
 * @param {any}  props Properties
 * @return {string} Nome completo do campo
 */
export function getFieldName(name: number | string | null, props: any, index = null as any) {
  return [
    props.name,
    (props.index === 0 || index === 0) ? 0 : (props.index || index),
    (name ? String(name) : null)
  ].filter((val) => val !== null && val !== undefined).join('.') || '';
}

/**
 * Metodo para obter o name do fomulário consierando o caminho no formulário
 * @param {any}  props Properties
 * @return {string} Nome completo do formulário
 */
export function getFormName(props: any) {
  return getFieldName(null, props);
}