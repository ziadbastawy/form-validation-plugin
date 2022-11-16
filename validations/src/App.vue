
<template>
  <form @submit="validate">
    <input v-model="text" />
    <br />
    <input v-model="email" />

    <!-- <ul v-if="!$v.valid" style="color: red">
      <li v-for="error in $v.errors" :key="error">
        {{ error }}
      </li>
    </ul> -->

    <input type="submit" />
  </form>
</template> 

<script>
// const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  data() {
    return {
      text: "",
      email: "",

      validations: [
        {
          field: "text",
          condations: [
            "required",
            {
              message: "Max length is 6",
              validate(value) {
                value.length <= 6;
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    validate(e) {
      e.preventDefault();
      console.log(this.$validateData(this.validations));

      // if (!this.$v) {
      //   alert("not valid!");
      // }
    },
  },
};
</script>
