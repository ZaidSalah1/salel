// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  const floatingCTA = document.getElementById("floatingCTA")

  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
    if (window.innerWidth <= 768) {
      floatingCTA.style.display = "block"
    }
  } else {
    navbar.classList.remove("scrolled")
    floatingCTA.style.display = "none"
  }
})

// Mobile menu toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  hamburger.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    hamburger.classList.remove("active")
  })
})

// Smooth scrolling
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Update active nav link based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active")
    }
  })
})

// Units tabs functionality
function showUnit(unitId) {
  // Hide all unit items
  document.querySelectorAll(".unit-item").forEach((item) => {
    item.classList.remove("active")
  })

  // Remove active class from all tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  // Show selected unit
  document.getElementById(unitId).classList.add("active")

  // Add active class to clicked tab
  event.target.classList.add("active")
}

// Gallery modal functionality
function openModal(element) {
  const modal = document.getElementById("imageModal")
  const modalImg = document.getElementById("modalImage")
  const img = element.querySelector("img")

  modal.style.display = "block"
  modalImg.src = img.src
  modalImg.alt = img.alt

  // Prevent body scroll when modal is open
  document.body.style.overflow = "hidden"
}

function closeModal() {
  const modal = document.getElementById("imageModal")
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Close modal when clicking outside the image
document.getElementById("imageModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal()
  }
})

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()
  }
})

// Countdown timer
function startCountdown() {
  // Set the date we're counting down to (30 days from now)
  const countDownDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000

  const timer = setInterval(() => {
    const now = new Date().getTime()
    const distance = countDownDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById("days").textContent = days
    document.getElementById("hours").textContent = hours
    document.getElementById("minutes").textContent = minutes
    document.getElementById("seconds").textContent = seconds

    if (distance < 0) {
      clearInterval(timer)
      document.getElementById("countdown").innerHTML = "<h3>العرض انتهى!</h3>"
    }
  }, 1000)
}

// Contact form submission
document.getElementById("interestForm").addEventListener("submit", function (e) {
  e.preventDefault()

  const formData = new FormData(this)
  const submitBtn = this.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML

  // Show loading state
  submitBtn.innerHTML = '<span class="loading"></span> جاري الإرسال...'
  submitBtn.disabled = true

  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    // Show success message
    showMessage("تم إرسال طلبك بنجاح! سيتواصل معك فريقنا خلال 24 ساعة.", "success")

    // Reset form
    this.reset()

    // Reset button
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false

    // Scroll to top of form
    this.scrollIntoView({ behavior: "smooth", block: "start" })
  }, 2000)
})

function showMessage(message, type) {
  // Remove existing messages
  document.querySelectorAll(".success-message, .error-message").forEach((msg) => {
    msg.remove()
  })

  const messageDiv = document.createElement("div")
  messageDiv.className = type === "success" ? "success-message" : "error-message"
  messageDiv.textContent = message
  messageDiv.style.display = "block"

  const form = document.getElementById("interestForm")
  form.appendChild(messageDiv)

  // Auto hide after 5 seconds
  setTimeout(() => {
    messageDiv.style.display = "none"
  }, 5000)
}

// Language toggle functionality
function toggleLanguage() {
  const langBtn = document.querySelector(".lang-toggle")
  const currentLang = document.documentElement.lang

  if (currentLang === "ar") {
    // Switch to English (placeholder functionality)
    langBtn.textContent = "عربي"
    // Here you would implement actual language switching
    console.log("Switching to English...")
  } else {
    // Switch to Arabic
    langBtn.textContent = "EN"
    console.log("Switching to Arabic...")
  }
}

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible")
    }
  })
}

// Add scroll animation classes to elements
function addScrollAnimations() {
  // Add fade-in animation to section headers
  document.querySelectorAll(".section-header").forEach((header) => {
    header.classList.add("fade-in")
  })

  // Add slide animations to cards
  document.querySelectorAll(".feature-card").forEach((card, index) => {
    card.classList.add(index % 2 === 0 ? "slide-in-left" : "slide-in-right")
  })

  document.querySelectorAll(".testimonial-card").forEach((card, index) => {
    card.classList.add("fade-in")
    card.style.animationDelay = `${index * 0.2}s`
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  startCountdown()
  addScrollAnimations()

  // Add scroll event listener for animations
  window.addEventListener("scroll", animateOnScroll)

  // Trigger initial animation check
  animateOnScroll()

  // Add loading animation to images
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })
  })

  // Preload hero video
  const heroVideo = document.querySelector(".hero-video video")
  if (heroVideo) {
    heroVideo.addEventListener("loadeddata", function () {
      this.style.opacity = "1"
    })
  }
})

