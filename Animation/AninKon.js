const { app, BrowserWindow, Menu } = require('electron')

// Cria uma janela principal
let janela_principal

function criar_janela_principal() {
  // Cria a janela
  janela_principal = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Carrega o arquivo HTML da interface
  janela_principal.loadFile('index.html')

  // Abre o console do devtools
  janela_principal.webContents.openDevTools()

  // Quando a janela é fechada, limpa a referência à janela
  janela_principal.on('closed', () => {
    janela_principal = null
  })
}

// Quando o aplicativo está pronto, cria a janela principal
app.on('ready', criar_janela_principal)

// Quando todas as janelas são fechadas, encerra o aplicativo
app.on('window-all-closed', () => {
  // No macOS é comum manter aplicativos ativos até que o usuário os feche explicitamente
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // No macOS é comum recriar uma janela quando o ícone do aplicativo é clicado e não há janel
}