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
           if(this.newTask.length>0){
               this.tasks.push(this.newTask)
               this.newTask = ''
           }else{
               alert("Impossibile aggiungere elemento vuoto")
           }
       },
       removeTask(index){
        //Rimuovere task dalla lista
        this.tasks.splice(index, 1)
       }
    }
});