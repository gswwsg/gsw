import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";
import BaseDropdown from "./components/ui/BaseDropdown.vue";
import BaseDropdownContent from "./components/ui/BaseDropdownContent.vue";
import BaseDropdownItem from "./components/ui/BaseDropdownItem.vue";
import BaseDd from "./components/ui/BaseDd.vue";
import BaseDdContent from "./components/ui/BaseDdContent.vue";
import BaseDdItem from "./components/ui/BaseDdItem.vue";
import BaseListItem from "./components/ui/BaseListItem.vue";
import BaseListContent from "./components/ui/BaseListContent.vue";
import BaseInput from "./components/ui/BaseInput.vue";

const app = createApp(App);
const store = createStore({
  state() {
    return {
      days: [
        { id: "1-d", value: "MON", checked: "checked"},
        { id: "2-d", value: "TUE" },
        { id: "3-d", value: "WED" },
        { id: "4-d", value: "THU" },
        { id: "5-d", value: "FRI" },
        { id: "6-d", value: "SAT" },
        { id: "7-d", value: "SUN" },
      ],
      bots: [
        { id: "1-b", value: "bot1", checked: "checked" },
        { id: "2-b", value: "bot2" },
        { id: "3-b", value: "bot3" },
      ],
      hosts: [
        { id: "1-h", value: "host1", checked: "checked"},
        { id: "2-h", value: "host2" },
        { id: "3-h", value: "host3" },
      ],
      months: [
        { id: 1, value: "JAN", checked: "checked"},
        { id: 2, value: "FEB" },
        { id: 3, value: "MAR" },
        { id: 4, value: "APR" },
        { id: 5, value: "MAY" },
        { id: 6, value: "JUN" },
        { id: 7, value: "JUL" },
      ],
      retries: [
        { id: "1-r", value: "1", checked: "checked"},
        { id: "2-r", value: "2"},
        { id: "3-r", value: "3"},
      ],
      priority: [
        { id: "1-p", value: "1", checked: "checked"},
        { id: "2-p", value: "2"},
        { id: "3-p", value: "3"},
      ],
      timezone: [
        { id: "1-t", value: "GMT", checked: "checked"},
        { id: "2-t", value: "CET"},
        { id: "3-t", value: "UTC"},
      ]
    };
  },
});

app.use(store);
app.component("base-dd", BaseDd);
app.component("base-dd-content", BaseDdContent);
app.component("base-dd-item", BaseDdItem);
app.component("base-list-content", BaseListContent);
app.component("base-list-item", BaseListItem);
app.component("base-dropdown", BaseDropdown);
app.component("base-dropdown-content", BaseDropdownContent);
app.component("base-dropdown-item", BaseDropdownItem);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.component("base-card", BaseCard);
app.component("base-input", BaseInput);
app.mount("#app");
