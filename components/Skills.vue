<template>
  <section id="skills" class="container py-24 sm:py-32 bg-muted/50">
    <h2 class="text-3xl font-bold tracking-tighter mb-12 text-center">Skills & Expertise</h2>
    <div class="grid gap-8 md:grid-cols-3">
      <div
          v-for="(category, index) in categories"
          :key="index"
          class="rounded-lg border bg-card text-card-foreground shadow-sm"
      >
        <div class="flex flex-col space-y-1.5 p-6 pb-2">
          <h3 class="text-xl font-semibold leading-none tracking-tight">{{ category.name }}</h3>
        </div>
        <div class="p-6 pt-0">
          <ul class="space-y-2">
            <li
                v-for="(skill, skillIndex) in category.skills"
                :key="skillIndex"
                class="flex items-center"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="h-4 w-4 mr-2 text-primary"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface SkillCategory {
  name: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Firebase"]
  },
  {
    name: "Tools & Others",
    skills: ["Git", "Webpack", "Jest", "Figma", "CI/CD", "Responsive Design"]
  }
];
</script>
