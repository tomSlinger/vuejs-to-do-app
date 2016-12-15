new Vue({
    //Target ID
    el: '#todos',
    data: {
        todo: {
            name: '',
            description: '',
            date: ''
        },
        todos: []
    },
    //Anything within will run when the application loads.
    ready: function() {
        this.fetchTodos();
    },
    methods: {
        fetchTodos: function() {
            var todos = [{
                    id: 1,
                    name: 'Magento Theme',
                    description: 'Finish the magento theme for Midshire Store.',
                    date: '2016-12-16'
                },
                {
                    id: 2,
                    name: 'Carrick Review',
                    description: 'Change PDF viewer on Editions page.',
                    date: '2016-12-10'
                },
                {
                    id: 3,
                    name: 'Vue.Js',
                    description: 'Complete Vue.Js Udemy course.',
                    date: '2017-01-28'
                }
            ];
            this.$set('todos', todos);
        },
        addToDo: function() {
            if (this.todo.name) {
                this.todos.push(this.todo);
                this.todo = {
                    name: '',
                    description: '',
                    date: ''
                };
            }
        }
    }
})