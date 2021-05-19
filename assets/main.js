const app = new Vue({
    
    el: '#app',
    data: {
        newTask: '',
        tasks: [
            'Learn HTML',
            'Learn CSS',
            'Learn JS'
        ]
    },
    methods: {
       addTask(){
           //Aggiungere task alla lista
            this.tasks.push(this.newTask)
            this.newTask = ''
       },
       removeTask(index){
        //Rimuovere task dalla lista
        this.tasks.splice(index, 1)
       }
    }
});