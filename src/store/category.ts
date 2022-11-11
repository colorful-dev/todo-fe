export enum Category {
  Todo,
  Done,
}

export interface CategoryItem {
  name: string
  color: string
  origin: Category
}

export const activeOrigin = ref<Category>(Category.Todo)

const staticCategories: Record<Category, CategoryItem> = {
  [Category.Todo]: {
    name: 'todo',
    color: '#3C6AFF',
    origin: Category.Todo,
  },
  [Category.Done]: {
    name: 'done',
    color: '#9650FF',
    origin: Category.Done,
  },
}

export const categories = ref<CategoryItem[]>(Object.entries(staticCategories).map(([_, value]) => value))

export const switchCategory = (target: Category) => {
  activeOrigin.value = staticCategories[target].origin
}
