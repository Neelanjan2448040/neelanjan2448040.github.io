/**
 * NEELANJAN DUTTA - Portfolio Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Intersection Observer for Reveal Animations
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Hero Parallax Effect
    const hero = document.getElementById('hero');
    const blobs = document.querySelectorAll('.bg-blob');
    
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            const moveX = (clientX - centerX) / 50;
            const moveY = (clientY - centerY) / 50;
            
            blobs.forEach((blob, index) => {
                const speed = (index + 1) * 0.5;
                blob.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
            });
        });
    }

    // 5. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 6. Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Sending... <i data-lucide="loader-2" class="spin"></i>';
            lucide.createIcons();
            
            setTimeout(() => {
                btn.innerHTML = 'Message Sent! <i data-lucide="check"></i>';
                btn.style.background = 'var(--primary)';
                lucide.createIcons();
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = 'var(--grad-primary)';
                    lucide.createIcons();
                }, 3000);
            }, 2000);
        });
    }

    // 7. Page View Switching Logic
    const homeView = document.getElementById('home-view');
    const projectView = document.getElementById('project-view');
    const projectContent = document.getElementById('project-detail-content');

    const projectDetails = {
        paperscout: {
            title: "PaperScout+ – Topic-Aware Academic Recommender",
            github: "https://github.com/Neelanjan2448040/PaperScout-Topic-Aware-Academic-Paper-Recommender",
            situation: "Researchers often find it difficult to discover relevant academic literature across fragmented databases like PubMed and arXiv using only basic keywords.",
            task: "Build a semantic discovery engine that understands research intent and topic clusters to provide highly personalized paper recommendations.",
            action: "Integrated multiple academic APIs, implemented semantic embeddings using Sentence-Transformers, and built a ranking algorithm with FAISS for high-speed discovery.",
            result: "Successfully reduced literature review time for pilot users by over 30% through high-precision conceptual matching.",
            flow: ["User Query", "Semantic Embedding", "Cross-Ref/arXiv API", "AI Ranking", "Personalized Feed"],
            features: [
                "Multi-database aggregation (PubMed, arXiv, CrossRef)",
                "Topic-aware semantic ranking",
                "Personalized research discovery",
                "Automated trend analysis"
            ],
            stack: ["Python", "Streamlit", "Sentence-Transformers", "FAISS", "Crossref API"]
        },
        nutrisage: {
            title: "NutriSage – Multi-Modal AI Nutrition Assistant",
            github: "https://github.com/Aaditya235-design/NutriSage",
            situation: "Traditional nutrition tracking apps rely on manual entry, which is tedious, error-prone, and lacks professional health reasoning.",
            task: "Develop a multi-modal AI system capable of recognizing food from images and providing expert-level nutritional advice.",
            action: "Deployed EfficientNet for visual food recognition and engineered a RAG pipeline with Qwen 2.5 to provide interpretable health insights based on clinical data.",
            result: "Created an end-to-end assistant that provides instant nutritional breakdowns with 85%+ accuracy in food identification.",
            flow: ["Food Image", "Vision Analysis", "RAG Knowledge Base", "Qwen 2.5 Reasoning", "Nutritional Insights"],
            features: [
                "Real-time food recognition from images",
                "RAG-driven dietary advice",
                "Multi-modal reasoning (Image + Text)",
                "Interpretable health insights"
            ],
            stack: ["Python", "EfficientNet", "RAG Architecture", "Qwen 2.5", "Streamlit", "FAISS"]
        },
        lakshya: {
            title: "LakshyaAI – Intelligent Internship Discovery Portal",
            github: "https://github.com/Neelanjan2448040/LakshayAI",
            situation: "Students often apply for internships that don't match their actual skillset due to poorly defined job descriptions and keyword-only search filters.",
            task: "Create an intelligent portal that maps student profiles to job requirements using conceptual relevance rather than just keywords.",
            action: "Used vector search and semantic embeddings to build a match-making engine that calculates similarity scores between resumes and job descriptions.",
            result: "Improved the relevance of internship matches by over 40% compared to traditional keyword-based systems.",
            flow: ["Resume/JD Upload", "Vector Embedding", "FAISS Indexing", "Similarity Scoring", "Top Match Rankings"],
            features: [
                "Semantic resume-to-job matching",
                "Automated skill gap analysis",
                "Vector-based candidate ranking",
                "Interactive career portal"
            ],
            stack: ["Python", "Flask", "FAISS", "Sentence-Transformers", "Scikit-Learn"]
        },
        mediguide: {
            title: "MediGuide-AI – Clinical Intelligence Assistant",
            github: "https://github.com/Neelanjan2448040/MediGuide-AI",
            situation: "Healthcare providers are overwhelmed by large clinical documents, making it difficult to extract critical patient history in emergencies.",
            task: "Develop a secure, high-reliability clinical assistant for document analysis and emergency symptom detection.",
            action: "Built a RAG pipeline using LangChain and Groq LLM for low-latency reasoning over secure medical PDFs with contextual chunking.",
            result: "Significantly improved the speed of clinical document summarization, enabling faster decision-making for healthcare professionals.",
            flow: ["Medical PDF", "Contextual Chunking", "Vector Storage", "LLM Reasoning (Groq)", "Clinical Response"],
            features: [
                "Secure medical document analysis",
                "RAG-driven clinical Q&A",
                "Emergency symptom detection",
                "Automated consultation summaries"
            ],
            stack: ["Python", "LangChain", "Groq LLM", "Streamlit", "SQLite", "Plotly"]
        },
        campus: {
            title: "Campus AI Hub – Smart Campus Management",
            github: "https://github.com/Neelanjan2448040/campus-ai",
            situation: "Institutional data management is often siloed, leading to slow query responses and administrative inefficiencies for both students and staff.",
            task: "Integrate institutional systems into a unified platform with an intelligent conversational interface for real-time data access.",
            action: "Architected a full-stack system with React and FastAPI, implementing intent detection and role-based access for secure AI-driven queries.",
            result: "Streamlined campus operations and provided an 80% faster response time for institutional queries compared to traditional portals.",
            flow: ["User Query", "Intent Detection", "Knowledge DB", "LLM Processing", "AI Response"],
            features: [
                "Role-based JWT authentication",
                "Admin dashboard with analytics",
                "AI chatbot with intent detection",
                "Student management system",
                "Dockerized full-stack deployment"
            ],
            stack: ["React", "FastAPI", "MySQL", "Groq LLM", "Docker", "Nginx"]
        },
        attrinet: {
            title: "AttriNet – Predictive HR Intelligence",
            github: "https://github.com/Neelanjan2448040/AttriNet-Predictive-HR-Attrition-Intelligence-",
            situation: "Unexpected employee attrition causes massive knowledge loss and operational costs for HR departments in large organizations.",
            task: "Build a predictive system that identifies high-risk employees before they leave using historical HR data.",
            action: "Implemented a TabNet deep learning architecture for tabular data and engineered features to capture complex behavioral trends in workforce data.",
            result: "Achieved over 90% accuracy in attrition prediction, allowing HR teams to implement proactive retention strategies effectively.",
            flow: ["HR Employee Data", "Feature Engineering", "Model Prediction (TabNet)", "Risk Factor Analysis", "HR Dashboard"],
            features: [
                "Predictive attrition modeling",
                "Real-time HR risk dashboard",
                "Feature importance visualization",
                "Explainable AI insights"
            ],
            stack: ["Python", "Streamlit", "ANN", "TabNet", "Scikit-Learn", "Matplotlib"],
            demo: "https://ecppvduzspjv38swewmysm.streamlit.app/"
        }
    };

    window.showHome = function() {
        // Fade out project view
        projectView.style.opacity = '0';
        setTimeout(() => {
            projectView.style.display = 'none';
            homeView.style.display = 'block';
            homeView.style.opacity = '1';
            window.scrollTo(0, 0);
            lucide.createIcons();
        }, 300);
    };

    window.showProjectDetail = function(id) {
        const project = projectDetails[id];
        if (!project) return;

        // Populate content
        projectContent.innerHTML = `
            <div style="margin-bottom: 2rem;">
                <button onclick="showHome()" class="btn btn-outline">← Back to Projects</button>
            </div>
            
            <div class="detail-header">
                <span class="detail-meta">Featured AI Project</span>
                <h2 class="gradient-text" style="font-size: 2.5rem; margin-bottom: 1.5rem;">${project.title}</h2>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <a href="${project.github}" target="_blank" class="btn btn-github">
                        <i data-lucide="github"></i> View on GitHub
                    </a>
                    ${project.demo ? `
                    <a href="${project.demo}" target="_blank" class="btn btn-demo">
                        <i data-lucide="external-link"></i> Live Demo
                    </a>` : ''}
                </div>
            </div>

            <div class="star-container">
                <div class="detail-section">
                    <h4>Situation</h4>
                    <p>${project.situation}</p>
                </div>

                <div class="detail-section">
                    <h4>Task</h4>
                    <p>${project.task}</p>
                </div>

                <div class="detail-section">
                    <h4>Action</h4>
                    <p>${project.action}</p>
                </div>

                <div class="detail-section">
                    <h4>Result</h4>
                    <div class="impact-box">
                        <p>${project.result}</p>
                    </div>
                </div>
            </div>

            <div class="detail-section" style="margin-top: 3rem;">
                <h4>AI Architecture Flow</h4>
                <div class="arch-flow">
                    ${project.flow.map(step => `<div class="flow-step">${step}</div>`).join('')}
                </div>
            </div>

            <div class="detail-section">
                <h4>Key Features</h4>
                <div class="feature-list">
                    ${project.features.map(f => `<div class="feature-item">${f}</div>`).join('')}
                </div>
            </div>

            <div class="detail-section">
                <h4>Stack</h4>
                <div class="skill-tags">
                    ${project.stack.map(s => `<span class="skill-tag">${s}</span>`).join('')}
                </div>
            </div>

            <div style="margin-top: 4rem; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem;">
                <button onclick="showHome()" class="btn btn-primary">Home</button>
            </div>
        `;

        // Switch Views with "New Page" effect
        homeView.style.display = 'none';
        projectView.style.display = 'block';
        projectView.style.opacity = '1';
        window.scrollTo({ top: 0, behavior: 'instant' });
        lucide.createIcons();
    };

    // 8. Daily Insight Logic
    const insights = [
        "Data is the foundation, but AI is the architect of the future. I'm excited to help build that future with you.",
        "The best way to predict the future is to create it, one neural network at a time.",
        "In the world of data, transparency is the ultimate currency. Let's build ethical AI together.",
        "Complexity is the enemy of execution. Simplifying the complex through intelligent systems is my mission.",
        "Innovation is the intersection of curiosity and computation.",
        "Turning raw patterns into strategic intelligence is where the magic happens.",
        "AI doesn't replace human intuition; it scales it.",
        "Quality data is the heartbeat of every successful machine learning model.",
        "Building responsible AI isn't just a goal; it's a necessity for our shared future.",
        "Every data point tells a story. My job is to listen and translate it into impact."
    ];

    const insightEl = document.getElementById('daily-insight');
    if (insightEl) {
        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        const index = dayOfYear % insights.length;
        insightEl.textContent = `"${insights[index]}"`;
    }

    // Initialize Card Listeners
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-project');
            showProjectDetail(id);
        });
    });
});

// 8. Live Background Animation (Neural Network / Constellation)
// Placed outside to ensure it runs independently of UI state
const initBackgroundAnimation = () => {
    const canvas = document.getElementById('canvas-bg');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 100;
    const connectionDistance = 150;
    let mouse = { x: null, y: null };

    function init() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.6 - 0.3;
            this.speedY = Math.random() * 0.6 - 0.3;
            this.color = 'rgba(0, 242, 255, 0.5)';
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            else if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            else if (this.y < 0) this.y = canvas.height;

            if (mouse.x && mouse.y) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    this.x -= dx * 0.01;
                    this.y -= dy * 0.01;
                }
            }
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    ctx.strokeStyle = `rgba(0, 242, 255, ${0.2 * (1 - distance / connectionDistance)})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    window.addEventListener('resize', init);
    
    init();
    animate();
};

initBackgroundAnimation();
