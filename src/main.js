import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import BaseDropdown from './components/ui/BaseDropdown.vue';
import BaseDropdownContent from './components/ui/BaseDropdownContent.vue';
import BaseDropdownItem from './components/ui/BaseDropdownItem.vue';
const app = createApp(App);

app.component('base-dropdown', BaseDropdown);
app.component('base-dropdown-content', BaseDropdownContent);
app.component('base-dropdown-item', BaseDropdownItem);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.component('base-card', BaseCard);
app.mount('#app');