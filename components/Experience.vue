<template>
  <section id="experience" class="py-16 bg-secondary/10">
    <div class="container">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 flex items-center gap-3">
          <Briefcase class="w-7 h-7" />
          Work Experience
        </h2>

        <div class="space-y-12">
          <div
              v-for="(job, index) in experiences"
              :key="index"
              class="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-border"
          >
            <div class="absolute left-0 top-1 h-4 w-4 -translate-x-1/2 rounded-full border bg-background"></div>
            <h3 class="text-xl font-semibold mb-1">{{ job.title }}</h3>
            <div class="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mb-3">
              <span class="font-medium">{{ job.company }}</span>
              <span class="hidden sm:inline mx-2">•</span>
              <span>{{ job.period }}</span>
            </div>
            <p class="mb-3 text-muted-foreground">{{ job.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                  v-for="(tech, techIndex) in job.technologies"
                  :key="techIndex"
                  class="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Briefcase } from "lucide-vue-next";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description: "Led the frontend development of the company's flagship product. Implemented new features, improved performance, and mentored junior developers.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Innovations",
    period: "2018 - 2021",
    description: "Developed responsive web applications. Collaborated with designers and backend developers to implement new features and improve user experience.",
    technologies: ["React", "JavaScript", "SCSS", "Redux"]
  },
  {
    title: "Junior Web Developer",
    company: "Web Design Studio",
    period: "2016 - 2018",
    description: "Built and maintained client websites. Worked on both frontend and backend development tasks.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"]
  }
];
</script>
