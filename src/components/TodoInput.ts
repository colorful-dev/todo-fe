enum InputState {
  Valid,
  NullValue,
  MaxLength,
}

export const ErrStateMessage: Record<`${InputState}`, string> = {
  [InputState.Valid]: '',
  [InputState.NullValue]: 'This field is required.',
  [InputState.MaxLength]: 'Maximum length is 128 characters.',
}

export const processValid = (value: string) => {
  if (!value.trim())
    return InputState.NullValue
  if (value.trim().length > 128)
    return InputState.MaxLength
  return InputState.Valid
}

export const input = ref('')
export const inputState = ref<{
  state: InputState
  message: string
}>({
  state: InputState.Valid,
  message: '',
})

export const onChange = (e: Event) => {
  const inputValue = (e.target! as HTMLInputElement).value
  input.value = inputValue
}

export const onConfirm = (e: KeyboardEvent) => {
  if (e.code === 'Enter') {
    const code = processValid(input.value)
    inputState.value = {
      state: code,
      message: ErrStateMessage[code],
    }
    if (code === InputState.Valid) {
      addTodo(input.value)
      input.value = ''
    }
  }
}
