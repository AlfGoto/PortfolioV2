export class QueryManager {
  private paramName: string;

  constructor(paramName: string) {
    this.paramName = paramName;
    this.updateUrl = this.updateUrl.bind(this);
  }

  value(): string | null {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(this.paramName);
  }

  set(value: string): void {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(this.paramName, value);
    this.updateUrl(searchParams.toString());
  }

  delete(): void {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete(this.paramName);
    this.updateUrl(searchParams.toString());
  }

  private updateUrl(searchString: string): void {
    const newUrl = `${window.location.pathname}?${searchString}`;
    window.history.pushState({}, "", newUrl);
  }
}
