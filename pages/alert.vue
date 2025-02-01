<script setup lang="ts"></script>

<template>
  <NuxtLayout>
    <section>
      <h1 class="text-2xl">Alert</h1>
      <div class="pt-6 grid grid-cols-2 justify-center items-center">
        <DisplayComponent
          code="
            <div class='flex items-center gap-2 px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 border-gray-700 dark:border-gray-300'>
              <Icon name='ph:bell-bold'
                  class='text-blue-700 dark:text-blue-400'
                  size='24' />
              <p class='text-md'>
                This is an alert!
              </p>
            </div>"
        >
          <div
            class="flex items-center gap-2 px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 border-gray-700 dark:border-gray-300"
          >
            <Icon
              name="ph:bell-bold"
              class="text-blue-700 dark:text-blue-400"
              size="24"
            />
            <p class="text-md">This is an alert!</p>
          </div>
        </DisplayComponent>
        <DisplayComponent
          code="<div class='flex items-center gap-2 px-4 py-3 rounded-lg border bg-white dark:bg-slate-900  border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-400'>
            <Icon name='ph:bell-bold'
                  size='24' />
            <p class='text-md'>
              This is an alert!
            </p>
          </div>"
        >
          <div
            class="flex items-center gap-2 px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-400"
          >
            <Icon name="ph:bell-bold" size="24" />
            <p class="text-md">This is an alert!</p>
          </div>
        </DisplayComponent>
        <DisplayComponent
          code="<div class='flex items-center gap-2 px-4 py-3 rounded-lg border bg-white dark:bg-slate-900  border-gray-700 dark:border-gray-300'>
            <Icon name='ph:check-circle-bold'
                  class='text-green-700 dark:text-green-400'
                  size='24' />
            <p class='text-md'>
              This is a sucessful alert!
            </p>
          </div>"
        >
          <div
            class="flex items-center gap-2 px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 border-gray-700 dark:border-gray-300"
          >
            <Icon
              name="ph:check-circle-bold"
              class="text-green-700 dark:text-green-400"
              size="24"
            />
            <p class="text-md">This is a sucessful alert!</p>
          </div>
        </DisplayComponent>
        <DisplayComponent
          code="<div class='flex items-center gap-2 px-4 py-3 rounded-lg border bg-white dark:bg-slate-900  border-green-700 dark:border-green-400 text-green-700 dark:text-green-400'>
            <Icon name='ph:check-circle-bold'
                  size='24' />
            <p class='text-md'>
              This is a sucessful alert!
            </p>
          </div>"
        >
          <div
            class="flex items-center gap-2 px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 border-green-700 dark:border-green-400 text-green-700 dark:text-green-400"
          >
            <Icon name="ph:check-circle-bold" size="24" />
            <p class="text-md">This is a sucessful alert!</p>
          </div>
        </DisplayComponent>
        <DisplayComponent
          code="<div class='flex items-center gap-2 px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 border-gray-700 dark:border-gray-300'>
            <Icon name='ph:warning-bold'
                  class='text-yellow-600 dark:text-yellow-300'
                  size='24' />
            <p class='text-md'>
              This is a warning alert!
            </p>
          </div>"
        >
          <div
            class="flex items-center gap-2 px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 border-gray-700 dark:border-gray-300"
          >
            <Icon
              name="ph:warning-bold"
              class="text-yellow-600 dark:text-yellow-300"
              size="24"
            />
            <p class="text-md">This is a warning alert!</p>
          </div>
        </DisplayComponent>
        <DisplayComponent
          code="<div class='flex items-center gap-2 px-4 py-3 rounded-lg border bg-white dark:bg-slate-900  border-yellow-600 dark:border-yellow-300 text-yellow-600 dark:text-yellow-300'>
            <Icon name='ph:warning-bold'
                  size='24' />
            <p class='text-md'>
              This is a warning alert!
            </p>
          </div>"
        >
          <div
            class="flex items-center gap-2 px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 border-yellow-600 dark:border-yellow-300 text-yellow-600 dark:text-yellow-300"
          >
            <Icon name="ph:warning-bold" size="24" />
            <p class="text-md">This is a warning alert!</p>
          </div>
        </DisplayComponent>
        <DisplayComponent
          code="<div class='flex items-center gap-2 px-4 py-3 rounded-lg border bg-white dark:bg-slate-900  border-gray-700 dark:border-gray-300'>
            <Icon name='ph:warning-circle-bold'
                  class='text-red-800 dark:text-red-500'
                  size='24' />
            <p class='text-md'>
              This is an error alert!
            </p>
          </div>"
        >
          <div
            class="flex items-center gap-2 px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 border-gray-700 dark:border-gray-300"
          >
            <Icon
              name="ph:warning-circle-bold"
              class="text-red-800 dark:text-red-500"
              size="24"
            />
            <p class="text-md">This is an error alert!</p>
          </div>
        </DisplayComponent>
        <DisplayComponent code="">
          <div
            class="flex items-center gap-2 px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 border-red-800 dark:border-red-500 text-red-800 dark:text-red-500"
          >
            <Icon name="ph:warning-circle-bold" size="24" />
            <p class="text-md">This is an error alert!</p>
          </div>
        </DisplayComponent>
      </div>
    </section>
  </NuxtLayout>
</template>
