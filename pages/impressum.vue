<script setup lang="ts">
const { data: general } = await useAsyncData(() => queryCollection("general").first());
</script>

<template>
  <div class="container py-16 mx-auto">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">Impressum</h1>

      <div class="space-y-8">
        <b>Verantwortliche Instanz:</b><br>Lukas Rauscher<br>General-Dufour-Strasse 69<br>2502
        Biel/Bienne<br>Schweiz<br><strong>E-Mail</strong>:
        lukas@rauscher.ai<br><br><strong>Haftungsausschluss</strong><br>Der Autor übernimmt keine Gewähr für die
        Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.<br>Haftungsansprüche
        gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw.
        Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen
        entstanden sind, werden ausgeschlossen.<br><br>Alle Angebote sind freibleibend. Der Autor behält es sich
        ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu
        ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.<br><br><strong>Haftungsausschluss
        für Inhalte und Links</strong><br>Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
        Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die
        Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.<br><br><strong>Urheberrechtserklärung</strong><br>Die
        Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, gehören
        ausschliesslich Lukas Rauscher oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher
        Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus
        einzuholen.<br><br><strong>Quelle</strong>: <a style="color:inherit;text-decoration:none;"
                                                       href="https://brainbox.swiss/">BrainBox Solutions</a>
      </div>
    </div>
  </div>
</template>