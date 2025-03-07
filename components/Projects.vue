<template>
  <section id="projects" class="py-16 bg-secondary/10">
    <div class="container">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 flex items-center gap-3">
          <LayoutDashboard class="w-7 h-7" />
          Featured Projects
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
              v-for="(project, index) in projects"
              :key="index"
              class="overflow-hidden flex flex-col h-full border border-border/50 transition-all hover:border-border hover:shadow-sm"
          >
            <div class="aspect-video overflow-hidden">
              <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <CardHeader class="p-4">
              <CardTitle class="text-lg">{{ project.title }}</CardTitle>
              <CardDescription class="line-clamp-2 mt-1.5">{{ project.description }}</CardDescription>
            </CardHeader>
            <CardContent class="p-4 pt-0 mt-auto">
              <div class="flex flex-wrap gap-2">
                <span
                    v-for="(tag, tagIndex) in project.tags"
                    :key="tagIndex"
                    class="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </CardContent>
            <CardFooter class="p-4 pt-0 flex justify-between">
              <Button variant="ghost" size="sm" class="gap-1.5">
                <Github class="h-4 w-4" />
                Code
              </Button>
              <Button variant="ghost" size="sm" class="gap-1.5">
                <ExternalLink class="h-4 w-4" />
                Live
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ExternalLink, Github, LayoutDashboard } from "lucide-vue-next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, and payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Tailwind CSS. Features a clean and modern design with smooth animations.",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2340&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A task management application built with React and Firebase. Features include user authentication, task creation, due dates, and notifications.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2344&auto=format&fit=crop",
    tags: ["React", "Firebase", "Context API"],
    liveUrl: "#",
    repoUrl: "#"
  }
];
</script>
