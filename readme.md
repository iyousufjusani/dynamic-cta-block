# 📦 Dynamic CTA Block

**Dynamic CTA Block** is a customizable Gutenberg block for WordPress that allows you to insert beautiful, animated call-to-action sections with flexible form fields and styling options. This block is ideal for lead generation, newsletter signups, contact prompts, and more.

---

## ✨ Features

- 🎨 Editable title, description, and button text
- 🧩 Custom font size, weight, and family for the heading
- 🧾 Add unlimited form fields (text, email, textarea, select, checkbox, radio)
- 🧹 Remove unwanted input fields
- 🎨 Animated gradient border with soft background glow
- ⚙️ Fully editable from the block editor (Inspector Controls)
- ✅ Built using modern `@wordpress/scripts` and block.json structure

---

## 📁 Folder Structure

```
dynamic-cta-block/
|-- src/
    |-- block.json
    |-- dynamic-cta-block.js # (If using all-in-one file structure)
    |-- edit.js # Gutenberg block editor logic
    |-- save.js # Frontend save/output
    |-- style.scss # Block styles (animated border, inputs, etc.)
    |-- README.md # 👈 (You are here)
    |-- index.js # Optional entry if using separate files
```

---

## ⚙️ Editor Controls

The block includes a right-side panel (Inspector Controls) with the following options:

### **CTA Settings**

- **Title**: Main heading of the CTA
- **Font Size**: Adjust title size in pixels
- **Font Weight**: Choose from 400 to 900
- **Font Family**: Inherit / Sans / Serif / Inter / Roboto
- **Description**: Subtext shown under the title
- **Button Text**: Text for the CTA button

### **Form Inputs**

- **Input Name**: Label & placeholder of the input
- **Input Type**: Choose from text, email, textarea, select, checkbox, radio
- **Add Input**: Adds a new field below the form
- **Remove Input**: Removes an existing field

---

## 💅 Styling Highlights

- **Gradient Border Animation**: Color flows continuously around the card
- **Frosted Glass Effect**: Light blurred background for soft UI
- **Accessible Form Elements**: Properly styled inputs for all types
- **Customizable**: Easily extendable with your own CSS/SCSS variables

---

## 🚀 Installation & Development

### For Local Development:

1. Clone this plugin into your WordPress `wp-content/plugins` folder:

   ```bash
   git clone https://github.com/iyousufjusani/dynamic-cta-block
   ```

2. Install dependencies:

   ```bash
   cd dynamic-cta-block
   npm install
   ```

3. Start the build watcher:

   ```bash
   npm run start
   ```

4. Activate the plugin from your WordPress dashboard.

---

## 🧪 Build for Production

```bash
npm run build
```

This will compile the block into the build/ directory, ready for use.

## 📝 Notes

If you're using the all-in-one format (e.g., dynamic-cta-block.js), ensure it's properly registered in block.json.

You can easily extend the panel to include more settings (like border styles, background colors, etc.).

This block is built with extensibility in mind for agency or theme use.

📸 Screenshot (Example)
A modern CTA with animated border and smooth UI 👇

📄 License
MIT — Feel free to use, modify, and contribute.

👨‍💻 Author
Developed by Yousuf Jusani
Follow on GitHub | [https://github.com/iyousufjusani/]

---

Let me know if you'd like the `block.json` file and `package.json` as well — or want to convert this README into a GitHub project or ZIP plugin structure.
