declare module '*/test.json' 
{ // 指定したいJSONファイルのpath
    interface Test {
        id: string;
        viewCount: string;
        description: string;
    }
  
    const value: Test;
    export = value;
}