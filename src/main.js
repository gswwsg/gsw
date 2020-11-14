import { createApp } from "vue";

import App from "./App.vue";
import store from "./store.js";
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
