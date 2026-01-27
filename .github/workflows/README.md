# GitHub Actions Workflows

This directory contains CI/CD workflows for automated testing and deployment.

## Workflows

### 1. `ci.yml` - Continuous Integration
- **Triggers**: Push to `main`/`develop` or Pull Requests
- **Purpose**: Build and test the application
- **Actions**:
  - Installs dependencies
  - Runs linter
  - Builds the project
  - Uploads build artifacts

### 2. `deploy-github-pages.yml` - Deploy to GitHub Pages
- **Triggers**: Push to `main` branch
- **Purpose**: Automatically deploy to GitHub Pages
- **Requirements**: 
  - GitHub Pages must be enabled in repository settings
  - Repository must have Pages permissions enabled

### 3. `deploy-vercel.yml` - Deploy to Vercel
- **Triggers**: Push to `main` branch
- **Purpose**: Deploy to Vercel via GitHub Actions
- **Requirements**:
  - Vercel account
  - `VERCEL_TOKEN` secret in GitHub repository

## Setup Instructions

### For GitHub Pages:
1. Go to repository Settings → Pages
2. Enable GitHub Pages
3. Select `main` branch and `/ (root)` folder
4. The workflow will automatically deploy on push

### For Vercel:
1. Create Vercel account and get API token
2. Go to repository Settings → Secrets → Actions
3. Add secret: `VERCEL_TOKEN` with your Vercel token
4. The workflow will automatically deploy on push

## Manual Trigger

All workflows can be manually triggered:
1. Go to Actions tab in GitHub
2. Select the workflow
3. Click "Run workflow"
