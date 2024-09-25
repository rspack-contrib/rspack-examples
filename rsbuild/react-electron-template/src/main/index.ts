import { app, BrowserWindow } from 'electron';
import path from 'path';

export const isDev = !app.isPackaged;
export let mainWindow: BrowserWindow | null = null;

const loadUrl: string = isDev
  ? `http://localhost:${process.env.PORT}`
  : `file://${path.resolve(__dirname, '../render/index.html')}`;

const handleCreateMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    minWidth: 1000,
    height: 700,
    minHeight: 700,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      webSecurity: false,
      webviewTag: true,
      preload: path.resolve(__dirname, './preload.js'),
    },
  });
  mainWindow.loadURL(loadUrl);
};

app.on('ready', async () => {
  handleCreateMainWindow();
});