// Intersection Observer for better performance
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe elements when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right").forEach((el) => {
    observer.observe(el)
  })
})

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroVideo = document.querySelector(".hero-video")
  if (heroVideo) {
    heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Form validation
function validateForm() {
  const form = document.getElementById("interestForm")
  const inputs = form.querySelectorAll("input[required], select[required]")
  let isValid = true

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "#f44336"
      isValid = false
    } else {
      input.style.borderColor = "#e0e0e0"
    }
  })

  // Email validation
  const email = form.querySelector('input[type="email"]')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email.value && !emailRegex.test(email.value)) {
    email.style.borderColor = "#f44336"
    isValid = false
  }

  // Phone validation (Saudi format)
  const phone = form.querySelector('input[type="tel"]')
  const phoneRegex = /^(\+966|0)?[5][0-9]{8}$/
  if (phone.value && !phoneRegex.test(phone.value.replace(/\s/g, ""))) {
    phone.style.borderColor = "#f44336"
    isValid = false
  }

  return isValid
}

// Add real-time validation
document.querySelectorAll("#interestForm input, #interestForm select").forEach((input) => {
  input.addEventListener("blur", validateForm)
  input.addEventListener("input", function () {
    if (this.style.borderColor === "rgb(244, 67, 54)") {
      this.style.borderColor = "#e0e0e0"
    }
  })
})

// تحسينات إضافية للموقع

// تأثير الكتابة المتحركة للعناوين
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// تحسين تأثيرات التمرير
function enhancedScrollEffects() {
  const elements = document.querySelectorAll(".feature-card, .testimonial-card, .stat-item")

  elements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`
    element.classList.add("fade-in-up")
  })
}

// تحسين الأزرار التفاعلية
function enhanceButtons() {
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary, .tab-btn")

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.02)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })

    button.addEventListener("mousedown", function () {
      this.style.transform = "translateY(-1px) scale(0.98)"
    })

    button.addEventListener("mouseup", function () {
      this.style.transform = "translateY(-3px) scale(1.02)"
    })
  })
}

// تحسين عرض الأرقام في الإحصائيات
function animateNumbers() {
  const numbers = document.querySelectorAll(".stat-number")

  numbers.forEach((number) => {
    const finalNumber = Number.parseInt(number.textContent.replace(/\D/g, ""))
    const hasPlus = number.textContent.includes("+")
    let currentNumber = 0
    const increment = finalNumber / 50

    const timer = setInterval(() => {
      currentNumber += increment
      if (currentNumber >= finalNumber) {
        number.textContent = finalNumber + (hasPlus ? "+" : "")
        clearInterval(timer)
      } else {
        number.textContent = Math.floor(currentNumber) + (hasPlus ? "+" : "")
      }
    }, 50)
  })
}

// تحسين تأثيرات الماوس
function addMouseEffects() {
  const cards = document.querySelectorAll(".feature-card, .testimonial-card, .gallery-item")

  cards.forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"
    })
  })
}

// تحسين التنقل السلس
function smoothNavigation() {
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// تحسين مؤشر التقدم
function addProgressIndicator() {
  const progressBar = document.createElement("div")
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #d4af37, #f4e4a6);
    z-index: 9999;
    transition: width 0.3s ease;
  `
  document.body.appendChild(progressBar)

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset
    const docHeight = document.body.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    progressBar.style.width = scrollPercent + "%"
  })
}

// تحسين تحميل الصور
function lazyLoadImages() {
  const images = document.querySelectorAll("img")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        // img.style.opacity = "0"
        // img.style.transition = "opacity 0.5s ease"

        img.onload = () => {
          img.style.opacity = "1"
        }

        observer.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// تحسين الأداء العام
function optimizePerformance() {
  // تحسين الخطوط
  const link = document.createElement("link")
  link.rel = "preload"
  link.href = "https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&display=swap"
  link.as = "style"
  document.head.appendChild(link)

  // تحسين الصور
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.loading = "lazy"
    img.decoding = "async"
  })
}

// تشغيل جميع التحسينات
document.addEventListener("DOMContentLoaded", () => {
  enhancedScrollEffects()
  enhanceButtons()
  addMouseEffects()
  smoothNavigation()
  addProgressIndicator()
  lazyLoadImages()
  optimizePerformance()

  // تشغيل أنيميشن الأرقام عند الوصول للقسم
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateNumbers()
        statsObserver.unobserve(entry.target)
      }
    })
  })

  const heroStats = document.querySelector(".hero-stats")
  if (heroStats) {
    statsObserver.observe(heroStats)
  }
})

// تحسين الاستجابة للوحة المفاتيح
document.addEventListener("keydown", (e) => {
  // التنقل بالأسهم
  if (e.key === "ArrowDown") {
    window.scrollBy(0, 100)
  } else if (e.key === "ArrowUp") {
    window.scrollBy(0, -100)
  }

  // إغلاق المودال بـ Escape
  if (e.key === "Escape") {
    closeModal()
  }
})
