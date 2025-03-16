<script setup lang="ts">
import { ref } from 'vue';
import { Mail, MapPin } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { ITurnstyleResponse } from "~/types";

const props = defineProps({
  location: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  contactText: {
    type: String,
    required: false
  }
})

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const contactSuccessMessage = ref('');
const contactErrorMessage = ref('');

// Turnstile Variables
const token = ref('');
const config = useRuntimeConfig();


const handleSubmit = async () => {
  contactSuccessMessage.value = '';
  contactErrorMessage.value = '';
  isSubmitting.value = true;

  const turnstilePassed = await $fetch<ITurnstyleResponse>('/api/v1/functions/validate-turnstile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: token.value })
  });

  if (!turnstilePassed.valid) {
    contactErrorMessage.value = 'Bitte bestätigen Sie, dass Sie kein Roboter sind';
    isSubmitting.value = false;
    return;
  }

  const response = await $fetch('/api/v1/functions/send-mail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData.value)
  });

  if (!response) {
    contactErrorMessage.value = 'Nachricht konnte nicht versendet werden, bitte versuchen Sie es später erneut';
  } else {
    contactSuccessMessage.value = 'Nachricht erfolgreich versendet';
  }

  isSubmitting.value = false;

};
</script>

<template>
  <section id="contact" class="py-16">
    <div class="container">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 flex items-center gap-3">
          <Mail class="w-7 h-7"/>
          Kontaktiere mich
        </h2>

        <div class="grid md:grid-cols-2 content-center gap-10">
          <div class="flex items-center">
            <p class="text-muted-foreground my-7" v-show="props.contactText">
              {{ props.contactText }}
            </p>

            <div class="space-y-6">
              <div class="flex items-start gap-4" v-show="props.location">
                <div class="mt-1 bg-secondary rounded-full p-2">
                  <MapPin class="w-5 h-5"/>
                </div>
                <div>
                  <h4 class="font-medium">Ort</h4>
                  <p class="text-muted-foreground"> {{ props.location }} </p>
                </div>
              </div>

              <div class="flex items-start gap-4" v-show="props.email">
                <div class="mt-1 bg-secondary rounded-full p-2">
                  <Mail class="w-5 h-5"/>
                </div>
                <div>
                  <h4 class="font-medium">Email</h4>
                  <p class="text-muted-foreground"><a :href="props.email">{{ props.email }} </a></p>
                </div>
              </div>

            </div>
          </div>

          <Card>
            <CardContent class="p-6">
              <h3 class="text-xl font-semibold mb-6">Sende mir eine Nachricht</h3>
              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                  <Input
                      placeholder="Name"
                      name="name"
                      v-model="formData.name"
                      required
                  />
                </div>
                <div>
                  <Input
                      placeholder="E-Mail"
                      type="email"
                      name="email"
                      v-model="formData.email"
                      required
                  />
                </div>
                <div>
                  <Textarea
                      placeholder="Nachricht"
                      name="message"
                      v-model="formData.message"
                      :rows="5"
                      required
                  />
                </div>
                <NuxtTurnstile v-model="token" :site-key="config.public.turnstile.siteKey" class="mt-4"/>
                <Button type="submit" class="w-full" v-if="!isSubmitting">
                  Nachricht absenden
                </Button>
                <Button class="w-full" v-else>
                  <Icon name="svg-spinners:3-dots-fade" class="w-4 h-4"/>
                </Button>
                <p class="text-red-700 flex items-center gap-2" v-if="contactErrorMessage">
                  <Icon name="lucide:mail-check" class="w-4 h-4"/>
                  <span>{{ contactErrorMessage }}</span>
                </p>
                <p class="text-green-700 flex items-center gap-2" v-if="contactSuccessMessage">
                  <Icon name="lucide:mail-check" class="w-4 h-4"/>
                  <span>{{ contactSuccessMessage }}</span>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>