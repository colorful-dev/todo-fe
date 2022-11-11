export interface CategoryItem {
  id: number
  name: string
  color: string
  origin: Category
}

export const activeId = ref(0)

export enum Category {
  Todo,
  Done,
}

const staticCategories: Record<Category, CategoryItem> = {
  [Category.Todo]: {
    id: Category.Todo,
    name: 'todo',
    color: '#3C6AFF',
    origin: Category.Todo,
  },
  [Category.Done]: {
    id: Category.Done,
    name: 'done',
    color: '#9650FF',
    origin: Category.Done,
  },
}

export const categories = ref<CategoryItem[]>(Object.entries(staticCategories).map(([_, value]) => value))

export const switchCategory = (target: Category) => {
  activeId.value = staticCategories[target].id
}
