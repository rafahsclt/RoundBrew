import React, { useState, useCallback, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import { TextInputProps, Text } from 'react-native'
import { useField } from '@unform/core'

import { Container, TextInput, LabelView, Label } from './styles'

interface InputProps extends TextInputProps {
    name: string
    tag: string
    icon?: string
}

interface InputValueReference {
    value: string
}

interface InputRef {
    focus(): void
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = ({ name, tag, icon, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    const inputElementRef = useRef<any>(null)

    const { registerField, fieldName, defaultValue, error } = useField(tag)
    const inputValueRef = useRef<InputValueReference>({ value: ''})

    useImperativeHandle(ref, () => ({ 
        focus() {
            inputElementRef.current.focus()
        }
    }))

    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false)

        setIsFilled(!!inputValueRef.current.value)
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(ref: any, value: string) {
                inputValueRef.current.value = value
                inputElementRef.current.setNativeProps({ text: value })
            },
            clearValue() {
                inputValueRef.current.value = ''
                inputElementRef.current.clear()
            }
        })
    }, [fieldName, registerField])

    return (
        <Container
            isFocused={isFocused}
            isFilled={isFilled}
        >
            <LabelView
                isFocused={isFocused}
                isFilled={isFilled}
            >
                <Label
                    isFocused={isFocused}
                    isFilled={isFilled}
                >{name}</Label>
            </LabelView>
            <TextInput
                ref={inputElementRef}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChangeText={value => inputValueRef.current.value = value}
                defaultValue={defaultValue}
                autoCorrect={false}
                {...rest}
            />
        </Container>
    )
}

export default forwardRef(Input)