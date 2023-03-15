const { createApp } = Vue

createApp({
  data() {
    return {

        todoList:[
            {
                text: 'Ricordati di fare una lista',
                modText: '',
                done: false,
                modVar: false,
            },{
                text: 'Ricordati di non fare una lista di un solo elemento',
                modText: '',
                done: false,
                modVar: false,
            },{
                text: 'Ricordati che le liste sono un insieme di elementi',
                modText: '',
                done: false,
                modVar: false,
            },{
                text: 'Ricordati che se la lista ha un solo elemento non può essere chiamata lista',
                modText: '',
                done: false,
                modVar: false,
            },{
                text: 'Ricordati che la lista, quando è fatta bene, è utile.',
                modText: '',
                done: false,
                modVar: false,
            },
        ],

        newTodoElement: {
            text: '',
            modText: '',
            done:false,
            modVar: false,
        },

        placeholder: 'Inserisci un elemento alla lista',

        
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
    },

    deleteElement(elementIndex){
        this.todoList.splice( elementIndex, 1)
    },

    modifyElement(elementIndex){

        
        if(this.todoList[elementIndex].modVar===true){

            this.todoList[elementIndex].text = this.todoList[elementIndex].modText
            this.todoList[elementIndex].modVar=false;

        }else{

            let prevText = this.todoList[elementIndex].text;
            //console.log(prevText)
    
            this.todoList[elementIndex].modText = prevText
            //console.log(this.todoList[elementIndex].modText)
    
            this.todoList[elementIndex].text = "\xa0"

            this.todoList[elementIndex].modVar=true;
            
        }        
    },

    addNewElList(){
        let newLi = {
            text: this.newTodoElement.text,
            modText: '',
            done:false,
            modVar: false,
            };

            this.newTodoElement.text = '';

        if(newLi.text == ''){
            this.placeholder = 'Valore non valido!'
        }else{
            this.todoList.push(newLi)

        }

    },

    focusInputAdd() {
        //console.log(this.$refs.inputAdd)
        this.$refs.inputAdd.focus();
      },
    
    focusInput(elementIndex) {

        setTimeout(
            ()=>{
                this.$refs.input[elementIndex].focus();
                //console.log(this.$refs.input[elementIndex])

            }, 100)},

  },
}).mount('#app')
