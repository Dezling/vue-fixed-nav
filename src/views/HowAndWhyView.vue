<!-- views/HowAndWhyView.vue -->
<template>
  <main class="how-and-why-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">How and Why to Study Sustainability at Your University</h1>
      </div>
    </section>

    <section class="section content-section">
      <div class="responsive-container">
        <article class="content-article">
          <p class="lead-text">
            Understanding sustainability today means learning how social, ecological, and economic systems interact—and how we can move from simply reducing harm to regenerating the living systems we depend on. This page helps you understand why sustainability and regenerative studies matter, and how you can build your own learning path within the GDCAU network.
          </p>

          <div class="content-block">
            <h2 class="content-title">Why Study Sustainability and Regeneration?</h2>
            <p>
              Sustainability issues—climate change, water scarcity, biodiversity loss, pollution, and rapid urbanization—directly shape life across Central Asia.
            </p>
            <p>
              Studying sustainability helps you:
            </p>
            <ul class="benefits-list">
              <li>understand how environmental and social systems are connected</li>
              <li>develop skills for solving complex real-world problems</li>
              <li>contribute to the resilience and regeneration of your community</li>
              <li>prepare for growing green and ESG career opportunities</li>
              <li>participate in shaping a healthier, fairer, and more stable future</li>
            </ul>
            <p>
              Regeneration goes a step further: it focuses not only on minimizing negative impacts, but on repairing ecosystems, restoring relationships, and strengthening the capacity of communities and landscapes to thrive.
            </p>
          </div>

          <div class="content-block">
            <h2 class="content-title">How to Study Sustainability at Your University</h2>
            <p>
              Sustainability learning at GDCAU is flexible, modular, and student-centered. You can explore sustainability through:
            </p>
            <ul class="study-options-list">
              <li>courses at your home university</li>
              <li>modules and short courses offered by GDCAU partners</li>
              <li>interdisciplinary or project-based learning</li>
              <li>community engagement and regenerative campus initiatives</li>
              <li>micro-credentials and mobility opportunities</li>
            </ul>
            <p>
              The GDCAU network makes it possible to mix and match learning experiences in ways that work for your academic path and personal interests.
            </p>
          </div>

          <div class="content-block">
            <h2 class="content-title">Individual Learning Pathways</h2>
            <p>
              As outlined in the GDCAU Framework for Individual Learning Paths, students can design a personalized sustainability study plan that may include:
            </p>
            <ul class="pathways-list">
              <li>Green Deal and ESG-focused modules</li>
              <li>elective courses from different disciplines</li>
              <li>micro-credentials (e.g., green literacy, circular economy)</li>
              <li>short-term mobility between partner universities</li>
              <li>research or project-based activities</li>
              <li>internships or field-based learning</li>
            </ul>
            <p>
              Your learning path is flexible and fully supported by your university's academic regulations.
            </p>
            <p class="highlight-text">
              Get in touch with your university's GDC Hub Coordinator to discuss your options.
            </p>
          </div>

          <div class="content-block">
            <h2 class="content-title">Your GDC Hub Coordinator (Academic Advisor)</h2>
            <p>
              Each university has a GDC Hub Coordinator who supports students in planning and navigating their sustainability studies as described in the GDCAU Students' Support Framework.
            </p>
            <p>
              Your coordinator can help you:
            </p>
            <ul class="coordinator-help-list">
              <li>plan an individual learning pathway</li>
              <li>choose appropriate courses or micro-credentials</li>
              <li>explore exchange or mobility options</li>
              <li>find campus or community projects to join</li>
              <li>get academic or administrative support as needed</li>
            </ul>
            <p>
              A full list of coordinators appears just below on this page.
            </p>
          </div>

          <div class="content-block ready-block">
            <h2 class="content-title">Ready to Begin?</h2>
            <p class="ready-text">
              Studying sustainability and regeneration is not just an academic choice—it's a way of learning to act, collaborate, and create solutions that support thriving ecosystems and communities.
            </p>
            <p class="ready-text highlight">
              Your journey starts here!
            </p>
          </div>

          <div class="coordinators-section">
            <h2 class="coordinators-title">Here's your local coordinator's contact information:</h2>
            
            <div class="coordinator-card" v-for="coordinator in coordinators" :key="coordinator.id">
              <h3 class="university-name">{{ coordinator.university }}</h3>
              <p class="coordinator-name">{{ coordinator.name }}</p>
              <a :href="`mailto:${coordinator.email}`" class="coordinator-email">{{ coordinator.email }}</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const coordinators = ref([
  {
    id: 1,
    university: 'Eurasian Technological University (ETU), Almaty',
    name: 'Talgat Zhuniskaliyev',
    email: 't.zhuniskaliyev@etu.edu.kz'
  },
  {
    id: 2,
    university: 'Karaganda Industrial University (KarIU), Temirtau',
    name: 'Anatassiya Chvanova',
    email: 'a.chvanova@tttu.edu.kz'
  },
  {
    id: 3,
    university: 'Bishkek State University (BSU), Bishkek',
    name: 'Elegiia Bokovea',
    email: 'elegiabokoeva@gmail.com'
  },
  {
    id: 4,
    university: 'University of Central Asia – Kyrgyz Republic and Tajikistan (UCAK/T), Naryn and Khorog',
    name: 'Kanat Telikeyev',
    email: 'kanat.tilekeyev@ucentralasia.org'
  },
  {
    id: 5,
    university: 'Khorog State University (KSU), Tajikistan',
    name: 'Tojigul Mardonova',
    email: 'tojigulmardonova@gmail.com'
  },
  {
    id: 6,
    university: 'International Oil and Gas University (IOGU), Turkmenistan',
    name: 'Nazarmuhammet Nazargulyyev',
    email: 'nazargulyyewnazar05@gmail.com'
  },
  {
    id: 7,
    university: 'International Horse Breeding Academy (IHBA), Turkmenistan',
    name: 'Begmyradov Dovran',
    email: 'dovran.ihba@gmail.com'
  },
  {
    id: 8,
    university: 'Tashkent Institute of Irrigation and Agricultural Mechanization Engineers (TIIAME), Uzbekistan',
    name: 'Sherzod Rakhmonov',
    email: 'sherzod.rakhmonov@gmail.com'
  },
  {
    id: 9,
    university: 'Tashkent Kimyo International University (KIUT), Uzbekistan',
    name: 'Madumar Musurmonov',
    email: 'madumar94@mail.ru'
  }
])
</script>

