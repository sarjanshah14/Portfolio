---
description: How to deploy this portfolio to Vercel
---

This guide outlines the steps to deploy your Next.js portfolio to Vercel.

## Prerequisites

- A Vercel account ([Sign up here](https://vercel.com/signup))
- This repository pushed to GitHub (which you have already done)

## Deployment Steps

1.  **Log in to Vercel**: Go to [vercel.com](https://vercel.com) and log in.

2.  **Add New Project**:
    - Click on the "Add New..." button (usually top right) and select "Project".
    - Select "Continue with GitHub" if prompted.
    - Find your repository (`Portfolio`) in the list and click "Import".

3.  **Configure Project**:
    - **Framework Preset**: Vercel should automatically detect "Next.js". Leave this as is.
    - **Root Directory**: Ensure this is `Portfolio` (since your code is inside a `Portfolio` folder based on your file structure).
      - *Note*: If your repository root *is* the `Portfolio` folder content, leave it as `./`. If the repository contains the folder `Portfolio`, you need to set the Root Directory to `Portfolio`.
      - *Based on your workspace*: Your workspace `root` seems to be `/Users/sarjanshah/Desktop/portfolio/Portfolio`. If this matches your git root, leave it empty.
    - **Build and Output Settings**: Default settings (`next build`) are correct.

4.  **Environment Variables**:
    - Expand the "Environment Variables" section.
    - You need to add the keys for your analytics provider (Umami). These are used in `src/app/layout.tsx`.
    - Add the following key-value pairs (copy these from your local `.env` or configuration source):
      - `UMAMI_DOMAIN`: (Your Umami domain URL)
      - `UMAMI_SITE_ID`: (Your Umami Site ID)
    - *Note*: Your EmailJS keys are currently hardcoded in `ContactForm.tsx`, so you do not need to add them here.

5.  **Deploy**:
    - Click "Deploy".
    - Vercel will run the build. Watch the logs for any errors.

6.  **Verify**:
    - Once deployment completes, Vercel will provide a URL (e.g., `portfolio-tau-seven.vercel.app`).
    - Visit the link and check:
      - Does the site load?
      - Do the images appear?
      - Does the contact form work? (Test a submission)
      - Does the resume page work?

## Troubleshooting

- **Build Errors**: Check the "Building" logs in Vercel to see specific errors. Common issues include type errors or missing dependencies.
- **Missing Styles**: Ensure Tailwind CSS processed correctly.
- **Environment Variables**: If analytics don't work, re-check that the environment variables were added correctly in Project Settings > Environment Variables.
