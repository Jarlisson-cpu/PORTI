# Portfólio — Publicação no GitHub

Instruções rápidas para publicar este projeto estático no GitHub Pages e garantir que tudo funcione sem erros.

Requisitos
- Navegador moderno (Chrome / Edge / Firefox)

Como publicar
1. Crie um repositório no GitHub (por exemplo, `meu-portfolio`).
2. Copie todo o conteúdo da pasta `portifolio/` para o repositório (o diretório que contém `index.html`).
3. Faça commit e `push` para o branch `main`.
4. No GitHub: `Settings` → `Pages` → selecione `Deploy from a branch` → escolha `main` e `/ (root)` → `Save`.

Notas para evitar erros
- Todos os caminhos são relativos (no root). Certifique-se de enviar **todas** as pastas listadas, incluindo `assets/` e suas subpastas.
- Arquivos importantes:
  - `index.html` (página principal)
  - `style.css`, `style2.css`, `style3.css`, `style4.css`
  - `script.js`, `script2.js`, `script3.js`, `script4.js`
  - `assets/` (imagens, audio)
- Evite nomes de arquivos com acentos ou espaços para reduzir problemas de encoding. Se tiver arquivos com espaços (ex.: `atividade 1`), o GitHub Pages pode servir, mas é mais seguro renomear para `atividade-1`.

Testes locais
- Abra `index.html` diretamente (duplo clique) para um teste rápido.
- Para testes mais próximos ao ambiente de servidores, rode um servidor estático local no PowerShell:

```powershell
# No diretório do projeto
python -m http.server 8000
# Depois abra: http://localhost:8000
```

Se aparecerem erros no Console (F12 → Console), copie o erro aqui para eu ajudar a corrigir.

Se quiser, eu posso:
- Ajustar nomes de arquivos e caminhos para evitar espaços/acento; 
- Adicionar `CNAME` ou `.nojekyll` caso use recursos específicos.

---
Arquivo gerado automaticamente para ajudar a publicar o projeto.
