const { createApp } = Vue

createApp({
  data() {
    return {

        todoList:[
            {
                text: 'Ricordati di fare una lista',
                done: false,
            },{
                text: 'Ricordati di non fare una lista da un solo elemento',
                done: false,
            },{
                text: 'Ricordati che le liste sono un insieme di elementi',
                done: false,
            },{
                text: 'Ricordati che se la lista ha un solo elemento non può essere chiamata lista',
                done: false,
            },{
                text: 'Ricordati che la lista, quando è fatta bene, è utile.',
                done: false,
            },
        ],

        newTodoElement: {
            text: '',
            done:false,
        }
    }
  },

  methods:{

    toggleDone(elementIndex) {

        let donePara = this.todoList[elementIndex].done;

        if(donePara === false){
            this.todoList[elementIndex].done = true;
        }else{
            this.todoList[elementIndex].done = false;
        }
        
        //console.log(donePara);
    }

  },
}).mount('#app')
