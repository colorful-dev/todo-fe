import { Category, activeOrigin } from './category'
export interface Todo {
  id: string
  text: string
  done: boolean
  cate: Category
}

const getRandomId = () => Date.now().toString(36).slice(0, 6)

export const allData = ref<Todo[]>([])
export const currentData = computed(() => allData.value.filter(todo => todo.cate === activeOrigin.value))

export const addTodo = (text: string) => {
  if (activeOrigin.value === Category.Done)
    return
  allData.value.push({
    id: getRandomId(),
    text,
    done: false,
    cate: activeOrigin.value,
  })
}

export const updateTodo = (text: string, id: string) => {
  const index = currentData.value.findIndex(todo => todo.id === id)
  allData.value[index].text = text
}

export const transfer = (id: string, target: Category) => {
  const index = allData.value.findIndex(todo => todo.id === id)
  allData.value[index].cate = target
}

export const saveTodoState = (id: string, done: boolean) => {
  const index = allData.value.findIndex(todo => todo.id === id)
  allData.value[index].done = done
}
