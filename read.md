# Portfolio Website - Setup Guide

## 📋 What You Have

A modern, responsive portfolio website with:
- Clean, professional design
- Smooth animations and interactions
- Project filtering by category
- Mobile-friendly layout
- Easy to customize

## 🎨 Customization Steps

### 1. Update Personal Information

In `index.html`, replace the following:

- **Line 16**: Replace "Your Name" with your actual name
- **Line 30**: Update the hero title if desired
- **Line 31**: Update the subtitle/tagline
- **Lines 44-54**: Update the "About Me" text with your information
- **Lines 223-231**: Update contact links with your email, GitHub, and LinkedIn

### 2. Update Skills

In `index.html` (lines 60-69), add or remove skills that match your expertise.

### 3. Add Your Projects

As you complete each project, add a new project card in the projects section.

Here's the template for a project card:

```html
<div class="project-card" data-category="YOUR-CATEGORY">
    <div class="project-image">
        <div class="project-placeholder">Project Image</div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">
            Brief description of what the project does and key achievements.
        </p>
        <div class="project-tags">
            <span class="tag">Python</span>
            <span class="tag">Technology2</span>
            <span class="tag">Technology3</span>
        </div>
        <div class="project-links">
            <a href="YOUR-GITHUB-LINK" class="project-link">GitHub</a>
            <a href="YOUR-DEMO-LINK" class="project-link">Live Demo</a>
        </div>
    </div>
</div>
```

**Categories to use in `data-category`:**
- `data-analysis`
- `data-engineering`
- `data-science`
- `generative-ai`
- `agentic-ai`
- `neural-networks`

### 4. Add Project Images (Optional)

To replace the placeholder with an actual image:

1. Create an `images` folder in the same directory as index.html
2. Add your project screenshot/image
3. Replace this:
   ```html
   <div class="project-placeholder">Project Image</div>
   ```
   with:
   ```html
   <img src="images/your-project-image.png" alt="Project Name" style="width: 100%; height: 100%; object-fit: cover;">
   ```

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended - FREE)

1. Create a new repository on GitHub named `username.github.io` (replace username with your GitHub username)
2. Upload these files to the repository:
   - index.html
   - styles.css
   - script.js
   - (optional) images folder
3. Go to repository Settings > Pages
4. Select "main" branch and save
5. Your site will be live at `https://username.github.io`

### Option 2: Netlify (Easy Drag & Drop - FREE)

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up for free
3. Drag and drop your project folder
4. Get instant deployment with a custom URL

### Option 3: Vercel (FREE)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Automatic deployment on every push

## 📱 Testing Your Website

### Local Testing

1. Simply open `index.html` in your web browser
2. Test all navigation links
3. Test project filtering
4. Check responsiveness by resizing your browser

### Responsive Testing

- Desktop: 1200px+ width
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🎯 Next Steps

1. **Complete your first project** (Customer Segmentation & RFM Analysis)
2. **Add the project to the website** using the template above
3. **Deploy to GitHub Pages** to make it live
4. **Share the link** on your resume and LinkedIn

## 💡 Tips

- Keep project descriptions concise (2-3 sentences)
- Use high-quality screenshots for project images
- Update your portfolio regularly as you complete projects
- Test your site on different devices and browsers
- Get feedback from peers before sharing publicly

## 🔧 File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive features
├── README.md          # This file
└── images/            # (Optional) Project images
    ├── project1.png
    ├── project2.png
    └── ...
```

## 🆘 Need Help?

If something doesn't work:
1. Check browser console for errors (F12)
2. Ensure all files are in the same directory
3. Verify all links are correct
4. Test in different browsers

Good luck with your portfolio! 🚀