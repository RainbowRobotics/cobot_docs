<template>
  <div class="content">
    <div class="content-container">
      <main class="main">
        <div class="vp-doc" flex flex-col items-center>
          <h2 id="slogan" op90 font-normal p="t-10 b-2">Family Sites</h2>
          <div>
            <div flex p-4 justify-between>
              <a target="_blank" href="https://www.rainbow-robotics.com/en_main?_l=en">
                <img class="normal-mode" src="/rainbow_robotics_logo.svg" />
                <img class="dark-mode" src="/rainbow_robotics_white_logo.png" width="98" />
              </a>
              <!-- ml-4 = margin-left 1rem -->
              <div flex items-center ml-4>
                <img src="/youtube_64.png" class="w-8 h-6" />
                <a ml-2 target="_blank" href="https://www.youtube.com/@rainbowrobotics">Rainbow Robotics</a>
              </div>
            </div>
            <div flex p-4 justify-between>
              <div flex items-center>
                <img src="/logo.png" />
                <a ml-2 target="_blank" href="https://astromall.co.kr/">ASTRO Mall</a>
              </div>
              <div flex items-center ml-4>
                <img src="/logo.png" />
                <a ml-2 target="_blank" href="https://www.rainbowastro.com/">RAINBOW ASTRO</a>
              </div>
            </div>
            <div flex p-4 justify-between>
              <div flex items-center>
                <img src="/logo.png" />
                <a ml-2 target="_blank" href="https://www.rainbowrobotics.com/rby1eng">RB-Y1</a>
              </div>
              <div flex items-center ml-4>
                <img src="/logo.png" />
                <a ml-2 target="_blank" href="https://www.rainbowrobotics.com/servingspec">RB Serving Robot</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vitepress";

const router = useRouter();

onMounted(() => {
  const applyCustomCSS = () => {
    const body = document.body;

    if (router.route.path.includes("/example_manual/")) {
      body.classList.add("examples-page");
    } else {
      body.classList.remove("examples-page");
    }
  };

  applyCustomCSS();

  router.onAfterRouteChanged = () => {
    applyCustomCSS();
  };
});
</script>

<style>
.VPNavBarTranslations .title,
.VPMenu .trans-title {
  color: var(--vp-c-brand-1);
}

.DocSearch-Button {
  min-width: 50px;
  justify-content: space-between;
}

a {
  text-decoration: none;
}

.dark .main .normal-mode {
  display: none;
}
html:not(.dark) .main .dark-mode {
  display: none;
}

@media (min-width: 400px) {
  .DocSearch-Button {
    min-width: 100px;
  }
}

@media (min-width: 640px) {
  .DocSearch-Button {
    min-width: 200px;
  }
}
</style>
