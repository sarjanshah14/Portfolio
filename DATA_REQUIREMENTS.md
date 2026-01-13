# 📋 Complete Data Requirements for Portfolio

This document lists **ALL** places where you need to provide details, images, and data.

---

## ✅ **COMPLETED UPDATES** (Already done)
- ✅ Personal identity (name, role, email, GitHub)
- ✅ Social media links
- ✅ Skills and tech stack
- ✅ Experience/work history
- ✅ About page bio
- ✅ Project titles, descriptions, and links

---

## 🖼️ **1. PROFILE IMAGES**

### **Profile Picture (About Page)**
- **Location**: `/public/assets/me.jpg`
- **Current**: Uses placeholder `me.jpg`
- **What you need**: Replace with your actual professional photo
- **Recommended size**: Square image (e.g., 400x400px or larger)
- **Format**: JPG, PNG, or WebP
- **Where it's displayed**: 
  - About page (`/about`) - main profile picture

---

## 🎨 **2. SEO & SHARING IMAGES**

### **Open Graph Image (Social Media Preview)**
- **Location**: `/public/assets/seo/og-image.png`
- **Current**: Placeholder OG image
- **What you need**: A professional image for when your portfolio is shared on social media (Twitter, LinkedIn, Facebook)
- **Recommended size**: 1200x630px
- **Format**: PNG or JPG
- **Where it's used**: 
  - Social media link previews
  - Twitter card previews
  - LinkedIn previews
---

## 🖼️ **3. NAVIGATION PREVIEW IMAGES**

These appear when hovering over nav links in the header.

- **Location**: `/public/assets/nav-link-previews/`
- **Files needed**:
  1. `landing.png` - Home page preview
  2. `about.png` - About section preview (currently missing, needs to be added to config)
  3. `skills.png` - Skills section preview
  4. `projects.png` - Projects section preview
  5. `contact.png` - Contact section preview
  6. `blog.png` - Blog page preview (if you have blogs)

- **Current status**: Files exist but may be placeholder images
- **What you need**: Screenshots or representative images for each section
- **Recommended size**: 400x300px or similar aspect ratio

---

## 📸 **4. PROJECT SCREENSHOTS** (CRITICAL - Most Important)

You need to create screenshot folders for each of your 6 projects and add multiple images for each.

### **Base Path**: `/public/assets/projects-screenshots/`

### **Project 1: Parking Spot Finder (PleaseLetMePark)**
- **Folder**: `/public/assets/projects-screenshots/codingducks/` (or rename to match your project)
- **Main thumbnail**: `landing.png` (displayed on project card)
- **Screenshots needed** (currently using placeholder images):
  - `landing.png` - Landing/home page
  - `problems.png` - Problems listing page
  - `problem.png` - Single problem view
  - `ducklets.png` - Premises/booking list
  - `ducklet1.png` - Single premise view
  - `ducklet2.png` - Booking details
  - `css-battles.png` - Booking system view
  - `css-battle.png` - Booking form
  - `css-battle2.png` - Booking confirmation
  - `contests.png` - Payment/checkout page
  - `playground.png` - Reviews system
  - `users.png` - User dashboard
  - `user.png` - User profile

**Action**: Replace all these with actual screenshots from your Parking Spot Finder app.

---

### **Project 2: JanSanket - Disaster Response Platform**
- **Folder**: `/public/assets/projects-screenshots/couponluxury/` (or rename to match)
- **Main thumbnail**: `landing.png`
- **Screenshots needed**:
  - `landing.png` - Landing page
  - `stores.png` - Shelters listing
  - `store.png` - Single shelter view
  - `categories.png` - Disaster categories/types
  - `cms-1.png` - Admin dashboard (part 1)
  - `cms-2.png` - Admin dashboard (part 2)

**Action**: Replace with actual screenshots from your Disaster Response app.

---

### **Project 3: SensorGuard - Sensor Calibration Platform**
- **Folder**: `/public/assets/projects-screenshots/the-booking-desk/` (or rename)
- **Main thumbnail**: `landing.png`
- **Screenshots needed**:
  - `landing.png` - Dashboard/home
  - `blogs.png` - Sensor readings/analytics
  - `blog.png` - Single sensor details
  - `cms-1.png` - ML analytics view
  - `cms-2.png` - Calibration schedule

**Action**: Replace with actual screenshots from your SensorGuard app.

---

### **Project 4: This Portfolio Website**
- **Folder**: `/public/assets/projects-screenshots/portfolio/`
- **Main thumbnail**: `landing.png`
- **Screenshots needed**:
  - `landing.png` - Home/hero section
  - `skills.png` - Skills section with 3D keyboard
  - `navbar.png` - Navigation menu
  - `projects.png` - Projects grid view
  - `project.png` - Single project modal

**Action**: Take screenshots of this portfolio itself!

---

### **Project 5: Speech to Text Flutter App**
- **Folder**: `/public/assets/projects-screenshots/ghostchat/` (or rename)
- **Main thumbnail**: `1.png`
- **Screenshots needed**:
  - `1.png` - Main app interface
  - `2.png` - Speech recognition in action
  - `3.png` - Product recognition/results
  - `4.png` - Settings/configuration

**Action**: Take screenshots from your Flutter app (phone screenshots work great).

