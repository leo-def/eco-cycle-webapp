
import { history } from '../../config/configureStore';

/**
 * NavService, class representing a navigation service.
 */
export class NavService {
  /**
   * NavigateTo, Navigate to new page in webapp.
   * @param {string} path - Path to navigate.
   */
  static navigateTo(path: string) {
    history.push(path);
  }

  /**
   * NavigateTo, Navigate to new page in webapp.
   * @param {string} path - Path to navigate.
   */
  navigateTo(path: string) {
    NavService.navigateTo(path);
  }
}
