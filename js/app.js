const app = new Vue({
    el: '#app',
    data: {
        title: 'Docutic',
        docs: [],
        add_file: {
            file_name: "",
            file_description: "",
        },
        name_edit: "",
    },
    methods:{
        new_file(){
            if(this.add_file.file_name === ""){
                console.log("Vacio")
            }
            else {
                this.docs.push({
                    file_name: this.add_file.file_name,
                    file_description: this.add_file.file_description,
                });
                localStorage.setItem('docutic', JSON.stringify(this.docs));
                this.add_file.file_name = ""
                this.add_file.file_description = ""
                console.log("Archivo añadido")
            }
        },
        editItem(index){
            this.docs[index].file_name = this.name_edit
            localStorage.setItem('docutic', JSON.stringify(this.docs));
            this.name_edit = ""
        },
        deleteItem(index){
            this.docs.splice(index, 1)
            localStorage.setItem('docutic', JSON.stringify(this.docs));
            console.log("Archivo eliminado")
        }
    },
    created(){
        let datosDB = JSON.parse(localStorage.getItem('docutic'))
        if(datosDB === null){
            this.docs = [];
        } else {
            this.docs = datosDB;
        }
    }
})