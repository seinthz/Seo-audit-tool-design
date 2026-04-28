# 🔧 5-Minute SEO Audit Tool (Browser-Based)

A lightweight SEO audit tool that runs directly in the browser — no subscriptions, no login, no dependencies.

Built with vanilla JavaScript + React UI.

---

## 🚀 Live Demo

👉 https://your-tool.vercel.app  
https://seo-audit-tool-design.vercel.app/
---

## 🧠 Why This Exists

Organic search drives ~33% of all website traffic — yet nearly half of websites fail Core Web Vitals.

Most of these issues are simple.

This tool helps you quickly diagnose common SEO leaks in under 5 minutes.

---

## ✅ What It Checks

- Missing or duplicate meta descriptions  
- Images without `alt` text  
- H1 tag count (should be exactly one)  
- Page title length (optimal: 40–60 characters)  
- Internal link count  

---

## ⚙️ How It Works

The audit runs in 3 simple steps:

1. Fetch the page HTML (via backend proxy to avoid CORS)
2. Parse HTML into a DOM
3. Run audit rules and return structured results

---

## 🛠️ Tech Stack

- React (UI)
- Vanilla JavaScript (logic)
- Serverless function (for HTML fetching)
- Tailwind-style utility classes (UI styling)

---

## 📦 Installation (Local Setup)

Clone the repo:

```bash
git clone https://github.com/yourusername/seo-audit-tool.git
cd seo-audit-tool
