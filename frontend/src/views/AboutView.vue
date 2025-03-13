<template>
  <main class="about-page">
    <!-- Section 1: Project Goals -->
    <section class="section project-goals">
      <div class="responsive-container">
        <h2 class="section-title">PROJECT GOALS</h2>
        <div class="content-box">
          <p class="goals-summary">
            The GDCAU – Green Deal for Central Asian Universities project aims to empower universities in Central Asia as key drivers of sustainable development, aligning them with the European Green Deal framework.
          </p>
          <p class="goals-summary">
            The project focuses on developing environmentally sustainable education programs, strengthening university governance, and expanding cooperation between universities, businesses, and society.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 2: Strategic Objectives -->
    <section class="section strategic-objectives">
      <div class="responsive-container">
        <h2 class="section-title">STRATEGIC OBJECTIVES</h2>
        <ol class="objectives-list">
          <li class="objective-item">
            Strengthening institutional capacity for sustainable development strategies
            <ul>
              <li>Develop new management strategies focused on ESG transformation.</li>
              <li>Update regulations to incorporate sustainability principles.</li>
              <li>Train leadership in strategic planning related to the Green Deal.</li>
              <li>Enhance collaboration between universities and government bodies.</li>
            </ul>
          </li>
          <li class="objective-item">
            Transforming education programs and training specialists in sustainability
            <ul>
              <li>Update curricula to include "green skills."</li>
              <li>Develop a joint master’s program in sustainability.</li>
              <li>Introduce a “green skills” assessment system.</li>
              <li>Offer continuing education in sustainability.</li>
            </ul>
          </li>
          <li class="objective-item">
            Expanding university-business cooperation to support ESG transformation
            <ul>
              <li>Conduct ESG assessments and develop strategies.</li>
              <li>Organize corporate training on ESG.</li>
              <li>Encourage investment in sustainability research.</li>
              <li>Design internships for students in collaboration with businesses.</li>
            </ul>
          </li>
          <li class="objective-item">
            Establishing the Green Deal Centre for research, innovation, and public engagement
            <ul>
              <li>Create a platform for research and knowledge exchange.</li>
              <li>Host events on sustainability.</li>
              <li>Engage society in environmental initiatives.</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>

    <!-- Section 3: Participants -->
    <section class="section participants">
      <div class="responsive-container">
        <h2 class="section-title">PARTICIPANTS</h2>
        <ul class="participants-list">
          <li>1. CONSTRUCTOR UNIVERSITY BREMEN GGMBH, BREMEN, Germany, the Coordinator;</li>
          <li>2. SLOVENSKA POLNOHOSPODARSKA UNIVERZITA V NITRE, NITRA, Slovakia;</li>
          <li>3. EURASIAN TECHNOLOGICAL, ALMATY, Kazakhstan;</li>
          <li>4. KARAGANDA INDUSTRIAL UNIVERSITY, TEMIRTAU, Kazakhstan;</li>
          <li>5. UNIVERSITAT FUR WEITERBILDUNG KREMS, KREMS, Austria;</li>
          <li>6. BISHKEK STATE UNIVERSITY NAMED AFTER K KARASAEV, BISHKEK, Kyrgyzstan;</li>
          <li>7. YAGSHYGELDI KAKAYEV INTERNATIONAL UNIVERSITY OF OIL AND GAS, ASHGABAT, Turkmenistan;</li>
          <li>8. ABA ANNAYEW ADYNDAKY HALKARA ATCYLYK AKADEMIYASY ARKADAG, Turkmenistan;</li>
          <li>9. KHOROG STATE UNIVERSITY NAMED AFTER MYONSHO NAZARSHOEV, KHOROG, Tajikistan;</li>
          <li>10. TASHKENT KIMYO INTERNATIONAL UNIVERSITY, TASHKENT, Uzbekistan;</li>
          <li>11. TOSHKENT IRRIGASIYA VA QISHLOQ XO JALIGINI MEXANIZATSIYALASH MUHANDISLARI INSTITUTI, TASHKENT, Uzbekistan;</li>
          <li>12. UNIVERSITY OF CENTRAL ASIA NARYN, Kyrgyzstan;</li>
          <li>13. UNIVERSITY OF CENTRAL ASIA KHOROG, Tajikistan;</li>
        </ul>
      </div>
    </section>

    <!-- Section 4: Expected Results -->
    <section class="section expected-results">
      <div class="responsive-container">
        <h2 class="section-title">EXPECTED RESULTS</h2>
        <ul class="results-list">
          <li>Active involvement of universities in the Green Deal agenda.</li>
          <li>Improved education quality with new sustainability-focused programs.</li>
          <li>Enhanced governance through ESG-driven strategies.</li>
          <li>Stronger university-business partnerships.</li>
          <li>Increased public awareness through educational campaigns.</li>
        </ul>
      </div>
    </section>

    <!-- Section 5: KPIs -->
    <section class="section kpis">
      <div class="responsive-container">
        <h2 class="section-title">MAIN KPIs</h2>
        <ul class="kpi-list">
          <li>10 universities with updated governance strategies.</li>
          <li>200 trained leaders in sustainability-focused management.</li>
          <li>6 educational programs updated with sustainability components.</li>
          <li>5000 students assessed for "green skills."</li>
          <li>13 continuing education programs on ESG and sustainability.</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

