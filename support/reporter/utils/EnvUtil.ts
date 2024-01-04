export default class EnvUtil {
    public static setEnv() { 
        require('dotenv').config({
            path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env',
            override: process.env.NODE_ENV ? true : false,
        });

    }
    public static getBrowser(){
        return process.env.BROWSER || "Chrome"
    }
}