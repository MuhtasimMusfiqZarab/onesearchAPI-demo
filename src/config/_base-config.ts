export abstract class BaseConfig {
  // <{ [key: string]: string | undefined }> is the type definition for any environment variable
  private env: { [key: string]: string | undefined };
  constructor(e: { [key: string]: string | undefined }) {
    this.env = e;
  }

  // throwOnMissing is being used if the environment variable is missing in the .env file
  public getValue(key: string, throwOnMissing = true): string {
    const value: string = this.env[key] || '';
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }
    return value;
  }

  // ensuring if the given environment variables have values assigned to them
  public ensureValues(keys: string[]) {
    keys.forEach(key => this.getValue(key, true));
    return this;
  }
}
