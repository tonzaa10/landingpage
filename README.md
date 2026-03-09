# Landing Page Project

โปรเจกต์นี้เป็นหน้า Landing Page ที่พัฒนาด้วย HTML, CSS, JavaScript, Bootstrap และ Slick Slider  
ออกแบบให้รองรับการแสดงผลทุกอุปกรณ์ (Responsive) และเน้นความเร็วในการโหลดหน้าเว็บ

Demo: https://landingpage-two-lyart.vercel.app/

---

## เทคโนโลยีที่ใช้

- **HTML5** – โครงสร้างหน้าเว็บแบบ Semantic
- **CSS3** – การจัด layout และตกแต่งหน้าเว็บ
- **JavaScript** – เพิ่ม Interactive
- **Bootstrap** – Grid และ Component สำหรับ Responsive
- **Slick Slider** – ระบบสไลด์

---

## ฟีเจอร์หลักของโปรเจกต์

- รองรับการแสดงผลทุกขนาดหน้าจอ (Mobile / Tablet / Desktop)
- ใช้ Bootstrap Grid สำหรับจัด Layout
- สไลด์ภาพและคอนเทนต์ด้วย Slick Slider
- โครงสร้าง HTML แบบ Semantic เพื่อ SEO
- โหลดเร็วด้วยการใช้รูปแบบภาพที่เหมาะสม
- รองรับการใช้งานบนหลายเบราว์เซอร์

---

## โครงสร้างโปรเจกต์
```
landingpage/
│
├── index.html
├── assets/
│ ├── css/
│ │ ├── bootstrap.min.css
│ │ ├── slick.css
│ │ └── style.css
│ │
│ ├── js/
│ │ ├── jquery.min.js
│ │ ├── bootstrap.bundle.min.js
│ │ ├── slick.min.js
│ │ └── main.js
│ │
│ └── images/
│
└── README.md
```


---

## ตัวอย่างการใช้งาน Slick Slider

```javascript
$(document).ready(function () {
  $("#slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
```

## การออกแบบ Responsive

ใช้ Bootstrap Grid System

ใช้ Media Query ปรับขนาดตามหน้าจอ

ออกแบบแบบ Mobile-first

ตัวอย่าง:

```
@media (max-width: 768px) {
  .hero-title {
    font-size: 1.8rem;
  }
}
```
