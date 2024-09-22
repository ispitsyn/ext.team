<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

// Массив фраз для отображения
const messageVariants = ["Нарисовать Баннер", "Настроить сервер", "Разработать продукт"];

// Реактивная переменная для текущего сообщения
const dynamicMessage = ref('');

// Параметры анимации
const typingSpeed = 100;      // Скорость печати (мс между буквами)
const erasingSpeed = 50;      // Скорость стирания
const messagePause = 1000;    // Пауза после печати перед стиранием
const nextMessagePause = 500; // Пауза перед следующей фразой

// Флаг для отслеживания монтирования компонента
let isMounted = true;

// Функция задержки
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Функция для печати сообщения
const typeMessage = async (message: string) => {
  dynamicMessage.value = '';
  for (const char of message) {
    if (!isMounted) break;
    dynamicMessage.value += char;
    await sleep(typingSpeed);
  }
};

// Функция для стирания сообщения
const eraseMessage = async () => {
  while (dynamicMessage.value.length > 0 && isMounted) {
    dynamicMessage.value = dynamicMessage.value.slice(0, -1);
    await sleep(erasingSpeed);
  }
};

// Функция для цикличной анимации сообщений
const startTyping = async () => {
  while (isMounted) {
    for (const message of messageVariants) {
      await typeMessage(message);
      if (!isMounted) break;
      await sleep(messagePause);
      if (!isMounted) break;
      await eraseMessage();
      if (!isMounted) break;
      await sleep(nextMessagePause);
    }
  }
};

// Запуск анимации при монтировании компонента
onMounted(() => {
  startTyping();
});

// Обработка размонтирования компонента
onBeforeUnmount(() => {
  isMounted = false;
});

// Вычисляемое свойство для сообщений
const messages = computed(() => [
  { type: 'static', text: 'Нужна помощь.' },
  { type: 'static', text: 'Давайте обсудим' },
  { type: 'dynamic', text: dynamicMessage.value },
  { type: 'static', text: `Собираем команду <img class="ms-1"
    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/thumbs-up_1f44d.png"
    alt="" width="22px">` }
]);
</script>

<template>
  <div class="v-block-chat">
    <ul class="v-block-chat__messages">
      <li v-for="(message, index) in messages" :key="index" class="v-block-chat__message">
        <span
          :class="[
            'v-block-chat__message-text',
            { 'v-block-chat__message-text_dynamic': message.type === 'dynamic' }
          ]"
          v-html="message.text"
        ></span>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
/* Стили для курсора печати */
.v-block-chat__message-text_dynamic::after {
  content: '|';
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%     { opacity: 0; }
}
</style>