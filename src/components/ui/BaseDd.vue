<template>
  <div class="select-box">
    <div class="select-box__current" tabindex="1">
      <base-dd-content :name="listname" :ddcontent="ddlist"> </base-dd-content>
      <img
        class="select-box__icon"
        src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
        alt="Arrow Icon"
        aria-hidden="true"
      />
    </div>
    <ul class="select-box__list">
      <base-list-content
        :name="listname"
        :ddcontent="ddlist"
      ></base-list-content>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    ddlist: Array,
    listname: String,
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.select-box {
  display: inline-block;
  position: relative;
}

/* @media (min-width: 768px) {
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
} */
.select-box__current {
  position: relative;
  cursor: pointer;
  outline: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  padding: 8px;
  width: 250px;
}
.select-box__current:hover 
{
outline: none;
 border: 1px solid rgba(0, 0, 0, 0.25)
}
.select-box__current:focus + .select-box__list {
  opacity: 1;
  animation-name: none;
  outline: none;
  border: 1.5px solid rgb(24, 144, 255);
  background-color: #fff;
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
  left: 0;
  top: 100%;
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
  margin: 0;
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