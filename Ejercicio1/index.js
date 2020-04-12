const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        users: [
            {
                nombre: 'Alexander',
                edad: 23
            },
            {
                nombre: 'Bob',
                edad: 25
            },
            {
                nombre: 'Patricio',
                edad: 26
            },
            {
                nombre: 'Calamardo',
                edad: 40
            }
        ],
        nuevoUsuario: '',
        total: 0
    },
    methods: {
        agregarUsuario() {
            this.users.push({
                nombre: this.nuevoUsuario,
                edad: 30
            });
            this.nuevoUsuario = ''
        },
    },
    computed: {
        sumarEdades() {
            this.total = 0;
            for(user of this.users){
                this.total = this.total + user.edad;
            }
            return this.total
        }
    },
})