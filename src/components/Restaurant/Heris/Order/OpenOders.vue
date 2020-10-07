<template>
  <div class="card-body">
    <div class="container">
      <transition-group name="ordenes" tag="div" class="row">
        <OrderBoxLocal
          :key="index"
          v-for="(ordenes, index) in order.localFaltantes"
          v-model="localFaltantes[index]"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Consumo",
  props: {
    title: String,
    order: Object,
  },
};
</script>