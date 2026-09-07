/**
 * Manikanthan M S – Acupressure Therapy & Wellness Clinic
 * Main Application Logic & Interactive Features
 */

document.addEventListener("DOMContentLoaded", () => {
  // Ensure config is loaded
  const config = window.clinicConfig;
  if (!config) {
    console.error("Clinic configuration not loaded.");
    return;
  }

  // Initialize all application modules
  initDynamicContent(config);
  initNavigation();
  initTreatments(config);
  initFaqAccordion();
  initCertificateLightbox(config);
  initAppointmentBooking(config);
  initTreatmentModal(config);
  initScrollEffects();
});

/* --------------------------------------------------------------------------
   1. Dynamic Content Population from clinicConfig
   -------------------------------------------------------------------------- */
function initDynamicContent(config) {
  // Text content bindings
  bindTextAll(".config-doctor-name", config.doctorName);
  bindTextAll(".config-doctor-title", config.doctorTitle);
  bindTextAll(".config-clinic-name", config.clinicName);
  bindTextAll(".config-tagline", config.tagline);
  bindTextAll(".config-phone", config.phone);
  bindTextAll(".config-whatsapp", config.whatsapp);
  bindTextAll(".config-email", config.email);
  bindTextAll(".config-address", config.address.fullAddress);
  bindTextAll(".config-timings", config.timings);
  bindTextAll(".config-disclaimer", config.disclaimer);

  // About Doctor specific
  bindTextAll(".config-qualification", config.doctorDetails.qualification);
  bindTextAll(".config-experience", config.doctorDetails.experience);
  bindTextAll(".config-areas", config.doctorDetails.areasOfPractice);
  bindTextAll(".config-biography", config.doctorDetails.biography);
  bindTextAll(".config-philosophy", config.doctorDetails.treatmentPhilosophy);

  // Doctor photo dynamic rendering
  const photoContainer = document.getElementById("doctor-photo-container");
  if (photoContainer) {
    const docPhoto = config.doctorDetails.photo || "assets/images/doctor.jpeg";
    photoContainer.innerHTML = `
      <img src="${docPhoto}" alt="${escapeHtml(config.doctorName)}" class="doctor-photo-img" onerror="this.onerror=null; this.src='assets/images/doctor.jpeg';">
    `;
  }

  // Hero visual dynamic rendering (if custom heroImage is provided)
  const heroImageFrame = document.getElementById("hero-image-frame");
  if (heroImageFrame) {
    if (config.heroImage) {
      heroImageFrame.innerHTML = `
        <img src="${config.heroImage}" alt="${escapeHtml(config.clinicName)}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-xl); display: block;">
      `;
    } else {
      const visualWrapper = document.querySelector(".hero-visual-wrapper");
      if (visualWrapper) visualWrapper.style.display = "none";
    }
  }

  // Certificate specific
  bindTextAll(".config-cert-title", config.credentials.certificateTitle);
  bindTextAll(".config-cert-issuer", config.credentials.issuingOrganization);
  bindTextAll(".config-cert-date", config.credentials.issueDate);
  bindTextAll(".config-cert-placeholder", config.credentials.placeholderText);

  // Link bindings
  bindHrefAll(".config-call-link", `tel:${config.phoneRaw}`);
  bindHrefAll(".config-whatsapp-link", `https://wa.me/${config.whatsappRaw}`);
  bindHrefAll(".config-maps-link", config.googleMapsUrl);

  if (config.emailRaw) {
    bindHrefAll(".config-email-link", `mailto:${config.emailRaw}`);
  }

  // Populate Why Choose Us cards if container exists
  const whyGrid = document.getElementById("why-grid");
  if (whyGrid && config.whyChooseUs) {
    whyGrid.innerHTML = config.whyChooseUs.map((item) => `
      <div class="why-card">
        <div class="why-icon-wrap">
          ${getSvgIcon(item.icon)}
        </div>
        <div class="why-content">
          <h3 class="why-title">${escapeHtml(item.title)}</h3>
          <p class="why-text">${escapeHtml(item.description)}</p>
        </div>
      </div>
    `).join("");
  }

  // Populate Clean Patient Feedback
  const feedbackGrid = document.getElementById("testimonials-grid");
  const feedbackData = config.patientFeedback || config.testimonials;
  if (feedbackGrid && feedbackData) {
    feedbackGrid.innerHTML = feedbackData.map((item) => `
      <div class="testimonial-card">
        <div class="feedback-quote-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
        </div>
        <p class="testimonial-text">"${escapeHtml(item.feedback || item.comment)}"</p>
        <div class="testimonial-author">
          <div class="author-avatar-placeholder">${escapeHtml(item.name.charAt(0))}</div>
          <div>
            <div class="author-name">${escapeHtml(item.name)}</div>
            <div class="author-service">${escapeHtml(item.location || "Kerala")} • ${escapeHtml(item.service || "Acupressure Session")}</div>
          </div>
        </div>
      </div>
    `).join("");
  }
}

