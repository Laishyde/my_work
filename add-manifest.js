import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, "dist", "index.html");

// Ler o HTML gerado
let html = fs.readFileSync(indexPath, "utf8");

// Adicionar as tags de manifest e ícones após a tag <head>
const headTag = "<head>";
const newHeadContent = `<head>
  <link rel="manifest" href="/manifest.webmanifest" />
  <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
  <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <meta name="theme-color" content="#000000" />`;

html = html.replace(headTag, newHeadContent);

// Escrever o HTML modificado
fs.writeFileSync(indexPath, html);

console.log("Manifest e ícones adicionados ao HTML!");
