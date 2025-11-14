# Step-by-Step: Deploy to Vercel

## Method 1: Using Vercel Dashboard (Easiest - No Git Required)

### Step 1: Prepare Your Files
1. Open Finder
2. Go to your Downloads folder
3. Find the `trezor-dashboard-vercel` folder
4. **Zip the folder:**
   - Right-click on `trezor-dashboard-vercel` folder
   - Select "Compress trezor-dashboard-vercel"
   - This creates `trezor-dashboard-vercel.zip`

### Step 2: Go to Vercel
1. Open your browser
2. Go to [vercel.com](https://vercel.com)
3. Click "Sign Up" or "Log In"
   - You can sign in with GitHub, GitLab, Bitbucket, or email

### Step 3: Create New Project
1. After logging in, you'll see your dashboard
2. Click the **"Add New..."** button (top right)
3. Select **"Project"** from the dropdown

### Step 4: Import Project
You have two options:

**Option A: Upload ZIP file (if available)**
- Some Vercel interfaces allow direct ZIP upload
- If you see "Upload" or "Browse" button, click it
- Select your `trezor-dashboard-vercel.zip` file

**Option B: Use Vercel CLI (Recommended - More Reliable)**

Since Vercel web interface may not support direct folder upload, use the CLI:

1. **Open Terminal** (Applications → Utilities → Terminal)

2. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```
   (If you don't have npm, install Node.js from nodejs.org first)

3. **Navigate to your project**:
   ```bash
   cd ~/Downloads/trezor-dashboard-vercel
   ```

4. **Login to Vercel**:
   ```bash
   vercel login
   ```
   - This will open your browser to authenticate
   - Follow the prompts to authorize

5. **Deploy**:
   ```bash
   vercel
   ```
   - When asked "Set up and deploy?", type **Y** and press Enter
   - When asked "Which scope?", select your account (usually just press Enter)
   - When asked "Link to existing project?", type **N** and press Enter
   - When asked "What's your project's name?", press Enter for default or type a name
   - When asked "In which directory is your code located?", press Enter (current directory)
   - When asked about settings, press Enter for defaults

6. **Done!** Vercel will give you a URL like:
   ```
   https://trezor-dashboard-xxxxx.vercel.app
   ```

---

## Method 2: Using GitHub (Best for Updates)

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Name it: `trezor-dashboard`
4. Make it **Public** or **Private** (your choice)
5. **Don't** initialize with README
6. Click **"Create repository"**

### Step 2: Upload Files to GitHub
1. On the new repository page, you'll see instructions
2. Open Terminal and run:
   ```bash
   cd ~/Downloads/trezor-dashboard-vercel
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/trezor-dashboard.git
   git push -u origin main
   ```
   (Replace `YOUR-USERNAME` with your GitHub username)

### Step 3: Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. You'll see your GitHub repositories
4. Find `trezor-dashboard` and click **"Import"**
5. Configure:
   - Framework Preset: **Other**
   - Root Directory: **./** (leave as is)
6. Click **"Deploy"**
7. Wait 1-2 minutes
8. Your site is live!

---

## Quick Reference Commands

If you want to use CLI (fastest method):

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Go to project folder
cd ~/Downloads/trezor-dashboard-vercel

# 3. Login (first time only)
vercel login

# 4. Deploy
vercel

# 5. For future updates, just run:
vercel
```

---

## Troubleshooting

**"npm: command not found"**
- Install Node.js from [nodejs.org](https://nodejs.org)
- Restart Terminal after installation

**"vercel: command not found"**
- Make sure you ran: `npm install -g vercel`
- Try: `sudo npm install -g vercel` (if permission issues)

**Need to update your site?**
- Just run `vercel` again in the project folder
- Or push changes to GitHub (if using Method 2)