function bindTextAll(selector, text) {
  if (!text) return;
  document.querySelectorAll(selector).forEach(el => {
    el.textContent = text;
  });
}

function bindHrefAll(selector, href) {
  if (!href) return;
  document.querySelectorAll(selector).forEach(el => {
    el.setAttribute("href", href);
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return str.toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* --------------------------------------------------------------------------
   2. Navigation & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavigation() {
  const navbar = document.getElementById("main-navbar");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const drawerClose = document.getElementById("drawer-close-btn");
  const drawerBackdrop = document.getElementById("drawer-backdrop");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  // Sticky navbar shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  // Open Drawer
  mobileToggle?.addEventListener("click", () => {
    mobileDrawer?.classList.add("open");
    drawerBackdrop?.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // Close Drawer
  const closeDrawer = () => {
    mobileDrawer?.classList.remove("open");
    drawerBackdrop?.classList.remove("active");
    document.body.style.overflow = "";
  };

  drawerClose?.addEventListener("click", closeDrawer);
  drawerBackdrop?.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  // Keyboard Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   3. Treatments & Filter Tabs
   -------------------------------------------------------------------------- */
function initTreatments(config) {
  const grid = document.getElementById("treatments-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const treatmentSelect = document.getElementById("booking-treatment");
  const toggleBtn = document.getElementById("toggle-treatments-btn");

  if (!grid || !config.treatments) return;

  let isExpanded = true;

  // Render Treatment Cards
  function renderTreatments(filter = "all") {
    let items = filter === "all" 
      ? config.treatments 
      : config.treatments.filter(t => t.category === filter);

    if (toggleBtn) {
      if (filter === "all") {
        toggleBtn.style.display = "inline-block";
        if (!isExpanded) {
          items = items.slice(0, 4);
          toggleBtn.textContent = "Show All Services";
        } else {
          toggleBtn.textContent = "Show Less";
        }
      } else {
        toggleBtn.style.display = "none";
      }
    }

    grid.innerHTML = items.map(t => `
      <div class="treatment-card" data-id="${t.id}">
        <div class="treatment-icon-box">
          ${getSvgIcon(t.icon)}
        </div>
        <h3 class="treatment-title">${escapeHtml(t.name)}</h3>
        <p class="treatment-desc">${escapeHtml(t.shortDesc)}</p>
        <div class="treatment-footer">
          <span class="treatment-duration">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-width="2" d="M12 6v6l4 2"/></svg>
            ${escapeHtml(t.duration)}
          </span>
          <button class="btn-learn-more" onclick="openTreatmentModal('${t.id}')">
            Learn More
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    `).join("");
  }

  // Initial render
  renderTreatments("all");

  // Filter Click Handler
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderTreatments(btn.getAttribute("data-filter"));
    });
  });

  // Toggle button handler
  toggleBtn?.addEventListener("click", () => {
    isExpanded = !isExpanded;
    const activeBtn = document.querySelector(".filter-btn.active");
    const currentFilter = activeBtn ? activeBtn.getAttribute("data-filter") : "all";
    renderTreatments(currentFilter);
  });

  // Populate Appointment Form Dropdown
  if (treatmentSelect && config.treatments) {
    treatmentSelect.innerHTML = `
      <option value="">-- Choose a Wellness Therapy Service --</option>
      ${config.treatments.map(t => `<option value="${escapeHtml(t.name)}">${escapeHtml(t.name)} (${escapeHtml(t.duration)})</option>`).join("")}
      <option value="General Consultation / Other">General Consultation / Discuss at Clinic</option>
    `;
  }
}

/* --------------------------------------------------------------------------
   4. Treatment "Learn More" Detail Modal
   -------------------------------------------------------------------------- */
let currentOpenTreatment = null;

function initTreatmentModal(config) {
  const modal = document.getElementById("treatment-modal");
  const closeBtn = document.getElementById("treatment-modal-close");
  const bookBtn = document.getElementById("treatment-modal-book");

  const closeModal = () => {
    modal?.classList.remove("active");
    document.body.style.overflow = "";
  };

  closeBtn?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  bookBtn?.addEventListener("click", () => {
    closeModal();
    if (currentOpenTreatment) {
      const select = document.getElementById("booking-treatment");
      if (select) {
        select.value = currentOpenTreatment.name;
      }
      const bookingSection = document.getElementById("appointment");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  // Expose opener globally
  window.openTreatmentModal = (id) => {
    const item = config.treatments.find(t => t.id === id);
    if (!item) return;

    currentOpenTreatment = item;

    document.getElementById("modal-treatment-title").textContent = item.name;
    document.getElementById("modal-treatment-type").textContent = item.type;
    document.getElementById("modal-treatment-desc").textContent = item.fullDesc;
    document.getElementById("modal-treatment-duration").textContent = item.duration;

    modal?.classList.add("active");
    document.body.style.overflow = "hidden";
  };
}

/* --------------------------------------------------------------------------
   5. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const config = window.clinicConfig;
  const faqWrapper = document.getElementById("faq-wrapper");
  const toggleBtn = document.getElementById("toggle-faqs-btn");

  if (!faqWrapper || !config.faqs) return;

  let isExpanded = false;

  function renderFaqs() {
    let items = config.faqs;
    if (toggleBtn) {
      if (!isExpanded) {
        items = items.slice(0, 3);
        toggleBtn.textContent = "Show More FAQs";
      } else {
        toggleBtn.textContent = "Show Less";
      }
    }

    faqWrapper.innerHTML = items.map((faq, index) => `
      <div class="faq-item ${index === 0 ? 'active' : ''}">
        <button class="faq-trigger" aria-expanded="${index === 0 ? 'true' : 'false'}">
          <span>${escapeHtml(faq.question)}</span>
          <div class="faq-icon-arrow">
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </div>
        </button>
        <div class="faq-content">
          <div class="faq-answer">
            ${escapeHtml(faq.answer)}
          </div>
        </div>
      </div>
    `).join("");

    // Wire Accordion Handlers
    const faqItems = faqWrapper.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
      const trigger = item.querySelector(".faq-trigger");
      trigger?.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach(other => {
          other.classList.remove("active");
          other.querySelector(".faq-trigger")?.setAttribute("aria-expanded", "false");
        });

        if (!isActive) {
          item.classList.add("active");
          trigger.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  // Initial render
  renderFaqs();

  // Wire Toggle Button
  toggleBtn?.addEventListener("click", () => {
    isExpanded = !isExpanded;
    renderFaqs();
  });
}



/* --------------------------------------------------------------------------
   7. Certificate Lightbox & Download / Preview Handling
   -------------------------------------------------------------------------- */
function initCertificateLightbox(config) {
  const viewCertBtn = document.getElementById("view-certificate-btn");
  const downloadCertBtn = document.getElementById("download-certificate-btn");
  const modal = document.getElementById("certificate-modal");
  const closeBtn = document.getElementById("cert-modal-close");
  const certDisplayCard = document.getElementById("certificate-display-card");
  const certModalBody = document.getElementById("certificate-modal-body");

  const certImage = config.credentials.certificateImage || "";

  // Render on main page credentials card
  if (certDisplayCard) {
    if (certImage) {
      certDisplayCard.innerHTML = `
        <div class="cert-preview-wrapper" id="cert-click-preview" style="cursor: pointer; position: relative; border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-card); border: 1px solid var(--border-color); background: #FFF; transition: transform var(--transition-normal), box-shadow var(--transition-normal);">
          <div style="width: 100%; overflow: hidden; background: #FFFFFF; position: relative; line-height: 0;">
            <img src="${certImage}" alt="${escapeHtml(config.credentials.certificateTitle)}" style="width: 100%; height: auto; display: block; object-fit: cover; transition: transform var(--transition-normal);" onerror="this.onerror=null; this.src='assets/images/certificate.jpeg';">
            <div class="cert-hover-overlay" style="position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(9, 71, 61, 0.45); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity var(--transition-fast);">
              <span class="btn btn-primary btn-sm" style="box-shadow: 0 4px 14px rgba(0,0,0,0.3);">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                Click to Enlarge Certificate
              </span>
            </div>
          </div>
          <div style="padding: 14px 18px; background: #FFFFFF; border-top: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <div>
              <h4 style="font-size: 1.02rem; color: var(--text-main); font-weight: 700; line-height: 1.3;">${escapeHtml(config.credentials.certificateTitle)}</h4>
              <p style="font-size: 0.82rem; color: var(--primary-dark); font-weight: 600; margin-top: 2px;">
                ${escapeHtml(config.credentials.issuingOrganization)} • Issued: ${escapeHtml(config.credentials.issueDate)}
              </p>
            </div>
            <span style="font-size: 0.78rem; font-weight: 700; color: var(--primary); background: var(--primary-soft); padding: 4px 12px; border-radius: 99px; border: 1px solid var(--primary-20);">Verified Credential</span>
          </div>
        </div>

        <div class="cert-actions-bar" style="margin-top: 14px;">
          <button class="btn btn-primary btn-sm" id="view-certificate-btn">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            View Full Certificate
          </button>
          <button class="btn btn-outline btn-sm" id="download-certificate-btn">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            Download Certificate
          </button>
        </div>
      `;

      // Hover effect on the certificate preview wrapper
      const previewWrapper = document.getElementById("cert-click-preview");
      const overlay = previewWrapper?.querySelector(".cert-hover-overlay");
      previewWrapper?.addEventListener("mouseenter", () => {
        if (overlay) overlay.style.opacity = "1";
      });
      previewWrapper?.addEventListener("mouseleave", () => {
        if (overlay) overlay.style.opacity = "0";
      });
      previewWrapper?.addEventListener("click", () => {
        openCertModal();
      });
    } else {
      certDisplayCard.innerHTML = `
        <div class="cert-icon-seal">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6" stroke-width="1.8"/><path stroke-width="1.8" d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
        </div>
        <h3 class="cert-card-title config-cert-title">${escapeHtml(config.credentials.certificateTitle)}</h3>
        <div class="cert-card-practitioner config-doctor-name">${escapeHtml(config.doctorName)}</div>
        <div class="cert-placeholder-tag config-cert-placeholder">${escapeHtml(config.credentials.placeholderText || "[UPLOAD DOCTOR CERTIFICATE HERE]")}</div>
        <div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 24px;">
          Issuing Body: <strong class="config-cert-issuer">${escapeHtml(config.credentials.issuingOrganization)}</strong> &bull; Issue Date: <strong class="config-cert-date">${escapeHtml(config.credentials.issueDate)}</strong>
        </div>
        <div class="cert-actions-bar">
          <button class="btn btn-primary btn-sm" id="view-certificate-btn">View Certificate (Preview)</button>
          <button class="btn btn-outline btn-sm" id="download-certificate-btn">Download Certificate</button>
        </div>
      `;
    }
  }

  // Render Modal Content
  if (certModalBody) {
    if (certImage) {
      certModalBody.innerHTML = `
        <div style="width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <img src="${certImage}" alt="${escapeHtml(config.credentials.certificateTitle)}" style="max-width: 100%; max-height: 75vh; height: auto; border-radius: var(--radius-sm); box-shadow: 0 10px 30px rgba(0,0,0,0.15); object-fit: contain;" onerror="this.onerror=null; this.src='assets/images/certificate.jpeg';">
          <div style="margin-top: 16px; text-align: center;">
            <h4 style="color: var(--text-main); font-size: 1.15rem;">${escapeHtml(config.credentials.certificateTitle)} - ${escapeHtml(config.doctorName)}</h4>
            <p style="color: var(--primary-dark); font-weight: 600; font-size: 0.9rem;">${escapeHtml(config.credentials.issuingOrganization)} • Issued: ${escapeHtml(config.credentials.issueDate)}</p>
          </div>
        </div>
      `;
    } else {
      certModalBody.innerHTML = `
        <div style="border: 2px dashed #0D7A68; border-radius: var(--radius-lg); padding: 40px 24px; background: #FFF; max-width: 600px; margin: 0 auto; text-align: center;">
          <div class="cert-icon-seal" style="margin-bottom: 20px;">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6" stroke-width="1.8"/><path stroke-width="1.8" d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
          </div>
          <h3 style="font-size: 1.5rem; margin-bottom: 8px;" class="config-cert-title">${escapeHtml(config.credentials.certificateTitle)}</h3>
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--primary); margin-bottom: 16px;" class="config-doctor-name">${escapeHtml(config.doctorName)}</div>
          <div style="display:inline-block; background: #EBF8F5; color: var(--primary-dark); font-weight: 700; padding: 8px 20px; border-radius: 99px; margin-bottom: 20px; border: 1px solid var(--primary-20);">
            [UPLOAD DOCTOR CERTIFICATE HERE]
          </div>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">
            The clinic owner can easily link their real certificate image or PDF inside <code>js/clinic-config.js</code>. Original credentials are also maintained at the clinic in Kallettumkara.
          </p>
        </div>
      `;
    }
  }

  // Wire buttons (re-query dynamically rendered buttons)
  const openCertModal = () => {
    modal?.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeCertModal = () => {
    modal?.classList.remove("active");
    document.body.style.overflow = "";
  };

  document.querySelectorAll("#view-certificate-btn").forEach(btn => {
    btn.addEventListener("click", openCertModal);
  });

  document.querySelectorAll("#download-certificate-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (config.credentials.certificatePdf) {
        window.open(config.credentials.certificatePdf, "_blank");
      } else if (certImage) {
        window.open(certImage, "_blank");
      } else {
        showToast("Certificate file will open here once uploaded.");
      }
    });
  });

  closeBtn?.addEventListener("click", closeCertModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeCertModal();
  });
}

/* --------------------------------------------------------------------------
   8. Appointment Booking Form with Direct WhatsApp Integration
   -------------------------------------------------------------------------- */
function initAppointmentBooking(config) {
  const form = document.getElementById("appointment-booking-form");
  const confirmModal = document.getElementById("booking-confirmation-modal");
  const confirmClose = document.getElementById("confirm-modal-close");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("booking-name")?.value.trim();
    const phone = document.getElementById("booking-phone")?.value.trim();
    const email = document.getElementById("booking-email")?.value.trim() || "Not provided";
    const date = document.getElementById("booking-date")?.value || "Flexible";
    const time = document.getElementById("booking-time")?.value || "Flexible";
    const treatment = document.getElementById("booking-treatment")?.value || "General Acupressure Session";
    const message = document.getElementById("booking-message")?.value.trim() || "None";

    if (!name || !phone) {
      showToast("Please enter your name and contact phone number.");
      return;
    }

    // Build structured WhatsApp Message
    const textMsg = 
`*NEW APPOINTMENT REQUEST*
*Clinic:* ${config.clinicName}
*Practitioner:* Dr. ${config.doctorName}
----------------------------------------
👤 *Patient Name:* ${name}
📞 *Phone Number:* ${phone}
✉️ *Email:* ${email}
📅 *Preferred Date:* ${date}
⏰ *Preferred Time:* ${time}
🌿 *Selected Service:* ${treatment}
📝 *Health / Wellness Notes:* ${message}
----------------------------------------
_Note: I understand acupressure is a complementary wellness practice. Please confirm my appointment time._`;

    const encodedMsg = encodeURIComponent(textMsg);
    const whatsappUrl = `https://wa.me/${config.whatsappRaw}?text=${encodedMsg}`;

    // Populate confirmation modal
    document.getElementById("confirm-patient-name").textContent = name;
    document.getElementById("confirm-patient-phone").textContent = phone;
    document.getElementById("confirm-patient-service").textContent = treatment;
    document.getElementById("confirm-patient-date").textContent = `${date} at ${time}`;

    const waBtn = document.getElementById("confirm-wa-launch-btn");
    if (waBtn) {
      waBtn.setAttribute("href", whatsappUrl);
    }

    // Show Confirmation Modal
    confirmModal?.classList.add("active");
    document.body.style.overflow = "hidden";

    // Auto launch WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Reset Form
    form.reset();
  });

  confirmClose?.addEventListener("click", () => {
    confirmModal?.classList.remove("active");
    document.body.style.overflow = "";
  });
}

