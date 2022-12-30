/**
 * ThemeService, class representing a theme management.
 */
export class ThemeService {
  static getTheme () {
    const theme = localStorage.getItem('theme')
    return Promise.resolve(theme ? JSON.parse(theme) : null)
  }

  static setTheme (value: any) {
    localStorage.setItem(
      'theme',
      JSON.stringify(value)
    )
    return Promise.resolve(value)
  }

  static removeTheme () {
    const theme = ThemeService.getTheme()
    localStorage.removeItem('theme')
    return Promise.resolve(theme)
  }

  set (val: any) {
    return ThemeService.setTheme(val)
  }

  /**
   * LoadStorage, Use storage info for configure, if it exists.
   * @return {any} Theme info.
   */
  load () {
    return ThemeService.getTheme()
  }
}

export default new ThemeService()
