<template>
  <div class="w-full bg-red-500 container mx-auto">
    <UCarousel
      ref="carouselRef"
      :items="carrosselData"
      v-slot="{ item }"
      :ui="{
        item: 'basis-full',
      }"
      class="w-full max-w-full md:mx-auto md:w-11/12"
      :prev-button="{
        color: 'white',
        class: '-start-12',
      }"
      :next-button="{
        color: 'white',
        class: '-end-12',
      }"
      :indicators="width > 400 ? true : false"
      :arrows="width > 1025 ? true : false"
    >
      <div class="mx-auto mb-4 items-center overflow-hidden max-md:w-11/12 md:flex md:h-[40rem] md:flex-row">
        <div class="space-y-10 py-8 md:w-1/2 md:py-32">
          <News />

          <div class="mt-5 px-2 text-white max-md:text-center">
            <h1 class="text-3xl md:text-[3.5rem] md:leading-[3.8rem]" v-html="item?.title ?? 'Sem Título'" />

            <h2 class="text-xl" v-html="item?.subtitle ?? 'Sem subtítulo'"></h2>
          </div>

          <div>
            <p class="py-4 text-center font-medium text-white">Faça sua pré-matrícula com desconto exclusivo!</p>

            <div class="is_mobile mx-auto flex gap-2">
              <UButton
                @click="$emit('clickTransitButton')"
                v-if="item.type === 'transit'"
                color="green"
                label="Cursos de trânsito"
                class="w-full rounded-3xl px-5 py-3 text-lg text-white"
                text="Cursos de trânsito"
              />

              <UButton
                @click="$emit('clickGraduationButton')"
                v-else-if="item.type === 'graduation'"
                color="green"
                label="Cursos de graduação"
                class="w-full rounded-3xl px-5 py-3 text-lg text-white"
                text="Cursos de graduação"
              />

              <UButton
                @click="$emit('clickButton')"
                v-else
                color="green"
                label="Cursos profissionalizantes"
                class="w-full rounded-3xl px-5 py-3 text-lg text-white"
                text="Cursos profissionalizantes"
              />
            </div>
          </div>
        </div>

        <div
          @click="goToCourse(item.link)"
          :class="{
            'md:mx-auto md:my-auto': item.image.desktop.center,
            'md:mb-0 md:mt-auto': !item.image.desktop.center,
          }"
          class="flex justify-center md:w-[50%]"
        >
          <nuxt-img :src="item.image.desktop.path" id="imageWithRedirection" class="h-full w-full object-contain max-md:max-h-96 md:h-[40rem] md:w-max" alt="Imagem do carrossel" />
        </div>
      </div>
    </UCarousel>
  </div>
</template>

<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

const props = defineProps<{
  carrosselData: Array<any>;
}>();

