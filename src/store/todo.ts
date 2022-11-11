interface Todo {
  id: number
  text: string
  done: boolean
}

export const currentId = ref(0)
export const todoList = ref<Todo[]>([{
  id: 0,
  text: 'Hello World',
  done: true,
}])

export const addTodo = (text: string) => {
  currentId.value += 1
  todoList.value.push({
    id: currentId.value,
    text,
    done: false,
  })
}
