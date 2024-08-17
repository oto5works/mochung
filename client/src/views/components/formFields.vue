<template>
  <div class="component">
    <div>
      <div class="title">STYLE</div>
      <div class="item-grid">
        <div class="item">
          <formField v-model="value" label="label" />
          <div class="item-title">[input]</div>
        </div>
        <div class="item">
          <formField :spacing="true" v-model="value" label="label" />
          <div class="item-title">[input + spacing]</div>
        </div>
        <div class="item">
          <formField class="focus" hint="Supporting text" v-model="value" label="label" />
          <div class="item-title">[input + hint]</div>
        </div>
        <div class="item">
          <formField class="invalid" :rules="[characterRules]" v-model="password" label="label" />
          <div class="item-title">[input + error]</div>
        </div>
        <div class="item">
          <formField v-model="value" label="label">
            <buttonDefault variant="tonal" height="24"
              ><icon class="icon_14"><search /></icon><span>Button</span></buttonDefault
            >
          </formField>
          <div class="item-title">[button + input]</div>
        </div>
        <div class="item">
          <formField type="password" v-model="password" label="label" />
          <div class="item-title">[password]</div>
        </div>
        <div class="item">
          <formField type="date" v-model="date" label="label" />
          <div class="item-title">[date]</div>
        </div>
        <div class="item">
          <formField type="time" v-model="time" label="label" />
          <div class="item-title">[time]</div>
        </div>
      </div>
    </div>

    <div>
      <div class="title">STATE</div>

      <div class="item-grid">
        <div class="item">
          <formField label="label" />
          <div class="item-title">[enabled]</div>
        </div>
        <div class="item">
          <formField class="hover" label="label" />
          <div class="item-title">[hovered]</div>
        </div>
        <div class="item">
          <formField class="focus" label="label" />
          <div class="item-title">[focused]</div>
        </div>
        <div class="item">
          <formField class="active" v-model="actived" label="label" />
          <div class="item-title">[actived]</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: "",
      date: "",
      time: "",
      actived: "value",
      password: "12345",
      isValid: false,
    };
  },
  methods: {
    characterRules(v) {
      const isValid = /^\d{4}$/.test(v);
      this.isValid = isValid;
      return isValid || "Password must be exactly 4 digits.";
    },
  }
};
</script>
