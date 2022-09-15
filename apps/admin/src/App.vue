<script>
export default {
  name: "AdminApp",
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
    <h5 style="color: red">Admin</h5>
    <div>
      Hello from admin app, switch to user app:
      <button @click="$emit('changeApp', 'user')">User</button>
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
      <input type="text" v-model="text" placeholder="foo bar" />
      {{ text }}
    </div>
  </div>
</template>

<style>
</style>
