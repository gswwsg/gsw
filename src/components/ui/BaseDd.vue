<template>
  <div class="select-box">
    <div class="select-box__current" tabindex="1">
      <base-dd-content :name="listname" :ddcontent="ddlist"> </base-dd-content>
    </div>
    <ul class="select-box__list">
      <base-list-content :name="listname" :ddcontent="ddlist"></base-list-content>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: {
    ddlist: Array,
    listname: String
  },
  methods: {},
  computed: {
    
  },
};
</script>

<style scoped>
.select-box {
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto;
  font-size: 18px;
  color: #60666d;
}
@media (min-width: 768px) {
  .select-box {
    width: 70%;
  }
}
@media (min-width: 992px) {
  .select-box {
    width: 50%;
  }
}
@media (min-width: 1200px) {
  .select-box {
    width: 30%;
  }
}
.select-box__current {
  position: relative;
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
}
.select-box__current:focus + .select-box__list {
  opacity: 1;
  animation-name: none;
}
.select-box__current:focus + .select-box__list .select-box__option {
  cursor: pointer;
}
.select-box__current:focus .select-box__icon {
  transform: translateY(-50%) rotate(180deg);
}
.select-box__icon {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 20px;
  opacity: 0.3;
  transition: 0.2s ease;
}

.select-box__list {
  position: absolute;
  left: 0; top: 100%;
  width: 100%;
  padding: 0;
  list-style: none;
  opacity: 0;
  animation-name: HideList;
  animation-duration: 0.5s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: step-start;
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
  margin:0;
  z-index: 100;
}

@keyframes HideList {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
}
</style>