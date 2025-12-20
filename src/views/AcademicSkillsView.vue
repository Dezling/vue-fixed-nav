<!-- views/AcademicSkillsView.vue -->
<template>
  <main class="academic-skills-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Academic Skills for Sustainability & Regeneration</h1>
      </div>
    </section>

    <section class="section content-section">
      <div class="responsive-container">
        <article class="content-article">
          <p class="lead-text">
            Building a future in sustainability and regeneration starts with strong academic skills—being able to interpret environmental data, understand complex policies, and assess real ecological impacts. These guides are designed to help you succeed in your coursework while also preparing you for the fast-growing green and regenerative careers emerging across Central Asia.
          </p>
          <p class="description-text">
            They offer clear, practical steps for analyzing information, conducting assessments, and connecting your studies to real-world challenges and opportunities.
          </p>
          <p class="description-text">
            More guides will be added throughout the GDCAU project, so check back regularly for new tools and resources to support your learning journey. And get in touch if you have any suggestions for guides you want to see!
          </p>

          <div class="resources-section">
            <h2 class="resources-title">Learning Resources</h2>
            <div class="resources-list">
              <a 
                v-for="resource in resources" 
                :key="resource.id"
                :href="resource.filePath" 
                class="resource-item"
                target="_blank"
              >
                <div class="resource-icon">📚</div>
                <div class="resource-content">
                  <h3 class="resource-title">{{ resource.title }}</h3>
                  <p class="resource-description">{{ resource.description }}</p>
                </div>
                <div class="download-icon">⬇️</div>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const resources = ref([
  {
    id: 1,
    title: 'What Is the European Green Deal?',
    description: 'Comprehensive guide to understanding the European Green Deal',
    filePath: '/pdf/What_Is_the_European_Green_Deal.pdf'
  },
  {
    id: 2,
    title: 'Why the European Green Deal Matters for Regenerative Futures in Central Asia',
    description: 'Analysis of the Green Deal relevance for Central Asian regions',
    filePath: '/pdf/Why_the_European_Green_Deal_Matters.pdf'
  },
  {
    id: 3,
    title: 'How to Interpret Environmental Data & Indicators',
    description: 'Practical guide to analyzing environmental data and metrics',
    filePath: '/pdf/How_to_Interpret_Environmental_Data.pdf'
  },
  {
    id: 4,
    title: 'How to Read Sustainability & Green Deal Policy Documents',
    description: 'Framework for understanding policy documents and regulations',
    filePath: '/pdf/How_to_Read_Sustainability_Policy_Documents.pdf'
  },
  {
    id: 5,
    title: 'How to Read an Environmental Impact Assessment (EIA)',
    description: 'Step-by-step guide to EIA analysis and interpretation',
    filePath: '/pdf/How_to_Read_an_Environmental_Impact_Assessment.pdf'
  },
  {
    id: 6,
    title: 'How to Conduct a Simple Campus Sustainability Audit',
    description: 'Practical toolkit for campus sustainability assessments',
    filePath: '/pdf/How_to_Conduct_a_Simple_Campus_Sustainability_Audit.pdf'
  }
])
</script>

<style scoped>
.academic-skills-page {
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
  margin-bottom: 2rem;
  font-weight: 500;
}

.description-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1.5rem;
}

.resources-section {
  margin-top: 3rem;
}

.resources-title {
  font-size: 2rem;
  color: #228c3d;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
}

.resources-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.resource-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  position: relative;
}

.resource-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(34, 140, 61, 0.15);
  border-color: #228c3d;
  background: white;
}

.resource-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.resource-content {
  flex: 1;
}

.resource-title {
  font-size: 1.3rem;
  color: #228c3d;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.4;
}

.resource-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
}

.download-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.resource-item:hover .download-icon {
  opacity: 1;
  transform: scale(1.1);
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
  
  .resource-item {
    padding: 1.5rem;
    flex-direction: column;
    gap: 1rem;
  }
  
  .resource-content {
    text-align: center;
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
  
  .resources-title {
    font-size: 1.6rem;
  }
}
</style>