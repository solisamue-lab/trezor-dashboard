# Deploy to GitHub → Vercel (Complete Guide)

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in:
   - **Repository name**: `trezor-dashboard` (or any name you want)
   - **Description**: "TREZOR Dashboard with Telegram integration"
   - **Visibility**: Choose Public or Private
   - **DO NOT** check "Initialize with README" (we already have files)
4. Click **"Create repository"**

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
cd ~/Downloads/trezor-dashboard-vercel

# Add your GitHub repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/trezor-dashboard.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**OR if you want me to do it for you, provide your:**
- GitHub username
- Repository name you created

## Step 3: Deploy to Vercel from GitHub

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. You'll see your GitHub repositories
4. Find `trezor-dashboard` and click **"Import"**
5. Configure:
   - **Project Name**: Change it here! (see below for how to change later)
   - **Framework Preset**: **Other**
   - **Root Directory**: `./` (leave as is)
6. Click **"Deploy"**
7. Wait 1-2 minutes
8. Your site is live!

## How to Change Vercel Project Name

### Method 1: During Import (First Time)
- When importing from GitHub, you'll see **"Project Name"** field
- Type your desired name (e.g., `trezor-wallet`, `my-trezor-dash`)
- Click Deploy

### Method 2: After Deployment (Change Later)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **"Settings"** tab
4. Click **"General"** in the left sidebar
5. Find **"Project Name"** section
6. Click **"Edit"** next to the project name
7. Type your new name
8. Click **"Save"**

**Note:** Changing the name will change your URL:
- Old: `https://trezor-dashboard-xxxxx.vercel.app`
- New: `https://your-new-name-xxxxx.vercel.app`

### Method 3: Using Vercel CLI

```bash
# In your project folder
cd ~/Downloads/trezor-dashboard-vercel

# Rename project
vercel --name your-new-project-name
```

## Your Vercel URL Format

After deployment, your site will be at:
- `https://YOUR-PROJECT-NAME.vercel.app`

You can also add a custom domain in Vercel Settings → Domains

## Quick Commands Reference

```bash
# Navigate to project
cd ~/Downloads/trezor-dashboard-vercel

# Check git status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push

# Vercel will auto-deploy when you push to GitHub!
```

