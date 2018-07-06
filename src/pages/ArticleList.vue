<template>
    <section class="article">
        <ul>
            <li v-for="item in itemList" :key="item.id"><a :href="'/article/' + item.id">{{item.title}}</a><span>{{item.createtime}}</span></li>
        </ul>
    </section>
</template>

<script>
export default {
    data () {
        return {
            itemList: []
        }
    },
    created(){
        this.loadData()
    },
    methods: {
        loadData(){
            let self = this
            self.$http.get('/query/articles')
            .then((res) => {
                self.itemList = res.data.map(item => {
                    return {
                        id: item.id,
                        title: item.title,
                        createtime: item.createtime
                    }
                })
            })
        }
    }
}
</script>

<style>
.main>p{
    color: #000;
}
</style>