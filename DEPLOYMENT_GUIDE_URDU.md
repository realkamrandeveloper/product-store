# MERN Crash Course – Product Store

Ye project **Drive wali 8 videos** ke according banaya gaya hai (Product Store CRUD).

## 1) Requirements
- Node.js (recommended 18+)
- MongoDB Atlas (ya local MongoDB)

## 2) Local Setup (Run karna)

### Step A — Project download
Zip unzip kar ke folder me aajao:

```bash
cd mern-crash-course-product-store
```

### Step B — Env file
Root me `.env` banao (same level jahan `package.json` hai):

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
NODE_ENV=development
```

> **Note:** `.env.example` me format diya hua hai.

### Step C — Install dependencies
Root pe:

```bash
npm install
```

Is se root deps install honge + `postinstall` ki wajah se `frontend` ke deps bhi install ho jayenge.

### Step D — Dev mode run

```bash
npm run dev
```

- Backend: `http://localhost:5000`
- Frontend (Vite): terminal me jo URL aye (usually `http://localhost:5173`)

## 3) API Endpoints
- `GET /api/products`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

## 4) Deployment (Video 8 – Render.com) – Text Steps

### Step 1 — GitHub repo
1. GitHub pe new repo banao (public/private dono ok)
2. Root folder me:

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

> `.gitignore` me `.env` already ignored hai, so secrets push nahi honge.

### Step 2 — Render pe New Web Service
1. Render.com open karo
2. **New +** → **Web Service**
3. GitHub connect karo aur apna repo select karo

### Step 3 — Build & Start commands
Render settings:
- **Build Command:**
  ```bash
  npm run build
  ```
  (Render by default `npm install` run karta hai. Root `postinstall` frontend deps bhi install kar dega.)

- **Start Command:**
  ```bash
  npm start
  ```

### Step 4 — Environment Variables (Render)
Render service → **Environment** me ye variables add karo:
- `MONGO_URI` = MongoDB Atlas connection string
- `NODE_ENV` = `production`

(Optionally `PORT` Render khud set karta hai; aap omit bhi kar sakte ho.)

### Step 5 — Production behavior (important)
- `NODE_ENV=production` pe backend **frontend/dist** ko serve karta hai.
- Is ka matlab: deployed URL open karoge to frontend bhi wahi se chalega, aur API bhi same domain pe.

### Step 6 — Verify
Deploy complete hone ke baad:
- App open karo
- Create product (image URL + name + price)
- Home pe list + delete + edit modal check karo

## 5) Common Issues
- **MongoDB connect error:** `MONGO_URI` check karo + Atlas me IP allow (0.0.0.0/0 for dev) + username/password sahi.
- **Frontend API not working locally:** `frontend/vite.config.js` me `/api` proxy already `http://localhost:5000` pe set hai. Backend running hona zaroori.

