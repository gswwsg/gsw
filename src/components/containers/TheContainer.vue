<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">stored resources</base-button>
    <base-button @click="setSelectedTab('add-container')" :mode="addResButtonMode">add Resources</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddContainer from './AddContainer.vue';

export default {
    components: {
        StoredResources,
        AddContainer
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            arr_resources: [
                {
                id: 'code',
                title: 'vscode',
                description: 'code editor',
                link: 'https://code.gsws.space',
                },
                {
                id: 'dock',
                title: 'portainer',
                description: 'container manager',
                link: 'https://dock.gsws.space',
                },
            ],
        };
    },
    provide() {
        return {
            resources:  this.arr_resources,
            addContainer: this.addContainer,
            removeContainer: this.removeContainer
        };
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addContainer(title, description, url) {
            const newContainer = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            };
            
            this.arr_resources.unshift(newContainer);
            this.selectedTab = 'stored-resources';
        },
        removeContainer (resId) {
            const conIndex = this.arr_resources.findIndex(cont => cont.id == resId);
            this.arr_resources.splice(conIndex,1);
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'add-container' ? null : 'flat';
        }
    },
}
</script>