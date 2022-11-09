enum InputState {
  Valid,
  NullValue,
  MaxLength,
}

export const ErrStateMessage = {
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