---

### **Project 6: Interactive Periodic Table**
- **Folder**: `/public/assets/projects-screenshots/jra/` (or rename)
- **Main thumbnail**: `1.png`
- **Screenshots needed**:
  - `1.png` - Main periodic table view
  - (Optional) Add more screenshots:
    - `2.png` - Element details modal
    - `3.png` - Comparison view
    - `4.png` - FAQ page

**Action**: Replace with actual screenshots from your Periodic Table app.

---

## 📝 **5. PROJECT DETAILS TO VERIFY/UPDATE**

### **In File**: `src/data/projects.tsx`

For each project, verify/update these fields are correct:

1. **Project IDs** - Currently: `codingducks`, `couponluxury`, `the-booking-desk`, `portfolio`, `ghostchat`, `jra`
   - **Action**: Consider renaming folders to match actual project names

2. **Live Links** - Verify all are working:
   - Parking Spot Finder: `https://parking-spot-finder.vercel.app/`
   - Disaster Response: `https://disaster-response.vercel.app/`
   - SensorGuard: `https://sensor-guard.vercel.app/`
   - Portfolio: `https://sarjanshah.vercel.app`
   - Speech to Text: `https://speech-to-text-app.vercel.app`
   - Periodic Table: `https://periodic-table-app.vercel.app/`

3. **GitHub Links** - Verify all are correct:
   - All should point to your actual GitHub repositories

4. **Project Descriptions** - Already updated but review:
   - Each project has detailed content in the `get content()` function
   - Verify all technical details match your actual implementation

5. **Tech Stack Skills** - Verify:
   - Frontend skills array for each project
   - Backend skills array for each project
   - Make sure skills match what's actually used

---

## 📄 **6. BLOG PAGE** (If applicable)

### **In File**: `src/app/projects/page.tsx`

- **Current**: Has a hardcoded `PROJECTS` array with old projects (Coding Ducks, Ghost Chat, Coupon Luxury, JRA)
- **Action**: 
  - Either remove/comment out this page, OR
  - Update it with your actual 6 projects from `projects.tsx`

**Note**: This appears to be a separate projects listing page, different from the main projects section.

---

## 📞 **7. CONTACT INFORMATION**

### **In File**: `src/app/about/page.tsx`

- **Phone Number** - Currently: `1234567890`
- **Action**: Update with your actual phone number (or remove if not needed)

### **In File**: `src/data/config.ts`

- **Email**: Already updated ✅
- **Social Links**: Already updated ✅

---

## 🎨 **8. 3D KEYBOARD MODEL** (Optional)

### **File**: `/public/assets/skills-keyboard.spline`

- **Current**: Uses existing Spline 3D model
- **Action**: 
  - Only modify if you want to customize the keyboard appearance
  - The bongo cat has been removed ✅
  - Ensure all skill keycaps are named correctly in Spline to match skill names

---

## 📝 **9. ADDITIONAL CONTENT TO REVIEW**

### **Resume Link** (Hero Section)
- **Location**: `src/components/sections/hero.tsx`
- **Status**: Currently commented out
- **Action**: 
  - Uncomment and add your resume URL, OR
  - Leave commented if you don't want a resume link

---

## ✅ **CHECKLIST SUMMARY**

### **Images Required**:
- [ ] Profile picture (`/public/assets/me.jpg`)
- [ ] Open Graph image (`/public/assets/seo/og-image.png`)
- [ ] Nav preview images (6 images in `/nav-link-previews/`)
- [ ] Project screenshots (6 projects × multiple images each)
  - [ ] Parking Spot Finder (13+ images)
  - [ ] Disaster Response (6 images)
  - [ ] SensorGuard (5 images)
  - [ ] Portfolio Website (5 images)
  - [ ] Speech to Text App (4 images)
  - [ ] Periodic Table (1+ images)

### **Links to Verify**:
- [ ] All 6 live project URLs
- [ ] All 6 GitHub repository URLs
- [ ] Resume link (if using)

### **Content to Review**:
- [ ] Phone number in About page
- [ ] All project descriptions match reality
- [ ] All tech stacks are accurate
- [ ] Projects page (`/projects`) content (if using)

---

## 🚀 **RECOMMENDED WORKFLOW**

1. **Start with Profile Picture** - Easy win, replace `me.jpg`
2. **Take Project Screenshots** - Most time-consuming but most important
   - Open each project in browser/app
   - Take screenshots of key pages/features
   - Save with the exact filenames listed above
   - Place in correct folders
3. **Update OG Image** - Create a nice social media preview image
4. **Create Nav Previews** - Screenshot or create preview images for each section
5. **Verify All Links** - Test that all URLs work
6. **Review Content** - Read through all project descriptions to ensure accuracy

---

## 📸 **SCREENSHOT TIPS**

- **Best format**: PNG for screenshots (preserves quality)
- **Recommended size**: 1200-1920px width for web screenshots
- **Mobile app screenshots**: Use actual device screenshots, 1080x1920px or similar
- **Consistency**: Try to keep similar aspect ratios across images
- **File size**: Optimize images (use tools like ImageOptim or similar)
- **Naming**: Use descriptive names that match the file structure

---

**Note**: After adding all images, the portfolio will be fully personalized and ready to showcase your work! 🎉

