# 🖼️ PNG Drawing Assignment (React + TypeScript)

## 📌 Project Overview

This project is a graphical implementation of a PNG image generator using **React with TypeScript** and the **HTML Canvas API**.

The application creates a **300 × 300 pixel image** that contains:

* 🔴 A **red primary diagonal** (top-left to bottom-right)
* 🟢 A **green secondary diagonal** (bottom-left to top-right)
* 🔵 A **blue-filled bottom triangular region** formed by the intersection of the diagonals

Additionally, the generated image can be downloaded as a `.png` file.

---

## 🎯 Objective

The goal of this assignment is to:

* Understand how images are constructed using **pixel-based coordinate systems**
* Apply **geometric logic** to draw lines and shapes
* Use modern frontend tools to simulate traditional image generation (like PNGWriter)
* Implement **React with TypeScript** for type-safe development

---

## 🛠️ Technologies Used

* React (Frontend Library)
* TypeScript (Type Safety)
* HTML5 Canvas API (Graphics Rendering)
* Vite (Development Environment)

---

## 🧠 Key Concepts

### 1. Canvas Coordinate System

* The canvas uses a 2D coordinate system:

  * `(0,0)` → top-left corner
  * `(300,300)` → bottom-right corner

---

### 2. Diagonal Lines

* **Primary Diagonal (Red):**

  * Equation: `x = y`
  * Drawn from top-left to bottom-right

* **Secondary Diagonal (Green):**

  * Equation: `x + y = 299`
  * Drawn from bottom-left to top-right

---

### 3. Region Filling

* The two diagonals divide the canvas into **four triangular regions**
* The **lowest region (bottom triangle)** is filled with blue
* This is achieved by drawing a polygon using three points:

  * Bottom-left
  * Center
  * Bottom-right

---

## ⚙️ Installation & Setup

### 1. Create the Project

```bash
npm create vite@latest png-canvas-ts
```

Select:

* React
* TypeScript

---

### 2. Install Dependencies

```bash
cd png-canvas-ts
npm install
```

---

### 3. Run the Project

```bash
npm run dev
```

---

### 4. Open in Browser

Visit:

```
http://localhost:5173
```

---

## 📂 Project Structure

```
src/
 ├── App.tsx
 ├── CanvasImage.tsx
 └── main.tsx
```

* `App.tsx` → Main application component
* `CanvasImage.tsx` → Handles drawing logic

---

## 🖥️ Features

* ✔️ Draws two diagonal lines using canvas paths
* ✔️ Fills the bottom triangular region with color
* ✔️ Uses TypeScript for type safety
* ✔️ Allows downloading the canvas as a PNG image

---

## 💾 Exporting the Image

The application includes a **Download Image** button that:

* Converts the canvas into a PNG using:

  ```js
  canvas.toDataURL("image/png")
  ```
* Automatically downloads the file as:

  ```
  image.png
  ```

---

## 🧪 Expected Output

The generated image should look like:

```
 \   /
  \ /
  / \
 /   \

Bottom region = Blue
```

---

## ⚠️ Challenges Faced

* Understanding the canvas coordinate system
* Mapping mathematical equations to visual output
* Handling null values in TypeScript (`canvas` and `context`)

---

## 📚 Conclusion

This project demonstrates how modern web technologies can replicate traditional image generation techniques. By combining **React**, **TypeScript**, and the **Canvas API**, we can dynamically create and export graphical content in a structured and efficient way.

---

## 🙌 Author

**[Your Name Here]**

---

## 📎 Notes

* This implementation is a **high-level approach** compared to pixel-by-pixel manipulation in PNGWriter.
* It focuses on **shape-based rendering** rather than individual pixel control.
