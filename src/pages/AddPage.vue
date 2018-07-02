<template>
    <section class="main">
        <p>标题：<input type="text" :placeholder="title"></p>
        <p>类型：
            <select>
                <option v-for="option in types" :key="option.id" :value="option.id">{{option.name}}</option>
            </select>
        </p>
    </section>
</template>

<script>
export default {
    name: 'addpage',
    data () {
        return {
            types: [],
            title: '请输入标题'
        }
    },
    created(){
        console.log(this.title)
        this.init()
    },
    methods: {
        init(){
            let self = this
            self.$http.get('/api/pagetype')
            .then((res) => {
                self.types = res.data.map(item => {
                    return {
                        id: item.id,
                        name: item.name
                    }
                })
            })
        },
        submit(){},
        update(){}
    }
}
</script>

<style>
.main>p{
    color: #000;
}
</style>