/* --------------------------------------------------------------------------
   9. Scroll & Animation Utilities
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  // Smooth scroll offset handler for all anchor tags
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || !targetId.startsWith("#")) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  // Set minimum date for appointment picker to today
  const datePicker = document.getElementById("booking-date");
  if (datePicker) {
    const today = new Date().toISOString().split("T")[0];
    datePicker.setAttribute("min", today);
  }
}

/* --------------------------------------------------------------------------
   10. Toast Notification
   -------------------------------------------------------------------------- */
function showToast(msg) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "toast-notice";
    toast.innerHTML = `
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <span id="toast-text">${escapeHtml(msg)}</span>
    `;
    document.body.appendChild(toast);
  } else {
    document.getElementById("toast-text").textContent = msg;
  }

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

/* --------------------------------------------------------------------------
   11. SVG Icon Dictionary
   -------------------------------------------------------------------------- */
function getSvgIcon(name) {
  const icons = {
    "shield-check": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    "user-heart": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
    "sparkles": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z"/></svg>`,
    "calendar-check": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke-width="2"/><path stroke-width="2" d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/></svg>`,
    "award-badge": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7" stroke-width="2"/><path stroke-width="2" d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>`,
    "heart-handshake": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M7 11.5V14m0-2.5l3.5-3.5a2.121 2.121 0 013 3L12 12.5m-5-1l-3 3a2.121 2.121 0 003 3l2-2m5-3.5l3.5 3.5a2.121 2.121 0 01-3 3L13 15.5m0 0l-1.5-1.5"/></svg>`,
    "sparkles-clean": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"/></svg>`,
    "user-single": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" stroke-width="2"/><path stroke-width="2" d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>`,
    "calendar-clock": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke-width="2"/><path stroke-width="2" d="M12 7v5l3 3"/></svg>`,
    "shield-traditional": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z"/></svg>`,
    "brain-spark": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
    "lotus": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 3c-1.5 3-4 6.5-7 8 2 2 5 3 7 3s5-1 7-3c-3-1.5-5.5-5-7-8zM12 14c-2.5 3-5 5-9 5 3 2 7 2 9 2s6 0 9-2c-4 0-6.5-2-9-5z"/></svg>`,
    "user-check": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4" stroke-width="2"/><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M17 11l2 2 4-4"/></svg>`,
    "activity": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    "zap": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke-width="2" stroke-linejoin="round"/></svg>`,
    "moon": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`,
    "heart-pulse": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M19.5 12.572l-7.5 7.428-7.5-7.428m0 0A5 5 0 1112 6.07a5 5 0 017.5 6.5z"/></svg>`,
    "sun": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke-width="2"/><path stroke-width="2" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
    "footprints": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M18 10a4 4 0 00-4-4H9a4 4 0 00-4 4v7a4 4 0 004 4h5a4 4 0 004-4v-7z"/><circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="12" cy="5" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/></svg>`,
    "award": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6" stroke-width="2"/><path stroke-width="2" d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`
  };

  return icons[name] || icons["shield-check"];
}
