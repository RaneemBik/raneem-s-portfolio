# Raneem Bikai — Portfolio

A modern, professional portfolio website built with **Next.js 14**, **Three.js**, **Framer Motion**, and **Tailwind CSS**.

## ✨ Features

- 🌐 **3D Tech Sphere** on hero section — orbiting technology labels
- 🌍 **Interactive 3D Globe** on contact section with connection lines
- ✨ **Framer Motion** animations throughout
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🎨 **Dark theme** with purple/pink gradient accents (no blue!)
- 🔍 **Project filters** by category, technology, and year
- 📄 **CV viewer** — view and download your CV inline
- 📬 **Contact form** with direct email support
- ⚡ **Next.js 14 App Router** with TypeScript

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Adding Your Files

### 1. Your Photo
Replace the placeholder with your actual photo:
```
public/photo.jpg
```
Recommended: 400×500px, JPG format

### 2. Your CV
Add your CV PDF:
```
public/Raneem_Bikai_CV.pdf
```
Your `.docx` CV is already included as `public/Raneem_Bikai_CV.docx`.  
To enable the inline viewer, convert it to PDF and save as `Raneem_Bikai_CV.pdf`.

### 3. Project Screenshots (optional)
```
public/projects/progressly/1.png
public/projects/progressly/2.png
public/projects/sparkclean/1.png
public/projects/sparkclean/2.png
public/projects/ratehub/1.png
public/projects/portfolio/1.png
public/projects/auth/1.png
public/projects/rofof/1.png
public/projects/smartmind/1.png
public/projects/recipe/1.png
```
If images are missing, the project cards show a gradient placeholder — it still looks great!

---

## 📧 Enabling Real Email (Contact Form)

The contact form is ready to send emails. To enable:

1. Create a `.env.local` file in the root:
```env
EMAIL_USER=raneembikai70@gmail.com
EMAIL_PASS=your-gmail-app-password
```

2. Get a Gmail App Password:
   - Go to Google Account → Security → 2-Step Verification → App Passwords
   - Generate a password for "Mail"

3. Uncomment the nodemailer code in `app/api/contact/route.ts`

4. Install nodemailer:
```bash
npm install nodemailer @types/nodemailer
```

---

## 🛠️ Customization

All content is in `data/index.ts`:
- Personal info, skills, experience, education
- Projects (add/remove/edit any project)
- Social links

Colors are in `tailwind.config.js` — the palette uses purple/pink/amber.

---

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

Or deploy to **Vercel** (recommended):
1. Push to GitHub
2. Import repo in Vercel
3. Deploy — zero config needed

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| 3D Graphics | Three.js + @react-three/fiber |
| Icons | Lucide React |
| Toasts | React Hot Toast |

---

Built with ❤️ for Raneem Bikai
