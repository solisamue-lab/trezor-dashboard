#!/bin/bash

# Script to push TREZOR Dashboard to GitHub
# Replace YOUR-USERNAME and REPOSITORY-NAME with your actual values

echo "🚀 Pushing TREZOR Dashboard to GitHub..."
echo ""

# Change to project directory
cd ~/Downloads/trezor-dashboard-vercel

# Check if remote exists
if git remote | grep -q origin; then
    echo "Remote 'origin' already exists. Updating..."
    git remote set-url origin https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
else
    echo "Adding remote 'origin'..."
    git remote add origin https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
fi

# Push to GitHub
echo ""
echo "Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! Your code is now on GitHub."
echo ""
echo "Next steps:"
echo "1. Go to vercel.com"
echo "2. Click 'Add New' → 'Project'"
echo "3. Import your GitHub repository"
echo "4. Deploy!"

