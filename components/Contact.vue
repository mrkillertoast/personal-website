<template>
  <section id="contact" class="py-16">
    <div class="container">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 flex items-center gap-3">
          <Mail class="w-7 h-7" />
          Contact Me
        </h2>

        <div class="grid md:grid-cols-2 gap-10">
          <div>
            <h3 class="text-xl font-semibold mb-6">Get In Touch</h3>
            <p class="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="mt-1 bg-secondary rounded-full p-2">
                  <MapPin class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-medium">Location</h4>
                  <p class="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="mt-1 bg-secondary rounded-full p-2">
                  <Mail class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-medium">Email</h4>
                  <p class="text-muted-foreground">john@example.com</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="mt-1 bg-secondary rounded-full p-2">
                  <Phone class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-medium">Phone</h4>
                  <p class="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardContent class="p-6">
              <h3 class="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                  <Input
                      placeholder="Your Name"
                      name="name"
                      v-model="formData.name"
                      required
                  />
                </div>
                <div>
                  <Input
                      placeholder="Your Email"
                      type="email"
                      name="email"
                      v-model="formData.email"
                      required
                  />
                </div>
                <div>
                  <Textarea
                      placeholder="Your Message"
                      name="message"
                      v-model="formData.message"
                      :rows="5"
                      required
                  />
                </div>
                <Button type="submit" class="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Mail, MapPin, Phone } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', formData.value);
  // Add your form submission logic here

  // Reset form after submission
  formData.value = { name: '', email: '', message: '' };
};
</script>
