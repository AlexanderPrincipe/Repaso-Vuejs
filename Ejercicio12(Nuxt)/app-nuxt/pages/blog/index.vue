<template>
    <div class="container mt-5">
        <div class="card my-2" v-for="(item, index) in articulos" :key="index">
            <div class="card-body">
                <nuxt-link :to="`/blog/${item.id}`">
                    <h1>{{ item.title }}</h1>
                </nuxt-link>
                <p>{{ item.body }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data() {
        return {
            articulos: []
        }
    },
    async created() {
        try {
            const res = await axios.get('http://jsonplaceholder.typicode.com/posts?_limit=10')
            //console.log(res.data);
            this.articulos = res.data
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<!--  
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-3" v-for="(articulo, idx) in articulos" :key="idx">
                <h2>
                    <nuxt-link :to="`/blog/${articulo.id}`">{{articulo.titulo}}</nuxt-link>
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articulos: [
                {id: 1, titulo: 'Titulo #1'},
                {id: 2, titulo: 'Titulo #2'},
                {id: 3, titulo: 'Titulo #3'},
                {id: 4, titulo: 'Titulo #4'},
            ]
        }
    }
}
</script>
-->