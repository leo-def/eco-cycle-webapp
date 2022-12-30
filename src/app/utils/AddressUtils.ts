export class AddressUtils {
  static clearZipCode(code?: string): string | undefined {
    return code ? code.replace(/[^0-9]/g, '') : undefined;
  }
}