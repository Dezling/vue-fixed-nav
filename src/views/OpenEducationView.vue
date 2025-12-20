<!-- views/OpenEducationView.vue -->
<template>
  <main class="open-education-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Open Educational Resources</h1>
      </div>
    </section>

    <section class="section intro-section">
      <div class="responsive-container">
        <div class="intro-content">
          <h2 class="section-title">Open Educational Resources</h2>
          <p class="intro-text">
            Learning Tools for Sustainability, SDGs, and Regeneration
          </p>
          <p class="description-text">
            This collection of Open Educational Resources is designed to support students, educators, and university partners across Central Asia as they explore the foundations of sustainability and regenerative action. These materials come from trusted international organizations like UNESCO, the United Nations, and higher education networks worldwide.
          </p>
          <p class="description-text">
            Whether you are new to sustainability or looking for practical ideas to green your campus or community, these resources offer videos, toolkits, guides, and interactive platforms. They support hands-on, systems-based learning and connect global goals like the Sustainable Development Goals (SDGs) to real change on the ground.
          </p>
        </div>
      </div>
    </section>

    <section class="section resources-section">
      <div class="responsive-container">
        <div class="resources-grid">
          <!-- Core Readings -->
          <div class="resource-block">
            <div class="block-header">
              <div class="block-number">1</div>
              <h3 class="block-title">Core Readings on Sustainability and Education</h3>
            </div>
            <p class="block-description">
              These reports and guides explain what education for sustainable development (ESD) means and how to apply it in schools, universities, and communities.
            </p>
            <ul class="resources-list">
              <li>
                <a :href="links.section1[0]" target="_blank" rel="noopener">
                  Tilbury, D. (2011) – Education for Sustainable Development: An Expert Review of Processes and Learning. UNESCO Digital Library
                </a>
              </li>
              <li>
                <a :href="links.section1[1]" target="_blank" rel="noopener">
                  UNESCO (2005) – Contributing to a More Sustainable Future: Quality Education, Life Skills, and ESD.
                </a>
              </li>
              <li>
                <a :href="links.section1[2]" target="_blank" rel="noopener">
                  UNESCO (2012) – Education for Sustainable Development: Sourcebook. UNESCO Library
                </a>
              </li>
              <li>
                <a :href="links.section1[3]" target="_blank" rel="noopener">
                  UNESCO (2012) – Exploring Sustainable Development: A Multiple-Perspective Approach. UNESCO Library
                </a>
              </li>
            </ul>
          </div>

          <!-- Teaching & Curriculum Resources -->
          <div class="resource-block">
            <div class="block-header">
              <div class="block-number">2</div>
              <h3 class="block-title">Teaching & Curriculum Resources</h3>
            </div>
            <p class="block-description">
              Useful for integrating sustainability and SDGs into lessons, workshops, and community engagement.
            </p>
            <ul class="resources-list">
              <li>
                <a :href="links.section2[0]" target="_blank" rel="noopener">
                  UNESCO Associated Schools: SDG Resources
                </a>
              </li>
              <li>
                <a :href="links.section2[1]" target="_blank" rel="noopener">
                  TeachSDGs Resource Hub
                </a>
              </li>
              <li>
                <a :href="links.section2[2]" target="_blank" rel="noopener">
                  UNESCO Learning & Training Tools Series
                </a>
              </li>
            </ul>
          </div>

          <!-- Free Online Learning Platforms -->
          <div class="resource-block">
            <div class="block-header">
              <div class="block-number">3</div>
              <h3 class="block-title">Free Online Learning Platforms</h3>
            </div>
            <p class="block-description">
              Explore free online courses in sustainability, regenerative systems, and climate solutions.
            </p>
            <ul class="resources-list">
              <li>
                <a :href="links.section3[0]" target="_blank" rel="noopener">
                  SDG Academy
                </a>
              </li>
              <li>
                <a :href="links.section3[1]" target="_blank" rel="noopener">
                  Climademy
                </a>
              </li>
              <li>
                <a :href="links.section3[2]" target="_blank" rel="noopener">
                  EDUSTA – Education for Sustainability Transitions
                </a>
              </li>
              <li>
                <a :href="links.section3[3]" target="_blank" rel="noopener">
                  TAP-TS – Teaching SDGs Through Systems Thinking
                </a>
              </li>
            </ul>
          </div>

          <!-- SDG Indicators and Policy Tools -->
          <div class="resource-block">
            <div class="block-header">
              <div class="block-number">4</div>
              <h3 class="block-title">SDG Indicators and Policy Tools</h3>
            </div>
            <p class="block-description">
              Track global sustainability indicators and learn how policies are shaped.
            </p>
            <ul class="resources-list">
              <li>
                <a :href="links.section4[0]" target="_blank" rel="noopener">
                  UN SDGs Indicator List
                </a>
              </li>
              <li>
                <a :href="links.section4[1]" target="_blank" rel="noopener">
                  SDG Knowledge Platform
                </a>
              </li>
              <li>
                <a :href="links.section4[2]" target="_blank" rel="noopener">
                  UNDP – United Nations Development Programme
                </a>
              </li>
              <li>
                <a :href="links.section4[3]" target="_blank" rel="noopener">
                  SDG.org
                </a>
              </li>
              <li>
                <a :href="links.section4[4]" target="_blank" rel="noopener">
                  UNESCO SDG Hub
                </a>
              </li>
            </ul>
          </div>

          <!-- SDG Video Introduction -->
          <div class="resource-block">
            <div class="block-header">
              <div class="block-number">5</div>
              <h3 class="block-title">SDG Video Introduction</h3>
            </div>
            <p class="block-description">
              A clear, student-friendly video on the goals and why they matter:
            </p>
            <ul class="resources-list">
              <li>
                <a :href="links.section5[0]" target="_blank" rel="noopener">
                  What Are the SDGs? (YouTube)
                </a>
              </li>
            </ul>
          </div>

          <!-- Innovation & Campus Sustainability Initiatives -->
          <div class="resource-block">
            <div class="block-header">
              <div class="block-number">6</div>
              <h3 class="block-title">Innovation & Campus Sustainability Initiatives</h3>
            </div>
            <p class="block-description">
              Practical examples and tools for making universities more sustainable, regenerative, and nature-positive.
            </p>
            <ul class="resources-list">
              <li>
                <a :href="links.section6[0]" target="_blank" rel="noopener">
                  Nature Positive Universities Network
                </a>
              </li>
              <li>
                <a :href="links.section6[1]" target="_blank" rel="noopener">
                  Re:wild Your Campus (US-based)
                </a>
              </li>
              <li>
                <a :href="links.section6[2]" target="_blank" rel="noopener">
                  Wilding Campuses (UK – Students Organizing for Sustainability)
                </a>
              </li>
              <li>
                <a :href="links.section6[3]" target="_blank" rel="noopener">
                  Hello World Labs – Innovation for Sustainability
                </a>
              </li>
              <li>
                <a :href="links.section6[4]" target="_blank" rel="noopener">
                  ThoughtBox Education – Green Leadership & Mentoring
                </a>
              </li>
            </ul>
          </div>

          <!-- GDCAU Train the Teacher Resources -->
          <div class="resource-block">
            <div class="block-header">
              <div class="block-number">7</div>
              <h3 class="block-title">GDCAU Train the Teacher Resources</h3>
            </div>
            <div class="gdceu-list">
              <a v-for="(resource, index) in gdceuResources" 
                 :key="index" 
                 :href="resource.link" 
                 class="gdceu-item"
                 target="_blank"
                 rel="noopener">
                {{ resource.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

// All links organized by sections
const links = ref({
  section1: [
    "https://unesdoc.unesco.org/ark:/48223/pf0000191442",
    "http://unesdoc.unesco.org/images/0014/001410/141019e.pdf",
    "https://unesdoc.unesco.org/ark:/48223/pf0000216383?posInSet=2&&queryId=N-EXPLORE-05f58e74-2b4e-41f8-be93-4f26c2f2d82c",
    "https://unesdoc.unesco.org/ark:/48223/pf0000215431?posInSet=4&&queryId=N-EXPLORE-05f58e74-2b4e-41f8-be93-4f26c2f2d82c"
  ],
  section2: [
    "https://www.unesco.at/en/education/unesco-associated-schools-project-network/teaching-and-learning-resources/educational-resources-sdgs",
    "http://www.teachsdgs.org/resources.html",
    "https://unesdoc.unesco.org/search/N-EXPLORE-05f58e74-2b4e-41f8-be93-4f26c2f2d82c"
  ],
  section3: [
    "https://sdgacademy.org/",
    "https://climademy.eu/",
    "https://projects.tuni.fi/edusta/",
    "https://tap-ts.eu/"
  ],
  section4: [
    "https://unstats.un.org/sdgs/indicators/indicators-list/",
    "https://sdgs.un.org/",
    "https://www.undp.org/",
    "https://www.sdg.org/",
    "https://www.unesco.org/en/sdgs"
  ],
  section5: [
    "https://www.youtube.com/watch?v=0XTBYMfZyrM"
  ],
  section6: [
    "https://www.naturepositiveuniversities.net/",
    "https://www.rewildyourcampus.org/",
    "https://www.sos-uk.org/project/wilding-campuses",
    "https://www.helloworlde.com/",
    "https://thoughtboxeducation.com/"
  ],
  section7: [
    "https://docs.google.com/document/d/1gAdwQXxQYtxRbFnJhDSXrogIIFVvNzhf/edit?usp=sharing&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://drive.google.com/file/d/18PjK8f0yAf80GOe-wPG44YrfRRnuhCHu/view?usp=drive_link",
    "https://docs.google.com/document/d/1ygG5JnQSXdrttiT-wz7vD-OGmBsiS6Qc/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/document/d/1x-RfLKF5sUa1-JkpWxSAgAMZTVRaXMQR/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/document/d/1xIOVkQfIJqvsSZNmlm5-jXTSmTooMcZy/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/document/d/1uBxDhK3UVwbsaH4k0vetpYOSMg4pmlB9/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/document/d/1QcWfY37RXoybX4VMr_q7zFhTKSEUneO7/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/presentation/d/1x6NEwIoZqfrm_BoVvqWp6pBuXoMY_8_-/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://drive.google.com/file/d/1ZbNHl4aisOBfcu3p4bvMVcUzauTJt2Sb/view?usp=drive_link",
    "https://docs.google.com/presentation/d/1s9vvCB2tS51eV29T9IkFwd9PoPh9ai6q/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/presentation/d/1iaZUdIuzZkAt7f4uuzxIHUT6Q1BQTHD1/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/presentation/d/1e1MdKXWJx9WSJxXUEJdKkcnjrAGhbAez/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/presentation/d/1NmUeKXs5fqh-PtH0dXPV7ejPfgY5ik2Q/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/document/d/1QZFQK2ppQDghqVH6QYe0mhKBIfuVQPGV/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/document/d/1mTv7nv4eOrlqeIw8T4JWTHvGoPTMHBBA/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/document/d/1ZkNLDzgGg8OgVAZHL_toYEAAmuJTL2Mg/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/document/d/1XT6wNxFiNYR1CDUJQWjSnaB3TmTacZxo/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/document/d/1VmIBgs0ZBbtG9IjD8CPZLsSR1z-qx8_o/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/document/d/1O-nb8eZOjFVxiR5EtB-2w7WKpot5EXye/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/document/d/1E5q5WvEKNVAWquYewn2ZopzZ5p5IGtH_/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/document/d/10jJNL0PqT4E7lgLlovU6qMcEgy-_SXf5/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true",
    "https://docs.google.com/document/d/1ZsJ83s76lZfE_6SG2faVFcNqXV33VZMs/edit?usp=drive_link&&ouid=103393252637682044462&&rtpof=true&&sd=true"
  ]
})

// GDCAU Resources with titles and links
const gdceuResources = computed(() => [
  { title: "Sustainable business project management for MSMEs GDCAU part 1", link: links.value.section7[0] },
  { title: "UCA Lecture 1 Kanat Tilekeyev", link: links.value.section7[1] },
  { title: "GDCAU_WP3_SD_TeachingMethods_Footprint Calculator Challenge", link: links.value.section7[2] },
  { title: "GDCAU_WP3_SD_TeachingMethods_ClimateFresk", link: links.value.section7[3] },
  { title: "GDCAU_WP3_SD_TeachingMethods_Critical Reading and Writing_Social Media Detective", link: links.value.section7[4] },
  { title: "GDCAU_WP3_SD_TeachingMethods_Content_Based_Instruction", link: links.value.section7[5] },
  { title: "GDCAU_WP3_SD_TeachingMethods_Group Discussions", link: links.value.section7[6] },
  { title: "GDCAU_WP3_Train_the_Trainer_Nov2025_Nitra", link: links.value.section7[7] },
  { title: "GDCAU_WP3_SD_TeachingMethods_TheClimateFreskCards", link: links.value.section7[8] },
  { title: "GDCAU_WP3_SD_TeachingMethods_ClimateFreskMethod", link: links.value.section7[9] },
  { title: "GDCAU_WP3_SD_TeachingMethods_Critical Reading and Writing_Social Media Detective", link: links.value.section7[10] },
  { title: "GDCAU_WP3_SD_TeachingMethods_Presentation_Debate", link: links.value.section7[11] },
  { title: "GDCAU_WP3_SD_TeachingMethods_Group Discussions in Developing Critical Thinking", link: links.value.section7[12] },
  { title: "GDCAU_WP3_Emojis", link: links.value.section7[13] },
  { title: "GDCAU_WP3_SD_TeachingMethods_Debate", link: links.value.section7[14] },
  { title: "GDCAU_WP3_Evaluation", link: links.value.section7[15] },
  { title: "GDCAU_WP3_SD_TeachingMethods_PhilosophyPuzzle", link: links.value.section7[16] },
  { title: "GDCAU_WP3_Wand_Feather_Stone", link: links.value.section7[17] },
  { title: "GDCAU_WP3_SD_TeachingMethods_Design for Wiser Action", link: links.value.section7[18] },
  { title: "GDCAU_WP3_SD_TeachingMethods_WorldGame", link: links.value.section7[19] },
  { title: "GDCAU_WP3_SD_TeachingMethods_ProblemBasedLearning", link: links.value.section7[20] },
  { title: "GDCAU_WP3_Blueprint_SD_TeachingMethods", link: links.value.section7[21] }
])
</script>

<style scoped>
.open-education-page {
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
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1s ease forwards;
}

.section {
  padding: 4rem 0;
  position: relative;
}

.responsive-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.intro-section {
  background: linear-gradient(45deg, #f8fff8, #ffffff);
}

.section-title {
  font-size: 2.5rem;
  color: #228c3d;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.intro-text {
  font-size: 1.6rem;
  text-align: center;
  color: #444;
  margin-bottom: 2rem;
  font-weight: 600;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.description-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.resources-section {
  background: #ffffff;
}

.resources-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.resource-block {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

.resource-block:hover {
  box-shadow: 0 8px 32px rgba(34, 140, 61, 0.1);
  border-color: #228c3d;
  transform: translateY(-2px);
}

.block-header {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.block-number {
  background: #228c3d;
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.block-title {
  font-size: 1.5rem;
  color: #228c3d;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  flex: 1;
}

.block-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  padding-left: 4.5rem;
}

.resources-list {
  list-style: none;
  padding: 0;
  margin: 0;
  padding-left: 4.5rem;
}

.resources-list li {
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.5rem;
}

.resources-list li::before {
  content: '•';
  color: #228c3d;
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

.resources-list a {
  color: #228c3d;
  text-decoration: none;
  font-weight: 500;
  line-height: 1.5;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.resources-list a:hover {
  color: #1a6b2f;
  border-bottom-color: #228c3d;
}

.gdceu-list {
  padding-left: 4.5rem;
  display: grid;
  gap: 0.8rem;
}

.gdceu-item {
  padding: 0.8rem 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border-left: 4px solid #228c3d;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.4;
  transition: all 0.3s ease;
  text-decoration: none;
  display: block;
}

.gdceu-item:hover {
  background: #f0fdf4;
  transform: translateX(4px);
  color: #228c3d;
  text-decoration: none;
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
    font-size: 2.2rem;
  }
  
  .resource-block {
    padding: 2rem;
  }
  
  .block-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .block-description,
  .resources-list,
  .gdceu-list {
    padding-left: 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .intro-text {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .responsive-container {
    padding: 0 1rem;
  }
  
  .resource-block {
    padding: 1.5rem;
  }
  
  .block-title {
    font-size: 1.3rem;
  }
  
  .block-number {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
  }
}
</style>