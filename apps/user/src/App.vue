<script>
export default {
  name: "UserApp",
  data() {
    return {
      radio: "0",
      text: "",
    };
  },
};
</script>


<template>
  <div>
    <h5 style="color: blue">User</h5>
    <div>
      Hello from user app, switch to admin app:
      <button @click="$emit('changeApp', 'admin')">Admin</button>
    </div>
    <hr />
    <div>
      This is the local app scope {{ radio }}
      <ul>
        <li>
          <label
            ><input type="radio" v-model="radio" value="0" /> Radio 1</label
          >
        </li>
        <li>
          <label
            ><input type="radio" v-model="radio" value="1" /> Radio 2</label
          >
        </li>
        <li>
          <label
            ><input type="radio" v-model="radio" value="2" /> Radio 3</label
          >
        </li>
      </ul>
    </div>
    <div>
      <input type="text" v-model="text" placeholder="bar baz" />
      {{ text }}
    </div>
  </div>
</template>

<style>
</style>
