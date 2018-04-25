import { app, BrowserWindow } from "electron";

let windows;

function createWindow(){

    windows=new BrowserWindow({
        width:600,
        height:600,
        backgroundColor:"#ffffff"
    })
    windows.loadURL(`file://${__dirname}/dist/index.html`)
}
