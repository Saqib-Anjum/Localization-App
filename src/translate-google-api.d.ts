declare module 'translate-google-api' {
    interface TranslateOptions {
      to: string;
      from?: string;
      raw?: boolean;
      client?: string;
      tld?: string;
      hl?: string;
      userAgent?: string;
      timeout?: number;
      [key: string]: any;
    }
  
    function translate(
      text: string | string[],
      options?: TranslateOptions
    ): Promise<string[]>;
  
    export = translate;
  }
  