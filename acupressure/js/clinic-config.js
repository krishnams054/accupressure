/**
 * Manikanthan M S – Acupressure Therapy & Wellness Clinic
 * Centralized Website Configuration & Content Management
 * 
 * NOTE FOR CLINIC OWNER / ADMINISTRATOR:
 * You can easily update all details on the website by editing this file.
 * Changes made here will automatically update throughout the entire website.
 */

const clinicConfig = {
  // Practitioner & Clinic Core Identity
  doctorName: "Manikanthan M S",
  doctorTitle: "Certified Acupressure Practitioner",
  clinicName: "Manikanthan M S – Acupressure Therapy & Wellness Clinic",
  shortClinicName: "Manikanthan Acupressure Clinic",
  tagline: "Natural wellness through traditional acupressure techniques and personalized care.",

  // Contact Information
  phone: "+91 98462 13152",
  phoneRaw: "+919846213152",
  whatsapp: "+91 9846213152",
  whatsappRaw: "919846213152",
  email: "[ADD EMAIL ADDRESS]",
  emailRaw: "", // e.g. "info@acupressureclinic.com"

  // Clinic Address & Location
  address: {
    line1: "Meladath House",
    line2: "Near Kunnathara Temple",
    landmark: "Kallettumkara P.O",
    pincode: "680683",
    stateCountry: "Kerala, India",
    fullAddress: "Meladath House, Near Kunnathara Temple, Kallettumkara P.O, 680683, Kerala, India"
  },

  // Google Maps Search Query / Link
  googleMapsUrl: "https://maps.app.goo.gl/oYk3qFCGBW7CYVqR8?g_st=ipc" + encodeURIComponent("Meladath House, Near Kunnathara Temple, Kallettumkara P.O, 680683, Kerala, India"),

  // Operating Hours / Timings
  timings: "5.00am to 10.00pm",
  timingsDetail: {
    weekdays: "By Appointment: [ADD WEEKDAY HOURS]",
    weekends: "By Appointment: [ADD WEEKEND HOURS]",
    note: "All sessions are one-to-one and strictly appointment-based to ensure personalized care."
  },

  // About Practitioner Details (Editable Placeholders)
  doctorDetails: {
    photo: "assets/images/doctor.jpeg",
    qualification: "Completed M.D.A.M for the development of Acupressure yoga and magneto therapy system",
    experience: "14 years of experience",
    areasOfPractice: "Kerala and Karnataka",
    biography: "Manikanthan M S is an acupressure practitioner dedicated to providing personalized wellness sessions using traditional acupressure techniques. I focuses on creating a calm, comfortable and supportive environment for individuals seeking complementary wellness and relaxation support. Each session is tailored according to the individual’s needs and wellness goals.",
    treatmentPhilosophy: "Acupressure is a gentle, time-tested complementary wellness discipline that works by applying targeted manual pressure to specific points across the body. The objective is to release muscle tension, promote relaxation, encourage natural circulation, and support the body's innate balance and vitality in a calm, supportive environment.",
    keyPoints: [
      { title: "One-to-One Attention", description: "Dedicated individual consultation and care tailored to your specific wellness needs." },
      { title: "Natural Approach", description: "Non-invasive manual pressure techniques based on traditional principles." },
      { title: "Calm & Hygienic Clinic", description: "A peaceful, clean, and comfortable environment dedicated to your relaxation." },
      { title: "Complementary Care", description: "Designed to safely complement your existing lifestyle and medical healthcare routines." }
    ]
  },

  // Certification & Credentials
  credentials: {
    title: "My Certification & Credentials",
    subtitle: "Official certification in traditional acupressure practice and complementary therapy.",
    certificateTitle: "Certified Acupressure Practitioner",
    issuingOrganization: "Indian Academy Of Acupressure Science",
    issueDate: "10th February 2024",
    certificateImage: "assets/images/certificate.jpeg",
    certificatePdf: "assets/documents/certificate.pdf",
    placeholderText: "[UPLOAD DOCTOR CERTIFICATE HERE]",
    verificationNote: "Original practitioner certification credentials are held at the clinic and available for review during your consultation."
  },

  // Safe Medical & Wellness Disclaimer
  disclaimer: "Acupressure is a complementary wellness practice and is not a substitute for diagnosis or treatment by a qualified medical professional. Seek appropriate medical care for serious, urgent or persistent symptoms.",

  // Trust Badges for Hero Section
  heroBadges: [
    { icon: "shield-check", text: "Certified Practitioner" },
    { icon: "user-heart", text: "Personalized Sessions" },
    { icon: "sparkles", text: "Hygienic Environment" },
    { icon: "calendar-check", text: "Appointment Based" }
  ],

  // 10 Treatment & Wellness Services (All Editable)
  treatments: [
    {
      id: "headache-migraine",
      category: "pain-tension",
      name: "Headache & Migraine Wellness Support",
      shortDesc: "Focused pressure point application around the head, neck, and temples to help soothe cranial tension and promote natural ease.",
      fullDesc: "This targeted acupressure session focuses on specific points across the head, temples, neck base, and hands (such as LI4 and GB20 points) commonly utilized in traditional acupressure to soothe recurring tension, stress-induced headaches, and head fatigue. Aimed at relieving muscle stiffness and improving cranial relaxation.",
      duration: "30 - 45 Mins",
      type: "Targeted Wellness Session",
      icon: "brain-spark"
    },
    {
      id: "stress-relaxation",
      category: "stress-sleep",
      name: "Stress & Relaxation Therapy",
      shortDesc: "Calming acupressure session designed to melt away mental stress, ease physical tightness, and restore inner equilibrium.",
      fullDesc: "A deeply soothing therapy targeting points on the chest, shoulders, wrists (P6, HT7), and head to help reduce mental fatigue and daily overwhelm. Helps regulate body tension and provides a safe, peaceful space to unwind and reset your nervous system.",
      duration: "45 - 60 Mins",
      type: "Full Relaxation Care",
      icon: "lotus"
    },
    {
      id: "neck-shoulder",
      category: "pain-tension",
      name: "Neck & Shoulder Discomfort Support",
      shortDesc: "Gentle manual pressure to release deep-seated muscle stiffness, poor posture fatigue, and upper body tension.",
      fullDesc: "Designed particularly for desk workers, drivers, and individuals carrying chronic tension in the upper trapezius, cervical spine, and shoulder blades. Uses specific acupressure trigger points to loosen locked muscles and enhance flexibility and posture comfort.",
      duration: "30 - 45 Mins",
      type: "Targeted Muscle Relief",
      icon: "user-check"
    },
    {
      id: "back-body",
      category: "pain-tension",
      name: "Back & Body Relaxation",
      shortDesc: "Harmonizing acupressure along spinal and lumbar pathways to ease lower and upper back stiffness and encourage flexibility.",
      fullDesc: "Applying rhythmic, controlled pressure along the paraspinal meridians and gluteal pressure zones to alleviate postural strain, back fatigue, and everyday muscular exhaustion. Leaves the entire body feeling grounded, light, and supple.",
      duration: "45 - 60 Mins",
      type: "Comprehensive Body Care",
      icon: "activity"
    },
    {
      id: "joint-muscle",
      category: "pain-tension",
      name: "Joint & Muscle Wellness Support",
      shortDesc: "Complementary pressure point stimulation around major joints to encourage mobility, comfort, and localized blood flow.",
      fullDesc: "Focuses on the key meridian points surrounding the knees, elbows, wrists, and ankles to ease stiffness, enhance range of motion, and promote comfortable, fluid movement. Highly beneficial for active individuals and seniors seeking gentle wellness support.",
      duration: "30 - 45 Mins",
      type: "Mobility & Comfort Session",
      icon: "zap"
    },
    {
      id: "sleep-relaxation",
      category: "stress-sleep",
      name: "Sleep & Relaxation Support",
      shortDesc: "Soothing point stimulation crafted to prepare the mind and body for deep, restorative, and natural sleep cycles.",
      fullDesc: "A gentle, grounding therapy focused on acupoints connected to sleep balance (such as Anmian, Shenmen, and Kidney points). Aims to quiet racing thoughts, release evening muscular restlessness, and encourage natural bedtime tranquility.",
      duration: "45 Mins",
      type: "Evening / Restorative Care",
      icon: "moon"
    },
    {
      id: "digestive-wellness",
      category: "general-wellness",
      name: "Digestive Wellness Support",
      shortDesc: "Abdominal and meridian acupressure to support digestive comfort, ease bloating sensations, and encourage gut harmony.",
      fullDesc: "Gentle pressure on abdominal reflex zones (CV12, ST36, and SP6) to help alleviate sluggish digestion, gas retention, and abdominal discomfort. Promotes a feeling of lightness and metabolic well-being.",
      duration: "30 - 45 Mins",
      type: "Abdominal Wellness Support",
      icon: "heart-pulse"
    },
    {
      id: "general-wellness",
      category: "general-wellness",
      name: "General Wellness & Relaxation",
      shortDesc: "An all-around revitalizing session balancing the body's energy pathways to boost vitality, focus, and overall well-being.",
      fullDesc: "A holistic session addressing multiple core meridian points throughout the upper and lower extremities to revitalize tired energy channels, improve overall vitality, and impart a lasting sense of freshness and physical harmony.",
      duration: "45 - 60 Mins",
      type: "Holistic Maintenance",
      icon: "sun"
    },
    {
      id: "foot-therapy",
      category: "feet-body",
      name: "Acupressure Foot Therapy",
      shortDesc: "Deep reflex point stimulation on the feet to invigorate internal organ reflexes and soothe tired, aching feet.",
      fullDesc: "Your feet contain hundreds of nerve endings and key acupressure zones corresponding to every major system in the body. This concentrated foot session releases plantar tension, stimulates circulation, and provides profound total-body relaxation.",
      duration: "30 - 45 Mins",
      type: "Reflex & Foot Session",
      icon: "footprints"
    },
    {
      id: "full-body",
      category: "feet-body",
      name: "Full Body Acupressure Session",
      shortDesc: "A comprehensive head-to-toe personalized therapy integrating multiple point sequences for complete rejuvenation.",
      fullDesc: "Our most complete wellness experience. Dr. Manikanthan systematically works through head, neck, back, limbs, and feet, custom-tailored to your primary areas of tension. Reconnects mind and body for peak physical calm and renewed energy.",
      duration: "60 - 75 Mins",
      type: "Signature Complete Session",
      icon: "award"
    }
  ],

  // 4-Step Process Timeline
  howItWorks: [
    {
      step: "01",
      title: "Book Appointment",
      description: "Schedule your one-to-one appointment conveniently via WhatsApp, direct phone call, or our online booking form."
    },
    {
      step: "02",
      title: "Initial Consultation",
      description: "We discuss your wellness concerns, lifestyle factors, posture, and areas of discomfort to tailor your session."
    },
    {
      step: "03",
      title: "Personalized Session",
      description: "Experience gentle, focused acupressure point stimulation in a quiet, hygienic, and relaxing clinic setting."
    },
    {
      step: "04",
      title: "Follow-up & Guidance",
      description: "Receive practical wellness, posture, and self-care tips to help maintain your relaxation and comfort at home."
    }
  ],

  // Why Choose Us Cards
  whyChooseUs: [
    {
      icon: "award-badge",
      title: "Certified Practitioner",
      description: "Trained in traditional acupressure methodologies with dedicated focus on client safety and personalized comfort."
    },
    {
      icon: "heart-handshake",
      title: "Personalized Attention",
      description: "Every session is customized around your unique wellness needs rather than a one-size-fits-all approach."
    },
    {
      icon: "sparkles-clean",
      title: "Clean & Comfortable Environment",
      description: "A calm, sanitized, and relaxing clinic space designed to put you at ease from the moment you enter."
    },
    {
      icon: "user-single",
      title: "One-to-One Sessions",
      description: "Exclusive private time during each appointment ensuring complete focus on your therapy session."
    },
    {
      icon: "calendar-clock",
      title: "Appointment-Based Service",
      description: "Pre-scheduled appointments eliminate long waiting times and ensure dedicated practitioner attention."
    },
    {
      icon: "shield-traditional",
      title: "Traditional Acupressure Techniques",
      description: "Time-tested manual pressure techniques applied without invasive instruments, medications, or harsh manipulation."
    }
  ],

  // Frequently Asked Questions (Safe, Transparent, Compliant)
  faqs: [
    {
      question: "What is acupressure?",
      answer: "Acupressure is a traditional, non-invasive complementary wellness discipline rooted in Eastern holistic traditions. It involves applying deliberate, manual finger or palm pressure to specific points across the body (known as acupoints or trigger points) to release muscular tension, improve natural circulation, and encourage overall bodily relaxation."
    },
    {
      question: "How does an acupressure session work?",
      answer: "During a session, you remain fully clothed while resting comfortably on a treatment table. The practitioner applies gentle to firm pressure using fingers, thumbs, or palms on selected points. You may feel a deep ache, warmth, or releasing sensation as tense muscles relax. The pressure is always adjusted to your personal comfort level."
    },
    {
      question: "How long does a session take?",
      answer: "[ADD SESSION DURATION] (Typically sessions range between 30 to 60 minutes depending on whether it is a targeted area session or a full body session. Exact duration is tailored to your appointment)."
    },
    {
      question: "Do I need an appointment?",
      answer: "Yes, appointments are highly recommended. Manikanthan M S provides one-to-one dedicated care, so scheduling your appointment in advance ensures you receive dedicated time without clinic waiting."
    },
    {
      question: "How many sessions may be recommended?",
      answer: "The number of sessions varies depending on your individual wellness goals, how long you have experienced discomfort, and your body's response. While many clients experience a sense of ease after a single session, a series of complementary sessions may be discussed during your consultation."
    },
    {
      question: "Is acupressure suitable for everyone?",
      answer: "Acupressure is gentle and non-invasive, making it suitable for many adults. However, suitability can vary. Individuals who are pregnant, have severe osteoporosis, bleeding disorders, recent fractures, or active medical conditions should consult their qualified medical doctor prior to receiving acupressure."
    },
    {
      question: "What should I expect during my first session?",
      answer: "Your initial appointment begins with a brief wellness consultation to understand your areas of tension and goals. You will then receive a personalized acupressure session in a calm environment, followed by helpful guidance on post-session hydration and daily self-care habits."
    }
  ],

  // Hero Visual Image (Set to empty string when not using hero image)
  heroImage: "",

  // Patient Feedback (Sample / Genuine Client Feedback)
  patientFeedback: [
    {
      name: "Priya Menon",
      location: "Thrissur, Kerala",
      service: "Neck & Shoulder Wellness Support",
      feedback: "Very relaxing session. I felt a big relief in my neck pain and muscle tightness after the treatment. Thank you for the dedicated care!"
    },
    {
      name: "Arun Nair",
      location: "Irinjalakuda, Kerala",
      service: "Back & Body Relaxation",
      feedback: "Back pain reduced a lot after a few sessions. Very professional, gentle and caring approach in a peaceful environment."
    },
    {
      name: "Meera P.",
      location: "Kallettumkara, Kerala",
      service: "Stress & Relaxation Therapy",
      feedback: "A peaceful environment and a gentle, attentive session. The overall experience was deeply comforting and rejuvenating."
    }
  ],

  // Social & External Links (Editable Placeholders)
  socialLinks: {
    instagram: "[ADD INSTAGRAM LINK]",
    facebook: "[ADD FACEBOOK LINK]",
    youtube: "[ADD YOUTUBE LINK]"
  }
};

// Export configuration globally for browser use
if (typeof window !== "undefined") {
  window.clinicConfig = clinicConfig;
}
