# 💕 Valentine's Day Special Website 💕

> *"A digital love letter that makes hearts flutter and browsers blush!"* 🌹

## 🎯 What Is This?

This is not just another website—it's a **full-blown romantic experience** crafted with code, caffeine, and a whole lot of love! 💖

Imagine if Cupid learned to code and decided to build a website. Well, this is pretty much it! A stunning, interactive Valentine's Day website featuring:

- 💌 **Animated Love Letters** that reveal heartfelt messages
- 🐼 **Adorable Pandas** kissing (because why not?)
- 📸 **Photo Galleries** showcasing your beautiful moments
- ⏰ **Countdown Timer** to your special day
- 💑 **Interactive Proposal** with a cheeky "No" button that runs away
- 🎵 **Background Music** to set the mood
- 📖 **Timeline** of your love story
- 🎮 **Love Quiz** to test how well you know each other
- 🎨 **Gorgeous Animations** that would make Disney jealous

## 📸 Project Screenshots

### Home Page
![Home Page](./public/GalleryImages/Screenshot%202026-02-14%20230622.png)

### Teddy Bear Animation
![Teddy Bear Animation](./public/GalleryImages/Screenshot%202026-02-14%20230634.png)

## 🚀 Quick Start (Get This Love Show Running!)

### Prerequisites

Before you start spreading digital love, make sure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- A **heart full of love** ❤️ (mandatory!)

### Installation

1. **Clone this repository of romance:**
   ```bash
   git clone <your-repo-url>
   cd valentine
   ```

2. **Install the love dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your music** (Optional but recommended!)
   - Place your romantic background music file in `public/music/`
   - Name it `Dheema BGM.mp3` (or update the path in `components/MusicPlayer.jsx`)

4. **Add your photos:**
   - Drop your couple photos in `public/GalleryImages/`
   - Update the image paths in `components/Gallery.jsx`

5. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser and prepare for cuteness overload:**
   ```
   http://localhost:3000
   ```

## 🎨 Features Breakdown

### 🏠 Home Page
- **Hero Section** with animated hearts raining from the sky
- **Panda Kiss Animation** - Two pandas sharing a sweet moment
- **Love Letter** - An envelope that opens to reveal your heartfelt message
- **Photo Gallery** - Showcase your beautiful memories
- **Countdown** - Days until your special occasion
- **Love Proposal** - Interactive "Will you be my Valentine?" with a playful twist

### 📖 Our Story (Timeline)
A beautiful vertical timeline showcasing your relationship milestones:
- First Meeting ✨
- First Date ☕
- First Adventure 🗺️
- Becoming Official 💑
- And more...

### 📸 Photo Album
A stunning masonry-style gallery to display your favorite couple photos.

### 🎮 Love Quiz
Test how well you know each other with fun, romantic questions!

## 🛠️ Customization Guide

### 1. **Update the Love Letter Message**
Edit `components/LoveLetter.jsx`:
```javascript
const LOVE_MESSAGE = `Your custom message here...`;
```

### 2. **Customize Timeline Events**
Edit `app/timeline/page.jsx`:
```javascript
const milestones = [
  {
    date: 'Your Date',
    title: 'Your Title',
    description: 'Your story...',
    icon: '✨',
    color: 'from-rose-600 to-pink-600',
  },
  // Add more milestones...
];
```

### 3. **Update Quiz Questions**
Edit `app/quiz/page.jsx`:
```javascript
const questions = [
  {
    question: 'Your question?',
    answers: ['Option 1', 'Option 2', 'Option 3', 'Correct Answer'],
    correct: 3, // Index of correct answer
  },
  // Add more questions...
];
```

### 4. **Change Colors**
The main theme colors are defined in `app/globals.css`:
- Primary Pink: `#ff4d6d`
- Light Pink: `#ff8fa3`
- Lighter Pink: `#ffc2d1`

## 📁 Project Structure

```
valentine/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── timeline/          # Our Story page
│   ├── album/             # Photo Album page
│   └── quiz/              # Love Quiz page
├── components/            # React components
│   ├── HeroSection.jsx    # Landing section
│   ├── LoveLetter.jsx     # Animated love letter
│   ├── PandaKiss.jsx      # Panda animation
│   ├── Gallery.jsx        # Photo gallery
│   ├── LoveProposal.jsx   # Interactive proposal
│   ├── MusicPlayer.jsx    # Background music
│   └── ...
├── public/
│   ├── GalleryImages/     # Your photos go here
│   └── music/             # Background music
└── animations/            # Custom animations
```

## 🎭 Tech Stack

Built with love and:
- ⚛️ **Next.js 14** - React framework
- 🎨 **Tailwind CSS** - Styling
- ✨ **Framer Motion** - Smooth animations
- 💖 **Pure Love** - The secret ingredient

## 🐛 Troubleshooting

**Music not playing?**
- Check if your music file is in `public/music/`
- Some browsers block autoplay - click the play button manually

**Images not showing?**
- Ensure images are in `public/GalleryImages/`
- Check file names and extensions match your code

**Hydration errors?**
- Clear your browser cache and restart the dev server

## 💝 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Click Deploy
5. Share the link with your loved one! 💕

### Other Options
- **Netlify**: Similar to Vercel
- **GitHub Pages**: For static export
- **Your own server**: Build with `npm run build`

## 🎉 Pro Tips

1. **Personalize Everything** - Change names, dates, photos, messages
2. **Test on Mobile** - Make sure it looks great on all devices
3. **Add Your Touch** - Customize colors, fonts, animations
4. **Share with Love** - Send the link with a sweet message
5. **Keep It Updated** - Add new photos and memories regularly

## 📝 License

This project is licensed under the **Love License** - feel free to use it to make someone's day special! ❤️

## 🙏 Acknowledgments

- To all the couples out there spreading love
- To the developers who believe in coding with heart
- To you, for choosing to express your love digitally! 💕

---

<div align="center">

**Made with ❤️ and lots of ☕**

*"Code is temporary, but love is forever!"*

### 🌟 Star this repo if it helped you win someone's heart! 🌟

</div>