// Можно сюда добавить данные, если они понадобятся
</script>

<style scoped>
.about-page {
  font-family: 'Segoe UI', Arial, sans-serif;
  line-height: 1.6;
  color: #444;
}

.section {
  padding: 5rem 0;
  position: relative;
}

.section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #ddd, transparent);
}

.responsive-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #2a7d2e;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 3px;
  background: #2a7d2e;
  border-radius: 2px;
}

.content-box {
  background: rgba(255, 255, 255, 0.9);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
  max-width: 800px;
}

.goals-summary {
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: center;
  margin-bottom: 1.8rem;
  color: #555;
}

.objectives-list {
  list-style: none; /* Убираем стандартную нумерацию */
  padding-left: 0;  /* Убираем стандартный отступ */
  counter-reset: objectives;
  margin: 0 auto;
  max-width: 800px;
}

.objective-item {
  counter-increment: objectives;
  background: #fff;
  padding: 2rem 2rem 2rem 4rem; /* Добавил padding слева для текста */
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.06);
  position: relative;
}

.objective-item::before {
  content: counter(objectives);
  position: absolute;
  left: 1.5rem; /* Новое позиционирование */
  top: 2rem;
  transform: none;
  width: 2.5rem;
  height: 2.5rem;
  background: #2a7d2e;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
}

.objective-item ul {
  padding-left: 2rem;
  margin: 1rem 0;
}

.objective-item li {
  margin-bottom: 0.8rem;
  position: relative;
  line-height: 1.6;
}

.objective-item li::before {
  content: '▹';
  color: #2a7d2e;
  position: absolute;
  left: -1.2rem;
}

.participants-list {
  columns: 2;
  column-gap: 3rem;
  margin: 0 auto;
  max-width: 1000px;
  list-style: none;
  padding: 0;
}

.participants-list li {
  padding: 0.8rem 1.5rem;
  margin-bottom: 0.8rem;
  background: #f8f8f8;
  border-radius: 6px;
  break-inside: avoid;
  position: relative;
  padding-left: 2.5rem;
}

.participants-list li::before {
  content: '🌱';
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.results-list,
.kpi-list {
  margin: 0 auto;
  max-width: 600px;
  padding: 0;
}

.results-list li,
.kpi-list li {
  padding: 1.2rem;
  margin-bottom: 1.2rem;
  background: white;
  border-left: 4px solid #2a7d2e;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

@media (max-width: 768px) {
  .responsive-container {
    padding: 0 1.5rem;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .participants-list {
    columns: 1;
  }

  .content-box {
    padding: 1.5rem;
  }

  .objective-item {
    padding: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .objective-item::before {
    top: -1rem;
    left: -1rem;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .goals-summary {
    font-size: 1rem;
  }
}
</style>