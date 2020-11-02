<template>
    <li>
        <base-card>
            <header>
                <h3>{{ title }}</h3>
                <base-button mode="flat" @click="removeContainer(id)">Delete</base-button>
            </header>
        <p>{{ description }}</p>
        <nav>
            <a :href="link">Go to subdomain</a>
        </nav>
        </base-card>
    </li>
</template>

<script>
export default {
    props: ['id', 'title', 'description', 'link'],    
    inject: ['removeContainer']
}
</script>