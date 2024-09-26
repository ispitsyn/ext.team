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
  { source: 'input', type: 'static', text: 'Нужна помощь.' },
  { source: 'output', type: 'static', text: 'Давайте обсудим' },
  { source: 'input', type: 'dynamic', text: `Нужно <b>${dynamicMessage.value}</b>` },
  { source: 'output', type: 'static', text: `Собираем команду <img class="ms-1"
    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/thumbs-up_1f44d.png"
    alt="" width="22px">` }
]);
</script>

<template>
  <div class="v-block-chat">
    <ul class="v-block-chat__messages">
      <li v-for="(message, index) in messages" :key="index"
          :class="[
              'v-block-chat__message',
              `v-block-chat__message_source-${message.source}`
          ]">
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
.v-block-chat {
  &__messages {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    width: 50%;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  &__message {
    padding: 16px;

    &_source {
      &-input {
        justify-self: start;
        background-color: #f1f2f6;
        border-radius: 20px 20px 20px 0;
      }
      &-output {
        justify-self: right;
        background-color: #e5eefe;
        border-radius: 20px 20px 0;
      }
    }
  }
  &__message-text {
    &_dynamic::after {
      content: '|';
      animation: blink 1s steps(1) infinite;
    }
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%     { opacity: 0; }
}
</style>