<style scoped>
.how-and-why-page {
  font-family: 'Inter', system-ui, sans-serif;
  background: #f8fafc;
}

.hero-section {
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background: linear-gradient(45deg, rgba(34, 140, 61, 0.9), rgba(66, 184, 131, 0.9)),
              url('/src/assets/main_back.png') center/cover fixed;
  padding: 2rem 1rem;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1s ease forwards;
  line-height: 1.3;
}

.section {
  padding: 4rem 0;
  position: relative;
}

.responsive-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-section {
  background: linear-gradient(45deg, #f8fff8, #ffffff);
}

.content-article {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(34, 140, 61, 0.1);
}

.lead-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 3rem;
  font-weight: 500;
  text-align: center;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 2rem;
}

.content-block {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #f1f5f9;
}

.content-block:last-of-type {
  border-bottom: none;
  margin-bottom: 2rem;
}

.content-title {
  font-size: 1.8rem;
  color: #228c3d;
  margin-bottom: 1.5rem;
  font-weight: 700;
  position: relative;
  padding-left: 1rem;
}

.content-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 4px;
  background: #228c3d;
  border-radius: 2px;
}

.content-block p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1.2rem;
}

.benefits-list,
.study-options-list,
.pathways-list,
.coordinator-help-list {
  list-style: none;
  padding-left: 0;
  margin: 1.5rem 0;
}

.benefits-list li,
.study-options-list li,
.pathways-list li,
.coordinator-help-list li {
  padding: 0.5rem 0;
  padding-left: 2rem;
  position: relative;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.benefits-list li::before,
.study-options-list li::before,
.pathways-list li::before,
.coordinator-help-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #228c3d;
  font-weight: bold;
  font-size: 1.2rem;
}

.highlight-text {
  background: #f0fdf4;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #228c3d;
  font-weight: 600;
  color: #1e6e3d;
  font-size: 1.1rem;
}

.ready-block {
  text-align: center;
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  padding: 2.5rem;
  border-radius: 12px;
  margin-top: 3rem;
}

.ready-text {
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.ready-text.highlight {
  font-size: 1.4rem;
  font-weight: 700;
  color: #228c3d;
}

.coordinators-section {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 2px solid #e2e8f0;
}

.coordinators-title {
  font-size: 1.5rem;
  color: #228c3d;
  text-align: center;
  margin-bottom: 2.5rem;
  font-weight: 700;
}

.coordinator-card {
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.coordinator-card:hover {
  border-color: #228c3d;
  box-shadow: 0 4px 12px rgba(34, 140, 61, 0.1);
}

.university-name {
  font-size: 1.2rem;
  color: #1e293b;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.coordinator-name {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.coordinator-email {
  font-size: 1rem;
  color: #228c3d;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.coordinator-email:hover {
  color: #1a6b2f;
  text-decoration: underline;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .content-article {
    padding: 2rem;
  }
  
  .content-title {
    font-size: 1.5rem;
  }
  
  .coordinator-card {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.6rem;
  }
  
  .responsive-container {
    padding: 0 1rem;
  }
  
  .content-article {
    padding: 1.5rem;
  }
  
  .ready-block {
    padding: 2rem 1.5rem;
  }
}
</style>