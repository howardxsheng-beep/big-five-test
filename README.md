# 五型人格測驗網站
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev/)  [![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite)](https://vitejs.dev/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

這是一個以 五大人格特質（Big Five） 為主題的互動式心理測驗網站。使用者從 Landing Page 進入測驗流程，逐題作答後，系統會依照各題分數累加並換算成五大特質的總分，最後導向結果頁呈現個人特質分析與對應文字敘述。
### 網站連結：https://howardxsheng-beep.github.io/big-five-test/ 



## 使用技術 

核心框架（Core）
	•	React 19.2

建構工具（Build Tool）
	•	Vite 7.2

路由管理（Routing）
	•	React Router 7.12

樣式處理（Styling）
	•	Tailwind CSS 4.1

資料請求（HTTP Client）
	•	Axios 1.13


部署（Deployment）
	•	GitHub Pages
	•	gh-pages 6.3

## 專案結構說明
```
big-five-test/
│
├─ public/               # 公用靜態資源（不經 Vite 打包處理）
│
├─ src/
│  ├─ api/               # API 與資料請求相關模組
│  │  ├─ axios.js        # Axios 設定
│  │  └─ fetchData.js    # 五大人格測驗資料請求邏輯
│  │
│  ├─ assets/
│  │  └─ imgs/           # 頁面與結果頁背景圖片
│  │
│  ├─ data/result/
│  │  └─ data.js         # Result page 背景圖對應的 Tailwind bg class
│  │
│  ├─ pages/
│  │  ├─ Landing/        # Landing Page（首頁）
│  │  ├─ Question/       # 問卷頁（題目流程、左右面板、選項）
│  │  └─ Result/         # 結果頁（人格分析與呈現）
│  │
│  ├─ App.jsx            # Router 與頁面切換
│  ├─ main.jsx           # 專案入口點（HashRouter）
│  └─ index.css          # 全域樣式與 Tailwind 設定入口
│
├─ .gitignore            # Git 忽略清單（node_modules 等）
├─ eslint.config.js      # ESLint 規範設定
├─ index.html            # SPA 單一入口，負責載入 React 應用
├─ vite.config.js        # Vite 插件與路徑配置
├─ package.json          # 專案套件與指令設定
└─ package-lock.json     # 套件鎖定檔
```


## 專案啟動
環境需求（Requirements）

請先確認你的電腦已安裝以下環境：
	•	Node.js（建議 v18 以上）
	•	npm（通常會隨 Node.js 一起安裝）
## 安裝與啟動（Clone & Run）
### 1. Clone 專案
```bash
git clone https://github.com/howardxsheng-beep/big-five-test.git
```
進入專案資料夾
```
cd big-five-test
```
### 2. 安裝相依套件
```
npm install
```
### 3. 啟動開發環境
```
npm run dev
```