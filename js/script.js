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
                modArr: []
            },{
                text: 'Ricordati di non fare una lista di un solo elemento',
                modText: '',
                done: false,
                modVar: false,
                modArr: []
            },{
                text: 'Ricordati che le liste sono un insieme di elementi',
                modText: '',
                done: false,
                modVar: false,
                modArr: []
            },{
                text: 'Ricordati che se la lista ha un solo elemento non può essere chiamata lista',
                modText: '',
                done: false,
                modVar: false,
                modArr: []
            },{
                text: 'Ricordati che la lista, quando è fatta bene, è utile.',
                modText: '',
                done: false,
                modVar: false,
                modArr: []
            },
        ],

        newTodoElement: {
            text: '',
            modText: '',
            done:false,
            modVar: false,
            modArr: []
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
        if(this.todoList[elementIndex].modArr.length == 0){
            this.todoList[elementIndex].modArr.push(this.todoList[elementIndex].text)
        }
        
        if(this.todoList[elementIndex].modVar===true){

            //this.closeModify(elementIndex);
            console.log('Chiusura da bottone')
            

            if(this.todoList[elementIndex].modText != this.todoList[elementIndex].modArr[this.todoList[elementIndex].modArr.length-1] ){

                //salva le modifiche in un array
                this.todoList[elementIndex].modArr.push(this.todoList[elementIndex].modText);
                
            }
            this.todoList[elementIndex].text = this.todoList[elementIndex].modText;
            this.todoList[elementIndex].modVar=false;
            
        }else{

            console.log('apertura da bottone')
            let prevText = this.todoList[elementIndex].text;
            //console.log(prevText)

    
            this.todoList[elementIndex].modText = prevText
            //console.log(this.todoList[elementIndex].modText)
    
            this.todoList[elementIndex].text = "\xa0"

            this.todoList[elementIndex].modVar=true;

            this.focusInput(elementIndex);
            
        }        
    },

    closeModify(elementIndex){
        console.log('Chiusura da evento')

        if(this.todoList[elementIndex].modText != this.todoList[elementIndex].modArr[this.todoList[elementIndex].modArr.length-1] && this.todoList[elementIndex].modVar){

            //salva le modifiche in un array
            this.todoList[elementIndex].modArr.push(this.todoList[elementIndex].modText);
            
        }
        this.todoList[elementIndex].text = this.todoList[elementIndex].modText;
        this.todoList[elementIndex].modVar=false;
    },

    addNewElList(){
        let newLi = {
            text: this.newTodoElement.text,
            modText: '',
            done:false,
            modVar: false,
            modArr: [],
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

        if(this.todoList[elementIndex].modVar === true){
            //console.log("modvar è vera")
            setTimeout(
                ()=>{
                    this.$refs.input[elementIndex].focus();
                    //console.log(this.$refs.input[elementIndex])
    
                }, 100)}else{
                    //console.log('modvar è falsa')
                }

        },



    deleteLastModify(elementIndex){
    
    let contatore = this.todoList[elementIndex].modArr.length;
    //console.log(this.todoList[elementIndex].modArr)

    if(contatore>1){
        this.todoList[elementIndex].modArr.pop()
        this.todoList[elementIndex].text = this.todoList[elementIndex].modArr[this.todoList[elementIndex].modArr.length-1]
        //console.log(this.todoList[elementIndex].text)
        //console.log(this.todoList[elementIndex].modArr)
        
    }
    },
  },
}).mount('#app')
