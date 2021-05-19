const app = new Vue({
    
    el: '#app',
    data: {
        newTask: '',
        tasks: [
            'Mangiare',
            'Dormire',
            'Guardare TV'
        ],
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
       },
    },
    mounted(){
        document.addEventListener("keyup",function(e){
            if(e.key=="Enter"){
                app.addTask();
            }
        })
    }
})