const carrosselData = ref([
  {
    title: 'Para cada sonho uma profissão!',
    subtitle:
      'No Centro Universitário Instituto Mix, você encontra mais de 100 opções de graduações reconhecidas pelo MEC e mais de 200 cursos profissionalizantes que transformam vidas.',
    link: {
      path: '/',
      external: false,
    },
    type: 'professional',
    image: {
      desktop: { path: 'carrossel/Gastronomia-site.webp', center: false },
      mobile: {
        path: 'carrossel/Gastronomia-site.webp',
        center: false,
      },
    },
  },
  {
    title: 'Para cada sonho uma profissão!',
    subtitle: 'Conheça os mais de 200 cursos profissionalizantes do Instituto Mix e transforme a sua carreira através de um ensino didático e suporte pedagógico!',
    link: {
      path: '/',
      external: false,
    },
    type: 'professional',
    image: {
      desktop: { path: 'carrossel/Beleza.webp', center: false },
      mobile: {
        path: 'carrossel/Beleza.webp',
        center: false,
      },
    },
  },
  {
    title: 'Para cada sonho uma profissão!',
    subtitle: 'Conheça os mais de 200 cursos profissionalizantes do Instituto Mix e transforme a sua carreira através de um ensino didático e suporte pedagógico!',
    link: {
      path: '/',
      external: false,
    },
    type: 'professional',
    image: {
      desktop: { path: 'carrossel/Tecnologia-site.webp', center: false },
      mobile: {
        path: 'carrossel/Tecnologia-site.webp',
        center: false,
      },
    },
  },
  {
    title: 'Para cada sonho uma profissão!',
    subtitle: 'Conheça os mais de 200 cursos profissionalizantes do Instituto Mix e transforme a sua carreira através de um ensino didático e suporte pedagógico!',
    link: {
      path: '/',
      external: false,
    },
    type: 'professional',
    image: {
      desktop: { path: 'carrossel/Saude-site.webp', center: false },
      mobile: {
        path: 'carrossel/Saude-site.webp',
        center: false,
      },
    },
  },
  {
    title: 'Para cada sonho uma profissão!',
    subtitle: 'Conheça os mais de 200 cursos profissionalizantes do Instituto Mix e transforme a sua carreira através de um ensino didático e suporte pedagógico!',
    link: {
      path: '/',
      external: false,
    },
    type: 'professional',
    image: {
      desktop: { path: 'carrossel/Administracao-site.webp', center: false },
      mobile: {
        path: 'carrossel/Administracao-site.webp',
        center: false,
      },
    },
  },
  {
    title: 'Para cada sonho uma profissão!',
    subtitle: 'Conheça os mais de 200 cursos profissionalizantes do Instituto Mix e transforme a sua carreira através de um ensino didático e suporte pedagógico!',
    link: {
      path: '/',
      external: false,
    },
    type: 'professional',
    image: {
      desktop: { path: 'carrossel/Construcao-site.webp', center: false },
      mobile: {
        path: 'carrossel/Construcao-site.webp',
        center: false,
      },
    },
  },
  {
    title: 'Para cada sonho uma profissão!',
    subtitle: 'Conheça os mais de 200 cursos profissionalizantes do Instituto Mix e transforme a sua carreira através de um ensino didático e suporte pedagógico!',
    link: {
      path: '/',
      external: false,
    },
    type: 'professional',
    image: {
      desktop: { path: 'carrossel/Hotelaria-site.webp', center: false },
      mobile: {
        path: 'carrossel/Hotelaria-site.webp',
        center: false,
      },
    },
  },
  {
    title: 'Para cada sonho uma profissão!',
    subtitle: 'Conheça os mais de 200 cursos profissionalizantes do Instituto Mix e transforme a sua carreira através de um ensino didático e suporte pedagógico!',
    link: {
      path: '/',
      external: false,
    },
    type: 'professional',
    image: {
      desktop: { path: 'carrossel/Mecanica-site.webp', center: false },
      mobile: {
        path: 'carrossel/Mecanica-site.webp',
        center: false,
      },
    },
  },
  {
    title: 'Para cada sonho uma profissão!',
    subtitle: 'Conheça os mais de 200 cursos profissionalizantes do Instituto Mix e transforme a sua carreira através de um ensino didático e suporte pedagógico!',
    link: {
      path: '/',
      external: false,
    },
    type: 'professional',
    image: {
      desktop: { path: 'carrossel/Moda-site.webp', center: false },
      mobile: {
        path: 'carrossel/Moda-site.webp',
        center: false,
      },
    },
  },
  {
    title: 'Para cada sonho uma profissão!',
    subtitle: 'Conheça os mais de 200 cursos profissionalizantes do Instituto Mix e transforme a sua carreira através de um ensino didático e suporte pedagógico!',
    link: {
      path: '/',
      external: false,
    },
    type: 'professional',
    image: {
      desktop: { path: 'carrossel/Idiomas-site.webp', center: false },
      mobile: {
        path: 'carrossel/Idiomas-site.webp',
        center: false,
      },
    },
  },

  {
    title: 'Chegou o Centro Universitário Instituto Mix!',
    subtitle:
      'No Centro Universitário Instituto Mix, você encontra mais de 100 opções de graduações reconhecidas pelo MEC e mais de 200 cursos profissionalizantes que transformam vidas.',
    link: {
      path: '/',
      external: false,
    },
    type: 'graduation',
    image: {
      desktop: { path: 'carrossel/Bacharelado.webp', center: false },
      mobile: {
        path: 'carrossel/Bacharelado.webp',
        center: false,
      },
    },
  },
  {
    title: 'Chegou o Centro Universitário Instituto Mix!',
    subtitle:
      'No Centro Universitário Instituto Mix, você encontra mais de 100 opções de graduações reconhecidas pelo MEC e mais de 200 cursos profissionalizantes que transformam vidas.',
    link: {
      path: '/',
      external: false,
    },
    type: 'graduation',
    image: {
      desktop: { path: 'carrossel/Licenciatura.webp', center: false },
      mobile: {
        path: 'carrossel/Licenciatura.webp',
        center: false,
      },
    },
  },
  {
    title: 'Chegou o Centro Universitário Instituto Mix!',
    subtitle:
      'No Centro Universitário Instituto Mix, você encontra mais de 100 opções de graduações reconhecidas pelo MEC e mais de 200 cursos profissionalizantes que transformam vidas.',
    link: {
      path: '/',
      external: false,
    },
    type: 'graduation',
    image: {
      desktop: { path: 'carrossel/Tecnologo.webp', center: false },
      mobile: {
        path: 'carrossel/Tecnologo.webp',
        center: false,
      },
    },
  },

  {
    title: 'Novidade: Cursos de Trânsito no Instituto Mix!',
    subtitle:
      'Com especializações, atualizações e diversos cursos para você se especializar com segurança na área que precisa! Confira as opções e veja a ideal para você pilotar a sua vida!',
    link: {
      path: '/',
      external: false,
    },
    type: 'transit',
    image: {
      desktop: { path: 'carrossel/reciclagem.webp', center: false },
      mobile: {
        path: 'carrossel/reciclagem.webp',
        center: false,
      },
    },
  },
  {
    title: 'Novidade: Cursos de Trânsito no Instituto Mix!',
    subtitle:
      'Com especializações, atualizações e diversos cursos para você se especializar com segurança na área que precisa! Confira as opções e veja a ideal para você pilotar a sua vida!',
    link: {
      path: '/',
      external: false,
    },
    type: 'transit',
    image: {
      desktop: { path: 'carrossel/cursos_livres.webp', center: false },
      mobile: {
        path: 'carrossel/cursos_livres.webp',
        center: false,
      },
    },
  },
  {
    title: 'Novidade: Cursos de Trânsito no Instituto Mix!',
    subtitle:
      'Com especializações, atualizações e diversos cursos para você se especializar com segurança na área que precisa! Confira as opções e veja a ideal para você pilotar a sua vida!',
    link: {
      path: '/',
      external: false,
    },
    type: 'transit',
    image: {
      desktop: { path: 'carrossel/especializacao_cnh.webp', center: false },
      mobile: {
        path: 'carrossel/especializacao_cnh.webp',
        center: false,
      },
    },
  },
]);

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 10000);
});

const goToCourse = (link: any) => {
  if (link.external) {
    window.open(link.path, '_blank');
    return;
  }
  // @ts-ignore
  this.$router.push(link.path);
};
</script>
