<script>
export default {
  name: "MainApp",
  data() {
    return {
      app: "user",
    };
  },
  methods: {
    changeApp(name) {
      console.log(`Change app to: ${name}`);
      this.app = name;
    },
  },
};
</script>

<template>
  <div>
    <UserApp v-if="app === 'user'" @changeApp="changeApp"></UserApp>
    <AdminApp v-else-if="app === 'admin'" @changeApp="changeApp"></AdminApp>
    <div v-else>Default App ({{ app }})</div>
  </div>
</template>