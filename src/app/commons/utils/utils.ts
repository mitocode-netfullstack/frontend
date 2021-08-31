export class Utils {
    static concatQueryUrl<T>(url: string, object: T): string {
        if (!object || Object.entries(object).length === 0) {
            return url;
        }
        url = url + '?';

        Object.entries(object).forEach(([key, value]) => {
            if (key && value) {
                url += `${key}=${value as string}&`;
            }
        });

        url = url.substring(0, url.length - 1);
        return url;
    }

    static isEmptyText(text: string): boolean {
        return text == undefined || text === null || text.trim() === '';
    }
}
