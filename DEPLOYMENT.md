# Deployment Instructions

## Option 1: Deploy to AWS S3 (Recommended - Simple & Free)

### Step 1: Create S3 Bucket
1. Go to [AWS Console](https://console.aws.amazon.com/)
2. Sign in or create an account
3. Search for "S3" in the services
4. Click "Create bucket"
5. Enter a unique bucket name (e.g., `trezor-dashboard-yourname`)
6. Choose a region (closest to you)
7. **Uncheck "Block all public access"** (important!)
8. Acknowledge the warning
9. Click "Create bucket"

### Step 2: Configure Bucket for Static Website Hosting
1. Click on your bucket name
2. Go to "Properties" tab
3. Scroll down to "Static website hosting"
4. Click "Edit"
5. Enable "Static website hosting"
6. Set:
   - **Index document**: `index.html`
   - **Error document**: `index.html` (for SPA routing)
7. Click "Save changes"

### Step 3: Set Bucket Policy (Make it Public)
1. Go to "Permissions" tab
2. Click "Bucket policy"
3. Paste this policy (replace `YOUR-BUCKET-NAME` with your actual bucket name):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
    ]
}
```

4. Click "Save changes"

### Step 4: Upload Files
1. Go to "Objects" tab in your bucket
2. Click "Upload"
3. Drag and drop all files from `trezor-dashboard-vercel` folder:
   - index.html
   - styles.css
   - script.js
   - trezor-logo.png
4. Click "Upload"

### Step 5: Get Your Website URL
1. Go to "Properties" tab
2. Scroll to "Static website hosting"
3. Copy the "Bucket website endpoint" URL
4. Your site is now live! (e.g., `http://your-bucket-name.s3-website-us-east-1.amazonaws.com`)

### Optional: Use Custom Domain
- You can configure a custom domain in Route 53 or CloudFront for a custom URL

---

## Option 2: Deploy to Vercel

### Method A: Using Vercel Dashboard (Easiest)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in (or create account with GitHub/Google)

2. **Create New Project**
   - Click "Add New..." → "Project"
   - If you have the files in a Git repo, import it
   - OR click "Browse" and select your `trezor-dashboard-vercel` folder

3. **Configure Project**
   - Project name: `trezor-dashboard` (or any name)
   - Framework Preset: "Other" (since it's static HTML)
   - Root Directory: Leave as is (or set to folder if needed)

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site will be live at: `https://your-project-name.vercel.app`

### Method B: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to Project**
   ```bash
   cd ~/Downloads/trezor-dashboard-vercel
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```

4. **Deploy**
   ```bash
   vercel
   ```
   - Follow prompts:
     - Set up and deploy? **Yes**
     - Which scope? (select your account)
     - Link to existing project? **No**
     - Project name? (press Enter for default)
     - Directory? (press Enter for current)
     - Override settings? **No**

5. **Your site is live!**
   - Vercel will give you a URL like: `https://trezor-dashboard-xxxxx.vercel.app`

### Method C: Using Git (Recommended for Updates)

1. **Initialize Git** (if not already)
   ```bash
   cd ~/Downloads/trezor-dashboard-vercel
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code:
   ```bash
   git remote add origin https://github.com/yourusername/trezor-dashboard.git
   git push -u origin main
   ```

3. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Every time you push to GitHub, Vercel auto-deploys!

---

## Comparison

**S3:**
- ✅ Free tier (5GB storage)
- ✅ Simple static hosting
- ✅ No build process needed
- ❌ Basic URL (unless you use CloudFront)
- ❌ Manual uploads for updates

**Vercel:**
- ✅ Free tier with custom domain
- ✅ Automatic HTTPS
- ✅ Better URL (yourproject.vercel.app)
- ✅ Auto-deploy from Git
- ✅ Global CDN
- ✅ Easy to update

**Recommendation:** Use **S3** if you want the simplest setup. Use **Vercel** if you want automatic deployments and a better URL.

